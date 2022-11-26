import React, { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
const PaymentForm = ({ order }) => {
  const { user } = useContext(AuthContext);
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent?email=${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("DealX-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((er) => setPaymentError(er.message));
  }, [order, user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    } else {
      const card = elements.getElement(CardElement);
      if (card === null) {
        return;
      } else {
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card,
        });
        if (error) {
          setPaymentError(error.message);
          return;
        } else {
          setPaymentError("");
          const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
              payment_method: {
                card: card,
                billing_details: {
                  name: order.buyer,
                  email: order.buyerEmail,
                },
              },
            });

          if (intentError) {
            setPaymentError(intentError.message);
            return;
          } else {
            await setTransactionId(paymentIntent.id);
            const payment = {
              transactionId: transactionId,
              orderId: order._id,
              productId: order.productId,
              amount: order.price,
              customer: order.buyerEmail,
            };
            console.log(payment);
            setSuccess("Your transition is successful");
            fetch(`http://localhost:5000/payments?email=${user?.email}`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("DealX-token")}`,
              },
              body: JSON.stringify(payment),
            })
              .then((res) => res.json())
              .then((data) => {
                setSuccess("Your transition is successful");

                toast.success("Payment history saved !");
              });
          }
        }
      }
    }
    setProcessing(false);
  };

  return (
    <div>
      <form
        className="w-[560px] my-6 p-10 rounded-xl border-2 border-gray-400 shadow-xl bg-[#f82c2c33]"
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                fontWeight: "700",
                color: "#d90429",
                "::placeholder": {
                  color: "#8d99ae",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm bg-[#ef233c] w-full mt-9"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-sm font-bold text-red-500">{paymentError}</p>
      {success && (
        <div className="mt-4">
          <p className="text-green-500 font-bold">{success}</p>
          <p>
            Your transactionId is{" "}
            <span className=" font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(
  "pk_test_51M5uc3KpDKaMwrDEtuzmfggHMV2y9ETofOnFHESQFdbgTjvteWI5Q8QV1CvheFU5uCh7iAMsfUKna1ELa5PhauXA00aHrewisI"
);
const Payment = () => {
  const order = useLoaderData();
  return (
    <div className="m-10 p-10 flex items-center justify-center flex-col bg-[#edf2f4] ">
      <div className="w-[550px]">
        <h1 className="text-xl   font-semibold">Order : {order.product}</h1>
        <h1 className="text-xl  mt-2 font-bold text-[#d90429]">
          Price : {order.price}
        </h1>
      </div>
      <Elements stripe={stripePromise}>
        <PaymentForm order={order} />
      </Elements>
    </div>
  );
};

export default Payment;

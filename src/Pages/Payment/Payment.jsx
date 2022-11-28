import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const order = useLoaderData();
  return (
    <div className="m-3 mt-10 sm:m-10 p-2 sm:p-10 flex items-center justify-center flex-col bg-[#edf2f4] ">
      <div className="sm:w-[550px]">
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

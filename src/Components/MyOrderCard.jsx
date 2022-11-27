import React from "react";
import { Link } from "react-router-dom";

const MyOrderCard = ({ order }) => {
  return (
    <div className="p-3 rounded-lg border-2 border-[#2b2d42] bg-[#edf2f4]">
      <img className="h-52 rounded-lg w-full" src={order.productImg} alt="" />
      <div className="min-h-[160px] pt-4 flex flex-col border-t-2 border-[#ef233c] mt-1 justify-between">
        <div>
          <h1 className="text-xl font-semibold  mb-2 ">{order.product}</h1>

          <h1 className="font-bold text-lg  text-[#d90429]">
            Price : ₵{order.price}
          </h1>
        </div>

        <div className="mt-1">
          <Link
            to={`/dashboard/payment/${order._id}`}
            disabled={order.paid}
            className="btn btn-sm w-full mb-2 uppercase font-semibold py-1 px-2 bg-[#ef233c] text-white"
          >
            {order.paid ? "Paid" : "Pay now"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;

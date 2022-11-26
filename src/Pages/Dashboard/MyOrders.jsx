import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import MyOrderCard from "../../Components/MyOrderCard";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://assignment-12-server-black.vercel.app/myOrders?email=${user?.email}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("DealX-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error(data.message);
          logOut();
        } else {
          setOrders(data);
        }
      });
  }, [user]);
  return (
    <div className="m-10 p-10 bg-[#edf2f4] ">
      <h1 className="text-3xl font-bold text-[#ef233c]">
        {orders.length > 0 ? "All Your ordered products" : "No orders to show"}
      </h1>
      <div className="mt-10  grid grid-cols-2 gap-6">
        {orders.map((order) => (
          <MyOrderCard key={order._id} order={order}></MyOrderCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

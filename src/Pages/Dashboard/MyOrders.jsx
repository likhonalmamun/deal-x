import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import MyOrderCard from "../../Components/MyOrderCard";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
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
          setLoading(false);
          toast.error(data.message);
          logOut();
        } else {
          setOrders(data);
          setLoading(false);
        }
      });
  }, [user]);
  return (
    <div className=" p-2 md:m-10 md:p-10 mt-10 pt-10 bg-[#edf2f4] ">
      {loading ? (
        <div className="flex justify-center items-center h-[200px]">
          <div
            className="radial-progress text-[#ef233c] mx-auto animate-spin"
            style={{
              "--value": "80",
              "--size": "2rem",
              "--thickness": "0.2rem",
            }}
          ></div>
        </div>
      ) : (
        <h1 className="sm:text-3xl ml-5 text-xl font-bold text-[#ef233c]">
          {orders.length > 0
            ? "All Your ordered products"
            : "No orders to show"}
        </h1>
      )}
      <div className="mt-10  grid sm:grid-cols-2 gap-6">
        {orders.map((order) => (
          <MyOrderCard key={order._id} order={order}></MyOrderCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

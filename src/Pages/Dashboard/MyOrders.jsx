import React, { useContext, useEffect, useState } from "react";
import MyOrderCard from "../../Components/MyOrderCard";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div className="m-10 p-10 bg-[#edf2f4] ">
      <h1 className="text-3xl font-bold text-[#ef233c]">
        All Your ordered products{" "}
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

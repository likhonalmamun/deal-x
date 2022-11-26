import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const BuyerRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch(`https://assignment-12-server-black.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.role);
        setRole(data.role);
      })
      .catch((er) => {
        toast.error(er.message);
        navigate("/");
      });
  }, []);
  if (loading) {
    return (
      <h1 className="text-blue-500  font-bold text-3xl text-center mt-32">
        Loading...
      </h1>
    );
  }
  if (role === "Buyer") {
    return children;
  }
  if (role && role !== "Buyer") {
    toast.error("You are not a buyer");
    return <Navigate to="/" replace></Navigate>;
  }
};

export default BuyerRoute;

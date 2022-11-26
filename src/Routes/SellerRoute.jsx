import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const SellerRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch(`https://assignment-12-server-black.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
      })
      .catch((er) => {
        toast.error(er.message);
        navigate("/");
      });
  }, [user]);
  if (loading) {
    return (
      <h1 className="text-blue-500  font-bold text-3xl text-center mt-32">
        Loading...
      </h1>
    );
  }
  if (role === "Seller") {
    return children;
  }
  if (role && role !== "Seller") {
    toast.error("You are not a seller");
    return <Navigate to="/" replace></Navigate>;
  }
};

export default SellerRoute;

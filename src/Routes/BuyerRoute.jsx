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
        setRole(data.role);
      })
      .catch((er) => {
        toast.error(er.message);
        navigate("/");
      });
  }, [user]);
  if (loading) {
    return (
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

import React from "react";
import { Link } from "react-router-dom";
import error from "../images/error-icon-25245.png";
const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center bg-green-700 w-screen fixed top-0 left-0 items-center">
      <div className="bg-[#ef233c] h-[500px] w-[500px]  flex justify-center  rounded-full shadow-xl shadow-[#ef233c] hover:scale-105 hover:shadow-2xl duration-300 hover:shadow-[#ef233c]">
        <div className="w-[50%] h-[50%] mt-16">
          <img src={error} alt="" />
          <h1 className="text-center text-3xl font-bold ">Page Not Found !</h1>
          <Link to='/' className="underline text-center text-white text-lg font-semibold block hover:text-black duration-300">Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

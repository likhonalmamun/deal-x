import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import BookingModal from "./BookingModal";
import { MdOutlineReportProblem } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const [seller, setSeller] = useState(null);
  const [open, setOpen] = useState(true);
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch(
      `https://assignment-12-server-black.vercel.app/users/${product.sellerEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSeller(data);
      })
      .catch((er) => toast.error(er.message));
  }, [product]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://assignment-12-server-black.vercel.app/users/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role);
        })
        .catch((er) => toast.error(er.message));
    }
  }, [user]);
  const reportProduct = () => {
    fetch(
      `https://assignment-12-server-black.vercel.app/products/${product._id}`,
      { method: "PATCH" }
    )
      .then((res) => res.json())
      .then((data) => toast.success(data.success))
      .catch((er) => toast.error(er.message));
  };
  return (
    <div
      className={
        product.status === "sold"
          ? "hidden"
          : "p-3 rounded-lg border-2 border-[#2b2d42] bg-[#edf2f4]"
      }
    >
      <img className="h-96 rounded-lg w-full" src={product.img} alt="" />
      <div className="flex flex-col border-t-2 border-[#ef233c] mt-1 justify-between">
        <div className="p-4 min-h-[195px]">
          <div className="text-xl font-semibold  items-center mb-2 flex justify-between">
            <h1 className="w-1/2">{product.name}</h1>
            <h3 className="text-base w-1/2 text-right">
              Condition : {product.condition}
            </h3>
          </div>
          <p className="text-xs mb-1">Details : {product.description}</p>
          <div className="font-bold text-lg flex items-center  justify-between text-[#d90429]">
            <h1>Price : ₵{product.resellPrice}</h1>
            <h1 className="w-1/2 text-right">
              Original Price : ₵{product.originalPrice}
            </h1>
          </div>
          <div className="font-semibold text-base  items-center flex justify-between text-[#8d99ae]">
            <h1>Used : {product.yearsUsed} Years</h1>
            <h1 className="w-1/2 text-right ">Location : {product.location}</h1>
          </div>
        </div>

        <div className="p-2 pb-0 border-t-2 flex justify-between items-center border-[#ef233c]">
          <div className="flex items-center">
            <img
              className="w-14 ring-2 ring-black  p-[2px] h-14 rounded-full"
              src={seller?.image}
              alt=""
            />
            <div className="p-2">
              <h1 className="font-bold text-[#ef233c]">
                {seller?.name}{" "}
                {seller?.verified && (
                  <span className="text-blue-600 text-xl ml-1">
                    <IoIosCheckmarkCircle className="inline"></IoIosCheckmarkCircle>
                  </span>
                )}
              </h1>
              <h1 className="text-[#8d99ae] font-semibold">{product.time}</h1>
            </div>
          </div>
          <div>
            {user ? (
              <label
                htmlFor={`booking-modal-${product._id}`}
                className={
                  role === "Buyer"
                    ? "btn btn-sm  w-28 mb-2 uppercase font-semibold py-1 px-2 bg-black text-white"
                    : "hidden"
                }
              >
                book now
              </label>
            ) : (
              <Link
                className="btn btn-sm  w-28 mb-2 uppercase text-xs py-1 px-2 bg-black text-white"
                to="/login"
              >
                Login To Book
              </Link>
            )}
            <button
              onClick={reportProduct}
              className="btn flex items-center gap-1 btn-sm  w-28 uppercase font-semibold py-1 px-2 bg-[#ef233c] text-white"
            >
              <span>report</span>{" "}
              <MdOutlineReportProblem className="text-base font-bold" />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <BookingModal setOpen={setOpen} product={product}></BookingModal>
      )}
    </div>
  );
};

export default ProductCard;

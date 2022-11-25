import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthProvider";
import BookingModal from "./BookingModal";

const ProductCard = ({ product }) => {
  const { logOut, user } = useContext(AuthContext);
  const [seller, setSeller] = useState(null);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    fetch(
      `http://localhost:5000/users/${product.sellerEmail}?payload=${user.email}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("DealX-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          logOut().then(() => {});
          toast.error(data.message);
        } else {
          setSeller(data);
        }
      });
  }, [product, user, logOut]);
  const reportProduct = () => {
    fetch(`http://localhost:5000/products/${product._id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => toast.success(data.success))
      .catch((er) => toast.error(er.message));
  };
  return (
    <div className="p-3 rounded-lg border-2 border-[#2b2d42] bg-[#edf2f4]">
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
                {seller?.verified && <span className="text-blue-600">TIK</span>}
              </h1>
              <h1 className="text-[#8d99ae] font-semibold">{product.time}</h1>
            </div>
          </div>
          <div>
            <label
              htmlFor="booking-modal"
              className="btn btn-sm  w-28 mb-2 uppercase font-semibold py-1 px-2 bg-black text-white"
            >
              book now
            </label>
            <button
              onClick={reportProduct}
              className="btn btn-sm block w-28 uppercase font-semibold py-1 px-2 bg-[#ef233c] text-white"
            >
              report
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

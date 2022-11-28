import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const BookingModal = ({ product, setOpen }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const bookProduct = (e) => {
    e.preventDefault();
    setLoading(true);

    const booking = {
      product: product.name,
      productImg: product.img,
      productId: product._id,
      price: product.resellPrice,
      buyer: user?.displayName,
      buyerEmail: user?.email,
      sellerEmail: product.sellerEmail,
      phone: e.target.phone.value,
      location: e.target.location.value,
    };

    fetch("https://assignment-12-server-black.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        setOpen(false);
        setLoading(false);
        toast.success(data.success);
        navigate("/dashboard/my-orders");
      })
      .catch((er) => {
        setLoading(false);
        toast.error(er.message);
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id={`booking-modal-${product._id}`}
        className="modal-toggle"
      />
      <div className="modal p-2">
        <form
          onSubmit={bookProduct}
          className="modal-box min-h-[520px] p-2 sm:p-5 pb-10 bg-[#2b2d42] w-[500px] rounded-xl shadow-xl shadow-[#8d99ae] relative"
          action=""
        >
          <label
            //dynamic modal id for opening correct modal
            htmlFor={`booking-modal-${product._id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-3xl mt-3 text-[#d90429] font-bold  text-center">
            Book Product
          </h1>
          <div className="text-white">
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Product :
            </label>
            <input
              name="product"
              disabled
              defaultValue={product.name}
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="text"
            />
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              {/* receiving price in cent */}
              Price : (₵)
            </label>
            <input
              name="price"
              disabled
              defaultValue={product.resellPrice}
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="text"
            />
          </div>
          <div className="text-white">
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Buyer :
            </label>
            <input
              name="buyer"
              disabled
              defaultValue={user?.displayName}
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="text"
            />
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Email :
            </label>
            <input
              name="email"
              disabled
              defaultValue={user?.email}
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="email"
            />
          </div>
          <div className="text-white">
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Phone :
            </label>
            <input
              name="phone"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="number"
            />
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Meeting Location :
            </label>
            <input
              name="location"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 hover:bg-[#edf2f4] hover:text-[#d90429] duration-300 rounded-lg bg-[#ef233c] text-[#edf2f4] text-lg font-bold"
          >
            {loading ? (
              <div
                className="radial-progress text-black mx-auto animate-spin"
                style={{
                  "--value": "80",
                  "--size": "1.5rem",
                  "--thickness": "0.2rem",
                }}
              ></div>
            ) : (
              "Book Now"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingModal;

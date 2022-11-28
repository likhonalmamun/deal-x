import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import { addProductToDb } from "../../Api/addProduct";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://assignment-12-server-black.vercel.app/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((er) => {
        toast.error(er.message);
      });
  }, []);
  const addProduct = (e) => {
    e.preventDefault();
    setLoading(true);
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      "https://api.imgbb.com/1/upload?key=fb6cc3c6e303eb1ff45d56f923305ae0",
      { method: "POST", body: formData }
    )
      .then((res) => res.json())
      .then((imgData) => {
        const newProduct = {
          name: e.target.name.value,
          description: e.target.description.value,
          condition: e.target.condition.value,
          categoryId: e.target.category.value,
          originalPrice: e.target.originalPrice.value,
          resellPrice: e.target.resellPrice.value,
          yearsUsed: e.target.yearsOfUsed.value,
          location: e.target.location.value,
          phone: e.target.phone.value,
          status: "available",
          reported: false,
          advertized: false,
          img: imgData.data.display_url,
          time: format(new Date(), "Pp"),
          sellerEmail: user.email,
        };
        addProductToDb(newProduct, setLoading, user?.email);
        setLoading(false);
        navigate("/dashboard/my-products");
      })
      .catch((er) => {
        setLoading(false);
        toast.error(er.message);
      });
  };
  return (
    <div className="-z-10 m-1 sm:mt-10 flex justify-center items-center">
      <div className=" p-2 sm:p-5 bg-[#2b2d42] w-[630px] rounded-xl shadow-xl shadow-[#8d99ae]">
        <form onSubmit={addProduct} action="">
          <h1 className="text-3xl mt-3 text-[#d90429] font-bold  text-center">
            Add A Product
          </h1>
          <div className="text-white pt-4">
            <div className="sm:flex gap-6">
              <div className="w-full">
                <label className="block mt-4 font-semibold mb-2" htmlFor="">
                  Product Category :
                </label>
                <select
                  name="category"
                  required
                  className="select w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="block mt-4 font-semibold mb-2" htmlFor="">
                  Product Condition :
                </label>
                <select
                  name="condition"
                  required
                  className="select w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Excellent">Good</option>
                  <option value="Excellent">Fair</option>
                </select>
              </div>
            </div>
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Product Name :
            </label>
            <input
              name="name"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="text"
            />
            <div className="sm:flex justify-between gap-6">
              <div className="w-full">
                <label className="block mt-4 font-semibold mb-2" htmlFor="">
                  Original Price :
                </label>
                <input
                  name="originalPrice"
                  required
                  className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
                  type="number"
                />
              </div>
              <div className="w-full">
                <label className="block mt-4 font-semibold mb-2" htmlFor="">
                  Resell Price :
                </label>
                <input
                  name="resellPrice"
                  required
                  className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
                  type="number"
                />
              </div>
            </div>
            <div className="sm:flex gap-6">
              <div className="sm:w-1/5">
                <label className="block mt-4 font-semibold mb-2" htmlFor="">
                  Years of Use :
                </label>
                <input
                  name="yearsOfUsed"
                  required
                  className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
                  type="number"
                />
              </div>
              <div className="flex-1">
                <label className="block mt-4 font-semibold mb-2" htmlFor="">
                  Product Image :
                </label>
                <input
                  name="image"
                  required
                  className="w-full  text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
                  type="file"
                />
              </div>
            </div>
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Product Description :
            </label>
            <input
              name="description"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="text"
            />
            <div className="sm:flex gap-6">
              <div className="w-full">
                <label className="block mt-4 font-semibold mb-2" htmlFor="">
                  Contact Location :
                </label>
                <input
                  name="location"
                  required
                  className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
                  type="text"
                />
              </div>
              <div className="w-full">
                <label className="block mt-4 font-semibold mb-2" htmlFor="">
                  Phone number :
                </label>
                <input
                  name="phone"
                  required
                  className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
                  type="number"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 my-7 hover:bg-[#edf2f4] hover:text-[#d90429] duration-300 rounded-lg bg-[#ef233c] text-[#edf2f4] text-lg font-bold"
          >
            {loading ? (
              <div
              className="radial-progress text-white mx-auto animate-spin"
              style={{
                "--value": "80",
                "--size": "1.5rem",
                "--thickness": "0.2rem",
              }}
            ></div>
            ) : (
              " Add Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

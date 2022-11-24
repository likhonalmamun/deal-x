import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
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
          categoryId: e.target.category.value,
          originalPrice: e.target.originalPrice.value,
          resellPrice: e.target.resellPrice.value,
          yearsUsed: e.target.yearsOfUsed.value,
          location: e.target.location.value,
          img: imgData.data.display_url,
          time: format(new Date(), "Pp"),
          seller: user.displayName,
          sellerEmail: user.email,
        };
        toast.success("Product added successfully");
        setLoading(false);
        console.log(newProduct);
      })
      .catch((er) => {
        setLoading(false);
        toast.error(er.message);
      });
  };
  return (
    <div className="-z-10 m-20">
      <div className=" p-5 bg-[#2b2d42] w-[630px] rounded-xl shadow-xl shadow-[#8d99ae]">
        <form onSubmit={addProduct} action="">
          <h1 className="text-3xl mt-3 text-[#d90429] font-bold  text-center">
            Add A Product
          </h1>
          <div className="text-white pt-4">
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
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Product Name :
            </label>
            <input
              name="name"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="text"
            />
            <div className="flex justify-between gap-6">
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
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Years of Use :
            </label>
            <input
              name="yearsOfUsed"
              required
              className="w-full text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="number"
            />
            <label className="block mt-4 font-semibold mb-2" htmlFor="">
              Product Image :
            </label>
            <input
              name="image"
              required
              className="w-full  text-[#d90429] outline-[#d90429] px-3 py-2 rounded-md bg-[#edf2f4]"
              type="file"
            />
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
          <button
            type="submit"
            className="w-full py-2 my-7 hover:bg-[#edf2f4] hover:text-[#d90429] duration-300 rounded-lg bg-[#ef233c] text-[#edf2f4] text-lg font-bold"
          >
            {loading ? "Loading..." : " Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

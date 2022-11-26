import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ReportedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-12-server-black.vercel.app/reported`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const deleteProduct = (id) => {
    fetch(`https://assignment-12-server-black.vercel.app/products/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => toast.success(data.success))
      .catch((er) => toast.error(er.message));
  };
  return (
    <div className="m-10 p-10 bg-[#edf2f4] ">
      <h1 className="text-3xl font-bold text-[#ef233c]">
        {products.length > 0
          ? "Reported Products"
          : "No reported product available!"}
      </h1>
      <div className="mt-10 ">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex border-2 my-3 px-5 py-2 justify-between items-center"
          >
            <div className="flex items-center">
              <img
                className="w-14 mr-3 h-14 rounded-full border p-[1px] "
                src={product.img}
                alt="product"
              />
              <div>
                <h1 className="font-bold">{product.name}</h1>
                <p className="text-sm font-semibold">{product.time}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => deleteProduct(product._id)}
                className="btn bg-red-500 border-0 mx-2 btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportedProducts;

import React from "react";
import toast from "react-hot-toast";

const MyProductCard = ({ product }) => {
  //   console.log(product);
  const advertise = () => {
    if (product.status === "sold") {
      return toast.error("This product is not available!");
    }
    fetch(`http://localhost:5000/ad/${product._id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => toast.success(data.success))
      .catch((er) => toast.error(er.message));
  };
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => toast.success(data.success))
      .catch((er) => toast.error(er.message));
  };
  return (
    <div className="p-3 rounded-lg border-2 border-[#2b2d42] bg-[#edf2f4]">
      <img className="h-52 rounded-lg w-full" src={product.img} alt="" />
      <div className="min-h-[160px] pt-4 flex flex-col border-t-2 border-[#ef233c] mt-1 justify-between">
        <div>
          <h1 className="text-xl font-semibold  mb-2 ">{product.name}</h1>

          <div className="flex justify-between gap-2">
            <h1 className="font-bold text-lg flex-1 text-[#d90429]">
              Price : ₵{product.resellPrice}
            </h1>
            <h1 className="font-bold text-base flex-1 text-[#d90429]">
              Status : {product.status ? product.status : "Available"}
            </h1>
          </div>
        </div>

        <div className="mt-1 flex justify-between gap-2">
          <button
            onClick={() => {
              deleteProduct(product._id);
            }}
            className="btn btn-sm flex-1 mb-2 uppercase font-semibold py-1 px-2 bg-[#ef233c] text-white"
          >
            Delete
          </button>
          {product.status !== "sold" && product.advertised !== true && (
            <button
              onClick={advertise}
              className="btn btn-sm flex-1 mb-2 uppercase font-semibold py-1 px-2 bg-[#ef233c] text-white"
            >
              Advertise
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;

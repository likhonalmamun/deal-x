import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const AllSellers = () => {
  const [allSellers, setAllSelers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users?role=Seller`)
      .then((res) => res.json())
      .then((data) => setAllSelers(data));
  }, []);
  const verifySeller = (id) => {
    fetch(`http://localhost:5000/verifySeller/${id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => toast.success(data.success))
      .catch((er) => toast.error(er.message));
  };
  const deleteSeller = (seller) => {
    console.log("deleting seller", seller.name);
  };
  return (
    <div className="m-10 p-10 bg-[#edf2f4] ">
      <h1 className="text-3xl font-bold text-[#ef233c]">All Sellers</h1>
      <div className="mt-10 ">
        {allSellers.map((seller) => (
          <div
            key={seller._id}
            className="flex border-2 my-3 px-5 py-2 justify-between items-center"
          >
            <div className="flex items-center">
              <img
                className="w-14 mr-3 h-14 rounded-full border p-[1px] "
                src={seller.image}
                alt="seller"
              />
              <div>
                <h1 className="font-bold">{seller.name}</h1>
                <p className="text-sm font-semibold">{seller.email}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => deleteSeller(seller)}
                className="btn bg-red-500 border-0 mx-2 btn-sm"
              >
                Delete
              </button>
              <button
                onClick={() => verifySeller(seller._id)}
                className="btn bg-blue-600 border-0 btn-sm"
              >
                Verify
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSellers;

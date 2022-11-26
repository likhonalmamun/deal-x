import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const [allBuyers, setAllBuyers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users?role=Buyer`)
      .then((res) => res.json())
      .then((data) => setAllBuyers(data));
  }, []);
  const deleteBuyer = (email) => {
    fetch(`http://localhost:5000/users/${email}`, {
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
        {allBuyers.length > 0 ? "All Buyers" : "No Buyer to Show !"}
      </h1>
      <div className="mt-10 ">
        {allBuyers.map((buyer) => (
          <div
            key={buyer._id}
            className="flex border-2 my-3 px-5 py-2 justify-between items-center"
          >
            <div className="flex items-center">
              <img
                className="w-14 mr-3 h-14 rounded-full border p-[1px] "
                src={buyer.image}
                alt="buyer"
              />
              <div>
                <h1 className="font-bold">{buyer.name}</h1>
                <p className="text-sm font-semibold">{buyer.email}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => deleteBuyer(buyer.email)}
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

export default AllBuyers;

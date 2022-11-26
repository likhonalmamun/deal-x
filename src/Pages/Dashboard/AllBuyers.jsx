import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const AllBuyers = () => {
  const [allBuyers, setAllBuyers] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://assignment-12-server-black.vercel.app/role/${"Buyer"}?email=${
        user?.email
      }`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("DealX-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error(data.message);
          logOut();
        } else {
          setAllBuyers(data);
        }
      });
  }, [user]);
  const deleteBuyer = (email) => {
    fetch(`https://assignment-12-server-black.vercel.app/users/${email}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.success);
      })
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

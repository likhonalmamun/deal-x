import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
const AllSellers = () => {
  const { user, logOut } = useContext(AuthContext);
  const {
    data: allSellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allSellers", user],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-black.vercel.app/role/${"Seller"}?email=${
          user?.email
        }`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("DealX-token")}`,
          },
        }
      );
      const data = await res.json();
      if (data.message) {
        logOut();
        toast.error(data.message);
      } else {
        return data;
      }
    },
  });
  const verifySeller = (id) => {
    fetch(`https://assignment-12-server-black.vercel.app/verifySeller/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(data.success);
      })
      .catch((er) => toast.error(er.message));
  };
  const deleteSeller = (email) => {
    fetch(
      `https://assignment-12-server-black.vercel.app/deleteSeller/${email}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(data.success);
      })
      .catch((er) => toast.error(er.message));
  };
  return (
    <div className="m-10 p-10 bg-[#edf2f4] ">
      {isLoading ? (
        <h1 className="text-3xl font-bold text-[#ef233c]">Loading...</h1>
      ) : (
        <h1 className="text-3xl font-bold text-[#ef233c]">
          {allSellers.length > 0 ? "All Sellers" : "No seller to show"}
        </h1>
      )}
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
                onClick={() => deleteSeller(seller.email)}
                className="btn bg-red-500 border-0 mx-2 btn-sm"
              >
                Delete
              </button>
              <button
                disabled={seller.verified ? true : false}
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

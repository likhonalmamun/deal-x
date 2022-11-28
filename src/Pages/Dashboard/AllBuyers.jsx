import { useQuery } from "@tanstack/react-query";
import React, { useContext} from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const AllBuyers = () => {
  const { user, logOut } = useContext(AuthContext);
  const {
    data: allBuyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allBuyers", user],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-black.vercel.app/role/${"Buyer"}?email=${
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

  const deleteBuyer = (email) => {
    fetch(`https://assignment-12-server-black.vercel.app/users/${email}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(data.success);
      })
      .catch((er) => toast.error(er.message));
  };
  return (
    <div className="sm:m-10  p-4 mt-10 sm:p-10 bg-[#edf2f4] ">
      {isLoading ? (
        <div className="flex justify-center items-center h-[200px]">
          <div
            className="radial-progress text-[#ef233c] mx-auto animate-spin"
            style={{
              "--value": "80",
              "--size": "2rem",
              "--thickness": "0.2rem",
            }}
          ></div>
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-[#ef233c]">
          {allBuyers.length > 0 ? "All Buyers" : "No Buyer to Show !"}
        </h1>
      )}
      <div className="mt-10 ">
        {allBuyers.map((buyer) => (
          <div
            key={buyer._id}
            className=" flex gap-3 flex-col sm:flex-row border-2 my-3 sm:px-5 py-2 justify-between items-center"
          >
            <div className="flex  flex-col justify-center sm:flex-row items-center">
              <img
                className="w-14 mr-3 h-14 rounded-full border p-[1px] "
                src={buyer.image}
                alt="buyer"
              />
              <div className="text-center sm:text-left">
                <h1 className="font-bold">{buyer.name}</h1>
                <p className="text-sm font-semibold">{buyer.email}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => deleteBuyer(buyer.email)}
                className="btn  bg-red-500 border-0 mx-2 btn-sm"
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

import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import MyProductCard from "../../Components/MyProductCard";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  // const [addedProducts, setAddedProducts] = useState([]);

  const {
    data: addedProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts", user],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-black.vercel.app/myProducts?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <div className="p-2 md:m-10 md:p-10 mt-10 pt-10 bg-[#edf2f4]  ">
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
          {addedProducts.length > 0
            ? "All your added products"
            : "No product is added"}
        </h1>
      )}
      <div className="mt-10  grid sm:grid-cols-2 gap-6">
        {addedProducts.map((product) => (
          <MyProductCard
            refetch={refetch}
            key={product._id}
            product={product}
          ></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;

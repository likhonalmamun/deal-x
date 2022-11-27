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
    <div className="m-10 p-10 bg-[#edf2f4] ">
      {isLoading ? (
        <h1 className="text-3xl font-bold text-[#ef233c]">Loading....</h1>
      ) : (
        <h1 className="text-3xl font-bold text-[#ef233c]">
          {addedProducts.length > 0
            ? "All your added products"
            : "No product is added"}
        </h1>
      )}
      <div className="mt-10  grid grid-cols-2 gap-6">
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

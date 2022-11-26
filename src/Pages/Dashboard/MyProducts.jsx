import React, { useContext, useEffect, useState } from "react";
import MyProductCard from "../../Components/MyProductCard";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [addedProducts, setAddedProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAddedProducts(data);
      });
  }, [user]);
  return (
    <div className="m-10 p-10 bg-[#edf2f4] ">
      <h1 className="text-3xl font-bold text-[#ef233c]">
        {addedProducts.length>0 ? "All your added products" : "No product is added"}
      </h1>
      <div className="mt-10  grid grid-cols-2 gap-6">
        {addedProducts.map((product) => (
          <MyProductCard key={product._id} product={product}></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;

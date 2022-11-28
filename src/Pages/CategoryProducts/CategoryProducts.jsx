import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";

const CategoryProducts = () => {
  const products = useLoaderData() || [];
  return (
    <>
      <h1 className="mt-20 px-3 mb-10 text-3xl text-[#d90429] font-bold">
        All Products In this Category
      </h1>

      <div className="px-3 grid sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;

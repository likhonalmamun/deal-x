import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryProducts = () => {
  const products = useLoaderData() || [];
  return <div>this category has {products.length} products</div>;
};

export default CategoryProducts;

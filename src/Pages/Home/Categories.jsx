import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mt-10 p-5">
      <h1 className="text-2xl font-bold  text-center">Product Categories</h1>
      <div className="mt-5 grid grid-cols-4 gap-5">
        {categories.map((category) => (
          <Link key={category._id} to={`/category/${category._id}`}>
            <CategoryCard info={category}></CategoryCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

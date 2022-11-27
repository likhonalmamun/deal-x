import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCard";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://assignment-12-server-black.vercel.app/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((er) => {
        toast.error(er.message);
      });
  }, []);
  return (
    <div className="mt-10 p-5">
      <h1 className="text-2xl font-bold  text-center">Product Categories</h1>
      <div className="mt-10 grid grid-cols-4 gap-5">
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

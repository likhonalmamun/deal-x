import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCard";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://assignment-12-server-black.vercel.app/categories")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((er) => {
        toast.error(er.message);
        setLoading(false);
      });
  }, []);
  return (
    <div className="mt-10 p-5">
      <h1 className="text-2xl font-bold  text-center">Product Categories</h1>
      {loading ? (
        <div className="flex mt-10 justify-center items-center h-[200px]">
          <div
            className="radial-progress text-[#ef233c] mx-auto animate-spin"
            style={{
              "--value": "80",
              "--size": "2.5rem",
              "--thickness": "0.3rem",
            }}
          ></div>
        </div>
      ) : (
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <Link key={category._id} to={`/category/${category._id}`}>
              <CategoryCard info={category}></CategoryCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;

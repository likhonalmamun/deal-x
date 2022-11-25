import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../Components/ProductCard";

const Advertise = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/ad`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((er) => toast.error(er.message));
  }, []);
  return (
    <div className={`${products.length < 1 ? "hidden" : "block"}  mt-10`}>
      <h1 className="text-2xl  font-bold text-center"> Advertised products</h1>
      <div className=" grid grid-cols-2 mt-16 gap-6 px-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Advertise;

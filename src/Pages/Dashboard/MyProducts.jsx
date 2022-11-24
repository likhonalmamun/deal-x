import React, { useContext, useState } from "react";
import { myProducts } from "../../Api/myProducts";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [addedProducts, setAddedProducts] = useState([]);
  myProducts(user?.email, setAddedProducts);
  return <div>You are selling {addedProducts.length} products .</div>;
};

export default MyProducts;

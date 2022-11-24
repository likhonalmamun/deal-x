import React, { useState } from "react";
import { getUsersByRole } from "../../Api/getUsersByRole";
const AllSellers = () => {
  const [allSellers, setAllSelers] = useState([]);
  getUsersByRole("Seller", setAllSelers);
  return <div>currently there is {allSellers.length} sellers .</div>;
};

export default AllSellers;

import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Header from "../Shared/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data.role));
  }, [user]);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#edf2f4]  text-lg text-[#d90429] font-semibold">
            {user && role === "Buyer" && (
              <li>
                <Link to="/dashboard/my-orders">My Orders</Link>
              </li>
            )}
            {user && role === "Seller" && (
              <>
                <li>
                  <Link to="/dashboard/my-products">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-product">Add A Product</Link>
                </li>
              </>
            )}
            {user && role === "Admin" && (
              <>
                <li>
                  <Link to="/dashboard/all-sellers">All sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-buyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reported-products">
                    Reported Products
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

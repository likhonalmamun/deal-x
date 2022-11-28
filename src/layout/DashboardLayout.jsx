import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Header from "../Shared/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://assignment-12-server-black.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setRole(data.role);
      })
      .catch((er) => {
        setIsLoading(false);
        toast.error(er.message);
      });
  }, [user]);

  return (
    <div>
      <Header></Header>
      <div className="drawer overflow-scroll drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          {isLoading ? (
            <div className="flex w-[200px] justify-center items-center h-[200px]">
              <div
                className="radial-progress text-[#ef233c] mx-auto animate-spin"
                style={{
                  "--value": "80",
                  "--size": "2rem",
                  "--thickness": "0.2rem",
                }}
              ></div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

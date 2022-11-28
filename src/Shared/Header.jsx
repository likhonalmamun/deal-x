import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import logo from "../images/swap.JPG";
import { AuthContext } from "../Contexts/AuthProvider";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="h-20 sm:px-7 flex justify-between items-center bg-[#2b2d42]">
      <div className="px-5 flex uppercase gap-2 items-center text-white py-2 rounded-xl w-20 text-xl font-bold">
        {user && (
          // sidebar button of dashboard  for small devices
          <label
            htmlFor="sidebar"
            className="px-3 sm:hidden uppercase btn btn-sm  h-[37px] bg-[#edf2f4] py-0 duration-300 hover:text-[#edf2f4] text-[#d90429] rounded-md hover:bg-[#ef233c] text-xl  drawer-button"
          >
            <FaBars></FaBars>
          </label>
        )}
        <img className="rounded-full" src={logo} alt="" />
        <h1>
          Deal<span className="text-[#d90429]">X</span>
        </h1>
      </div>
      <div className="flex items-center justify-end">
        {user?.uid ? (
          <>
            <img
              className="w-12 hidden sm:inline-block rounded-full h-12 border-2 border-white mr-5"
              src={user?.photoURL}
              alt=""
            />
            <button
              onClick={() => logOut()}
              className="px-3 uppercase hidden sm:inline-block flex items-center gap-1 duration-300 text-white hover:bg-[#edf2f4] hover:text-[#d90429] py-2 rounded-sm bg-[#ef233c] text-base font-semibold"
            >
              <span>Logout</span>{" "}
              <FaSignOutAlt className="inline"></FaSignOutAlt>
            </button>
          </>
        ) : (
          <div className="text-[#edf2f4] hidden sm:block">
            <Link
              to="/login"
              className="px-3 uppercase  duration-300 hover:bg-[#edf2f4] hover:text-[#d90429] py-2 rounded-sm bg-[#ef233c] text-base font-semibold"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="px-3 uppercase  mx-2 bg-[#edf2f4] py-2 duration-300 hover:text-[#edf2f4] text-[#d90429] rounded-sm hover:bg-[#ef233c] text-base font-semibold"
            >
              Sign Up
            </Link>
          </div>
        )}
        <div className="inline relative max-w-56 text-right">
          <Menu as="div" className=" text-left">
            <div className="flex justify-end">
              <Menu.Button className="px-3 uppercase  mx-2 h-[37px] bg-[#edf2f4] py-0 duration-300 hover:text-[#edf2f4] text-[#d90429] rounded-sm hover:bg-[#ef233c] text-xl ">
                <FaBars></FaBars>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-40 right-0 mt-2 w-56 origin-top-right divide-y divide-[#ef233c] rounded-md bg-[#edf2f4] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/"
                        className={`${
                          active
                            ? "bg-[#ef233c] text-[#edf2f4]"
                            : "text-[#d90429]"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Home
                      </Link>
                    )}
                  </Menu.Item>
                  {user && (
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/dashboard"
                          className={`${
                            active
                              ? "bg-[#ef233c] text-[#edf2f4]"
                              : "text-[#d90429]"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Dashboard
                        </Link>
                      )}
                    </Menu.Item>
                  )}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/blogs"
                        className={`${
                          active
                            ? "bg-[#ef233c] text-[#edf2f4]"
                            : "text-[#d90429]"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Blogs
                      </Link>
                    )}
                  </Menu.Item>
                  {user ? (
                    <Menu.Item className={"sm:hidden px-2"}>
                      {({ active }) => (
                        <Link
                          onClick={() => logOut()}
                          className={`${
                            active
                              ? "bg-[#ef233c] text-[#edf2f4]"
                              : "text-[#d90429]"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                        >
                          <span className="text-red-500 hover:text-white hover:bg-red-500">
                            Logout{" "}
                            <FaSignOutAlt className="inline ml-3"></FaSignOutAlt>{" "}
                          </span>
                        </Link>
                      )}
                    </Menu.Item>
                  ) : (
                    <>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={`${
                              active
                                ? "bg-[#ef233c] text-[#edf2f4]"
                                : "text-[#d90429]"
                            } group flex w-full items-center rounded-md sm:hidden px-2 py-2 text-sm`}
                          >
                            Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/sign-up"
                            className={`${
                              active
                                ? "bg-[#ef233c] text-[#edf2f4]"
                                : "text-[#d90429]"
                            } group flex w-full items-center rounded-md px-2 py-2 sm:hidden text-sm`}
                          >
                            Sign Up
                          </Link>
                        )}
                      </Menu.Item>
                    </>
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;

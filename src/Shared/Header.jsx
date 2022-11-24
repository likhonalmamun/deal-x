import React from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import logo from "../images/swap.JPG";

const Header = () => {
  return (
    <div className="h-20 px-7 flex justify-between items-center bg-[#2b2d42]">
      <div className="px-5 flex uppercase gap-2 items-center text-white py-2 rounded-xl w-20 text-xl font-bold">
        <img className="rounded-full" src={logo} alt="" />
        <h1>
          Deal<span className="text-[#d90429]">X</span>
        </h1>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-[#edf2f4]">
          <Link
            to="/login"
            className="px-3 duration-300 hover:bg-[#edf2f4] hover:text-[#d90429] py-2 rounded-xl bg-[#ef233c] text-lg font-semibold"
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="px-3 mx-2 bg-[#edf2f4] py-2 duration-300 hover:text-[#edf2f4] text-[#d90429] rounded-xl hover:bg-[#ef233c] text-lg font-semibold"
          >
            Sign Up
          </Link>
        </div>
        <div className="inline relative max-w-56 text-right">
          <Menu as="div" className=" text-left">
            <div className="flex justify-end">
              <Menu.Button className="px-3 mx-2 bg-[#edf2f4] py-1 duration-300 hover:text-[#edf2f4] text-[#d90429] rounded-xl hover:bg-[#ef233c] text-lg font-semibold">
                Go to
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
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-[#ef233c] rounded-md bg-[#edf2f4] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-[#ef233c] text-[#edf2f4]"
                            : "text-[#d90429]"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Edit
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-[#ef233c] text-[#edf2f4]"
                            : "text-[#d90429]"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Duplicate
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-[#ef233c] text-[#edf2f4]"
                            : "text-[#d90429]"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Archive
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-[#ef233c] text-[#edf2f4]"
                            : "text-[#d90429]"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Move
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-[#ef233c] text-[#edf2f4]"
                            : "text-[#d90429]"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Delete
                      </button>
                    )}
                  </Menu.Item>
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

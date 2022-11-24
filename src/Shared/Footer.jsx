import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-10 bg-[#edf2f4] text-white">
      <div className="container pt-9">
        <div className="flex justify-center mb-9">
          <a href="#!" className="mr-9 text-gray-800">
            facebook
          </a>
          <a href="#!" className="mr-9 text-gray-800">
            twitter
          </a>
          <a href="#!" className="mr-9 text-gray-800">
            google
          </a>
          <a href="#!" className="mr-9 text-gray-800">
            insta
          </a>
          <a href="#!" className="mr-9 text-gray-800">
            linked in
          </a>
          <a href="#!" className="text-gray-800">
            github
          </a>
        </div>
      </div>

      <div className="text-center text-white  bg-[#2b2d42] p-4">
        © 2022 Copyright:
        <a
          className="text-white mx-2 font-bold"
          href="https://tailwind-elements.com/"
        >
          DEAL<span className="  text-[#d90429]">X</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

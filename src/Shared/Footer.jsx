import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-center mt-20 bg-[#edf2f4] text-white">
      <div className="container text-2xl p-4 pt-9">
        <div className="flex justify-center items-center gap-7 flex-wrap mb-9">
          <a href="#!" className=" text-gray-800">
            <FaFacebook></FaFacebook>
          </a>
          <a href="#!" className="text-gray-800">
            <FaTwitter></FaTwitter>
          </a>
          <a href="#!" className="text-gray-800">
            <FaGoogle></FaGoogle>
          </a>
          <a href="#!" className="text-gray-800">
            <FaInstagram></FaInstagram>
          </a>
          <a href="#!" className="text-gray-800">
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="#!" className="text-gray-800">
            <FaGithub></FaGithub>
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

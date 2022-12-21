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
    <footer className="text-center mt-20 bg-gradient-to-b from-rose-200 via-[#edf2f4] to-[#ffffff]">
      <div className="container text-2xl p-4 pt-9">
        <div className="flex justify-center items-center gap-12 mb-9">
          <a
            href="https://www.facebook.com/likhon.al.mamun.4321"
            className=" text-gray-800"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href="https://www.instagram.com/likhon_al_mamun/"
            className="text-gray-800"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://www.linkedin.com/in/md-likhon-ali/"
            className="text-gray-800"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="https://github.com/likhonalmamun" className="text-gray-800">
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

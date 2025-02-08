import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-3 items-center">
      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 px-4">
        &copy; ICGSC-2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

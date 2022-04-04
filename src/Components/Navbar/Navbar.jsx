import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-sky-400">
      <div className="logo"><h1 className="text-xl font-bold font-mono">New Newtwork</h1></div>
      <nav className="h-20 flex items-center justify-center">
        <Link className="px-4 font-bold text-xl text-gray-600" to={"/"}>
          Home
        </Link>
        <Link className="px-4 font-bold text-xl text-gray-600" to={"/reviews"}>
          Reviews
        </Link>
        <Link className="px-4 font-bold text-xl text-gray-600" to={"/blogs"}>
          Blogs
        </Link>
        <Link
          className="px-4 font-bold text-xl text-gray-600"
          to={"/dashboard"}
        >
          Dashboard
        </Link>
        <Link className="px-4 font-bold text-xl text-gray-600" to={"/about"}>
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="bg-sky-400">
      <div className="flex justify-between items-center container mx-auto">
        <div className="logo">
          <h1 className="text-2xl font-semibold font-serif">New Newtwork</h1>
        </div>
        <nav className="h-20 flex items-center justify-center">
          <CustomLink className="px-4 font-normal text-xl text-gray-600" to={"/"}>
            Home
          </CustomLink>
          <CustomLink
            className="px-4 font-normal text-xl text-gray-600"
            to={"/reviews"}
          >
            Reviews
          </CustomLink>
          <CustomLink className="px-4 font-normal text-xl text-gray-600" to={"/blogs"}>
            Blogs
          </CustomLink>
          <CustomLink
            className="px-4 font-normal text-xl text-gray-600"
            to={"/dashboard"}
          >
            Dashboard
          </CustomLink>
          <CustomLink className="px-4 font-normal text-xl text-gray-600" to={"/about"}>
            About
          </CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

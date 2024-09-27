import React, { useState, useEffect } from "react";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const storedName = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState("");

  useEffect(() => {
    if (storedName) {
      setName(storedName.cus_name);
    }
  }, []);

  return (
    <nav className="header bg-black font-noto-sans-thai flex items-center justify-between">
      {/* Left side: Home icon and search bar */}
      <div className="flex items-center">
        <AiFillHome className="text-white text-3xl" />
        <input
          type="text"
          className="rounded w-40 ml-4 pl-2"
          placeholder="ค้นหาสินค้า... "
        />
      </div>

      <div className="logo-container flex justify-center">
        <img src="/images/logo.png" alt="Logo" className="h-12 w-12" />
      </div>

      <div className="flex items-center">
        <a className="text-white mr-4 font-noto-sans-thai" href="/login">
          ลงทะเบียน/เข้าสู่ระบ
        </a>
        <CgProfile className="text-white text-xl mr-10"  />
        <FaShoppingCart className="text-white text-xl mr-10" />
      </div>
    </nav>
  );
}

export default Navbar;


// <div className="header bg-black">
//   <div>
//     <AiFillHome className='text-white text-3xl' />
//   </div>

//   <div className='flex items-start'>
//     <input type="text" className='rounded w-40 flex items-start	' />
//   </div>

//   <nav className='navbar'>
//     <a href="">Product</a>
//     <a href="/cart">Cart</a>
//     <a href="/login">Login/Register</a>
//     <a href="">Contact</a>
//     <span> welcome,{name}</span>
//   </nav>
// </div>


"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

import logo from "../../../public/logo.png"; // Import your logo
import logo2 from "../../../public/1 line white 1 (1).png"; // Import your logo

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent py-4 px-6 md:px-12 max-w-[1341px] mx-auto flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
      <Image src={logo} alt="Logo" width={120} height={50} className="cursor-pointer md:block hidden" />
      <Image src={logo2} alt="Logo" width={174} height={31} className="cursor-pointer md:hidden block" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-8 text-lg text-white font-handel ">
        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
        <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
        <li><Link href="/chat" className="hover:text-gray-300">Chat</Link></li>
        <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        <li><Link href="/more" className="hover:text-gray-300">More+</Link></li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex space-x-4 font-handel">
        <button className="text-white text-lg px-4 font-handel">Log in</button>
        <button className="bg-blue-600 text-white font-handel px-6 py-2 rounded-lg text-lg hover:bg-blue-700">
          Sign up
        </button>
      </div>

      {/* Mobile Hamburger and Cross Menu Button */}
      <div className="lg:hidden z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-3xl text-black" onClick={() => setMenuOpen(false)}/> // Cross (close) icon
          ) : (
            <FaBars className="text-3xl text-white" /> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full p-10 bg-white flex flex-col space-y-8 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="text-black text-2xl space-y-6 font-handel">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/chat" onClick={() => setMenuOpen(false)}>Chat</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link href="/more" onClick={() => setMenuOpen(false)}>More+</Link></li>
        </ul>

        {/* Mobile Buttons */}
        <div className="mt-8 font-handel">
          <button className="text-black font-handel text-lg mr-4" onClick={() => setMenuOpen(false)}>
            Log in
          </button>
          <button className="bg-blue-600 font-handel text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700" onClick={() => setMenuOpen(false)}>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

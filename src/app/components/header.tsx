"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"; // Added Menu and X (close) icons
import Link from "next/link";

export const links = [
  {
    name: "Jewelry & Accessories",
    link: "/shop",
  },
  {
    name: "Clothing & Shoes",
    link: "/shop",
  },
  {
    name: "Home & Living",
    link: "/shop",
  },
  {
    name: "Wedding & Party",
    link: "/shop",
  },
  {
    name: "Toys & Entertainment",
    link: "/shop",
  },
  {
    name: "Art & Collection",
    link: "/shop",
  },
  {
    name: "Craft Supplies & Tools",
    link: "/shop",
  },
];

const Header = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white">
      {/* Top Header */}
      <div className="flex justify-between items-center py-4 border-b border-gray-200 px-4 lg:px-8">
        {/* Left: Search */}
        <div className="flex items-center gap-2">
          <Search className="text-gray-600 hover:text-black transition-colors cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        {/* Center: Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={160} height={30} className="sm:w-[180px]" />
        </div>

        {/* Right: User & Shopping */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
            <User className="text-gray-600 hover:text-black transition-colors w-5 h-5 sm:w-6 sm:h-6" />
            <h3 className="text-gray-600 hover:text-black text-sm sm:text-base transition-colors">
              Account
            </h3>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
            <ShoppingBag className="text-gray-600 hover:text-black transition-colors w-5 h-5 sm:w-6 sm:h-6" />
            <h3 className="text-gray-600 hover:text-black text-sm sm:text-base transition-colors">
              Cart
            </h3>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="lg:hidden flex items-center cursor-pointer" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="text-gray-600 w-6 h-6" /> // Close icon
            ) : (
              <Menu className="text-gray-600 w-6 h-6" /> // Hamburger icon
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <nav className={`lg:flex justify-center py-3 ${isMobileMenuOpen ? "block" : "hidden"} lg:block`}>
        <ul className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-8 gap-4 lg:gap-8 px-4">
          {links.map((item) => {
            return (
              <li key={item.link} className="group">
                <Link
                  href={item.link}
                  className="text-gray-700 text-sm sm:text-base hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
                {/* Hover underline animation */}
                <div className="w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-black mx-auto"></div>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

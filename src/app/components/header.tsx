import React from "react";
import Image from "next/image";
import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export const links = [
  {
    name: "Jewelry & Accesories",
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
  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white wrapper">
      {/* Top Header */} 
      <div className="flex justify-between items-center wrapper py-4 border-b border-gray-200">
        {/* Left: Search */}
        <div className="flex items-center gap-2">
          <Search className="text-gray-600 hover:text-black transition-colors cursor-pointer" />
        </div>

        {/* Center: Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={180} height={34} />
        </div>

        {/* Right: User & Shopping */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <User className="text-gray-600 hover:text-black transition-colors" />
            <h3 className="text-gray-600 hover:text-black transition-colors">Account</h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingBag className="text-gray-600 hover:text-black transition-colors" />
            <h3 className="text-gray-600 hover:text-black transition-colors">Cart</h3>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <nav className="py-3">
        <ul className="flex justify-center space-x-8 gap-8">
          {links.map((item) => {
            return (
              <li key={item.link} className="group">
                <Link
                  href={item.link}
                  className="text-gray-700 hover:text-black transition-colors"
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

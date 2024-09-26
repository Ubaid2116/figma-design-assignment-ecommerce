import Link from "next/link";
import React from "react";
import Image from "next/image";

export const products = [
  {
    name: "All Products",
    link: "#",
  },
  {
    name: "T-Shirt",
    link: "#",
  },
  {
    name: "Hoodies",
    link: "#",
  },
  {
    name: "Jacket",
    link: "#",
  },
];

const Products = () => {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 wrapper">
      {/* Newsletter Subscription Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Or Subscribe to Our Newsletter
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Stay updated with our latest products and exclusive offers!
        </p>
      </div>

      {/* Product Links */}
      <div className="py-2">
        <ul className="flex flex-col lg:flex-row justify-right space-y-4 lg:space-y-0 lg:space-x-8 gap-4 px-4">
          {products.map((item) => (
            <li key={item.link} className="group relative">
              <Link
                href={item.link}
                className="text-gray-700 text-base sm:text-lg font-semibold hover:text-black transition-colors duration-300"
              >
                {item.name}
              </Link>
              {/* Hover underline animation */}
              <div className="w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-black mx-auto mt-1"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid Section */}
      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Images */}
          {[
            "/product1.png",
            "/product2.png",
            "/product3.png",
            "/product4.png",
            "/product5.png",
            "/product6.png",
            "/product7.png",
            "/product8.png",
          ].map((product, index) => (
            <div
              key={index}
              className="group relative transition-transform transform hover:scale-105"
            >
              <Image
                src={product}
                alt={`Product ${index + 1}`}
                width={312}
                height={478}
                className="object-cover rounded-lg shadow-lg w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

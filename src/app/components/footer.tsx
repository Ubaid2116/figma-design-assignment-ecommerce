import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-[#1E2832] wrapper">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Image src="/logo.png" alt="logo" height={200} width={200} />
          <p className="mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            totam fugit sequi optio, atque perferendis quos voluptas error
            veniam. Totam et error illum, facilis enim quasi similique vero
            repellat qui?
          </p>
          <div className="flex space-x-4 mt-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:text-blue-500 transition duration-300">
                <FaFacebookF size={20} />
              </div>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:text-blue-700 transition duration-300">
                <FaLinkedinIn size={20} />
              </div>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={20} />
              </div>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:text-pink-500 transition duration-300">
                <FaInstagram size={20} />
              </div>
            </Link>
          </div>
        </div>

        {/* Catalog Section */}
        <div className="lg:ml-16">
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
            CATALOG
          </h2>
          <ul className="space-y-2 text-center md:text-left">
            {["Necklaces", "Hoodies", "Jewelry", "T-shirt", "Jacket"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
            ABOUT US
          </h2>
          <ul className="space-y-2 text-center md:text-left">
            {[
              "Our Producers",
              "Sitemap",
              "FAQ",
              "About",
              "Terms & Conditions",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Services Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
            CUSTOMER SERVICES
          </h2>
          <ul className="space-y-2 text-center md:text-left">
            {[
              "Contact Us",
              "Track Your Order",
              "Product Care & Repair",
              "Book an Appointment",
              "Shipping & Returns",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 bg-[#1E2832] text-white text-center text-sm p-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Coral, Inc.</p>
          <div className="flex space-x-4">
            {[FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="hover:text-gray-400 transition duration-300"
                >
                  <Icon size={30} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

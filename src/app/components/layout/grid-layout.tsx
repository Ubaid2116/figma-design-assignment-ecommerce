import Image from "next/image";
import React from "react";

const GridLayout = () => {
  return (
    <div className="wrapper lg:flex lg:gap-6 py-5 rounded-lg shadow-md">
      {/* Rotated Heading */}
      <div className="flex items-center w-10 relative mb-8 lg:mb-0">
        <h2 className="font-semibold text-lg hidden lg:block absolute lg:-rotate-90 whitespace-pre -right-36 tracking-wide lg:text-xl text-gray-800">
          Explore&nbsp;&nbsp;new&nbsp;&nbsp;and&nbsp;&nbsp;popular&nbsp;&nbsp;styles
        </h2>
      </div>

      <div className="flex items-center w-10 relative mb-8 lg:mb-0">
        <h2 className="font-semibold text-xl whitespace-pre tracking-wide lg:text-base block lg:hidden text-gray-800">
          Explore new and popular styles
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {/* Large Image */}
        <div className="col-span-1 lg:col-span-2 row-span-2 transition-transform transform hover:scale-105">
          <Image
            src={"/01.png"}
            alt="img1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            width={648}
            height={648}
          />
        </div>

        {/* Smaller Images */}
        <div className="col-span-1 transition-transform transform hover:scale-105">
          <Image
            src={"/02.png"}
            alt="img2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            width={312}
            height={312}
          />
        </div>

        <div className="col-span-1 transition-transform transform hover:scale-105">
          <Image
            src={"/03.png"}
            alt="img3"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            width={312}
            height={312}
          />
        </div>

        <div className="col-span-1 transition-transform transform hover:scale-105">
          <Image
            src={"/04.png"}
            alt="img4"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            width={312}
            height={312}
          />
        </div>

        <div className="col-span-1 transition-transform transform hover:scale-105">
          <Image
            src={"/05.png"}
            alt="img5"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            width={312}
            height={312}
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;

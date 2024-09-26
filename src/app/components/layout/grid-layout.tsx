import Image from "next/image";
import React from "react";

const GridLayout = () => {
  return (
    <div className="wrapper lg:flex ">
      <div className="flex items-center w-10 relative">
        <h2 className="font-semibold text-1xl absolute lg:-rotate-90 whitespace-pre -right-28 tracking-wide">
          Explore&nbsp;&nbsp;new&nbsp;&nbsp;and&nbsp;&nbsp;popular&nbsp;&nbsp;styles
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-2 row-span-2 ">
          <Image
            src={"/01.png"}
            alt="img1"
            className="w-full h-full"
            width={648}
            height={648}
          />
        </div>
        <div>
          <Image
            src={"/02.png"}
            alt="img1"
            className="w-full h-full"
            width={312}
            height={312}
          />
        </div>
        <div>
          <Image
            src={"/03.png"}
            alt="img1"
            className="w-full h-full"
            width={312}
            height={312}
          />
        </div>
        <div>
          <Image
            src={"/04.png"}
            alt="img1"
            className="w-full h-full"
            width={312}
            height={312}
          />
        </div>
        <div>
          <Image
            src={"/05.png"}
            alt="img1"
            className="w-full h-full"
            width={312}
            height={312}
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;

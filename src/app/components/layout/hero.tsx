import { ShoppingBag } from "lucide-react";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex justify-between items-center py-16 px-8 lg:px-20 wrapper">
      {/* Text Content */}
      <div className="max-w-lg space-y-6">
        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
          Discover Our <br /> Latest Collections
        </h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-gray-600">
          Explore and shop from a wide variety of collections from various
          renowned brands. Enjoy exclusive offers and new arrivals tailored to your style.
        </p>

        {/* CTA Button */}
        <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-500 transition-all duration-300 shadow-lg">
          <ShoppingBag className="text-white" />
          <span>Shop Now</span>
        </button>
      </div>

      {/* Hero Image */}
      <div className="hidden lg:block">
        <Image
          src="/heroImage.png"
          alt="Fashion Collection"
          width={442}
          height={562}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";

const SubSection = () => {
  return (
    <div className="wrapper bg-gray-100 py-20 px-4 rounded-lg shadow-md mb-10">
      {/* Title Section */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-black mb-2 -mt-8">
          Follow products and discounts on Instagram
        </h1>
      </div>

      {/* Images Grid Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="flex-shrink-0">
            <Image
              src={`/sub${num}.png`}
              alt="products"
              height={200}
              width={200}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Email section and submit button */}
      <h2 className="text-2xl md:text-4xl flex justify-center font-semibold mt-8 text-[#1E2832] text-center">
        Or <span className="text-blue-500 mx-2">subscribe</span> to the
        newsletter
      </h2>
      <div className="flex flex-col md:flex-row items-center mt-8 justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Email Input Box */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Email Address..."
            className="w-full md:w-auto border border-gray-300 rounded-md px-8 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <div className="w-full border-b-2 border-blue-300 mt-2"></div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            Submit
          </button>
          <div className="w-full border-b-2 border-blue-300 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
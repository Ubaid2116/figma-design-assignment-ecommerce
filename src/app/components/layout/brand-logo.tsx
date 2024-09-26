import React from "react";
import Image from "next/image";

const Brandlogo = () => {
  return (
    <div>
      <div className="wrapper max-w-screen-lg mx-auto text-center px-4">
        {/* Main Brand Logo */}
        <div className="mb-12">
          <Image
            src="/brandLogo.png"
            alt="brand logo"
            width={1320}
            height={70}
            className="mx-auto w-full max-w-5xl sm:max-w-md md:max-w-lg lg:max-w-7xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Brandlogo;

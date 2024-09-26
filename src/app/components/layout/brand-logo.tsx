import React from "react";
import Image from "next/image";

const Brandlogo = () => {
  return (
    <div>
      <div className="wrapper max-w-screen-lg mx-auto text-center px-4">
        {/* Main Brand Logo */}
        <div className="mb-16">
          <Image
            src="/brandLogo.png"
            alt="brand logo"
            width={1320}
            height={70}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Brandlogo;

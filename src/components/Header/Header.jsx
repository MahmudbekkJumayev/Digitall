// components/Header.js

import React from "react";
import Image from "next/image";
import TypedText from "@/components/TypedText/TypedText";

const Header = () => {
  return (
      <div id="header" className="py-32 md:py-40 lg:py-24 container flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col w-full md:w-1/2 gap-5  lg:max-w-none">
          <h2 className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-bold text-violet-600">Softgroup</h2>
          <h2 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold text-gray-700">
            IT-Outsourcing Company
          </h2>
          <p className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-violet-600 font-bold">
            <TypedText />
          </p>
          <div>
            <a href="#contact">
              <button
                type="button"
                className="bg-violet-600 border-none hover:bg-violet-900 px-8 py-2 rounded-md text-white text-[20px]  md:text-[25px] lg:text-[30px] font-bold"
              >
                Contact
              </button>
            </a>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 w-full md:w-1/2 lg:w-auto flex justify-center lg:justify-end">
          <Image
            src="/assets/images/Header.svg"
            width={500}
            height={500}
            alt="Header Image"
            className="w-full"
          />
        </div>
      </div>
    // </header>
  );
};

export default Header;

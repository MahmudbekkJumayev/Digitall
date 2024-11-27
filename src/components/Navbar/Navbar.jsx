"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full shadow-md bg-white z-50">
      <div className="container flex justify-between  items-center py-5">
        <div>
          <h2 className="text-[35px] font-bold text-violet-600">Softgroup</h2>
        </div>
        <div className="flex justify-between items-center gap-10">
          <ul
            className={`lg:flex gap-2 ${
              menuOpen ? "flex flex-col" : "hidden"
            } lg:flex-row lg:items-center text-[14px] md:text-[16px] font-medium list-none p-0 m-0 cursor-pointer`}
          >
            {[
              { name: "Home", href: "#header" },
              { name: "Service", href: "#service" },
              { name: "Consulting", href: "#consulting" },
              { name: "Work", href: "#work" },
            ].map((item) => (
              <li
                key={item.href}
                onClick={closeMenu}
                className="relative group p-4 cursor-pointer"
              >
                <a href={item.href}>{item.name}</a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-violet-600 transition-all duration-300"></span>
              </li>
            ))}

            <li className="relative group p-4">
              <span className="flex justify-center items-center gap-2">
                Language
                <Image width={20} height={20} src="/assets/icons/pastga.svg" alt="icon" />
              </span>
              <div className="absolute p-2 bg-white hidden group-hover:block text-black mt-1 rounded-md shadow-lg">
                {[
                  { name: "Russian", imgSrc: "ru.svg" },
                  { name: "English", imgSrc: "eng.svg" },
                ].map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center p-3 hover:bg-violet-600 hover:text-white  rounded-md cursor-pointer"
                  >
                    <Image
                      src={`/assets/images/${lang.imgSrc}`}
                      alt={lang.name}
                      width={15}
                      height={15}
                      className="mr-2"
                    />
                    {lang.name}
                  </div>
                ))}
              </div>
            </li>
          </ul>
          <div className="hidden lg:block ">
            <a href="#contact">
              <button
                type="button"
                className="bg-violet-600 border-none hover:bg-violet-900 px-4 py-2 rounded-md text-white text-[20px] font-bold"
              >
                Contact
              </button>
            </a>
          </div>
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <Image
              className={`w-[30px] h-[30px] ${menuOpen ? "hidden" : "block"}`}
              src="/assets/images/burgermenu.png"
              alt="burger menu"
              width={30}
              height={30}
            />
            <Image
              className={`w-[30px] h-[30px] ${menuOpen ? "block" : "hidden"}`}
              src="/assets/images/close.png"
              alt="close menu"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const MainContent = () => {
  return <div className="pt-[80px]"></div>;
};

const Page = () => {
  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Navbar />
      <MainContent />
    </>
  );
};

export default Page;

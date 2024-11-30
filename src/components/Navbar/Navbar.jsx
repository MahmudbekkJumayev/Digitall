"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#header" },
    { name: "Service", href: "#service" },
    { name: "Consulting", href: "#consulting" },
    { name: "Work", href: "#work" },
  ];

  return (
    <nav className="fixed w-full shadow-md bg-white z-50">
      <div className="container flex justify-between  items-center py-5">
        <div>
          <Link href="/" className="text-[35px] font-bold text-violet-600">
            <Image src="/logo.png" alt="" width={221} height={70} />
          </Link>
        </div>
        <div className="flex justify-between items-center gap-10">
          <ul
            className={`lg:flex hidden gap-2 lg:flex-row lg:items-center text-[14px] md:text-[16px] font-medium list-none p-0 m-0 cursor-pointer`}
          >
            {navLinks.map((item, i) => (
              <li
                key={i}
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
                <Image
                  width={20}
                  height={20}
                  src="/assets/icons/pastga.svg"
                  alt="icon"
                />
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

          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <Image
              className={`w-[30px] h-[30px]`}
              src="/assets/images/burgermenu.png"
              alt="burger menu"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 w-full transition-all duration-300 h-screen bg-black/25 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute top-0 right-0 w-[300px] h-full bg-white transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((item, i) => (
              <Link href={item.href} key={i} onClick={closeMenu}
              className="p-4 hover:border-b-2 border-b-2 hover:border-violet-600">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
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
    </>
  );
};

export default Page;

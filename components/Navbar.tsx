"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <header className="container relative mx-auto p-6">
      {/* Flex container for nav items */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* Logo */}
        <div className="z-30">
          <Image
            width={148}
            height={25}
            alt="Bookmark logo"
            src={"/images/logo-bookmark.svg"}
          />
        </div>
        {/* Menu items */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex ">
          <Link
            href={"#features"}
            className="tracking-widest hover:text-softRed transition"
          >
            Features
          </Link>
          <Link
            href={"#download"}
            className="tracking-widest hover:text-softRed transition"
          >
            Download
          </Link>
          <Link
            href={"#faq"}
            className="tracking-widest hover:text-softRed transition"
          >
            FAQ
          </Link>

          <Link
            href={"#"}
            className="px-8 py-2 text-white bg-softRed transition border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
          >
            Login
          </Link>
        </div>
        {/* Hamburger button */}
        {/* Mobile */}

        <div
          onClick={() => setClicked((state) => !state)}
          className={`z-30 md:hidden focus:outline-none hamburger transition duration-300 ease ${
            clicked && "open"
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>
      </div>

      <div
        id="menu"
        className={`fixed inset-0 z-20  flex-col items-center self-end w-full h-full max-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue ${
          !clicked && "hidden"
        }`}
      >
        <div className="w-full py-3 text-center">
          <Link href={"#features"} className="block hover:text-softRed">
            Features
          </Link>
        </div>

        <div className="w-full py-3 text-center">
          <Link href={"#download"} className="block hover:text-softRed">
            Download
          </Link>
        </div>

        <div className="w-full py-3 text-center">
          <Link href={"#faq"} className="block hover:text-softRed">
            FAQ
          </Link>
        </div>
      </div>
    </header>
  );
}

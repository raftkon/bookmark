import Link from "next/link";
import React from "react";

export default function MenuItems() {
  return (
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
  );
}

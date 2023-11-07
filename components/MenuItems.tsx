import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

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
        className={buttonVariants({
          variant: "login",
        })}
      >
        Login
      </Link>
    </div>
  );
}

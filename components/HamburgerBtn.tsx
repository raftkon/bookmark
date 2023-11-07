"use client";
import { useState } from "react";
import Link from "next/link";
type HamburgerBtnProps = {
  clicked: boolean;
  handleClick: () => void;
};
export default function HamburgerBtn({
  clicked,
  handleClick,
}: HamburgerBtnProps) {
  return (
    <button
      onClick={handleClick}
      className={`z-30 md:hidden focus:outline-none hamburger transition duration-300 ease ${
        clicked && "open"
      }`}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}

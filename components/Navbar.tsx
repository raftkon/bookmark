"use client";
import { useState } from "react";

import Image from "next/image";
import MobileMenu from "./MobileMenu";
import HamburgerBtn from "./HamburgerBtn";
import MenuItems from "./MenuItems";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((state) => !state);
  };
  return (
    <header className="container mx-auto p-6">
      {/* Flex container for nav items */}
      <div className="flex items-center justify-between my-6">
        {/* Logo */}
        <div className="z-30">
          <Image
            width={148}
            height={25}
            alt="Bookmark logo"
            src={`${
              clicked
                ? "/images/logo-bookmark-footer.svg"
                : "/images/logo-bookmark.svg"
            }`}
          />
        </div>
        {/* Menu items */}
        <MenuItems />
        {/* Hamburger button */}
        <HamburgerBtn clicked={clicked} handleClick={handleClick} />
      </div>
      {/* Mobile */}
      <MobileMenu clicked={clicked} />
    </header>
  );
}

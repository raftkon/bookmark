import React from "react";
import Link from "next/link";

type MobileMenuProps = {
  clicked: boolean;
};

export default function MobileMenu({ clicked }: MobileMenuProps) {
  return (
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
  );
}

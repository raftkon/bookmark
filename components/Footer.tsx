import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-16 bg-veryDarkBlue">
      <div className="container flex flex-col items-center justify-between max-auto space-y-16 px-6 md:flex-row md:space-y-0">
        {/* Logo/Menu */}
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
          <Image
            src={"/images/logo-bookmark-footer.svg"}
            width={148}
            height={25}
            alt="Bookmark footer logo"
            className="mb-1"
          />
          <Link href={"#features"} className="uppercase hover:text-softRed">
            features
          </Link>
          <Link href={"#download"} className="uppercase hover:text-softRed">
            download
          </Link>
          <Link href={"#faq"} className="uppercase hover:text-softRed">
            faq
          </Link>
        </div>

        {/* Social container  */}
        <div className="flex space-x-10">
          <Link href={"#"}>
            <Image
              alt="facebook logo"
              src={"/images/icon-facebook.svg"}
              width={24}
              height={24}
              className="ficon"
            />
          </Link>
          <Link href={"#"}>
            <Image
              alt="twitter logo"
              src={"/images/icon-twitter.svg"}
              width={24}
              height={24}
              className="ficon"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

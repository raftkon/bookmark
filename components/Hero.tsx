import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section id="hero">
      {/* Container for Image & Content */}
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
        {/* Content */}
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          {/* Buttons container */}
          <div className="flex justify-center space-x-4 w-full lg:justify-start">
            <Button className="shadow-md font-semibold border-softBlue border-2 bg-softBlue p-5 py-8 text-sm md:text-base hover:bg-white hover:text-softBlue transition">
              Get it on Chrome
            </Button>

            <Button className="shadow-md font-semibold border-gray-300 border-2 bg-gray-300 p-5 py-8 text-sm md:text-base text-black hover:text-gray-600 transition hover:bg-white">
              Get it on Firefox
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero" />
          <Image
            src={"/images/illustration-hero.svg"}
            width={657}
            height={466}
            alt="illustration features"
            className="relative z-10 lg:top-24 xl:top-0 "
          />
        </div>
      </div>
    </section>
  );
}

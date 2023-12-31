import Image from "next/image";
import React from "react";
import { boxes } from "@/data";
import { Button } from "./ui/button";

export default function Download() {
  return (
    <>
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            We&apos;ve got more browsers in the pipeline. Please do let us know
            if you&apos;ve got a favourite you&apos;d like us to prioritize.
          </p>
        </div>
      </section>
      <section id="download-boxes" className="py-32">
        {/* Boxes Container */}
        <div className="relative flex flex-col md:flex-row items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7">
          {/* Box */}
          {boxes.map((box, idx) => (
            <div key={idx} className={`w-full md:w-1/3`}>
              <div
                className={`flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg   `}
                style={{
                  marginTop: box.class,
                }}
              >
                {/* Image */}
                <div className="flex justify-center">
                  <Image
                    width={box.width}
                    height={100}
                    alt={box.alt}
                    src={box.url}
                    className="w-auto"
                  />
                </div>
                <h5 className="text-xl font-bold pt-6">{box.text}</h5>
                <p className="text-gray-400">{box.details}</p>
                <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                  <Button className=" w-full py-6 text-base font-normal transition border-2 bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                    Add & Install Extension
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

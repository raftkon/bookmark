"use client";
import Image from "next/image";
import { useState } from "react";

const config = [
  { title: "Simple Bookmarking", key: 0 },
  { title: "Speedy Searching", key: 1 },
  { title: "Easy Sharing", key: 2 },
];
const panels = [
  {
    url: "/images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how your favourite sites.",
    key: 0,
  },
  {
    url: "/images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    key: 1,
  },
  {
    url: "/images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
    key: 2,
  },
];
export default function Tabs() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="tabs">
      <div className="container relative mx-auto mb-32 mt-12 px-6">
        <div className="bg-tabs" />
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {config.map(({ title, key }) => (
            <div
              onClick={() => setSelected(key)}
              key={key}
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed tab transition"
            >
              <div
                className={`py-5 ${
                  selected === key && "border-b-4"
                } border-softRed`}
              >
                {title}
              </div>
            </div>
          ))}
        </div>
        {/* Tab panels */}
        <div id="panels" className="container mx-auto">
          {/* Panel 1 */}
          {panels.map((panel) => (
            <div
              key={panel.key}
              className={`${
                selected === panel.key ? "flex" : "hidden"
              } flex-col py-5 md:flex-row md:space-x-7`}
            >
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <Image
                  src={panel.url}
                  width={536}
                  height={346}
                  alt="illustration panel"
                  className="relative z-10"
                />
              </div>
              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  {panel.title}
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  {panel.content}
                </p>
                <div className="mx-auto md:mx-0">
                  <button className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 transition">
                    More info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

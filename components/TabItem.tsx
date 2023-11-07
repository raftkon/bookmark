import Image from "next/image";
import React from "react";
type Panel = {
  url: string;
  title: string;
  content: string;
  id: number;
};

type TabItemProps = {
  panel: Panel;
  selected: number;
};
export default function TabItem({ panel, selected }: TabItemProps) {
  return (
    <div
      className={`${
        selected === panel.id ? "flex" : "hidden"
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
  );
}

import React from "react";

type FAQItemProps = {
  title: string;
  tabIndex: number;
};

export default function FAQItem({ title, tabIndex }: FAQItemProps) {
  return (
    <div className="py-1 border-b outline-none group" tabIndex={tabIndex}>
      <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
        {/* title */}
        <div className="transition duration-500 easy group-hover:text-red-500">
          {title}
        </div>
        <div className="rotate-90 transition duration-500 ease group-focus:-rotate-0 group-focus:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </div>
      {/* Tab inner content */}
      <div className="overflow-hidden transition duration-500 group-focus:h-full h-0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
        recusandae repellendus, autem illum ex officia est magnam, error totam
        vel nesciunt eaque. Velit dolorem impedit itaque maxime aspernatur id
        ullam.
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
const accordionTabs = [];
export default function Accordion() {
  return (
    <section id="faq-accordion">
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-2xl m-8 mx-auto overflow-hidden">
          {/* tab */}
          <div className="py-1 border-b outline-none group" tabIndex={1}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              {/* title */}
              <div className="transition duration-500 easy group-hover:text-red-500">
                What is Bookmark?
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
              recusandae repellendus, autem illum ex officia est magnam, error
              totam vel nesciunt eaque. Velit dolorem impedit itaque maxime
              aspernatur id ullam.
            </div>
          </div>
          {/* tab */}
          <div className="py-1 border-b outline-none group" tabIndex={2}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              {/* title */}
              <div className="transition duration-500 easy group-hover:text-red-500">
                How can I request a new browser?
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
              recusandae repellendus, autem illum ex officia est magnam, error
              totam vel nesciunt eaque. Velit dolorem impedit itaque maxime
              aspernatur id ullam.
            </div>
          </div>
          {/* tab */}
          <div className="py-1 border-b outline-none group" tabIndex={3}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              {/* title */}
              <div className="transition duration-500 easy group-hover:text-red-500">
                Is this a mobile app?
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
              recusandae repellendus, autem illum ex officia est magnam, error
              totam vel nesciunt eaque. Velit dolorem impedit itaque maxime
              aspernatur id ullam.
            </div>
          </div>
          {/* tab */}
          <div className="py-1 border-b outline-none group" tabIndex={3}>
            <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
              {/* title */}
              <div className="transition duration-500 easy group-hover:text-red-500">
                What about other Chronium Browsers?
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
              recusandae repellendus, autem illum ex officia est magnam, error
              totam vel nesciunt eaque. Velit dolorem impedit itaque maxime
              aspernatur id ullam.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

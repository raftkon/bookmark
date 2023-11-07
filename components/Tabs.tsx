"use client";
import { useState } from "react";
import { panels, tabs } from "@/data";
import TabItem from "./TabItem";

export default function Tabs() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="tabs">
      <div className="container relative mx-auto mb-32 mt-12 px-6">
        <div className="bg-tabs" />
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {tabs.map(({ title, key }) => (
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
            <TabItem panel={panel} key={panel.id} selected={selected} />
          ))}
        </div>
      </div>
    </section>
  );
}

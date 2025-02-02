"use client"

import Image from "next/image";
import Line1 from "@/assets/icons/easy-banking/Line1.svg";
import Line2 from "@/assets/icons/easy-banking/Line2.svg";
import Line3 from "@/assets/icons/easy-banking/Line3.svg";
import Line4 from "@/assets/icons/easy-banking/Line4.svg";
import Card1 from "@/assets/icons/card_1.svg";
import Card2 from "@/assets/icons/card_2.avif";
import Card3 from "@/assets/icons/card_3.svg";
import Bridge from "@/assets/icons/easy-banking/Bridge.svg";
import { useEffect } from "react";
import AOS from "aos";

const diagramData = {
  coreTech: {
    label: "CORE TECH",
    title: "Artificial Intelligence",
    description:
      "Using AI/ML to upgrade legacy processes, reduce cost, and improve efficiency",
    color: "text-[#1F80F0]",
  },
  mechanism: {
    label: "MECHANISM",
    title: "Blockchain",
    description: "Enhanced security by eliminating intermediaries",
    color: "text-orange-500",
  },
  infrastructure: {
    label: "INFRASTRUCTURE",
    title: "Cloud",
    description: "Scale resources easily on-demand",
    color: "text-cyan-400",
  },
  resource: {
    label: "RESOURCE",
    title: "Data",
    description: "Valuable, actionable insights from mass data sources",
    color: "text-yellow-500",
  },
};

const featuresData = [
  {
    icon: Card1,
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    bgColor: "bg-blue-50",
  },
  {
    icon: Card2,
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Card3,
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    bgColor: "bg-pink-50",
  },
];

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="px-4 py-8 md:py-16 md:px-40">
      {/* Philosophy Header */}
      <div className="text-center mb-8 md:mb-24">
        <p className="text-[#1F80F0] text-lg font-bold tracking-wide mb-4">
          OUR PHILOSOPHY
        </p>
        <h1 className="text-3xl md:text-6xl font-semibold text-[#1a2b6b]">
          Human-centred innovation
        </h1>
      </div>

      {/* Technology Diagram - Mobile First Approach */}
      <div className="relative mb-8 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
        {/* AI Box */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 md:px-12 bg-gradient-to-r from-[#E3F3FF] to-[#FAFAFA] col-span-1 rounded-2xl z-20 py-8">
          <div className="w-full md:w-auto rounded-xl drop-shadow-xl shadow-[#E3F3FF] px-6 md:px-10 py-3 mt-8 md:mt-16 bg-white text-center">
            <p
              className={`${diagramData.coreTech.color} text-sm font-semibold mb-2`}
            >
              {diagramData.coreTech.label}
            </p>
            <h3 className="text-[#1a2b6b] text-xl md:text-2xl font-semibold mb-2">
              {diagramData.coreTech.title}
            </h3>
          </div>
          <p className="text-gray-500 text-xs text-center leading-relaxed px-2 md:px-6">
            {diagramData.coreTech.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-4 md:px-12 py-8 bg-gradient-to-l from-[#E9F6FF] to-[#FAFAFA] col-span-1 md:col-span-2 rounded-2xl">
          {/* Blockchain Box */}
          <div className="w-full md:w-[220px] flex flex-col items-center justify-center gap-4 rounded-2xl z-50">
            <div className="w-full rounded-xl drop-shadow-xl shadow-[#E3F3FF] p-4 md:p-6 mt-4 md:mt-12 bg-white text-center">
              <p
                className={`${diagramData.mechanism.color} text-sm font-medium mb-2`}
              >
                {diagramData.mechanism.label}
              </p>
              <h3 className="text-[#1a2b6b] text-xl font-bold">
                {diagramData.mechanism.title}
              </h3>
            </div>
            <p className="text-gray-500 text-xs text-left leading-relaxed">
              {diagramData.mechanism.description}
            </p>
          </div>

          <div className="flex flex-col items-center justify-end gap-8 md:gap-32 w-full md:w-auto">
            {/* Cloud Box */}
            <div className="w-full md:w-[360px] flex flex-col md:flex-row items-center justify-center gap-4 rounded-2xl z-20">
              <div className="w-full bg-white rounded-xl drop-shadow-xl shadow-[#E3F3FF] p-4 md:p-6 text-center">
                <p
                  className={`${diagramData.infrastructure.color} text-sm font-medium mb-2`}
                >
                  {diagramData.infrastructure.label}
                </p>
                <h3 className="text-[#1a2b6b] text-xl font-bold">
                  {diagramData.infrastructure.title}
                </h3>
              </div>
              <p className="text-gray-500 text-xs text-center md:text-left leading-relaxed">
                {diagramData.infrastructure.description}
              </p>
            </div>

            {/* Data Box */}
            <div className="w-full md:w-[360px] flex flex-col md:flex-row items-center justify-center gap-4 rounded-2xl z-20">
              <div className="w-full bg-white rounded-xl drop-shadow-xl shadow-[#E3F3FF] p-4 md:p-6 text-center">
                <p
                  className={`${diagramData.resource.color} text-sm font-medium mb-2`}
                >
                  {diagramData.resource.label}
                </p>
                <h3 className="text-[#1a2b6b] text-xl font-bold">
                  {diagramData.resource.title}
                </h3>
              </div>
              <p className="text-gray-500 text-xs text-center md:text-left leading-relaxed">
                {diagramData.resource.description}
              </p>
            </div>
          </div>
        </div>

        {/* Connection Lines - Only visible on desktop */}
        <div className="hidden md:block">
          <Image
            src={Line1}
            alt=""
            className="absolute left-[31.8%] rotate-90 top-40 z-30"
          />
          <Image
            src={Line2}
            alt=""
            className="absolute right-[35%] -rotate-90 top-52 z-30"
          />
          <Image
            src={Line3}
            alt=""
            className="absolute right-[35%] -rotate-90 top-16 z-30"
          />
          <Image
            src={Line4}
            alt=""
            className="absolute right-[20%] rotate-90 top-48 z-30"
          />
          <Image
            src={Bridge}
            alt=""
            className="absolute left-[32.6%] -translate-x-1/2 rotate-90 top-40 z-10"
          />
        </div>
      </div>

      {/* Three Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-[#F8FCFF] p-8 rounded-3xl"
          >
            <div className="mb-6">
              <div
                className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center`}
              >
                <Image src={feature.icon} alt={`card ${index + 1}`} />
              </div>
            </div>
            <h3 className="text-[#1a2b6b] text-xl md:text-2xl font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-800 pr-10 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;

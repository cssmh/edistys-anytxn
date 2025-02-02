"use client";

import { useState } from "react";
import Image from "next/image";
import WaveLinesDesktop1 from "@/assets/backgrounds/WaveLinesDesktop1.svg";
import WaveLinesDesktop2 from "@/assets/backgrounds/WaveLinesDesktop2.svg";
import WaveLinesDesktop3 from "@/assets/backgrounds/WaveLinesDesktop3.svg";
import WaveLinesDesktop4 from "@/assets/backgrounds/WaveLinesDesktop4.svg";
import banner_people from "@/assets/backgrounds/banner_people.avif";
import chevronRightWhite from "@/assets/icons/ChevronRightWhite.svg";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[650px] overflow-hidden bg-[#0053be] pt-[9rem] md:pt-0 animate-bg-move"
      style={{
        clipPath: "polygon(0% 0%, 100% 0, 100% 80%, 0% 100%)",
      }}
    >
      <div className="absolute inset-0">
        <Image
          src={WaveLinesDesktop1}
          alt="Wave pattern 1"
          className="absolute top-0 left-0 w-full h-full object-cover moving-bg "
          priority
        />
        <Image
          src={WaveLinesDesktop2}
          alt="Wave pattern 2"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 moving-bg"
        />
        <Image
          src={WaveLinesDesktop3}
          alt="Wave pattern 3"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 moving-bg"
        />
        <Image
          src={WaveLinesDesktop4}
          alt="Wave pattern 4"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 moving-bg"
        />
      </div>
      {/* Upper section color overlay for navbar visibility */}
      <div
        className="hidden  md:block absolute inset-x-0 top-0 left-1/2 h-64 bg-[#0053be] z-30"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28, 136, 239, 1), rgba(28, 136, 239, 0))",
        }}
      />
      <div className="relative h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row h-full items-center md:pl-24">
          <div className="w-full md:w-1/2 text-white space-y-6 z-20">
            <h1 className="text-[50px] md:text-7xl font-bold leading-tight">
              Embrace the
              <br />
              future of finance
            </h1>
            <p className="text-lg font-semibold opacity-90 max-w-[600px] mt-4">
              Reimagine financial services with AnyTech&apos;s open platform,
              distributed banking solution that powers transformation
            </p>
            <div className="w-full">
              <button
                className="bg-[#FE8B53] w-full md:w-[40%] hover:bg-[#ff8d74] text-white px-8 py-3 rounded text-lg transition-all duration-200 flex items-center justify-center gap-2 font-semibold mt-10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Reach Out to Us
                <Image
                  src={chevronRightWhite}
                  alt="chevron right"
                  className={`h-3.5 w-3.5 mt-1 transition-all duration-300 ${
                    isHovered ? "translate-x-1.5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full overflow-hidden">
            {/* Diagonal gradient overlay */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to right, #0053be 30%, transparent 70%)",
              }}
            />
            <div className="absolute inset-0 z-20">
              <div className="relative w-full h-full">
                <Image
                  src={banner_people}
                  alt="Professional in business setting"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: "right center",
                    clipPath: "polygon(70% 0, 100% 0, 100% 80%, 0% 100%)",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

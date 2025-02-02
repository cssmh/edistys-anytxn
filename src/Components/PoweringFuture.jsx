"use client";

import Image from "next/image";
import sub_banner_people from "@/assets/backgrounds/banner_people_2.webp";
import sub_banner_icon_1 from "@/assets/icons/sub_banner_icon_1.svg";
import sub_banner_icon_2 from "@/assets/icons/sub_banner_icon_2.svg";
import sub_banner_icon_3 from "@/assets/icons/sub_banner_icon_3.svg";
import bg_line_1 from "@/assets/frames/story/2.svg";
import bg_line_2 from "@/assets/frames/story/3.svg";

const PoweringFuture = () => {
  return (
    <div
      className="relative w-full py-16 px-5 max-w-[1190px] mx-auto overflow-hidden"
      style={{ clipPath: "polygon(0% 0%, 100% 0, 100% 80%, 0% 100%)" }}
    >
      <Image
        src={bg_line_2}
        alt="Background Line 2"
        className="hidden md:block absolute -top-10 rotate-180 right-[17%] w-auto opacity-40"
      />
      <Image
        src={bg_line_1}
        alt="Background Line 1"
        className="hidden md:block absolute bottom-1/3 right-[12%] w-auto h-auto z-30 opacity-70"
      />
      <div className="flex flex-col items-center md:flex-row md:space-x-16">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-[#1C88EF] font-bold tracking-wider uppercase">
            Powering the Future of Finance
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Uncovering new ways to delight customers
          </h2>
          <div className="w-full flex justify-center md:hidden my-5">
            <Image
              src={sub_banner_people}
              alt="Professional Working"
              className="w-80 h-auto object-cover shadow-xl"
            />
          </div>
          <p className="text-lg text-gray-700 font-bold">
            AnyTech is revolutionizing financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-lg text-gray-700">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
        <div className="hidden md:block relative w-full md:w-1/2 mt-10 md:mt-0">
          <div className="relative mx-auto md:mx-0 w-[24rem] h-[26rem] md:w-[28rem] md:h-[30rem] overflow-hidden shadow-xl">
            <Image
              src={sub_banner_people}
              alt="Professional Working"
              className="w-full h-full object-cover z-20"
            />
          </div>
          <div className="absolute top-20 -left-2 sm:-left-10 rounded-full shadow-lg">
            <Image
              src={sub_banner_icon_1}
              alt="Icon 1"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
          <div className="absolute top-48 left-10 sm:left-14 rounded-full shadow-lg">
            <Image
              src={sub_banner_icon_2}
              alt="Icon 2"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
          <div className="absolute top-10 right-[0rem] sm:right-[3rem] rounded-full shadow-lg">
            <Image
              src={sub_banner_icon_3}
              alt="Icon 3"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweringFuture;

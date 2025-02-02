"use client";

import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import img1 from "@/assets/backgrounds/WaveLinesDesktop1.svg";
import img2 from "@/assets/backgrounds/WaveLinesDesktop2.svg";
import img3 from "@/assets/backgrounds/WaveLinesDesktop3.svg";
import img4 from "@/assets/backgrounds/WaveLinesDesktop4.svg";
import Image from "next/image";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={`relative h-[500px] w-full overflow-hidden ${
        animate ? "animate-bg-move" : ""
      }`}
      onMouseEnter={() => setAnimate(true)}
    >
      <div className="absolute inset-0 clip-left-to-middle bg-[#015dc6]">
        <Image
          src={img1}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-20 left-10 w-full opacity-30 moving-bg"
        />
        <Image
          src={img2}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-20 left-10 w-full opacity-30 moving-bg"
        />
        <Image
          src={img3}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-20 left-10 w-full opacity-30 moving-bg"
        />
        <Image
          src={img4}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-20 left-10 w-full opacity-30 moving-bg"
        />
        <Image
          src={img1}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-10 left-0 w-full opacity-70 moving-bg"
        />
        <Image
          src={img2}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-10 left-20 w-full opacity-70 moving-bg"
        />
        <Image
          src={img3}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-10 left-12 w-full opacity-70 moving-bg"
        />
        <Image
          src={img4}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-10 left-5 w-full opacity-70 moving-bg"
        />
        <Image
          src={img1}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-5 left-0 w-full opacity-10 moving-bg"
        />
        <Image
          src={img2}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-5 left-2 w-full opacity-10 moving-bg"
        />
        <Image
          src={img3}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-5 left-3 w-full opacity-10 moving-bg"
        />
        <Image
          src={img4}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-5 left-4 w-full opacity-10 moving-bg"
        />
        <Image
          src={img1}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-5 -left-20 w-full opacity-30 moving-bg"
        />
        <Image
          src={img2}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-5 -left-24 w-full opacity-70 moving-bg"
        />
        <Image
          src={img3}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-5 -left-32 w-full opacity-50 moving-bg"
        />
        <Image
          src={img4}
          alt="'image not found"
          height={100}
          width={200}
          className="absolute top-5 -left-40 w-full opacity-60 moving-bg"
        />
      </div>
      <div className="max-w-6xl mt-3 mx-auto h-full flex items-center relative z-10">
        <div className="space-y-5 p-5 lg:p-0">
          <h2 className=" text-3xl md:text-5xl lg:text-6xl text-white font-medium">
            Legacy no longer
          </h2>
          <p className="text-white">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <button
            className="bg-[#FE8853] text-white hover:bg-[#ee7d48] cursor-pointer 
                max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link 
                lg:text-link flex items-center group transition-all drop-shadow-[#002045] 
                hover:shadow-[#002045] rounded-xs text-xl font-bold rounded-sm gap-1"
          >
            Contact Us
            <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

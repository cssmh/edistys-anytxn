"use client";

import choose_1 from "@/assets/frames/choose_1.webp";
import choose_2 from "@/assets/frames/choose_2.avif";
import choose_3 from "@/assets/frames/choose_3.avif";
import choose_4 from "@/assets/frames/choose_4.jpg";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import FinanceCard from "./FinanceCard";

const chooseData = [
  {
    id: 1,
    title: "Customer focused",
    category: "CUSTOMER FOCUSED",
    heading: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    subDescription:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image: choose_1,
  },
  {
    id: 2,
    title: "Agile and adaptable",
    category: "AGILE AND ADAPTABLE",
    heading: "Agile and adaptable for growth",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    subDescription:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: choose_2,
  },
  {
    id: 3,
    title: "Compliance ready",
    category: "COMPLIANCE READY",
    heading: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    subDescription:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image: choose_3,
  },
  {
    id: 4,
    title: "Secure and safe",
    category: "SECURE AND SAFE",
    heading: "Highly secure and safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    subDescription:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image: choose_4,
  },
];

const FutureFinance = () => {
  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="py-20 px-4 md:px-24 overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-[#1F80F0] font-semibold text-lg mb-4">
          TECHNOLOGY BUILT FOR YOU
        </h3>
        <h2 className="text-4xl md:text-6xl font-semibold text-navy-900 mb-8">
          The future of finance
        </h2>
      </div>
      <div className="flex justify-center gap-8 mb-8">
        {chooseData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className="px-12 py-2.5 text-lg text-[#1F80F0] font-bold rounded-full transition-all duration-300 bg-[#B9D9FF]"
          >
            {item.title}
          </button>
        ))}
      </div>
      <Swiper
        modules={[Navigation]}
        className="mySwiper shadow-lg"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {chooseData.map((item, index) => (
          <SwiperSlide key={index}>
            <FinanceCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <svg
        className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FutureFinance;

"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import company_1 from "@/assets/frames/company_1.webp";
import company_2 from "@/assets/frames/company_2.webp";
import company_3 from "@/assets/frames/company_3.webp";
import company_4 from "@/assets/frames/company_4.webp";
import company_5 from "@/assets/frames/company_5.webp";
import company_6 from "@/assets/frames/company_6.webp";
import company_7 from "@/assets/frames/company_7.webp";
import company_8 from "@/assets/frames/company_8.webp";
import company_9 from "@/assets/frames/company_9.webp";
import company_10 from "@/assets/frames/company_10.webp";
import company_11 from "@/assets/frames/company_11.webp";
import company_12 from "@/assets/frames/company_12.webp";
import company_13 from "@/assets/frames/company_13.webp";
import company_14 from "@/assets/frames/company_14.webp";
import company_15 from "@/assets/frames/company_15.webp";

const Companies = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { value: 20, prefix: ">", suffix: "", label: "Years of Experience" },
    { value: 40, prefix: "", suffix: "+", label: "Financial Institutions" },
    { value: 200, prefix: ">", suffix: "m", label: "Customers Each" },
  ];

  const companies = [
    { src: company_1, alt: "Bank of Chengde" },
    { src: company_2, alt: "Bank of China" },
    { src: company_3, alt: "Bank of Shanghai" },
    { src: company_4, alt: "CGB Bank" },
    { src: company_5, alt: "China CITIC Bank" },
    { src: company_6, alt: "OneBank" },
    { src: company_7, alt: "Ping An Bank" },
    { src: company_8, alt: "Postal Savings Bank of China" },
    { src: company_9, alt: "Sea" },
    { src: company_10, alt: "Shandong City Commercial Banks Alliance" },
    { src: company_11, alt: "VIPshop Consumer Finance" },
    { src: company_12, alt: "Xiamen International Bank" },
    { src: company_13, alt: "XW Bank" },
    { src: company_14, alt: "SPD Bank" },
    { src: company_15, alt: "Card Centre" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6" ref={ref}>
      <h2 className="text-center text-xl font-bold text-[#1F80F0] mb-8">
        TRUSTED BY THE BEST
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 md:mb-24">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center md:block flex items-center justify-between px-4 sm:px-0 border-b md:border-b-0 border-dashed pb-4 border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-6xl md:text-8xl font-bold text-[#1F80F0] md:mb-6">
              {stat.prefix}
              {inView && (
                <CountUp end={stat.value} duration={2.5} separator="," />
              )}
              {stat.suffix}
            </div>
            <div className="text-gray-600 text-lg ml-4 md:ml-0">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Companies Grid */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 md:flex-shrink flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={company.src}
                alt={company.alt}
                className="max-h-60 w-60 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Companies;

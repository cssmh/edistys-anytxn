"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Globe, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "@/src/assets/icons/logo.svg";
import logo2 from "@/src/assets/icons/logo_2.svg";
import chevronRightWhite from "@/src/assets/icons/ChevronRightWhite.svg";
import chevronRight from "@/src/assets/icons/ChevronRight.svg";
import Image from "next/image";

interface NavigationItem {
  href: string;
  label: string;
  showBorder: boolean;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

interface Language {
  code: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: "EN",
    label: "EN (English)",
  });

  const languageRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  const solutions = [
    { label: "AnyCaaS", href: "/solutions/src/anycaas" },
    { label: "AnyBaaS", href: "/solutions/src/anybaas" },
    { label: "AnyPaaS", href: "/solutions/src/anypaas" },
  ];

  const languages = [
    { code: "EN", label: "EN (English)" },
    { code: "TH", label: "TH (Thai)" },
    { code: "ID", label: "ID (Bahasa Indonesia)" },
    { code: "TW", label: "TW (Traditional Chinese)" },
  ];

  const navigationData: NavigationItem[] = [
    {
      href: "/solutions",
      label: "Solutions",
      showBorder: false,
      hasDropdown: true,
      dropdownItems: solutions,
    },
    { href: "/services", label: "Services", showBorder: true },
    { href: "/src/about", label: "About Us", showBorder: true },
  ];

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      languageRef.current &&
      !languageRef.current.contains(event.target as Node)
    ) {
      setIsLanguageOpen(false);
    }
    if (
      solutionsRef.current &&
      !solutionsRef.current.contains(event.target as Node)
    ) {
      setIsSolutionsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 50);
        setShow(window.scrollY <= lastScrollY);
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const linkStyle = (isDropdown = false): React.CSSProperties => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    color: isScrolled ? "#1D86F0" : "white",
    padding: 0,
    margin: 0,
    cursor: isDropdown ? "pointer" : "default",
  });

  const borderStyle = (index: number): React.CSSProperties => ({
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -8,
    height:
      hoveredIndex === index && navigationData[index].showBorder
        ? "2px"
        : "0px",
    backgroundColor: isScrolled ? "#1D86F0" : "white",
    transition: "height 0.2s ease-in-out",
  });

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50
            ${show ? "top-0" : "-top-24"} 
            ${
              isScrolled
                ? "bg-white shadow-md"
                : "bg-[#1B76E9] md:bg-transparent"
            }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[5.8rem]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={isScrolled ? logo2 : logo}
                alt="logo"
                priority
                className="h-7 md:h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-12 text-lg">
            {navigationData.map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={item.hasDropdown ? solutionsRef : null}
                onMouseEnter={() => item.showBorder && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex items-center gap-2"
                      style={linkStyle(true)}
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    >
                      {item.label}
                      {isSolutionsOpen ? (
                        <ChevronUp className="transition-transform" size={16} />
                      ) : (
                        <ChevronDown
                          className="transition-transform"
                          size={16}
                        />
                      )}
                    </button>
                    {isSolutionsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                        {item.dropdownItems.map((dropItem, dropIndex) => (
                          <Link
                            key={dropIndex}
                            href={dropItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} style={linkStyle()}>
                    {item.label}
                  </Link>
                )}
                <div style={borderStyle(index)} />
              </div>
            ))}

            {/* Language Selector */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-2 px-3 py-2 ${
                  isScrolled
                    ? "text-[#1D86F0] border-[#1D86F0]"
                    : "text-white border-white"
                } rounded-3xl border transition-colors duration-200`}
              >
                <Globe size={18} />
                <span>{selectedLanguage.code}</span>
                {isLanguageOpen ? (
                  <ChevronUp className="transition-transform" size={16} />
                ) : (
                  <ChevronDown className="transition-transform" size={16} />
                )}
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {languages.map((lang, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setIsLanguageOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex justify-end">
            <Link
              href="/contact"
              className={`flex items-center gap-2.5 border text-xl text-white px-8 py-2.5 font-semibold rounded transition-all duration-200 ${
                isScrolled
                  ? "bg-[#FE8B53] border-[#FE8B53]"
                  : "hover:bg-white hover:text-blue-600 hover:shadow-lg"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Contact Us
              <Image
                src={
                  isHovered && !isScrolled ? chevronRight : chevronRightWhite
                }
                alt="chevron right"
                className={`h-3.5 w-3.5 mt-1 transition-all duration-300 ${
                  isHovered ? "translate-x-1.5" : "translate-x-0"
                }`}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? "text-gray-600" : "text-white"} p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden bg-[#1B76E9]`}
      >
        <div className="p-4 space-y-6">
          {navigationData.map((item, index) => (
            <div key={index}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="w-full text-left px-3 py-2 text-white flex items-center justify-between"
                  >
                    {item.label}
                    {isSolutionsOpen ? (
                      <ChevronUp className="transition-transform" size={16} />
                    ) : (
                      <ChevronDown className="transition-transform" size={16} />
                    )}
                  </button>
                  <div
                    className={`transition-all duration-200 ${
                      isSolutionsOpen ? "max-h-48" : "max-h-0"
                    } overflow-hidden`}
                  >
                    {item.dropdownItems.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        href={dropItem.href}
                        className="block pl-6 py-2 text-white"
                        onClick={() => {
                          setIsSolutionsOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Language Selector */}
          <div className="px-3 py-2">
            <select
              className="bg-transparent text-white cursor-pointer w-full"
              value={selectedLanguage.code}
              onChange={(e) => {
                const selected = languages.find(
                  (lang) => lang.code === e.target.value
                );
                setSelectedLanguage(selected || languages[0]);
              }}
            >
              {languages.map((lang, index) => (
                <option key={index} value={lang.code} className="text-blue-600">
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Contact Button */}
          <div className="px-3 py-2 mt-6">
            <Link
              href="/contact"
              className={`flex items-center justify-center gap-2.5 border text-lg text-white px-8 py-2.5 font-semibold rounded transition-all duration-200 ${
                isScrolled
                  ? "bg-[#FE8B53] border-[#FE8B53]"
                  : "hover:bg-white hover:text-blue-600 hover:shadow-lg"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Contact Us
              <Image
                src={
                  isHovered && !isScrolled ? chevronRight : chevronRightWhite
                }
                alt="chevron right"
                className={`h-3.5 w-3.5 mt-1 transition-all duration-300 ${
                  isHovered ? "translate-x-1.5" : "translate-x-0"
                }`}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

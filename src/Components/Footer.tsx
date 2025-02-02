import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const footerData = {
  companyName: "Any Technology Pte Ltd.",
  copyrightYear: "2023",
  links: [
    { name: "Our Solutions", url: "#" },
    { name: "AnyCaaS", url: "#" },
    { name: "AnyBaaS", url: "#" },
    { name: "AnyPaaS", url: "#" },
    { name: "Privacy Policy", url: "#" },
  ],
};

const Footer = () => {
  return (
    <div className="bg-[#002045]">
      <footer className="text-white text-sm divide-y-2 divide-[#0A2A5C]">
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="flex justify-between w-full items-center">
            <Image src={logo} alt="AnyTech Logo" className="h-10" />
            <div className="flex items-center gap-5 lg:hidden">
              <FaLinkedin className="text-3xl cursor-pointer text-[#1e80f1]" />
              <FaPhone className="text-3xl cursor-pointer text-[#1e80f1]" />
              <FaEnvelope className="text-3xl cursor-pointer text-[#1e80f1]" />
            </div>
          </div>
          <nav className="hidden lg:flex space-x-4 text-[#00D1D7]">
            {footerData.links.slice(0, 4).map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className={`${
                  index === 0 && "border-r pr-5 border-[#164377] h-10"
                } hover:text-[#1C76DD] text-lg font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="bg-[#00152D]">
          <div className="flex flex-col max-w-6xl mx-auto md:flex-row gap-6 items-center font-bold text-[#1C76DD] justify-between px-6 py-6 text-center text-sm">
            <p>
              &copy; {footerData.copyrightYear} All rights reserved.
              {footerData.companyName}
            </p>
            <Link href={footerData.links[4].url} className="hover:underline">
              {footerData.links[4].name}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

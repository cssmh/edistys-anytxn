/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-text": "rgb(31, 128, 240)",
        "blue-text2": "rgb(22, 67, 119)",
        "orange-main-bg": "rgb(254, 139 ,83)",
        "gray-bg": "rgb(248, 252, 255)",
        "footer-bg": "rgb(0, 32, 69)",
        "footer-text": "rgb(0, 233, 234)",
        "copy-bg": "rgb(0, 21, 45)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

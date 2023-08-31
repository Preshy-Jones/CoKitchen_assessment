import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgPrimary: "#FCFCFC",
        greyBd: "#E5E6E6",
        greyBd2: "#EFF0F0",
        greyBd3: "#53575A",
        primaryBlack: "#2E3031",
        secondaryBlack: "#212224",
        greyText: "#6F7376",
        greyText2: "#96999C",
        greyText3: "#5E6164",
        greyBgLight: "#F2F5F7",
        buttonBg: "#DFE1E2",
        borderBg: "#EAEBEB",
        
      },
      lineHeight: {
        primary: "1.109375rem",
        secondary: "0.95125rem",
        tertiary: "1.4rem",
      },
      boxShadow: {
        primary: "0px 0px 14.004985809326172px 0px #0000001A",
        secondary: "0px 6px 16px 0px #4D4D4D14",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-white":"#FAFAFA",
        "custom-black":"#010101",
        "custom-purple":"#df2bff",
        "dark-blue":"#00b7ff",
      },
      lineHeight:{  
        "custom-xl":"25.6px",
       "custom-2xl":"39.01px",
        "custom-3xl":"57.6px",
        "custom-4xl":"307.2px",
      },
      fontSize:{
        "custom-xl":"32px",
        "custom-2xl":"256px"
      },
      fontFamily:{
        "roboto":"'roboto',sens-serif",
        "poppins":"'poppins',sens-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('https://png.pngtree.com/thumb_back/fh260/background/20230110/pngtree-dark-green-gradient-banner-background-image_1538714.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;

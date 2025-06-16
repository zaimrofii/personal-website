const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        marquee: "marquee 12s linear infinite",
        marquee2: "marquee2 12s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};

export default tailwindConfig;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
    screens: {
      xs: "480px", // custom breakpoint
      sm: "640px",
      md: "768px",
      lgmd: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    
  },
  plugins: [],
};

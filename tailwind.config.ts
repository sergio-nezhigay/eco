/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    placeholderColor: {
      primary: "rgba(189, 189, 189, 1)",
    },
    container: {
      center: true,
      padding: {
        xs: "20px",
        sm: "20px",
        md: "30px",
        lg: "20px",
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          200: "rgba(23, 61, 51, 1)",
          300: "rgba(151, 210, 139, 1)",
          400: "#DCEFD8",
          500: "rgba(234, 237, 241, 1)",
          700: "rgba(189, 189, 189, 1)",
          800: "rgba(243, 245, 250, 1)",
        },

        white: "#ffffff",
      },
      fontFamily: {
        firasans: ["var(--font-fira-sans)"],
        oswald: ["var(--font-oswald)"],
      },

      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1280px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      letterSpacing: {
        m4: "-0.04em",
      },
      backdropBlur: {
        sm: "2px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({
      addComponents,
    }: {
      addComponents: (components: Record<string, unknown>) => void;
    }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xs": {
            maxWidth: "100%",
          },
          "@screen sm": {
            maxWidth: "480px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};

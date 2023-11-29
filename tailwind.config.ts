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
          200: "#173D33",
          300: "rgba(151, 210, 139, 1)",
          400: "#DCEFD8",
          500: "rgba(234, 237, 241, 1)",
          800: "rgba(243, 245, 250, 1)",
        },

        "accent-blue": "#1DA1F2",
        white: "#ffffff",
      },
      fontFamily: {
        firasans: ["var(--font-fira-sans)"],
        oswald: ["var(--font-oswald)"],
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      backgroundImage: {
        "auth-dark": "url('/assets/images/auth-dark.png')",
        "auth-light": "url('/assets/images/auth-light.png')",
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

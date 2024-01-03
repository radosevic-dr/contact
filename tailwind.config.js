/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1a202c",

          secondary: "#3b4252",

          accent: "#a78bfa",

          neutral: "#6b7280",

          "base-100": "#171923",

          info: "#3b82f6",

          success: "#10b981",

          warning: "#f59e0b",

          error: "#ef4444",
        },
      },
    ],
    base: true,
    styled: true,
    prefix: "dui-",
  },
  plugins: [require("daisyui"),],
}

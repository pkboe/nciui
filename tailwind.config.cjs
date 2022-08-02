/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pranil: {
          primary: "#1f2937",

          secondary: "#9ca3af",

          accent: "#d1d5db",

          neutral: "#3D4451",

          "base-100": "#f3f4f6",

          info: "#6b7280",

          success: "#a7f3d0",

          warning: "#fef08a",

          error: "#fda4af",
        },
      },
      "corporate",
    ],
  },
};

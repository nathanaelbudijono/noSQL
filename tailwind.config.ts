/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "typography-50": "#fafafa",
        "typography-100": "#f5f5f5",
        "typography-200": "#e5e5e5",
        "typography-300": "#d4d4d4",
        "typography-400": "#a3a3a3",
        "typography-500": "#737373",
        "typography-600": "#525252",
        "typography-700": "#404040",
        "typography-800": "#262626",
        "typography-900": "#171717",
        "typography-950": "#0a0a0a",

        "ready-400": "#4ade80",
        "ready-500": "#22c55e",
        "ready-600": "#16a34a",

        "danger-400": "#f87171",
        "danger-500": "#ef4444",
        "danger-600": "#dc2626",
        "danger-700": "#b91c1c",

        "neutral-100": "#263238",
        "neutral-200": "#4D4D4D",
        "neutral-300": "#717171",
        "neutral-400": "#89939E",
        "neutral-500": "#ABBED1",
        "neutral-600": "#EAEFF4",
        "neutral-700": "#FFFFFF",

        "action-100": "#FBC02D",
        "action-200": "#E53835",
        "action-300": "#2E7D31",

        primary: "#4CAF4F",
        secondary: "#263238",
        info: "#2194f3",

        "shade-500": "#103E13",
        "shade-400": "#1B5E1F",
        "shade-300": "#237D31",
        "shade-200": "#388E3B",
        "shade-100": "#43A046",

        "tint-100": "#66BB69",
        "tint-200": "#81C784",
        "tint-300": "#A5D6A7",
        "tint-400": "#C8E6C9",
        "tint-500": "#E8F5E9",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};

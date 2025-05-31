/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,vue,html}",
  "./index.html"
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};
export const plugins = [];

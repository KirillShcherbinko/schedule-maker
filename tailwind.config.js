/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ['./src/**/*.{js,ts,jsx,tsx,vue,html}', './index.html'];
export const theme = {
  extend: {
    colors: {
      border: {
        sky: 'var(--border-sky)',
        grass: 'var(--border-grass)',
        lemon: 'var(--border-lemon)',
        peach: 'var(--border-peach)',
        lavender: 'var(--border-lavender)',
        mint: 'var(--border-mint)',
        rose: 'var(--border-rose)',
        sand: 'var(--border-sand)',
        ice: 'var(--border-ice)',
        plum: 'var(--border-plum)',
        ocean: 'var(--border-ocean)',
        moss: 'var(--border-moss)',
        amber: 'var(--border-amber)',
        coral: 'var(--border-coral)',
        jade: 'var(--border-jade)',
        blush: 'var(--border-blush)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};

export const plugins = [];

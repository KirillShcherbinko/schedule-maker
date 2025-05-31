/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ['./src/**/*.{js,ts,jsx,tsx,vue,html}', './index.html'];
export const theme = {
  extend: {
    colors: {
      sky: 'var(--color-badge-sky)',
      grass: 'var(--color-badge-grass)',
      lemon: 'var(--color-badge-lemon)',
      peach: 'var(--color-badge-peach)',
      lavender: 'var(--color-badge-lavender)',
      mint: 'var(--color-badge-mint)',
      rose: 'var(--color-badge-rose)',
      sand: 'var(--color-badge-sand)',
      ice: 'var(--color-badge-ice)',
      plum: 'var(--color-badge-plum)',
      ocean: 'var(--color-badge-ocean)',
      moss: 'var(--color-badge-moss)',
      amber: 'var(--color-badge-amber)',
      coral: 'var(--color-badge-coral)',
      jade: 'var(--color-badge-jade)',
      blush: 'var(--color-badge-blush)',
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
    }),
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};

export const plugins = [];

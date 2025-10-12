import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a1628',
          900: '#0f1f3d',
          800: '#162a52',
        },
        silver: {
          400: '#a8c5d9',
          300: '#c1d9e8',
          200: '#d4e6f1',
          100: '#e8f2f7',
        },
        purple: {
          200: '#e8d4f1',
          300: '#d4b8e6',
          400: '#b88dd9',
          500: '#9b6bc9',
        },
        flame: {
          400: '#ff9d5c',
          500: '#ff7b3d',
          600: '#ff5722',
          700: '#f04318',
        },
        gold: {
          300: '#ffd966',
          400: '#ffcc33',
        },
      },
    },
  },
  plugins: [],
  darkMode: ['selector', '[class~="dark"]'],
} satisfies Config;
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkred: '#8B0000',
        blanchedalmond: '#FFEBCD',
        rose300: '#EBCDD2',
        gray800: '#333333',
        black: '#000000',
        white: '#FFFFFF',
        gray500: '#6B7280',
      },
    },
  },
  plugins: [],
};

export default config;

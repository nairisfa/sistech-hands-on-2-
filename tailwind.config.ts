import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        darkred: '#8B0000',
        blanchedalmond: '#FFEBCD',
        rose300: '#EBCDD2',
        gray800: '#333333',
        gray900: '#1A1A1A',
        black: '#000000',
        white: '#FFFFFF',
        gray700: '#4A4A4A',
        gray500: '#6B7280',
      },
    },
  },
  plugins: [],
};

export default config;

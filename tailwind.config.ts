import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '5/7': '5 / 7',
        '3/1': '3 / 1',
      },
    },
  },
  plugins: [],
};
export default config;

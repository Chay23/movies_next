import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-charcoal': '#212427',
      },
      aspectRatio: {
        '5/7': '5 / 7',
        '3/1': '3 / 1',
        '2/3': '2 / 3',
      },
      gridTemplateColumns: {
        '1/4': '1fr 4fr',
        '1/2': '1fr 2fr',
      },
    },
  },
  plugins: [],
};
export default config;

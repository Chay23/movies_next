import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        light: '0 1px 2px 0 rgba(0,0,0,0.1)',
        medium: '0px 5px 25px 0px rgba(0,0,0,0.2)',
      },
      colors: {
        'blue-charcoal': '#212427',
        'bg-dark': 'var(--bg-dark)',
        'bg-light': 'var(--bg-light)',
        'bg-light-100': 'var(--bg-light-100)',
        'slate-blue-50': 'var(--slate-blue-50)',
        'slate-blue-100': 'var(--slate-blue-100)',
        'slate-blue-500': 'var(--slate-blue-500)',
        'slate-blue': 'var(--slate-blue)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-hover': 'var(--text-hover)',
        'border': 'var(--border)'
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

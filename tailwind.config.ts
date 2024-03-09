import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        serif: ['Lexend', 'system-ui'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        teal: '#357A7B',
        lightCyan: '#D6F2F2',
        charcoal: '#18181B',
        black: '#000000',
        white: '#FFFFFF',
        steelBlue: '#94A3B8',
        lightGray: '#D9D9D9',
        textColor: '#1b2734',
      },
    },
  },
  plugins: [],
};
export default config;

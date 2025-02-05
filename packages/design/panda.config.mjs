import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      fonts: {
        heading: 'Pretendard',
        body: 'Pretendard',
      },
      fontWeights: {
        regular: '400',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});

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
      tokens: {
        colors: {
          primary: {
            900: { value: '#FFD2C3' },
            800: { value: '#FFBEA8' },
            700: { value: '#FFA588' },
            600: { value: '#FF7D52' }, // Disabled
            500: { value: '#FF571E' }, // Primary Color
            400: { value: 'rgba(255, 87, 30, 0.8)' }, // While hovering & pressing
            300: { value: 'rgba(255, 87, 30, 0.6)' },
            200: { value: 'rgba(255, 87, 30, 0.4)' },
            150: { value: 'rgba(255, 87, 30, 0.15)' },
            100: { value: 'rgba(255, 87, 30, 0.1)' },
          },
          grayscale: {
            900: { value: '#101A31' }, // Black
            800: { value: '#2F2F2F' },
            700: { value: '#40485A' },
            600: { value: '#596171' },
            500: { value: '#7E8491' }, // Medium Gray
            400: { value: '#A3A8B4' },
            300: { value: '#BBC0C9' },
            200: { value: '#D3D6DC' },
            100: { value: '#E8EAEE' },
            50: { value: '#F4F5F7' },
            0: { value: '#FFFFFF' }, // White
          },
          black_op: { value: 'rgba(255, 255, 255, 0.5)' },
          success: {
            700: { value: '#00934E' },
            500: { value: '#12B76A' },
            300: { value: 'rgba(18, 183, 106, 0.3)' },
            150: { value: 'rgba(18, 183, 106, 0.15)' },
          },
          error: {
            700: { value: '#C7261A' },
            500: { value: '#FC382D' },
            300: { value: 'rgba(252, 59, 45, 0.3)' },
            150: { value: 'rgba(252, 59, 45, 0.3)' },
          },
        },
      },
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

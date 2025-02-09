import { definePreset } from '@pandacss/dev';

export default definePreset({
  name: 'default-preset',
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
            900: { value: '#1E1E1E' }, // Black
            800: { value: '#2F2F2F' },
            700: { value: '#4B4B4B' },
            600: { value: '#6D6D6D' },
            500: { value: '#8E8E8E' }, // Medium Gray
            400: { value: '#A5A5A5' },
            300: { value: '#BBBBBB' },
            200: { value: '#D2D2D2' },
            100: { value: '#E8E8E8' },
            50: { value: '#F4F4F4' },
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
        fonts: {
          heading: { value: 'Pretendard' },
          body: { value: 'Pretendard' },
        },
        fontWeights: {
          regular: { value: '400' },
          medium: { value: '500' },
          semibold: { value: '600' },
          bold: { value: '700' },
          extrabold: { value: '800' },
          black: { value: '900' },
        },
      },
    },
  },
});

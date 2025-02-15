import { cva } from '@/styled-system/css';

export const navigateBarStyle = cva({
  base: {
    position: 'sticky',
    top: 0,
    width: '100%',
    bg: 'transparent',
    transition: 'background-color 0.3s ease',
  },
  variants: {
    isScrolled: {
      true: {
        bg: 'grayscale.900',
      },
      false: {
        bg: 'transparent',
      },
    },
  },
});

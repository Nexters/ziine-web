import { cva } from 'styled-system/css';

export const tapButtonStyle = cva({
  defaultVariants: {
    status: 'unselected',
  },
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '99px',
  },
  variants: {
    status: {
      unselected: {
        bg: 'none',
      },
      selected: {
        bg: 'primary.500',
      },
    },
  },
});

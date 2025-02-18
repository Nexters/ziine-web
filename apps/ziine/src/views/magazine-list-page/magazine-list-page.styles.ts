import { cva } from '@/styled-system/css';

export const listItemStyle = cva({
  base: {},
  variants: {
    active: {
      true: {
        minWidth: '256px',
        maxWidth: '256px',
      },
      false: {
        minWidth: '240px',
        maxWidth: '240px',
      },
    },
  },
});

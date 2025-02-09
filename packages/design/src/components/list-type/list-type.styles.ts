import { cva } from 'styled-system/css';

export const listTypeStyle = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
});

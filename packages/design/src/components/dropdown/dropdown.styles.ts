import { cva } from '@/styled-system/css';

export const dropdownSelectedStyle = cva({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 12px 16px 16px',
    fontSize: '16px',
    width: '136px',
    height: '50px',
    border: 'solid',
    borderWidth: '1.5px',
    borderColor: 'grayscale.700',
    borderRadius: '6px',
    cursor: 'pointer',
    bg: 'grayscale.800',
    color: 'grayscale.0',
  },
});

export const dropdownListStyle = cva({
  base: {
    mt: '8px',
    width: '100%',
    border: 'solid',
    borderWidth: '1.5px',
    borderColor: 'grayscale.700',
    borderRadius: '6px',
    bg: 'grayscale.800',
    color: 'grayscale.0',
  },
});

export const dropdownItemStyle = cva({
  base: {
    display: 'flex',
    padding: '8px 16px',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

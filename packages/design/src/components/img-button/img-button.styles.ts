import { cva } from 'styled-system/css';

export const imgButtonStyle = cva({
  base: {
    bg:'grayscale.800',
    color: 'grayscale.500',
    width: '100px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '34px 18.5px',
    borderRadius: '6px',
    border: 'solid',
    borderWidth: '1.5px',
    borderColor: 'grayscale.700',
    flexShrink: 0,
    _hover: {
        bg: 'grayscale.700',
        border: 'solid',
        borderWidth: '1.5px',
        borderColor: 'grayscale.600',
    }
  }
});

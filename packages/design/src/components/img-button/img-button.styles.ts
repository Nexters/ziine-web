import { cva } from 'styled-system/css';

export const imgButtonStyle = cva({
  defaultVariants: {
    feature: 'upload',
  },
  base: {
    bg: 'grayscale.800',
    color: 'grayscale.500',
    width: '108px',
    height: '108px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
    border: 'solid',
    borderWidth: '1.5px',
    borderColor: 'grayscale.700',
    flexShrink: 0,
    boxSizing: 'border-box',
  },
  variants: {
    feature: {
      upload: {
        //padding: '34px 18.5px',
        _hover: {
          bg: 'grayscale.700',
          border: 'solid',
          borderWidth: '1.5px',
          borderColor: 'grayscale.600',
        },
      },
      preview: {
        overflow: 'hidden',
      },
    },
  },
});

export const imgInputContainer = cva({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
  },
});

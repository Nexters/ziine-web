import { cva } from 'styled-system/css';

export const buttonStyle = cva({
  defaultVariants: {
    type: 'main',
    status: 'default',
  },
  base: {
    display: 'flex',
    padding: '18px 24px',
    borderRadius: '6px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
  },
  variants: {
    type: {
      main: {
        bg: 'primary.500',
        color: 'grayscale.900',
        _hover: {
          bg: 'primary.600',
          color: 'grayscale.700',
        },
        _disabled: {
          bg: 'grayscale.600',
          color: 'grayscale.700',
          _hover: {
            bg: 'grayscale.600',
            color: 'grayscale.700',
          },
        },
      },
      sub: {
        bg: 'transparent',
        color: 'primary.500',
        border: 'solid',
        borderWidth: '1.5px',
        borderColor: 'primary.200',
        _hover: {
          bg: 'primary.100',
          color: 'primary.500',
        },
        _disabled: {
          bg: 'grayscale.800',
          color: 'grayscale.600',
          border: 'none',
          _hover: {
            bg: 'grayscale.800',
            color: 'grayscale.600',
            border: 'none',
          },
        },
      },
    },

    status: {
      default: {},
      loading: {
        main: {
          bg: 'primary.600',
        },
        sub: {
          bg: 'primary.100',
          border: 'solid',
          borderWidth: '1.5px',
          borderColor: 'primary.200',
        },
      },
    },
  },
});

export const smallBtnStyle = cva({
  defaultVariants: {
    type: 'filled',
  },
  base: {
    display: 'flex',
    padding: '12px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '6px',
    color: 'grayscale.0',
  },
  variants: {
    type: {
      filled: {
        bg: 'grayscale.700',
        _hover: {
          bg: 'grayscale.600',
        },
      },
      outlined: {
        bg: 'transparent',
        border: 'solid',
        borderWidth: '1.5px',
        borderColor: 'grayscale.700',
        _hover: {
          bg: 'grayscale.800',
        },
      },
    },
  },
});

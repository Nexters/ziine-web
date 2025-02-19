import { cva } from 'styled-system/css';

const input_paragraph_style = {
  fontSize: '12px',
  fontWeight: 'medium',
  lineHeight: '160%',
  letterSpacing: '0%',
};

export const inputStyle = cva({
  defaultVariants: {
    type: 'default',
    state: 'default',
  },
  base: {
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    padding: '16px',
    gap: '8px',
    borderRadius: '6px',
    bg: 'grayscale.800',
    color: 'grayscale.0',
    ...input_paragraph_style,
    _placeholder: {
      color: 'grayscale.600',
    },
    _focus: {
      outline: 'none',
      border: 'solid',
      borderWidth: '1.5px',
      borderColor: 'grayscale.600',
      caretColor: 'grayscale.0',
    },
  },
  variants: {
    type: {
      default: {},
      dimension: {
        '@media (max-width: 899px)': {
          maxWidth: '166px',
        },
      },
    },
    state: {
      default: {},
      warning: {
        color: 'grayscale.0',
        border: 'solid',
        borderWidth: '1.5px',
        borderColor: 'error.500',
        _focus: {
          color: 'grayscale.0',
          border: 'solid',
          borderWidth: '1.5px',
          borderColor: 'error.500',
        },
      },
    },
  },
});

export const inputFatStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    resize: 'none',
    height: '220px',
    padding: '16px',
    gap: '8px',
    borderRadius: '6px',
    bg: 'grayscale.800',
    color: 'grayscale.0',
    ...input_paragraph_style,
    _placeholder: {
      color: 'grayscale.600',
    },
    _focus: {
      outline: 'none',
      border: 'solid',
      borderWidth: '1.5px',
      borderColor: 'grayscale.600',
      caretColor: 'grayscale.0',
    },
  },
});

export const container = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
});

const dropdown_paragraph_style = {
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '160%',
  letterSpacing: '0%',
};

export const dropdownContainer = cva({
  base: {
    display: 'flex',
    gap: '11px',
    alignItems: 'center',
  },
});

export const dropdownStyle = cva({
  base: {
    display: 'flex',
    width: '136px',
    height: '50px',
    padding: '16px 12px 16px 16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'solid',
    borderWidth: '1.5px',
    borderColor: 'grayscale.700',
    borderRadius: '6px',
    bg: 'grayscale.800',
    ...dropdown_paragraph_style,
    color: 'grayscale.600',
    outline: 'none',
  },
});

export const iconInputStyle = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
});

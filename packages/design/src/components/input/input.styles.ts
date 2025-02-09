import { cva } from 'styled-system/css';

const input_paragraph_style = {
  fontSize: '12px',
  fontWeight: 'medium',
  lineHeight: '160%',
  letterSpacing: '0%',
};

export const inputStyle = cva({
  base: {
    display: 'flex',
    height: '50px',
    padding: '16px',
    gap: '8px',
    alignSelf: 'stretch',
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

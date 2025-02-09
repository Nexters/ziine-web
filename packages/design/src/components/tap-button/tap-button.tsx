import { ButtonHTMLAttributes } from 'react';
import { tapButtonStyle } from './tap-button.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  text: string;
}

export const TapButton = ({ selected, text, className, ...buttonProps }: Props) => {
  return (
    <button
      className={cx(tapButtonStyle({ status: selected ? 'selected' : 'unselected' }), className)}
      {...buttonProps}
    >
      <Typography level='subtitle2' className={css({ color: selected ? 'grayscale.900' : 'grayscale.600' })}>
        {text}
      </Typography>
    </button>
  );
};

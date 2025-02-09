import { CSSProperties } from 'react';
import { tapButtonStyle } from './tap-button.styles';
import { css, cx } from '@/styled-system/css';
import { Typography } from '../typography';

interface Props {
  selected: boolean;
  text: string;
  className?: string;
  style?: CSSProperties;
}

export const TapButton = ({ selected, text, className, style }: Props) => {
  return (
    <div className={cx(tapButtonStyle({ status: selected ? 'selected' : 'unselected' }), className)} style={style}>
      <Typography level='subtitle2' className={css({ color: selected ? 'grayscale.900' : 'grayscale.600' })}>
        {text}
      </Typography>
    </div>
  );
};

import { CSSProperties } from 'react';
import { tapButtonStyle } from './tap-button.styles';
import { cx } from '@/styled-system/css';

interface Props {
  selected: boolean;
  text: string;
  className?: string;
  style?: CSSProperties;
}

export const TapButton = ({ selected, text, className, style }: Props) => {
  return (
    <div className={cx(tapButtonStyle({ status: selected ? 'selected' : 'unselected' }), className)} style={style}>
      {text}
    </div>
  );
};

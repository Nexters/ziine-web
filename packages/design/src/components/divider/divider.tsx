import { cx } from '@/styled-system/css';
import { dividerStyle, DividerStyleProps } from './divider.styles';
import { CSSProperties } from 'react';

interface Props {
  thickness?: DividerStyleProps['thickness'];
  className?: string;
  style?: CSSProperties;
}

export const Divider = ({ thickness = 'thin', className, style }: Props) => {
  return <div className={cx(dividerStyle({ thickness }), className)} style={style}></div>;
};

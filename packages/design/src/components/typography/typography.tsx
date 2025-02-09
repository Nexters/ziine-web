import { CSSProperties, PropsWithChildren } from 'react';
import { typographyStyle, TypographyStyleProps } from './typography.styles';
import { cx } from '@/styled-system/css';

interface Props {
  level: Required<TypographyStyleProps>['level'];
  className?: string;
  style?: CSSProperties;
}

export const Typography = ({ level, children, className, style }: PropsWithChildren<Props>) => {
  return (
    <span className={cx(typographyStyle({ level }), className)} style={style}>
      {children}
    </span>
  );
};

import { css, cx } from '@/styled-system/css';
import { Icon, Typography } from '@ziine/design';
import { CSSProperties, ReactNode } from 'react';

interface ToastBoxProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  right?: ReactNode;
}

export const ToastBox = ({ text, className, style, right }: ToastBoxProps) => {
  return (
    <div
      className={cx(
        css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bg: 'grayscale.800',
          borderRadius: '6px',
          boxShadow: '0px 12px 24px 0px rgba(0, 0, 0, 0.25)',
          padding: '16px',
        }),
        className,
      )}
      style={style}
    >
      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' })}>
        <Icon name='check' size='medium' color='primary.500' />
        <div className={css({ marginLeft: '12px' })}>
          <Typography level='paragraph2' className={css({ color: 'grayscale.0' })}>
            {text}
          </Typography>
        </div>
      </div>
      {right}
    </div>
  );
};

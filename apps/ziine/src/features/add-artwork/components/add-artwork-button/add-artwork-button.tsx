import { css, cx } from '@/styled-system/css';
import Link from 'next/link';
import React, { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const AddArtworkButton = ({ className, style }: Props) => {
  return (
    <Link
      href='/artwork/register'
      style={style}
      className={cx(
        css({
          display: 'flex',
          width: '48px',
          height: '47px',
          padding: '11px 12px 16px 12px',
          justifyContent: 'center',
          alignItems: 'center',
          bg: 'primary.500',
          borderRadius: '999px',
          cursor: 'pointer',
        }),
        className,
      )}
    ></Link>
  );
};

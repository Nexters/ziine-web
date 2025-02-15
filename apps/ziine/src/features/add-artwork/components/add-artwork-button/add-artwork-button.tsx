import { css, cx } from '@/styled-system/css';
import { Icon } from '@ziine/design';
import Link from 'next/link';
import React, { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const AddArtworkButton = ({ className, style }: Props) => {
  return (
    <Link
      href='/artwork/guide'
      style={style}
      className={cx(
        css({
          display: 'flex',
          width: '48px',
          height: '47px',
          justifyContent: 'center',
          alignItems: 'center',
          bg: 'primary.500',
          borderRadius: '999px',
          cursor: 'pointer',
        }),
        className,
      )}
    >
      <Icon name='plus' size='medium' color='grayscale.0' />
    </Link>
  );
};

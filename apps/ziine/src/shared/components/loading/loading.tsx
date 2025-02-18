'use client';

import { css, cx } from '@/styled-system/css';
import dynamic from 'next/dynamic';
import loadingJson from '../../../../public/assets/images/loading.json';
import { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Loading = ({ className, style }: Props) => {
  const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

  return (
    <Lottie
      animationData={loadingJson}
      className={cx(
        css({
          maxWidth: '120px',
          margin: 'auto',
        }),
        className,
      )}
      style={style}
    />
  );
};

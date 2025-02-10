'use client';

import { css, cx } from '@/styled-system/css';
import { TapButton } from '@ziine/design';
import { useDetectNavType } from './hooks';
import { ARTWORK, MAGAZINE } from './hooks/use-detect-nav-type';
import { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const GlobalNavBar = ({ className, style }: Props) => {
  const { isArtwork, setSearchParams } = useDetectNavType();

  return (
    <div
      style={style}
      className={cx(
        css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }),
        className,
      )}
    >
      <TapButton
        selected={isArtwork}
        text='Artworks'
        className={css({ marginRight: '8px' })}
        onClick={() => setSearchParams(ARTWORK)}
      />
      <TapButton selected={!isArtwork} text='Magazine' onClick={() => setSearchParams(MAGAZINE)} />
    </div>
  );
};

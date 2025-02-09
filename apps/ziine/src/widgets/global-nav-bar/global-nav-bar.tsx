'use client';

import { css } from '@/styled-system/css';
import { TapButton } from '@ziine/design';
import { useDetectNavType } from './hooks';
import { ARTWORK, MAGAZINE } from './hooks/use-detect-nav-type';

export const GlobalNavBar = () => {
  const { isArtwork, setSearchParams } = useDetectNavType();

  return (
    <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '20px' })}>
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

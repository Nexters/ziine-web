'use client';

import { css } from '@/styled-system/css';
import { ArtWorkPage } from '@/views';
import { GlobalNavBar } from '@/widgets';
import { useDetectNavType } from '@/widgets/global-nav-bar/hooks';

export default function Home() {
  const { isArtwork } = useDetectNavType();
  return (
    <div className={css({ position: 'relative' })}>
      <GlobalNavBar className={css({ zIndex: 1, position: 'sticky', top: 0 })} />
      {isArtwork ? <ArtWorkPage /> : <></>}
    </div>
  );
}

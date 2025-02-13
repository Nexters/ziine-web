'use client';

import { css } from '@/styled-system/css';
import { ArtWorkPage } from '@/views';
import { GlobalNavBar } from '@/widgets';
import { useDetectNavType } from '@/widgets/global-nav-bar/hooks';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className={css({ position: 'relative' })}>
      <Suspense>
        <GlobalNavBar className={css({ zIndex: 1, position: 'sticky', top: 0 })} />
      </Suspense>
      <Suspense>
        <MainPage />
      </Suspense>
    </div>
  );
}

const MainPage = () => {
  const { isArtwork } = useDetectNavType();
  return isArtwork ? <ArtWorkPage /> : <></>;
};

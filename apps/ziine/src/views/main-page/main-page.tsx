'use client';

import { useDetectNavType } from '@/widgets/global-nav-bar/hooks';
import { ArtWorkPage } from '../artwork-page';
import { Suspense } from 'react';
import { Loading } from '@/shared/components';
import { css } from '@/styled-system/css';
import { MagazineListPage } from '../magazine-list-page';

export const MainPage = () => {
  const { isArtwork } = useDetectNavType();
  return isArtwork ? <ArtWorkPage /> : <ClientMagazineListPage />;
};

const ClientMagazineListPage = () => {
  return (
    <Suspense
      fallback={
        <Loading className={css({ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' })} />
      }
    >
      <MagazineListPage />
    </Suspense>
  );
};

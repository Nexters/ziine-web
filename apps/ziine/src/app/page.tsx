'use client';

import { ArtWorkPage } from '@/views';
import { GlobalNavBar } from '@/widgets';
import { useDetectNavType } from '@/widgets/global-nav-bar/hooks';

export default function Home() {
  const { isArtwork } = useDetectNavType();
  return (
    <>
      <GlobalNavBar />
      {isArtwork ? <ArtWorkPage /> : <></>}
    </>
  );
}

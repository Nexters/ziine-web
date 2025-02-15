'use client';

import { useSuspenseArtworksQuery } from '@/entities/artworks/apis/queries';
import { ArtImageCard } from '@/entities/artworks/components';
import { AddArtworkButton } from '@/features/add-artwork/components';
import { useShowFloatingButton } from '@/features/add-artwork/hooks';
import { Loading } from '@/shared';
import { css, cx } from '@/styled-system/css';
import React, { Suspense } from 'react';

const addButtonStyle = css({
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  '@media (min-width: 900px)': {
    bottom: '40px',
    right: '40px',
  },
});

export const ArtWorkPage = () => {
  return (
    <div className={css({ overflow: 'auto' })}>
      <Suspense fallback={<Loading className={css({ height: '100%', flex: 1 })} />}>
        <ArtworkList />
      </Suspense>
      <FloatingButton />
    </div>
  );
};

const gridLayout = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '16px',
  padding: '16px',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (min-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
    padding: '16px 40px',
  },
  '@media (min-width: 1200px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const ArtworkList = () => {
  const {
    data: { artworks },
  } = useSuspenseArtworksQuery();

  return (
    <div className={gridLayout}>
      {artworks.map(({ id, artist: { name, profileImageUrl }, title, artworkImageUrl }, idx) => (
        <ArtImageCard
          id={id}
          key={title + artworkImageUrl + idx}
          profileImageUrl={profileImageUrl}
          profileName={name}
          title={title}
          imageUrl={artworkImageUrl}
        />
      ))}
    </div>
  );
};

const FloatingButton = () => {
  const showButton = useShowFloatingButton();

  return (
    <AddArtworkButton
      className={cx(
        addButtonStyle,
        css({
          transition: 'opacity 0.3s ease',
          opacity: showButton ? 1 : 0,
          pointerEvents: showButton ? 'auto' : 'none',
        }),
      )}
    />
  );
};

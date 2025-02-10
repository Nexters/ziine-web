'use client';

import { useSuspenseArtworksQuery } from '@/entities/artworks/apis/queries';
import { ArtImageCard } from '@/entities/artworks/components';
import { AddArtworkButton } from '@/features/add-artwork/components';
import { css } from '@/styled-system/css';
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
      <Suspense>
        <ArtworkList />
      </Suspense>
      <AddArtworkButton className={addButtonStyle} />
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
      {artworks.map(({ id, artist: { name, profileImageUrl }, title, imageUrl }, idx) => (
        <ArtImageCard
          id={id}
          key={title + imageUrl + idx}
          profileImageUrl={profileImageUrl}
          profileName={name}
          title={title}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

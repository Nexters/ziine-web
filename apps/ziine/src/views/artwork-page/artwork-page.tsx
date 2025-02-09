'use client';

import { useSuspenseArtworksQuery } from '@/entities/artworks/apis/queries';
import { ArtImageCard } from '@/entities/artworks/components';
import { AddArtworkButton } from '@/features/add-artwork/components';
import { css } from '@/styled-system/css';
import React, { Suspense } from 'react';

export const ArtWorkPage = () => {
  return (
    <div>
      <Suspense>
        <ArtworkList />
      </Suspense>
      <AddArtworkButton className={css({ position: 'fixed', bottom: '16px', right: '16px' })} />
    </div>
  );
};

const ArtworkList = () => {
  const {
    data: { artworks },
  } = useSuspenseArtworksQuery();

  return (
    <div className={css({ gap: '16px' })}>
      {artworks.map(({ artist: { name, profileImageUrl }, title, imageUrl }) => (
        <ArtImageCard
          key={title + imageUrl}
          profileImageUrl={profileImageUrl}
          profileName={name}
          title={title}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

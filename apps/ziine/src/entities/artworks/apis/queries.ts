'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getArtworks } from './apis';

const artworksQueryKeys = {
  artworks: ['artworks'],
  artworksDetail: (id: number) => ['artworks', id],
};

export const useSuspenseArtworksQuery = () => {
  return useSuspenseQuery({ queryKey: artworksQueryKeys.artworks, queryFn: getArtworks });
};

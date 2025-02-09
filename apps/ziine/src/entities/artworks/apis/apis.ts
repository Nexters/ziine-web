import { apiClient } from '@/shared/apis';

export interface ArtworkItem {
  id: number;
  title: string;
  imageUrl: string;
  createdAt: string;
  modifiedAt: string;
  artist: {
    id: number;
    name: string;
    profileImageUrl: string;
  };
}

export const getArtworks = async () => {
  const response = await apiClient.get<{ artworks: Array<ArtworkItem> }>('api/v1/artworks');
  return await response.json();
};

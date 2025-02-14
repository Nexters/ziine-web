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

export const getClientSideArtworks = async () => {
  const response = await apiClient.get<{ artworks: Array<ArtworkItem> }>('api/v1/artworks', { prefixUrl: '' });
  return await response.json();
};

export type ContactsType = 'INSTAGRAM' | 'WEBSITE' | 'OTHER';

export interface ArtworkDetailInfo {
  id: number;
  title: string;
  width: number;
  height: number;
  material: string;
  description: string;
  artworkImageUrl: string;
  shareUrl: string;
  createdAt: string;
  modifiedAt: string;
  artist: {
    id: number;
    name: string;
    profilemImageUrl: string;
    educations: Array<string>;
    exhibitions: Array<{
      title: string;
      exhibitionDate: string;
    }>;
    contacts: Array<{
      type: ContactsType;
      value: string;
    }>;
    email: string;
  };
}

export const getArtworkDetail = async (id: number) => {
  const response = await apiClient.get<ArtworkDetailInfo>(`api/v1/artworks/${id}`);
  return await response.json();
};

import { apiClient } from '@/shared/apis';

export interface ArtworkItem {
  id: number;
  title: string;
  artworkImageUrl: string;
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

export interface PresignedUrl {
  presignedUrlList: {
    presignedUrl: string;
    fileUrl: string;
  }[];
}

export const getArtworksImageUrl = async (fileNames: string[]): Promise<PresignedUrl> => {
  const params = new URLSearchParams();
  params.append('fileNames', fileNames.join(','));

  const response = await apiClient.get<PresignedUrl>(`api/v1/presigned-url?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to fetch presigned URLs');
  }

  return await response.json();
};

export const getClientSideArtworksImageUrl = async (fileNames: string[]): Promise<PresignedUrl> => {
  const params = new URLSearchParams();
  params.append('fileNames', fileNames.join(','));

  const response = await apiClient.get<PresignedUrl>(`api/v1/presigned-url?${params.toString()}`, {
    prefixUrl: '',
  });

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
    profileImageUrl: string;
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

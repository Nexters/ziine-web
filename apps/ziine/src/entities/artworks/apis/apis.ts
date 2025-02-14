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

export interface PresignedUrl {
  presignedUrlList: {
    presignedUrl: string;
    fileUrl: string;
  }[];
}

export const getArtworksImageUrl = async (fileNames: string[]) => {
  const params = new URLSearchParams();
  params.append('fileNames', fileNames.join(','));

  const response = await apiClient.get<{ fileUrl: PresignedUrl }>(`api/v1/presigned-url?${params.toString()}`, {});
  return response.json();
};

import { apiClient } from '@/shared/apis';

export interface ArtworkFormItem {
  title: string;
  width: number;
  height: number;
  material: string;
  artworkImageUrl: string;
  artistName: string;
  description?: string;
  educations?: string[];
  exhibitions?: { title: string; exhibitionDate: Date }[];
  contacts?: {
    type: string;
    value: string;
  }[];

  email?: string;
}

export const postArtworksForm = async (data: ArtworkFormItem) => {
  try {
    const response = await apiClient.post<{ success: boolean; message: string }>('api/v1/artworks', {
      json: data,
    });
    return response;
  } catch (error) {
    console.error('Error posting artwork: ', error);
    throw error;
  }
};

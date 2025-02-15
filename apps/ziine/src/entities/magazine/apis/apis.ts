import { apiClient } from '@/shared/apis';

export interface MagazineDetail {
  id: number;
  title: string;
  summary: string;
  thumbnailImageUrl: string;
  /** 마크다운 */
  content: string;
  keywords: Array<string>;
  createdAt: string;
  modifiedAt: string;
}

export const getMagazineDetail = async (id: number) => {
  const response = await apiClient.get<MagazineDetail>(`api/v1/magazines/${id}`);
  return await response.json();
};

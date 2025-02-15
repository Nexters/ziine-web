'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getMagazineDetail } from './apis';

const magazineQueryKeys = {
  magazine: ['magazine'],
  magazineDetail: (id: number) => ['magazine', id],
};

export const useSuspenseMagazineDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: magazineQueryKeys.magazineDetail(id),
    queryFn: () => getMagazineDetail(id),
  });
};

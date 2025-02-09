'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const GNB_QUERY_KEY = 'type';
export const ARTWORK = 'artwork';
export const MAGAZINE = 'magazine';

export const useDetectNavType = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const setSearchParams = useCallback(
    (value: string) => {
      router.push(pathname + '?' + createQueryString(GNB_QUERY_KEY, value));
    },
    [createQueryString, pathname, router],
  );

  const isMagazine = searchParams.get(GNB_QUERY_KEY) === MAGAZINE;

  return { isArtwork: !isMagazine, searchParams, setSearchParams };
};

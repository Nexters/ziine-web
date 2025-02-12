'use client';

import MagazineDetail from '@/widgets/magazine-detail/magazine-detail';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';

const MagazineWebViewDetailPage = () => {
  const { id } = useParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MagazineDetail id={Number(id)} />
    </Suspense>
  );
};

export default MagazineWebViewDetailPage;

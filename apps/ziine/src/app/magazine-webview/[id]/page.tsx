import MagazineDetail from '@/widgets/magazine-detail/magazine-detail';
import { Suspense } from 'react';

const MagazineWebViewDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MagazineDetail id={Number(id)} />
    </Suspense>
  );
};

export default MagazineWebViewDetailPage;

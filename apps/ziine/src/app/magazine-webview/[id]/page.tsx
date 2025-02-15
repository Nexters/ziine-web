import { Loading } from '@/shared';
import { css } from '@/styled-system/css';
import MagazineDetail from '@/widgets/magazine-detail/magazine-detail';
import { Suspense } from 'react';

const MagazineWebViewDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<Loading className={css({ flex: 1, height: '100%' })} />}>
      <MagazineDetail id={Number(id)} />
    </Suspense>
  );
};

export default MagazineWebViewDetailPage;

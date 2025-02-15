import { Loading } from '@/shared/components/loading/loading';
import { css } from '@/styled-system/css';
import { ArtworkDetailPage } from '@/views';
import { Suspense } from 'react';

const ArtworkDetailWebPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<Loading className={css({ flex: 1, height: '100%' })} />}>
      <ArtworkDetailPage id={id} needNavigateBar={true} />
    </Suspense>
  );
};

export default ArtworkDetailWebPage;

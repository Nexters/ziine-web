import { getMagazineDetail } from '@/entities/magazine/apis/apis';
import { Loading, NavigateBar } from '@/shared';
import { css } from '@/styled-system/css';
import MagazineDetail from '@/widgets/magazine-detail/magazine-detail';
import { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const { title, thumbnailImageUrl, summary } = await getMagazineDetail(Number(id));

  const url = `https://www.ziine.gallery/magazine/${id}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: title,
    description: summary,
    openGraph: {
      title: title,
      images: [...previousImages, thumbnailImageUrl],
      description: summary,
      url,
    },
    twitter: {
      title: title,
      images: [...previousImages, thumbnailImageUrl],
      description: summary,
    },
  };
}

const MagazineDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <>
      <div>
        <NavigateBar className={css({ position: 'sticky', top: 0 })} />
        <Suspense fallback={<Loading className={css({ flex: 1, height: '100%' })} />}>
          <div className={css({ width: '375px', margin: '0 auto' })}>
            <MagazineDetail id={Number(id)} />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default MagazineDetailPage;

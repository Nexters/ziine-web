import { getArtworkDetail } from '@/entities/artworks/apis/apis';
import { Loading } from '@/shared/components/loading/loading';
import { css } from '@/styled-system/css';
import { ArtworkDetailPage } from '@/views';
import { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const data = await getArtworkDetail(Number(id));

  const url = `https://www.ziine.gallery/artwork/${id}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      images: [...previousImages, data.artworkImageUrl],
      description: data.description,
      url,
    },
    twitter: {
      title: data.title,
      images: [...previousImages, data.artworkImageUrl],
      description: data.description,
    },
  };
}

const ArtworkDetailWebPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <Suspense fallback={<Loading className={css({ flex: 1, height: '100%' })} />}>
      <ArtworkDetailPage id={id} needNavigateBar={true} />
    </Suspense>
  );
};

export default ArtworkDetailWebPage;

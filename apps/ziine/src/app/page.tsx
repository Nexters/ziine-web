import { getArtworks } from '@/entities/artworks/apis/apis';
import { css } from '@/styled-system/css';
import { MainPage } from '@/views/main-page';
import { GlobalNavBar } from '@/widgets';
import { Metadata } from 'next';
import { ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  const { artworks } = await getArtworks();

  const url = `https://www.ziine.gallery`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: 'ziine - 내 손 안의 미술 작품',
    description: '대학생 및 무명 작가들을 위한 미술품 큐레이션 서비스',
    openGraph: {
      title: 'ziine - 내 손 안의 미술 작품',
      images: artworks.length > 0 ? [...previousImages, artworks[0].artworkImageUrl] : previousImages,
      description: '대학생 및 무명 작가들을 위한 미술품 큐레이션 서비스',
      url,
    },
    twitter: {
      title: 'ziine - 내 손 안의 미술 작품',
      images: artworks.length > 0 ? [...previousImages, artworks[0].artworkImageUrl] : previousImages,
      description: '대학생 및 무명 작가들을 위한 미술품 큐레이션 서비스',
    },
  };
}

export default function Home() {
  return (
    <div className={css({ position: 'relative', height: '100%' })}>
      <Suspense>
        <GlobalNavBar className={css({ zIndex: 1, position: 'sticky', top: 0 })} />
      </Suspense>
      <Suspense>
        <MainPage />
      </Suspense>
    </div>
  );
}

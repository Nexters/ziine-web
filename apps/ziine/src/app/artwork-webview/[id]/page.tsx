import { getArtworkDetail } from '@/entities/artworks/apis/apis';
import { ArtworkDetailPage } from '@/views';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const data = await getArtworkDetail(Number(id));

  const url = `https://www.ziine.gallery/artwork-webview/${id}`;
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

const ArtworkDetailWebviewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <ArtworkDetailPage id={id} needNavigateBar={false} />;
};

export default ArtworkDetailWebviewPage;

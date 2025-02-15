import { ArtworkDetailPage } from '@/views';

const ArtworkDetailWebPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <ArtworkDetailPage id={id} needNavigateBar={true} />;
};

export default ArtworkDetailWebPage;

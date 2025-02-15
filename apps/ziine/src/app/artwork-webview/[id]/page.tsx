import { ArtworkDetailPage } from '@/views';

const ArtworkDetailWebviewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <ArtworkDetailPage id={id} needNavigateBar={false} />;
};

export default ArtworkDetailWebviewPage;

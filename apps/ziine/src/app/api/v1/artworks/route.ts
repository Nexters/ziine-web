import { getArtworks } from '@/entities/artworks/apis/apis';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const data = await getArtworks();

  return Response.json({ data });
}

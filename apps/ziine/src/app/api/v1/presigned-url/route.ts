import { getArtworksImageUrl } from '@/entities/artworks/apis/apis';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileNamesParam = searchParams.get('fileNames');
  console.log(fileNamesParam);

  if (!fileNamesParam) {
    return NextResponse.json({ error: 'fileNames query parameter is required' }, { status: 400 });
  }

  const fileNames = fileNamesParam.split(',');

  const data = await getArtworksImageUrl(fileNames);

  return NextResponse.json(data);
}

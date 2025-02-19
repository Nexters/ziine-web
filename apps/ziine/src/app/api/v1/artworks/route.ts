import { getArtworks } from '@/entities/artworks/apis/apis';
import { postArtworksForm } from '@/entities/artworks/apis/mutations';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const data = await getArtworks();

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const requiredFields = ['title', 'width', 'height', 'material', 'artworkImageUrl'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ success: false, message: `${field} 필드는 필수` }, { status: 400 });
      }
    }

    const response = await postArtworksForm(data);

    return NextResponse.json(response);
  } catch (error) {
    console.error('POST API 오류:', error);
    return NextResponse.json({ success: false, message: '서버 내부 오류 발생' }, { status: 500 });
  }
}

import { getMagazineDetail } from '@/entities/magazine/apis/apis';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Params = {
  id: string;
};

export async function GET(request: NextRequest, { params }: { params: Promise<Params> }) {
  const { id } = await params;
  const data = await getMagazineDetail(Number(id));

  return NextResponse.json({ data });
}

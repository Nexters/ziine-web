import { getMagazineList } from '@/entities/magazine/apis/apis';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const data = await getMagazineList();

  return NextResponse.json(data);
}

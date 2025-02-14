import { getMagazineDetail } from '@/entities/magazine/apis/apis';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request, { params }: { params: { id: string } }) {
  console.log('idididididididididididididididididididididididididid', params);
  const { id } = params;
  const data = await getMagazineDetail(Number(id));

  return Response.json({ data });
}

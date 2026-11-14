import { NextResponse } from 'next/server';
import { fetchNASAData } from '@/lib/nasaPower';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = parseFloat(searchParams.get('lat') || '0');
  const lng = parseFloat(searchParams.get('lng') || '0');

  if (!lat || !lng) {
    return NextResponse.json({ error: 'Missing coordinates' }, { status: 400 });
  }

  const data = await fetchNASAData(lat, lng);
  return NextResponse.json(data);
}
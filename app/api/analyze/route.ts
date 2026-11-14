import { NextResponse } from 'next/server';
import { runScoringEngine } from '@/lib/scoringEngine';
import { FarmProfile, EnvironmentData } from '@/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { farmProfile, environmentData }: { farmProfile: FarmProfile, environmentData: EnvironmentData } = body;
    
    if (!farmProfile || !environmentData) {
      return NextResponse.json({ error: 'Missing required data payloads' }, { status: 400 });
    }

    const scenarios = runScoringEngine(farmProfile, environmentData);
    
    return NextResponse.json({
      status: 'success',
      scenarios
    });
  } catch (error) {
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}
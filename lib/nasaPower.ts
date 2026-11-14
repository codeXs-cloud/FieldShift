import { EnvironmentData } from '@/types';

export async function fetchNASAData(lat: number, lng: number): Promise<EnvironmentData> {
  const DEMO_FALLBACK: EnvironmentData = {
    location: { latitude: lat, longitude: lng },
    temperature: { value: 24.5, unit: '°C' },
    precipitation: { value: 5.8, unit: 'mm/day' },
    solarRadiation: { value: 18.4, unit: 'MJ/m²/day' },
    source: 'NASA POWER (Demo Data)',
    mode: 'demo',
  };

  try {
    // 1. We grab the base URL from the .env.local file.
    // We also provide a fallback just in case the .env file goes missing.
    const baseUrl = process.env.NASA_API_BASE_URL || 'https://power.larc.nasa.gov/api/temporal/climatology/point';
    
    // 2. We dynamically attach the coordinates to the secure environment variable
    const url = `${baseUrl}?parameters=T2M,PRECTOTCORR,ALLSKY_SFC_SW_DWN&community=AG&longitude=${lng}&latitude=${lat}&format=JSON`;
    
    // 3600s cache - climatology data changes very slowly
    const response = await fetch(url, { next: { revalidate: 3600 } });
    
    if (!response.ok) throw new Error('NASA API Network Error');
    
    const data = await response.json();
    
    return {
      location: { latitude: lat, longitude: lng },
      temperature: { value: Math.round(data.properties.parameter.T2M.ANN * 10) / 10, unit: '°C' },
      precipitation: { value: Math.round(data.properties.parameter.PRECTOTCORR.ANN * 10) / 10, unit: 'mm/day' },
      solarRadiation: { value: Math.round(data.properties.parameter.ALLSKY_SFC_SW_DWN.ANN * 10) / 10, unit: 'MJ/m²/day' },
      source: 'NASA POWER',
      mode: 'live',
    };
  } catch (error) {
    console.warn("NASA POWER API failed. Switching to DEMO mode.", error);
    return DEMO_FALLBACK;
  }
}
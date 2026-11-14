export interface FarmProfile {
  location: { lat: number; lng: number; name: string };
  soilType: 'sandy' | 'loamy' | 'clay' | 'silt';
  waterAvailability: 'low' | 'medium' | 'high';
  previousCrop: string;
  priority: 'save-water' | 'improve-soil' | 'climate-resilience' | 'crop-diversity' | 'balanced';
}

export interface EnvironmentData {
  location: { latitude: number; longitude: number };
  temperature: { value: number; unit: string };
  precipitation: { value: number; unit: string };
  solarRadiation: { value: number; unit: string };
  source: string;
  mode: 'live' | 'demo';
}

export interface Crop {
  id: string;
  name: string;
  category: 'cereal' | 'legume' | 'oilseed' | 'vegetable';
  waterDemand: 'low' | 'medium' | 'high';
  soilContribution: 'negative' | 'neutral' | 'positive';
  climateSensitivity: 'low' | 'medium' | 'high';
}

export interface RotationScenario {
  id: string;
  name: string;
  crops: string[];
}

export interface ScenarioScore {
  scenarioId: string;
  scenarioName: string;
  overallScore: number;
  water: number;
  soil: number;
  climate: number;
  diversity: number;
  priority: number;
  explanation: string;
}
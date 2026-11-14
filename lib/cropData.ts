import { Crop } from '@/types';

export const CROP_DATABASE: Record<string, Crop> = {
  rice: { id: 'rice', name: 'Rice', category: 'cereal', waterDemand: 'high', soilContribution: 'neutral', climateSensitivity: 'high' },
  wheat: { id: 'wheat', name: 'Wheat', category: 'cereal', waterDemand: 'medium', soilContribution: 'neutral', climateSensitivity: 'medium' },
  maize: { id: 'maize', name: 'Maize', category: 'cereal', waterDemand: 'medium', soilContribution: 'neutral', climateSensitivity: 'high' },
  millet: { id: 'millet', name: 'Millet', category: 'cereal', waterDemand: 'low', soilContribution: 'neutral', climateSensitivity: 'low' },
  pulses: { id: 'pulses', name: 'Pulses', category: 'legume', waterDemand: 'low', soilContribution: 'positive', climateSensitivity: 'medium' },
  mustard: { id: 'mustard', name: 'Mustard', category: 'oilseed', waterDemand: 'low', soilContribution: 'neutral', climateSensitivity: 'medium' },
  vegetables: { id: 'vegetables', name: 'Vegetables', category: 'vegetable', waterDemand: 'high', soilContribution: 'neutral', climateSensitivity: 'high' },
};
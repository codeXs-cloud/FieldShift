import { RotationScenario } from '@/types';

export const ROTATION_SCENARIOS: RotationScenario[] = [
  { id: 'rot_a', name: 'Rice → Wheat → Pulses', crops: ['rice', 'wheat', 'pulses'] },
  { id: 'rot_b', name: 'Maize → Pulses → Wheat', crops: ['maize', 'pulses', 'wheat'] },
  { id: 'rot_c', name: 'Millet → Pulses → Mustard', crops: ['millet', 'pulses', 'mustard'] },
  { id: 'rot_d', name: 'Rice → Mustard → Pulses', crops: ['rice', 'mustard', 'pulses'] },
  { id: 'rot_e', name: 'Maize → Millet → Pulses', crops: ['maize', 'millet', 'pulses'] },
  { id: 'rot_f', name: 'Wheat → Pulses → Mustard', crops: ['wheat', 'pulses', 'mustard'] }
];
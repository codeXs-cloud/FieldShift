import { FarmProfile, EnvironmentData, ScenarioScore } from '@/types';
import { CROP_DATABASE } from './cropData';
import { ROTATION_SCENARIOS } from './rotationData';

export function runScoringEngine(farm: FarmProfile, env: EnvironmentData): ScenarioScore[] {
  return ROTATION_SCENARIOS.map(scenario => {
    const crops = scenario.crops.map(cId => CROP_DATABASE[cId]);
    
    let water = 14, soil = 10, climate = 15, diversity = 10, priority = 10;
    const explanations: string[] = [];

    // Water Logic
    const hasHighWater = crops.some(c => c.waterDemand === 'high');
    if (farm.waterAvailability === 'low' && hasHighWater) {
      water = 5;
      explanations.push("Contains high-water crops conflicting with low availability.");
    } else if (farm.waterAvailability === 'high') {
      water = 19;
    }

    // Soil Logic
    const hasLegumes = crops.some(c => c.category === 'legume');
    if (hasLegumes) {
      soil = 19;
      explanations.push("Includes nitrogen-fixing legumes to improve soil health.");
    }

    // Climate Logic
    const isHot = env.temperature.value > 28;
    const hasSensitive = crops.some(c => c.climateSensitivity === 'high');
    if (isHot && hasSensitive) {
      climate = 8;
      explanations.push("High heat may stress sensitive crops in this rotation.");
    } else {
      climate = 18;
    }

    // Diversity Logic
    const uniqueFamilies = new Set(crops.map(c => c.category)).size;
    diversity = uniqueFamilies >= 3 ? 19 : (uniqueFamilies === 2 ? 15 : 8);

    // Priority Alignment
    if (farm.priority === 'save-water' && !hasHighWater) priority = 19;
    else if (farm.priority === 'improve-soil' && hasLegumes) priority = 19;
    else if (farm.priority === 'crop-diversity') priority = diversity;
    else priority = 15;

    const overallScore = Math.round((water + soil + climate + diversity + priority) / 100 * 100);

    return {
      scenarioId: scenario.id,
      scenarioName: scenario.name,
      overallScore,
      water, soil, climate, diversity, priority,
      explanation: explanations.join(" ") || "Provides a balanced rotation suitable for typical conditions. Prototype results should be validated locally."
    };
  }).sort((a, b) => b.overallScore - a.overallScore);
}
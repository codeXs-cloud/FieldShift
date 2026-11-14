'use client';

import { useState } from 'react';
import { ScenarioScore } from '@/types';
import { ChevronDown, ChevronUp, Droplets, Sprout, ThermometerSun, Leaf } from 'lucide-react';

export default function RotationCard({ scenario }: { scenario: ScenarioScore }) {
  const [showExplanation, setShowExplanation] = useState(false);

  // Helper to determine color based on score component
  const getScoreColor = (score: number, max: number) => {
    const ratio = score / max;
    if (ratio >= 0.8) return 'text-green-600';
    if (ratio >= 0.5) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800">{scenario.scenarioName}</h3>
            <p className="text-sm text-slate-500">Rotation Sequence</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-green-700">{scenario.overallScore}</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Suitability</div>
          </div>
        </div>

        {/* Mini Breakdown */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="text-center p-2 bg-slate-50 rounded">
            <Droplets size={16} className={`mx-auto mb-1 ${getScoreColor(scenario.water, 20)}`} />
            <div className="text-xs font-semibold text-slate-600">{scenario.water}/20</div>
          </div>
          <div className="text-center p-2 bg-slate-50 rounded">
            <Sprout size={16} className={`mx-auto mb-1 ${getScoreColor(scenario.soil, 20)}`} />
            <div className="text-xs font-semibold text-slate-600">{scenario.soil}/20</div>
          </div>
          <div className="text-center p-2 bg-slate-50 rounded">
            <ThermometerSun size={16} className={`mx-auto mb-1 ${getScoreColor(scenario.climate, 20)}`} />
            <div className="text-xs font-semibold text-slate-600">{scenario.climate}/20</div>
          </div>
          <div className="text-center p-2 bg-slate-50 rounded">
            <Leaf size={16} className={`mx-auto mb-1 ${getScoreColor(scenario.diversity, 20)}`} />
            <div className="text-xs font-semibold text-slate-600">{scenario.diversity}/20</div>
          </div>
        </div>

        <button 
          onClick={() => setShowExplanation(!showExplanation)}
          className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition"
        >
          {showExplanation ? 'Hide Explanation' : 'Why this score?'}
          {showExplanation ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {showExplanation && (
        <div className="p-6 bg-slate-50 border-t border-slate-200 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold mb-2">Scenario Rationale:</p>
          <p>{scenario.explanation}</p>
          <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-lg text-xs">
            <strong>Note:</strong> This score reflects prototype assumptions based on environmental inputs and crop characteristics. Validate with local extension workers.
          </div>
        </div>
      )}
    </div>
  );
}
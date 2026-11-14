'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FarmProfile, EnvironmentData, ScenarioScore } from '@/types';
import FarmForm from '@/components/forms/FarmForm';
import EnvironmentCard from '@/components/dashboard/EnvironmentCard';
import RotationCard from '@/components/dashboard/RotationCard';
import ComparisonTable from '@/components/dashboard/ComparisonTable';
import Charts from '@/components/dashboard/Charts';
import { Loader2 } from 'lucide-react';

function AnalyzeFlow() {
  const searchParams = useSearchParams();
  const isDemo = searchParams.get('demo') === 'true';

  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const [farmData, setFarmData] = useState<FarmProfile | null>(null);
  const [envData, setEnvData] = useState<EnvironmentData | null>(null);
  const [scenarios, setScenarios] = useState<ScenarioScore[]>([]);

  // Auto-trigger demo if URL param is present
  useEffect(() => {
    if (isDemo && step === 1) {
      handleAnalyze({
        location: { lat: 26.1299, lng: 87.4300, name: 'Araria, Bihar' },
        soilType: 'loamy',
        waterAvailability: 'medium',
        previousCrop: 'rice',
        priority: 'save-water'
      });
    }
  }, [isDemo, step]);

  const handleAnalyze = async (profile: FarmProfile) => {
    setIsLoading(true);
    setFarmData(profile);

    try {
      // 1. Fetch Environment Context
      const envRes = await fetch(`/api/environment?lat=${profile.location.lat}&lng=${profile.location.lng}`);
      const envPayload = await envRes.json();
      setEnvData(envPayload);

      // 2. Process Rotations
      const analysisRes = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ farmProfile: profile, environmentData: envPayload })
      });
      const analysisPayload = await analysisRes.json();
      
      setScenarios(analysisPayload.scenarios);
      setStep(2);
    } catch (error) {
      console.error("Analysis Pipeline Failed:", error);
      alert("Failed to run analysis pipeline. Check console.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-center space-x-4 mb-8 text-sm font-medium">
          <span className={`px-4 py-2 rounded-full ${step === 1 ? 'bg-agri-700 text-white' : 'bg-slate-200 text-slate-500'}`}>01 Farm Profile</span>
          <span className="w-8 h-[2px] bg-slate-300"></span>
          <span className={`px-4 py-2 rounded-full ${step === 2 ? 'bg-agri-700 text-white' : 'bg-slate-200 text-slate-500'}`}>02 Analysis Dashboard</span>
        </div>

        {step === 1 && (
          <div className="w-full">
             <FarmForm onSubmit={handleAnalyze} isLoading={isLoading} />
          </div>
        )}

        {step === 2 && envData && farmData && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl font-bold text-slate-900">Scenario Analysis</h1>
              <button onClick={() => setStep(1)} className="text-agri-700 hover:underline text-sm font-semibold">
                &larr; Revise Farm Profile
              </button>
            </div>
            
            {/* Environment Overview */}
            <EnvironmentCard data={envData} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Recommendations (Top 3) */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl font-bold text-slate-800">Top Rotation Scenarios</h2>
                
                {/* THIS IS WHERE THE ERROR WAS FIXED: Mapping through scenarios and passing a single scenario to RotationCard */}
                {scenarios.slice(0, 3).map(scenario => (
                  <RotationCard key={scenario.scenarioId} scenario={scenario} />
                ))}
              </div>

              {/* Sidebar Insights */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4">Your Priorities</h3>
                  <ul className="text-sm space-y-3 text-slate-600">
                    <li className="flex justify-between border-b border-slate-100 pb-2"><span className="font-semibold text-slate-800">Primary Goal:</span> <span className="capitalize">{farmData.priority.replace('-', ' ')}</span></li>
                    <li className="flex justify-between border-b border-slate-100 pb-2"><span className="font-semibold text-slate-800">Water Avail:</span> <span className="capitalize">{farmData.waterAvailability}</span></li>
                    <li className="flex justify-between border-b border-slate-100 pb-2"><span className="font-semibold text-slate-800">Soil Type:</span> <span className="capitalize">{farmData.soilType}</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Visualizations */}
            <Charts scenarios={scenarios} />

            {/* Comprehensive Comparison */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Compare All Scenarios</h2>
              <ComparisonTable scenarios={scenarios} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function AnalyzePage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20"><Loader2 className="animate-spin text-agri-700" size={32} /></div>}>
      <AnalyzeFlow />
    </Suspense>
  );
}
'use client';

import { ScenarioScore } from '@/types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

interface ChartsProps {
  scenarios: ScenarioScore[];
}

export default function Charts({ scenarios }: ChartsProps) {
  // 1. Prepare data for the Stacked Bar Chart (Top 3 Scenarios)
  const barChartData = scenarios.slice(0, 3).map(s => ({
    name: s.scenarioName,
    Water: s.water,
    Soil: s.soil,
    Climate: s.climate,
    Diversity: s.diversity,
    Priority: s.priority,
  }));

  // 2. Prepare data for the Radar Chart (Comparing Top 2 Scenarios)
  const topTwo = scenarios.slice(0, 2);
  const radarData = [
    { metric: 'Water Suitability', A: topTwo[0]?.water || 0, B: topTwo[1]?.water || 0 },
    { metric: 'Soil Health', A: topTwo[0]?.soil || 0, B: topTwo[1]?.soil || 0 },
    { metric: 'Climate Compat.', A: topTwo[0]?.climate || 0, B: topTwo[1]?.climate || 0 },
    { metric: 'Crop Diversity', A: topTwo[0]?.diversity || 0, B: topTwo[1]?.diversity || 0 },
    { metric: 'Farmer Priority', A: topTwo[0]?.priority || 0, B: topTwo[1]?.priority || 0 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {/* Chart 1: Stacked Score Breakdown */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-2">Score Breakdown Comparison</h3>
        <p className="text-sm text-slate-500 mb-6">Visualizing the factors contributing to the final scenario scores.</p>
        
        <div className="h-[350px] w-full mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData} margin={{ top: 20, right: 5, left: -20, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 11, fill: '#64748b' }} 
                interval={0} 
                angle={-15} 
                textAnchor="end" 
              />
              <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
              <Bar dataKey="Water" stackId="a" fill="#3b82f6" name="Water" />
              <Bar dataKey="Soil" stackId="a" fill="#22c55e" name="Soil" />
              <Bar dataKey="Climate" stackId="a" fill="#f59e0b" name="Climate" />
              <Bar dataKey="Diversity" stackId="a" fill="#8b5cf6" name="Diversity" />
              <Bar dataKey="Priority" stackId="a" fill="#ec4899" name="Priority" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Radar Profile Comparison */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-2">Trade-off Analysis (Top 2)</h3>
        <p className="text-sm text-slate-500 mb-6">Comparing the specific strengths of your top two recommended rotations.</p>
        
        <div className="h-[350px] w-full mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} />
              <PolarRadiusAxis angle={30} domain={[0, 20]} tick={false} axisLine={false} />
              
              <Radar 
                name={topTwo[0]?.scenarioName || 'Scenario 1'} 
                dataKey="A" 
                stroke="#16a34a" 
                fill="#22c55e" 
                fillOpacity={0.4} 
              />
              
              {topTwo[1] && (
                <Radar 
                  name={topTwo[1].scenarioName} 
                  dataKey="B" 
                  stroke="#2563eb" 
                  fill="#3b82f6" 
                  fillOpacity={0.4} 
                />
              )}
              
              <Legend wrapperStyle={{ paddingTop: '15px', fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
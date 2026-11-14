import { ScenarioScore } from '@/types';

interface ComparisonTableProps {
  scenarios: ScenarioScore[];
}

export default function ComparisonTable({ scenarios }: ComparisonTableProps) {
  // Limit to top 4 for UI spacing
  const compareList = scenarios.slice(0, 4);

  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="p-4 font-bold text-slate-700">Factor</th>
            {compareList.map(s => (
              <th key={s.scenarioId} className="p-4 font-bold text-slate-700 text-center">
                {s.scenarioName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="border-b border-slate-100">
            <td className="p-4 font-medium text-slate-600 bg-slate-50/50">Overall Score</td>
            {compareList.map(s => (
              <td key={s.scenarioId} className="p-4 text-center font-bold text-lg text-agri-700 bg-agri-50/30">
                {s.overallScore}/100
              </td>
            ))}
          </tr>
          <tr className="border-b border-slate-100">
            <td className="p-4 font-medium text-slate-600 bg-slate-50/50">Water Suitability</td>
            {compareList.map(s => (
              <td key={s.scenarioId} className="p-4 text-center">{s.water}/20</td>
            ))}
          </tr>
          <tr className="border-b border-slate-100">
            <td className="p-4 font-medium text-slate-600 bg-slate-50/50">Soil Health Impact</td>
            {compareList.map(s => (
              <td key={s.scenarioId} className="p-4 text-center">{s.soil}/20</td>
            ))}
          </tr>
          <tr className="border-b border-slate-100">
            <td className="p-4 font-medium text-slate-600 bg-slate-50/50">Climate Compatibility</td>
            {compareList.map(s => (
              <td key={s.scenarioId} className="p-4 text-center">{s.climate}/20</td>
            ))}
          </tr>
          <tr>
            <td className="p-4 font-medium text-slate-600 bg-slate-50/50">Priority Alignment</td>
            {compareList.map(s => (
              <td key={s.scenarioId} className="p-4 text-center">{s.priority}/20</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
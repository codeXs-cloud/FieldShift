import { EnvironmentData } from '@/types';
import { Thermometer, CloudRain, Sun, Info } from 'lucide-react';

export default function EnvironmentCard({ data }: { data: EnvironmentData }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Environmental Context</h2>
          <p className="text-slate-500 text-sm">Long-term averages for selected coordinates</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
          data.mode === 'live' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
        }`}>
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${data.mode === 'live' ? 'bg-green-400' : 'bg-amber-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${data.mode === 'live' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
          </span>
          {data.mode === 'live' ? 'NASA Data Connected' : 'Demo Mode Active'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
          <div className="p-3 bg-red-100 text-red-600 rounded-lg">
            <Thermometer size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Avg Temperature</p>
            <p className="text-2xl font-bold text-slate-800">{data.temperature.value} <span className="text-base font-normal">{data.temperature.unit}</span></p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
            <CloudRain size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Precipitation</p>
            <p className="text-2xl font-bold text-slate-800">{data.precipitation.value} <span className="text-base font-normal">{data.precipitation.unit}</span></p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
            <Sun size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Solar Radiation</p>
            <p className="text-2xl font-bold text-slate-800">{data.solarRadiation.value} <span className="text-base font-normal">{data.solarRadiation.unit}</span></p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <Info size={14} />
        Source: {data.source} (Coordinates: {data.location.latitude.toFixed(4)}, {data.location.longitude.toFixed(4)})
      </div>
    </div>
  );
}
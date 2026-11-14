import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <div className="p-3 bg-amber-500/20 text-amber-500 rounded-lg shrink-0">
            <AlertTriangle size={28} />
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Important NASA Space Apps Prototype Disclaimer</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              FieldShift is an experimental decision-support prototype created for the NASA Space Apps Challenge 2026. 
              It does not provide guaranteed yield predictions or certified agricultural recommendations. Results depend 
              on available datasets, prototype assumptions, and user inputs. Farmers should validate decisions with local 
              agricultural experts and actual field conditions.
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2026 Team InnovateX. Built for NASA Space Apps Challenge.</p>
          <p className="mt-2 md:mt-0">Data powered by NASA POWER / Earth Observations.</p>
        </div>
      </div>
    </footer>
  );
}
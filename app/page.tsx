import Link from 'next/link';
import { Globe, Satellite, Sprout, RefreshCw, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-space-950 pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-agri-600 rounded-full mix-blend-screen filter blur-[128px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            FIELD<span className="text-agri-500">SHIFT</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-agri-50 mb-6 max-w-3xl mx-auto leading-tight">
            Smarter crop rotations for a changing climate.
          </p>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore crop-rotation scenarios using NASA Earth observations, local farm information, crop characteristics and farmer priorities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="/analyze" 
              className="w-full sm:w-auto px-8 py-4 bg-agri-600 text-white rounded-xl font-bold text-lg hover:bg-agri-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-2 group"
            >
              Analyze My Farm
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              href="/analyze?demo=true" 
              className="w-full sm:w-auto px-8 py-4 bg-space-800/50 border border-slate-600 text-white rounded-xl font-bold text-lg hover:bg-space-800 hover:border-slate-400 transition-all flex items-center justify-center gap-2"
            >
              Explore Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Representation Section (Earth, Satellite, Farm, Rotation) */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Earth Data */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Earth Observation</h3>
              <p className="text-slate-500 text-sm">Contextual climate insights via NASA POWER API.</p>
            </div>

            {/* Satellite Analysis */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-slate-100 text-space-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Satellite size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Data Processing</h3>
              <p className="text-slate-500 text-sm">Long-term averages for temperature and rainfall.</p>
            </div>

            {/* Farm Profile */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-earth-50 text-earth-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sprout size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Local Farm Info</h3>
              <p className="text-slate-500 text-sm">Tailored to your specific soil, water, and priorities.</p>
            </div>

            {/* Crop Rotation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-agri-50 text-agri-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RefreshCw size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Rotation Scenarios</h3>
              <p className="text-slate-500 text-sm">Explainable scoring for sustainable crop sequencing.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
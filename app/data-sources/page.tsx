import { Database, ExternalLink, Globe } from 'lucide-react';

export default function DataSourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Data Transparency</h1>
          <p className="text-lg text-slate-600">
            FieldShift is built on open data. Here is exactly where our information comes from.
          </p>
        </div>

        {/* Core Disclaimer Block */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-12 text-white shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <Globe className="text-blue-400" size={32} />
            <h2 className="text-2xl font-bold">NASA Data Usage</h2>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            FieldShift utilizes NASA Earth observation data to provide environmental context (temperature, precipitation, and solar radiation). 
            <strong className="text-white block mt-4 border-l-4 border-blue-500 pl-4 py-1 bg-slate-800/50">
              NASA provides the environmental data. FieldShift performs the decision-support analysis. NASA does NOT recommend specific crops or guarantee agricultural outcomes.
            </strong>
          </p>
          <p className="text-slate-400 text-sm">
            Environmental indicators are retrieved for the user's selected geographic coordinates and used solely as contextual inputs for the prototype's scenario analysis.
          </p>
        </div>

        {/* Datasets List */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Database size={24} className="text-green-700" />
            Current Datasets
          </h3>

          {/* NASA POWER Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-800">Prediction Of Worldwide Energy Resources (POWER)</h4>
                <p className="text-sm text-slate-500 font-medium">Source: NASA Langley Research Center</p>
              </div>
              <a 
                href="https://power.larc.nasa.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 bg-blue-50 p-2 rounded-full transition"
                aria-label="Visit NASA POWER website"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Variables Used</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                  <li>2M Temperature (T2M)</li>
                  <li>Precipitation (PRECTOTCORR)</li>
                  <li>Solar Radiation (ALLSKY_SFC_SW_DWN)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">How it is used</p>
                <p className="text-sm text-slate-700">
                  We use the <em>Climatology (AG Community)</em> endpoint to fetch long-term baseline averages. This helps the scoring engine determine if a crop rotation is historically suitable for the region's climate.
                </p>
              </div>
            </div>
          </div>

          {/* Crop Database Card (Internal) */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-800">FieldShift Crop & Rotation Database</h4>
                <p className="text-sm text-slate-500 font-medium">Source: Internal Prototype Data</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              A static database categorizing standard crops (Rice, Wheat, Maize, Millets, Pulses, Mustard, Vegetables) into categories of water demand, soil impact, and climate sensitivity.
            </p>
            <p className="text-xs text-slate-500 italic">
              *Note: Future iterations of this project intend to replace this static database with dynamic, localized datasets from the FAO or regional agricultural ministries.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
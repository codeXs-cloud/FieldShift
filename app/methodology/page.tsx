import { MapPin, Satellite, Sprout, Calculator, LayoutDashboard } from 'lucide-react';

export default function MethodologyPage() {
  const steps = [
    {
      icon: <MapPin size={28} className="text-amber-600" />,
      title: "1. Farm Inputs & Location",
      description: "The user inputs their farm's geographic coordinates, soil type, water availability, previous crop, and their primary farming priority (e.g., save water, improve soil).",
      bgColor: "bg-amber-100"
    },
    {
      icon: <Satellite size={28} className="text-blue-600" />,
      title: "2. NASA Earth Observations",
      description: "Using the coordinates provided, FieldShift queries the NASA POWER API to retrieve long-term climatology data (average temperature, precipitation, and solar radiation) for that specific location.",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Sprout size={28} className="text-green-600" />,
      title: "3. Crop Characteristics",
      description: "The system cross-references a structured database of crops. Each crop has assigned prototype values for water demand, soil contribution (e.g., nitrogen fixation), and climate sensitivity.",
      bgColor: "bg-green-100"
    },
    {
      icon: <Calculator size={28} className="text-purple-600" />,
      title: "4. Scenario Scoring",
      description: "FieldShift generates multiple pre-defined crop rotation scenarios. It scores each scenario on a scale of 0-100 based on five factors: Water Suitability, Soil Health Consideration, Climate Compatibility, Crop Diversity, and Farmer Priority Alignment.",
      bgColor: "bg-purple-100"
    },
    {
      icon: <LayoutDashboard size={28} className="text-slate-600" />,
      title: "5. Comparison Dashboard",
      description: "The results are presented on a dashboard where farmers can compare the trade-offs of different rotation strategies. Every score includes a 'Why this score?' explanation to maintain total transparency.",
      bgColor: "bg-slate-200"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">How FieldShift Works</h1>
          <p className="text-lg text-slate-600">
            A transparent look into our decision-support pipeline. No black boxes, just explainable scoring.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} shrink-0`}>
                    {step.icon}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block w-0.5 h-full bg-slate-200 mt-4"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-blue-800 text-sm leading-relaxed">
          <strong>Important Reminder:</strong> FieldShift is a prototype. The scoring engine utilizes generalized assumptions for demonstration purposes. It is designed to assist farmers in <em>exploring</em> scenarios, not to dictate exact agricultural practices or guarantee yields.
        </div>
      </div>
    </div>
  );
}
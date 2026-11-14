'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { FarmProfile } from '@/types';
import { MapPin, Droplets, Sprout, Target, RefreshCw, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';

// Dynamically import the map to prevent Next.js SSR "window is not defined" errors
const LocationMap = dynamic(() => import('@/components/map/LocationMap'), { 
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-slate-100 animate-pulse rounded-lg flex flex-col items-center justify-center text-slate-400 border border-slate-200">
      <MapPin className="mb-2 opacity-50" size={32} />
      <span className="text-sm font-medium">Loading Interactive Map...</span>
    </div>
  )
});

interface FarmFormProps {
  onSubmit: (profile: FarmProfile) => void;
  isLoading: boolean;
}

export default function FarmForm({ onSubmit, isLoading }: FarmFormProps) {
  const [formData, setFormData] = useState<FarmProfile>({
    location: { lat: 0, lng: 0, name: 'Custom Location' },
    soilType: 'loamy',
    waterAvailability: 'medium',
    previousCrop: 'rice',
    priority: 'balanced'
  });

  const handleLocationSelect = (lat: number, lng: number) => {
    setFormData(prev => ({ ...prev, location: { ...prev.location, lat, lng } }));
  };

  const handleDemoClick = () => {
    const demoData: FarmProfile = {
      location: { lat: 26.1299, lng: 87.4300, name: 'Araria, Bihar, India' },
      soilType: 'loamy',
      waterAvailability: 'medium',
      previousCrop: 'rice',
      priority: 'save-water'
    };
    setFormData(demoData);
    onSubmit(demoData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-none shadow-card">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4">
        <div>
          <CardTitle>Farm Profile Setup</CardTitle>
          <p className="text-slate-500 text-sm mt-1">Configure your field parameters to generate rotation scenarios.</p>
        </div>
        <Button 
          type="button"
          variant="demo"
          onClick={handleDemoClick}
          className="flex items-center gap-2"
        >
          <RefreshCw size={16} />
          Try Demo Farm
        </Button>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Map Section */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-base">
                <MapPin size={18} className="text-blue-600" />
                Pinpoint Farm Location
              </Label>
              <div className="text-xs font-mono bg-white px-2 py-1 rounded border border-slate-200 text-slate-500">
                Lat: {formData.location.lat.toFixed(4)} | Lng: {formData.location.lng.toFixed(4)}
              </div>
            </div>
            <LocationMap onLocationSelect={handleLocationSelect} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Soil */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Sprout size={18} className="text-agri-600" />
                Primary Soil Type
              </Label>
              <select 
                className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-agri-500 outline-none transition-shadow"
                value={formData.soilType}
                onChange={(e) => setFormData({...formData, soilType: e.target.value as any})}
              >
                <option value="sandy">Sandy (High drainage, low retention)</option>
                <option value="loamy">Loamy (Balanced retention)</option>
                <option value="clay">Clay (High retention, poor drainage)</option>
                <option value="silt">Silt (Moderate retention)</option>
              </select>
            </div>

            {/* Water */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Droplets size={18} className="text-blue-500" />
                Water Availability
              </Label>
              <select 
                className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                value={formData.waterAvailability}
                onChange={(e) => setFormData({...formData, waterAvailability: e.target.value as any})}
              >
                <option value="low">Low (Rainfed / Limited Groundwater)</option>
                <option value="medium">Medium (Partial Irrigation)</option>
                <option value="high">High (Full Year-Round Irrigation)</option>
              </select>
            </div>

            {/* Previous Crop */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <RefreshCw size={18} className="text-purple-500" />
                Current / Previous Crop
              </Label>
              <select 
                className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-shadow"
                value={formData.previousCrop}
                onChange={(e) => setFormData({...formData, previousCrop: e.target.value})}
              >
                <option value="rice">Rice</option>
                <option value="wheat">Wheat</option>
                <option value="maize">Maize</option>
                <option value="millet">Millet</option>
                <option value="pulses">Pulses / Legumes</option>
                <option value="mustard">Mustard</option>
                <option value="vegetables">Vegetables</option>
              </select>
            </div>

            {/* Farmer Priority */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Target size={18} className="text-red-500" />
                Primary Farming Goal
              </Label>
              <select 
                className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-shadow"
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: e.target.value as any})}
              >
                <option value="save-water">Conserve Water</option>
                <option value="improve-soil">Restore Soil Health / Fertility</option>
                <option value="climate-resilience">Build Climate Resilience</option>
                <option value="crop-diversity">Maximize Crop Diversity</option>
                <option value="balanced">Balanced Approach</option>
              </select>
            </div>
          </div>

          <Button 
            type="submit" 
            size="lg"
            className="w-full mt-8"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing NASA Data & Generating Scenarios...
              </>
            ) : (
              'Analyze Farm & Generate Rotations'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
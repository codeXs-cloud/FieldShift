'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing default marker icons in Next.js/Leaflet integration
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface LocationMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
  defaultPosition?: [number, number];
}

// Sub-component to handle map clicks
function LocationMarker({ position, setPosition, onLocationSelect }: any) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onLocationSelect(lat, lng);
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
}

export default function LocationMap({ 
  onLocationSelect, 
  defaultPosition = [25.5941, 85.1376] // Defaulting to Patna, Bihar context
}: LocationMapProps) {
  const [position, setPosition] = useState<[number, number] | null>(defaultPosition);

  // Initialize the parent component with the default coordinate on mount
  useEffect(() => {
    if (defaultPosition) {
      onLocationSelect(defaultPosition[0], defaultPosition[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-[300px] w-full rounded-lg overflow-hidden border border-slate-200 shadow-inner relative z-0">
      <MapContainer 
        center={defaultPosition} 
        zoom={6} 
        scrollWheelZoom={true} 
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker 
          position={position} 
          setPosition={setPosition} 
          onLocationSelect={onLocationSelect} 
        />
      </MapContainer>
      <div className="absolute bottom-3 left-3 z-[400] bg-white/95 px-3 py-1.5 text-xs font-semibold rounded shadow-sm border border-slate-200 pointer-events-none">
        Click anywhere on the map to set farm location
      </div>
    </div>
  );
}
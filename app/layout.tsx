import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Disclaimer from '@/components/layout/Disclaimer';

// Load Inter font with Latin subset for clean, modern typography
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FieldShift | Smarter Crop Rotations',
  description: 'Explore resilient crop-rotation scenarios using NASA Earth observations, local farm information, crop characteristics and farmer priorities.',
  keywords: 'Agriculture, NASA Space Apps, Crop Rotation, Farming, Earth Observation, Climate Change',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-50 text-slate-900`}>
        <Navbar />
        {/* Main content wrapper pushes footer to bottom automatically using flex-1 */}
        <main className="flex-1 w-full">
          {children}
        </main>
        <Disclaimer />
      </body>
    </html>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sprout, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/methodology' },
    { name: 'Data Sources', href: '/data-sources' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-[500]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded bg-green-700 text-white group-hover:bg-green-800 transition">
              <Sprout size={20} />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              FIELD<span className="text-green-700">SHIFT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition ${
                  isActive(link.href) ? 'text-green-700' : 'text-slate-600 hover:text-green-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/analyze"
              className="px-5 py-2.5 bg-green-700 text-white text-sm font-bold rounded-lg hover:bg-green-800 transition shadow-sm"
            >
              Analyze Farm
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-semibold ${
                  isActive(link.href) ? 'bg-green-50 text-green-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/analyze"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-4 py-3 border border-transparent text-base font-bold rounded-md text-white bg-green-700 hover:bg-green-800"
            >
              Analyze Farm
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
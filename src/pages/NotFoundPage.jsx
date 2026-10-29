import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-obsidian text-white flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-md">
        <span className="font-display font-black text-7xl text-crimson block drop-shadow-glow-red">
          404
        </span>
        <h1 className="font-display font-black text-2xl uppercase tracking-wider text-white mt-4">
          TELEMETRY SIGNAL LOST
        </h1>
        <p className="text-xs text-silver mt-2 font-mono">
          The requested coordinate does not exist in the APEX STUDIO architectural directory.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO FLAGSHIP HOMEPAGE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

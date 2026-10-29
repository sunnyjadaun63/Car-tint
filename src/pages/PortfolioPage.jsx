import React, { useState } from 'react';
import { Play, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: 'Multi-Stage Paint Correction & 10H Ceramic Coating Process',
      duration: '04:22 • 4K',
      stage: 'STAGE 01 PROCESS',
      desc: 'Eliminating swirl marks under surgical high-CRI inspection lamps followed by liquid glass bonding on carbon fiber bodywork.',
      img: '/assets/coating-closeup.png'
    },
    {
      title: 'Laser-Cut PPF & Nano-Ceramic Window Tint Installation',
      duration: '06:14 • 4K',
      stage: 'STAGE 02 PROCESS',
      desc: 'CAD plotting and cleanroom heat shrinkage application over aerodynamic curves and composite splitters.',
      img: '/assets/supercar-profile.png'
    },
    {
      title: 'Hypercar Cleanroom Studio Intake & Decontamination',
      duration: '03:45 • 4K',
      stage: 'STAGE 03 PROCESS',
      desc: 'Complete positive-pressure laboratory walkthrough with iron fallout neutralization bath and wheels-off caliper detailing.',
      img: '/assets/hero-bg.png'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10 text-center">
        <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
          BEHIND THE CURTAIN
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white mt-2">
          INSIDE THE APEX STUDIO
        </h1>
        <p className="text-xs sm:text-sm text-silver mt-2 max-w-2xl mx-auto">
          Cinematic video captures and ultra-high resolution photography documenting multi-stage paint correction, laser PPF installs, and ceramic curation.
        </p>
      </section>

      {/* Video Cards Grid */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              onClick={() => setActiveVideo(vid.title)}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-carbon hover:border-crimson/50 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-video w-full relative overflow-hidden bg-black">
                <img
                  src={vid.img}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-crimson flex items-center justify-center shadow-glow-red group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-white border border-white/20">
                  {vid.duration}
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono text-crimson font-bold uppercase tracking-widest block">
                  {vid.stage}
                </span>
                <h3 className="font-display font-bold text-base uppercase text-white mt-1 group-hover:text-crimson transition-colors">
                  {vid.title}
                </h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  {vid.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-crimson text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red hover:bg-crimson/90 transition-all"
          >
            <span>SCHEDULE STUDIO CONSULTATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
          <div className="bg-carbon border border-white/20 rounded-2xl max-w-2xl w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <h3 className="font-display font-bold text-sm text-white uppercase flex items-center gap-2">
                <Play className="w-4 h-4 text-crimson fill-crimson" />
                {activeVideo}
              </h3>
              <button onClick={() => setActiveVideo(null)} className="text-silver hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full rounded-xl bg-black flex flex-col items-center justify-center border border-white/10 text-center p-6">
              <div className="w-16 h-16 rounded-full bg-crimson/20 border border-crimson flex items-center justify-center mb-4 shadow-glow-red animate-pulse">
                <Play className="w-8 h-8 text-crimson fill-crimson ml-1" />
              </div>
              <span className="font-display font-bold text-sm text-white uppercase tracking-wider">
                4K Ultra-HD Master Reel Stream
              </span>
              <p className="text-xs text-silver font-mono mt-1 max-w-md">
                Laboratory Cleanroom footage showing ultrasonic decontamination, infrared lamp curing, and micro-edge shaved tint installation.
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center text-xs font-mono text-silver">
              <span>Resolution: 3840 x 2160 @ 60fps</span>
              <button
                onClick={() => setActiveVideo(null)}
                className="px-4 py-1.5 bg-crimson text-white rounded font-display font-bold text-xs uppercase hover:bg-crimson/90"
              >
                Close Reel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

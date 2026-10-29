import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, ArrowRight, Zap, Sun, Thermometer, Eye, Award } from 'lucide-react';

export default function TintingPage() {
  const [activeVlt, setActiveVlt] = useState(20);

  const vltSpecs = {
    5: { ir: '98.5%', tser: '71%', privacy: 'Maximum Limo VIP', glare: '94% Reduction' },
    20: { ir: '96.4%', tser: '66%', privacy: 'Dark Studio Stealth', glare: '88% Reduction' },
    35: { ir: '94.8%', tser: '60%', privacy: 'Medium Factory Match', glare: '78% Reduction' },
    50: { ir: '92.1%', tser: '54%', privacy: 'Subtle Smoke Protection', glare: '65% Reduction' },
    70: { ir: '89.0%', tser: '48%', privacy: 'Optical Crystal Clear', glare: '45% Reduction' }
  };

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* Hero Header */}
      <section className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-3">
          <Shield className="w-4 h-4" />
          <span>PILLAR 01 • OPTICAL SOLAR DEFENSE</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-white max-w-3xl">
          NANO-CERAMIC WINDOW TINT
        </h1>
        <p className="text-silver text-sm sm:text-base font-body mt-3 max-w-2xl leading-relaxed">
          Aerospace-grade multi-layer nano-ceramic optical shielding designed to reject up to 99% of damaging ultraviolet radiation and 96.4% of infrared heat without interfering with GPS, 5G, or radar signals.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Sun className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-2xl text-white">99%</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">UV Radiation Block</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Thermometer className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">96.4%</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Solar IR Heat Rejection</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Zap className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">0%</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Signal Interference</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Award className="w-5 h-5 text-yellow-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">LIFETIME</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Transferable Warranty</p>
          </div>
        </div>
      </section>

      {/* Interactive VLT Spectrum Explorer */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">OPTICAL DENSITY SELECTOR</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
            EXPLORE VISIBLE LIGHT TRANSMISSION (VLT)
          </h2>
          <p className="text-xs text-silver mt-1">
            Choose your preferred shade level to view calibrated heat rejection, privacy density, and glare reduction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-carbon p-6 rounded-2xl border border-white/10">
            <div className="flex gap-2 mb-6">
              {[5, 20, 35, 50, 70].map((v) => (
                <button
                  key={v}
                  onClick={() => setActiveVlt(v)}
                  className={`flex-1 py-2.5 rounded font-mono text-xs font-bold transition-all ${
                    activeVlt === v ? 'bg-crimson text-white shadow-glow-red' : 'bg-obsidian text-silver hover:text-white border border-white/5'
                  }`}
                >
                  {v}% VLT
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
              <img
                src="/assets/supercar-profile.png"
                alt="Tint preview"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none"
                style={{ opacity: 1 - (activeVlt / 100) * 0.88 }}
              ></div>
              <div className="absolute top-4 left-4 bg-obsidian/90 px-3 py-1 rounded text-xs font-mono text-white border border-white/20">
                ACTIVE SHADE: {activeVlt}% VLT
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-carbon p-6 rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
            <h3 className="font-display font-bold text-sm text-white uppercase border-b border-white/10 pb-3">
              TELEMETRY DATA ({activeVlt}% VLT)
            </h3>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-silver">Infrared Heat Rejection:</span>
              <span className="text-emerald-400 font-bold">{vltSpecs[activeVlt].ir}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-silver">Total Solar Energy Rejected (TSER):</span>
              <span className="text-white font-bold">{vltSpecs[activeVlt].tser}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-silver">Optical Privacy Level:</span>
              <span className="text-cyan-400 font-bold">{vltSpecs[activeVlt].privacy}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-silver">Glare Shield Metric:</span>
              <span className="text-white font-bold">{vltSpecs[activeVlt].glare}</span>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="w-full py-3 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-wider rounded shadow-glow-red transition-all block text-center"
              >
                Book {activeVlt}% Tint Installation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cleanroom Process */}
      <section className="py-16 bg-carbon/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="font-display font-black text-2xl uppercase tracking-wider text-white text-center mb-10">
            THE SURGICAL CLEANROOM INSTALLATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-sm">PHASE 01</span>
              <h3 className="font-display font-bold text-base text-white mt-1">Micro-Slit Edge Shaving</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Every pane is filed by hand to the microscopic edge of the roll-down glass, delivering seamless factory appearance with zero gaps.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-sm">PHASE 02</span>
              <h3 className="font-display font-bold text-base text-white mt-1">Positive Pressure Booth</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Filtered air circulation captures 99.97% of airborne lint, dust, and pollen, ensuring flawless optical clarity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-sm">PHASE 03</span>
              <h3 className="font-display font-bold text-base text-white mt-1">Digital Plotting Precision</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                CAD cut templates designed for exotic, hypercar, and luxury vehicles ensuring razor-free application directly on glass.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

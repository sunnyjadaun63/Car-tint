import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, CheckCircle2, X, ArrowRight, Shield, Sparkles, Layers } from 'lucide-react';

export default function PackagesPage() {
  const [vehicleClass, setVehicleClass] = useState('Sports');
  const [priceMultiplier, setPriceMultiplier] = useState(1.0);

  const baseP1 = 499;
  const baseP2 = 1299;
  const baseP3 = 2899;

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto text-center">
        <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
          TIERED AUTOMOTIVE PROTECTION
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white mt-2">
          COMPREHENSIVE PRICING & PROTECTION PACKAGES
        </h1>
        <p className="text-xs sm:text-sm text-silver mt-2 max-w-2xl mx-auto font-medium">
          Choose between introductory solar window tinting, track-ready front impact defense, or complete concourse body wrapping.
        </p>

        {/* Vehicle Class Selector */}
        <div className="inline-flex items-center justify-center gap-1.5 p-1.5 mt-8 rounded-xl bg-carbon border border-white/10">
          {[
            { label: 'Sports', mult: 1.0 },
            { label: 'Sedan', mult: 1.15 },
            { label: 'SUV', mult: 1.3 },
            { label: 'Exotic', mult: 1.5 }
          ].map((tab) => (
            <button
              key={tab.label}
              onClick={() => {
                setVehicleClass(tab.label);
                setPriceMultiplier(tab.mult);
              }}
              className={`px-5 py-2 text-xs font-display font-bold rounded-lg transition-all ${
                vehicleClass === tab.label
                  ? 'bg-crimson text-white shadow-glow-red'
                  : 'text-silver hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 */}
          <div className="bg-carbon border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono font-bold tracking-widest text-silver uppercase">
                STAGE 01 • ENTRY LEVEL
              </div>
              <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white mt-1">
                ESSENTIAL SHIELD
              </h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                High-grade nano-ceramic tint package providing solar IR mitigation & daily clearcoat protection.
              </p>
              <div className="my-6 pt-4 border-t border-white/10 flex items-baseline gap-2">
                <span className="font-display font-black text-4xl text-white">
                  ${Math.round(baseP1 * priceMultiplier)}
                </span>
                <span className="text-xs text-silver font-mono">/ complete vehicle</span>
              </div>
              <ul className="space-y-3 text-xs text-neutral-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Full Nano-Ceramic Window Tint (All Sides & Rear)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Single-Stage Paint Decontamination & Gloss Polish</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>2-Year Certified Hydrophobic Topcoat Seal</span>
                </li>
                <li className="flex items-center gap-2.5 text-neutral-500 line-through">
                  <X className="w-4 h-4 text-neutral-600 flex-shrink-0" />
                  <span>Front High-Impact Self-Healing PPF</span>
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-8 w-full py-3.5 text-center border border-white/20 text-white hover:bg-white hover:text-black font-display font-bold text-xs uppercase tracking-wider rounded transition-colors block"
            >
              SELECT ESSENTIAL SHIELD
            </Link>
          </div>

          {/* Card 2 */}
          <div className="relative bg-carbon text-white rounded-2xl p-6 sm:p-8 border-2 border-crimson shadow-2xl shadow-crimson/20 transform lg:-translate-y-4 flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-crimson text-white px-4 py-1 rounded-full text-[10px] font-display font-black tracking-widest uppercase shadow-glow-red">
              MOST POPULAR CHOICE
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold tracking-widest text-crimson uppercase">
                STAGE 02 • COMPREHENSIVE ARMOR
              </div>
              <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white mt-1">
                TRACK & GLOSS PRO
              </h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Integrated track package shielding impact zones with PPF and coating paintwork in certified liquid glass.
              </p>
              <div className="my-6 pt-4 border-t border-white/10 flex items-baseline gap-2">
                <span className="font-display font-black text-5xl text-white">
                  ${Math.round(baseP2 * priceMultiplier)}
                </span>
                <span className="text-xs text-silver font-mono">/ complete vehicle</span>
              </div>
              <ul className="space-y-3 text-xs text-neutral-200">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>Full Ceramic Solar IR Tint (Windshield Included)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>Front Track Pack 8.5-Mil PPF (Bumper, Hood, Fenders, Mirrors)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>5-Year Certified 9H Liquid Glass Ceramic Shield</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                  <span>Ultra-Hydrophobic Wheel & Brembo Caliper Ceramic Coating</span>
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-8 w-full py-4 text-center bg-crimson hover:bg-crimson/90 text-white font-display font-black text-xs uppercase tracking-widest rounded shadow-glow-red transition-all block"
            >
              SELECT TRACK & GLOSS PRO
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-carbon border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono font-bold tracking-widest text-silver uppercase">
                STAGE 03 • CONCOURSE LEVEL
              </div>
              <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white mt-1">
                BESPOKE CONCOURSE
              </h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Full-body automotive wrapping and dual-layer coating, PPF wrap, and custom paintwork enhancements.
              </p>
              <div className="my-6 pt-4 border-t border-white/10 flex items-baseline gap-2">
                <span className="font-display font-black text-4xl text-white">
                  ${Math.round(baseP3 * priceMultiplier)}
                </span>
                <span className="text-xs text-silver font-mono">/ complete vehicle</span>
              </div>
              <ul className="space-y-3 text-xs text-neutral-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Full-Body Stealth Matte or Mirror Ultra-Gloss 8.5-Mil PPF Wrap</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>10H Graphene Dual-Layer Coating (10-Year Warranty)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Multi-Stage Paint Correction + Custom Accent Respray</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Interior Alcantara & Fine Leather Hydrophobic Shield</span>
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-8 w-full py-3.5 text-center border border-white/20 text-white hover:bg-white hover:text-black font-display font-bold text-xs uppercase tracking-wider rounded transition-colors block"
            >
              SELECT BESPOKE CONCOURSE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

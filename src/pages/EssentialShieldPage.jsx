import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Sun,
  Droplets,
  Clock,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Award
} from 'lucide-react';

export default function EssentialShieldPage() {
  const [vehicleClass, setVehicleClass] = useState('Sports');
  const [activeFaq, setActiveFaq] = useState(null);

  const priceMap = {
    Sports: 499,
    Sedan: 574,
    SUV: 649,
    Exotic: 749
  };

  const currentPrice = priceMap[vehicleClass];

  const faqs = [
    {
      q: 'How long does the Essential Shield installation take?',
      a: 'The Essential Shield is our signature same-day service. Typical turnaround is approximately 5 to 6 hours from vehicle intake to final QC audit and release.'
    },
    {
      q: 'Does this package include full side and rear window tint?',
      a: 'Yes. All side roll-down windows, quarter glass, and the full rear heated glass are precision micro-shaved with our nano-ceramic film. The front windshield visor strip is also included.'
    },
    {
      q: 'What is the single-stage gloss polish process?',
      a: 'After an iron fallout bath and fine clay bar decontamination, our master technicians use high-gloss micro-finishing pads with Rupes rotary polishers to eliminate mild wash haze and amplify clearcoat gloss before applying the 2-year hydrophobic sealant.'
    },
    {
      q: 'Can I upgrade to 10H Graphene Coating or Front PPF later?',
      a: 'Yes. If you decide to add front bumper PPF or upgrade to permanent 10H ceramic within 90 days, 100% of your Stage 01 polish investment is credited directly toward Stage 02.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-silver font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <Shield className="w-3.5 h-3.5 text-white" />
            <span>STAGE 01 • ESSENTIAL ENTRY SPECIFICATION</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white leading-tight">
            ESSENTIAL SHIELD PACKAGE
          </h1>
          <p className="text-silver text-sm sm:text-base font-body mt-4 leading-relaxed">
            The fundamental automotive protection suite. Combines complete vehicle nano-ceramic infrared window shielding with a single-stage clearcoat decontamination polish and a certified 2-year hydrophobic topcoat barrier.
          </p>

          {/* Pricing Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-carbon border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono text-silver uppercase block">CALIBRATED PRICING</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display font-black text-4xl sm:text-5xl text-white">${currentPrice}</span>
                <span className="text-xs text-silver font-mono">/ complete vehicle</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-obsidian border border-white/10 text-xs font-mono">
              {['Sports', 'Sedan', 'SUV', 'Exotic'].map((c) => (
                <button
                  key={c}
                  onClick={() => setVehicleClass(c)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    vehicleClass === c ? 'bg-crimson text-white font-bold shadow-glow-red' : 'text-silver hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all whitespace-nowrap"
            >
              BOOK THIS PLAN
            </Link>
          </div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Sun className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-2xl text-white">99% UV CUT</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Full Sides & Rear</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Sparkles className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">STAGE 1</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Gloss Decon Polish</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Droplets className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">2 YEARS</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Hydrophobic Topcoat</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Clock className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">SAME DAY</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">5-Hour Cleanroom Turn</p>
          </div>
        </div>
      </section>

      {/* 2. DETAILED INCLUSIONS */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            SCOPE OF LAB SERVICES
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            WHAT IS INCLUDED IN STAGE 01
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10 space-y-3">
            <span className="text-crimson font-mono font-bold text-xs uppercase">SERVICE 01</span>
            <h3 className="font-display font-bold text-lg text-white uppercase">Full Nano-Ceramic Window Tint</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              All side windows and rear glass tinted with our dielectric nano-ceramic film. You choose any legal darkness from 5% limo to 70% clear. Digital CAD-plotted and micro-shaved edges.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10 space-y-3">
            <span className="text-crimson font-mono font-bold text-xs uppercase">SERVICE 02</span>
            <h3 className="font-display font-bold text-lg text-white uppercase">Chemical Decon & Gloss Polish</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              Multi-chemical iron fallout bath neutralizes embedded brake dust, followed by a fine clay bar treatment and single-stage machine polish to maximize mirror gloss.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10 space-y-3">
            <span className="text-crimson font-mono font-bold text-xs uppercase">SERVICE 03</span>
            <h3 className="font-display font-bold text-lg text-white uppercase">2-Year Hydrophobic Barrier</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              Fluorocarbon polymer sealant hand-buffed across all painted panels and wheels, creating a high-surface tension shield that beads water and resists light environmental contamination.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SAME DAY CLINICAL INTAKE TIMELINE */}
      <section className="py-20 bg-carbon/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              SCHEDULE TIMELINE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              THE 5-HOUR SAME-DAY PROTOCOL
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">08:00 AM</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Vehicle Intake</h4>
              <p className="text-xs text-silver mt-1">36-point paint inspection under high-CRI lighting.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">09:30 AM</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Decon Bath</h4>
              <p className="text-xs text-silver mt-1">pH-neutral foam bath, iron fallout bath, and clay bar.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">11:00 AM</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Gloss Machine Polish</h4>
              <p className="text-xs text-silver mt-1">Rupes rotary machine buffing to amplify clearcoat depth.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">12:30 PM</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Cleanroom Tint Fit</h4>
              <p className="text-xs text-silver mt-1">Micro-edge shaved nano-ceramic installation in cleanroom.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">02:00 PM</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Certified Release</h4>
              <p className="text-xs text-silver mt-1">Sealant cured, final wipe-down, and client handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQS */}
      <section className="py-20 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
            STAGE 01 ESSENTIAL SHIELD FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-carbon border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-display font-bold text-sm text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-crimson transition-transform duration-200 flex-shrink-0 ${
                    activeFaq === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeFaq === i && (
                <div className="px-5 pb-5 text-xs text-silver leading-relaxed font-body border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-carbon border-2 border-white/20 shadow-2xl">
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white">
            BOOK ESSENTIAL SHIELD FOR ${currentPrice}
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Reserve your same-day cleanroom slot today. Includes 2-year warranty certificate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
            >
              CONFIRM STAGE 01 BOOKING
            </Link>
            <Link
              to="/packages"
              className="px-6 py-3.5 bg-obsidian hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/20 transition-all"
            >
              COMPARE ALL 4 STAGES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

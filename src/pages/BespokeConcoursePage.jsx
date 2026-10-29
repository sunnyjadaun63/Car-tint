import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Award,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Clock,
  Palette,
  Maximize2
} from 'lucide-react';

export default function BespokeConcoursePage() {
  const [vehicleClass, setVehicleClass] = useState('Sports');
  const [activeFaq, setActiveFaq] = useState(null);

  const priceMap = {
    Sports: 2899,
    Sedan: 3334,
    SUV: 3769,
    Exotic: 4349
  };

  const currentPrice = priceMap[vehicleClass];

  const faqs = [
    {
      q: 'What distinguishes Bespoke Concourse from standard full-body wraps?',
      a: 'Bespoke Concourse is our zero-compromise artisan installation. We disassemble door handles, side mirrors, light housings, and badges to hand-wrap and tuck every edge 1/4-inch behind panels. There are zero relief cuts, zero visible seams, and zero razor blade marks.'
    },
    {
      q: 'Can I choose between Stealth Satin Matte or Mirror Ultra-Gloss?',
      a: 'Yes, both finishes are identical in price. Stealth transforms any factory gloss color into a satin frozen finish with subtle metallic sheen. Mirror Ultra-Gloss provides optically invisible protection with zero orange-peel texture.'
    },
    {
      q: 'What interior protection is included in this package?',
      a: 'We coat all interior leather, Alcantara steering wheels, seat bolsters, and carbon fiber consoles with breathable fluorinated ceramics that prevent dye transfer, jean staining, and UV cracking.'
    },
    {
      q: 'What is the warranty and annual maintenance commitment?',
      a: 'Bespoke Concourse includes our 10-Year Studio Warranty registered with CARFAX. It includes free annual inspection audits, iron fallout bath decontamination, and topcoat booster reapplications.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>STAGE 03 • SHOW CONCOURSE LEVEL SPECIFICATION</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white leading-tight">
            BESPOKE CONCOURSE WRAP
          </h1>
          <p className="text-silver text-sm sm:text-base font-body mt-4 leading-relaxed">
            The pinnacle of automotive exterior architecture. 100% full-body edge-wrapped Paint Protection Film (Stealth Matte or Mirror Gloss), multi-stage paint correction, dual-layer 10H graphene coating, and complete interior Alcantara protection.
          </p>

          {/* Pricing Box */}
          <div className="mt-8 p-6 rounded-3xl bg-carbon border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono text-silver uppercase font-bold block">CONCOURSE LEVEL SPECIFICATION</span>
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
              className="px-6 py-3 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl shadow-glow-red transition-all whitespace-nowrap"
            >
              BOOK CONCOURSE WRAP
            </Link>
          </div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Layers className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-2xl text-white">100% BODY</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Wrapped Edge-to-Edge</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Sparkles className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">10H GRAPHENE</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Dual-Layer Curing</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Palette className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">GLOSS / MATTE</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Client Choice</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Clock className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">5 DAYS</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Artisan Cleanroom Build</p>
          </div>
        </div>
      </section>

      {/* 2. INCLUSIONS BREAKDOWN */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            SHOW CONCOURSE STANDARD
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            EXHAUSTIVE PACKAGE INCLUSIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-carbon border border-white/10 space-y-4">
            <span className="text-crimson font-mono font-bold text-xs uppercase">PHASE 01</span>
            <h3 className="font-display font-bold text-lg text-white uppercase">Full Body PPF Wrapping</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              Every exterior painted panel (bumpers, hood, fenders, doors, roof, pillars, quarter panels, rocker panels, rear diffuser) wrapped with edges hand-tucked behind seals and emblems.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-carbon border border-white/10 space-y-4">
            <span className="text-crimson font-mono font-bold text-xs uppercase">PHASE 02</span>
            <h3 className="font-display font-bold text-lg text-white uppercase">10H Graphene Dual-Layer</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              Two layers of reduced graphene oxide applied directly over the film to deliver 115° contact water beading and an anti-static finish that repels track rubber and brake dust.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-carbon border border-white/10 space-y-4">
            <span className="text-crimson font-mono font-bold text-xs uppercase">PHASE 03</span>
            <h3 className="font-display font-bold text-lg text-white uppercase">Cabin Alcantara & Leather</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              Micro-coating applied to leather seat bolsters, dashboard surfaces, Alcantara steering wheel wraps, and door cards to prevent dye transfer and liquid spills.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 5-DAY ARTISAN TIMELINE */}
      <section className="py-20 bg-carbon/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              5-DAY WORKFLOW
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              THE 5-DAY CONCOURSE TIMELINE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">DAY 01</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Intake & Decon</h4>
              <p className="text-xs text-silver mt-1">Chemical fallout bath, clay bar, multi-stage rotary compounding.</p>
            </div>
            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">DAY 02</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Disassembly & Front PPF</h4>
              <p className="text-xs text-silver mt-1">Emblems & trim removed. Hood, bumper, and fenders wrapped.</p>
            </div>
            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">DAY 03</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Body Wrap Completion</h4>
              <p className="text-xs text-silver mt-1">Doors, quarters, roof, and rear clip wrapped with tucked edges.</p>
            </div>
            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">DAY 04</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">Graphene & IR Bake</h4>
              <p className="text-xs text-silver mt-1">Dual-layer 10H graphene applied over film and baked under IR lamps.</p>
            </div>
            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">DAY 05</span>
              <h4 className="font-display font-bold text-sm text-white uppercase mt-1">QC Audit & Release</h4>
              <p className="text-xs text-silver mt-1">200-point edge audit, CARFAX registration, and enclosed trailer dispatch.</p>
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
            BESPOKE CONCOURSE FAQ
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
        <div className="p-8 sm:p-12 rounded-3xl bg-carbon border-2 border-crimson/50 shadow-2xl">
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white">
            COMMISSION BESPOKE CONCOURSE FOR ${currentPrice}
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Give your hypercar the highest standard of exterior defense. 10-year transferable warranty included.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
            >
              RESERVE CONCOURSE BUILD
            </Link>
            <Link
              to="/packages"
              className="px-6 py-3.5 bg-obsidian hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/20 transition-all"
            >
              VIEW ALL 4 PACKAGES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

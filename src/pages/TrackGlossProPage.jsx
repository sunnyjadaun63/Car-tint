import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  Sun,
  Layers,
  CheckCircle2,
  Check,
  ArrowRight,
  ChevronDown,
  Award,
  Clock,
  Droplets,
  Flame
} from 'lucide-react';

export default function TrackGlossProPage() {
  const [vehicleClass, setVehicleClass] = useState('Sports');
  const [activeFaq, setActiveFaq] = useState(null);

  const priceMap = {
    Sports: 1299,
    Sedan: 1494,
    SUV: 1689,
    Exotic: 1949
  };

  const currentPrice = priceMap[vehicleClass];

  const faqs = [
    {
      q: 'Why is Track & Gloss Pro our most popular package?',
      a: 'It offers the perfect 80/20 balance. Over 85% of road stone chips strike the front bumper, hood, and mirrors, so we shield those vulnerable panels with 8.5-mil high-impact PPF. The rest of the vehicle receives certified 5-year 9H liquid glass ceramic coating, providing comprehensive concourse protection at a fraction of a full-body wrap cost.'
    },
    {
      q: 'Is the front windshield tint included in Track & Gloss Pro?',
      a: 'Yes. Unlike entry packages, Track & Gloss Pro includes our 70% or 80% Crystal Nano-Ceramic optical shield across the entire front windshield, mitigating 89%+ of radiant solar heat entering the driver cockpit.'
    },
    {
      q: 'Do you ceramic coat on top of the front PPF film?',
      a: 'Yes. We apply specialized flexible ceramic topcoat directly over the front PPF and across the unfilmed factory paintwork, ensuring unified 115° hydrophobic water beading and uniform gloss across the entire vehicle.'
    },
    {
      q: 'How long does this package take to complete?',
      a: 'Track & Gloss Pro requires 2 full business days. Day 1 is dedicated to clinical decontamination, multi-stage rotary compounding, and cleanroom PPF installation. Day 2 is dedicated to ceramic application, infrared heat curing bake, and final quality control audit.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-4 shadow-glow-red">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAGE 02 • THE COMPREHENSIVE DUAL-ARMOR SYSTEM</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white leading-tight">
            TRACK & GLOSS PRO
          </h1>
          <p className="text-silver text-sm sm:text-base font-body mt-4 leading-relaxed">
            Our flagship comprehensive armor specification. Combines high-impact 8.5-mil Front Track Pack PPF with certified 5-year 9H liquid glass ceramic coating, full solar IR window tinting, and wheel barrel ceramic seals.
          </p>

          {/* Pricing Box */}
          <div className="mt-8 p-6 rounded-3xl bg-carbon border-2 border-crimson shadow-2xl shadow-crimson/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono text-crimson uppercase font-bold block">FLAGSHIP SPECIFICATION</span>
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
              LOCK STAGE 02 INTAKE
            </Link>
          </div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <ShieldCheck className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-2xl text-white">8.5 MIL PPF</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Front Impact Zones</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Sparkles className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">5 YEARS</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">9H Liquid Glass Shield</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Sun className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">360° TINT</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Windshield Included</p>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Clock className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">48 HOURS</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">IR Oven Curing Bake</p>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE SERVICE CHECKLIST */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            DUAL-ARMOR INTEGRATION
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            EVERY SERVICE INCLUDED IN TRACK & GLOSS PRO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-carbon border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>PART 1: 8.5-MIL PHYSICAL IMPACT ARMOR</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white uppercase">Front Track Pack PPF</h3>
            <ul className="space-y-3 text-xs text-neutral-300 font-mono">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Full Front Bumper & Low Front Splitter (Wrapped Edges)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Full Front Hood with emblem removal & edges tucked</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Left & Right Front Fenders to A-pillar seam</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                <span>Side Mirrors & High-CRI LED Headlight Housings</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-carbon border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
              <Sparkles className="w-4 h-4" />
              <span>PART 2: 9H LIQUID GLASS CERAMIC & TINT</span>
            </div>
            <h3 className="font-display font-bold text-xl text-white uppercase">5-Year Covalent Glass & Solar Tint</h3>
            <ul className="space-y-3 text-xs text-neutral-300 font-mono">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Certified 9H Liquid Glass across doors, roof, trunk & rear bumper</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Flexible ceramic topcoat applied directly over the front PPF film</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Full Ceramic IR Window Tint (Sides, Rear, & Front Windshield)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>360° Wheel Barrel & Brembo Caliper Ceramic Seal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 2-DAY CLEANROOM TIMELINE */}
      <section className="py-20 bg-carbon/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              PRECISION WORKFLOW
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              THE 48-HOUR DUAL-STAGE PROTOCOL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-obsidian border border-white/10 space-y-3">
              <span className="text-crimson font-mono font-bold text-xs">DAY 01: DECON & PPF INSTALLATION</span>
              <ul className="space-y-2 text-xs font-mono text-silver">
                <li>• 08:00 AM – Chemical iron fallout bath & foam decontamination</li>
                <li>• 10:30 AM – Multi-stage rotary machine compounding & gloss polishing</li>
                <li>• 01:00 PM – Cleanroom CAD laser plotting & panel prep</li>
                <li>• 03:00 PM – Front track pack 8.5-mil PPF application & edge tucking</li>
                <li>• 06:00 PM – Overnight moisture stabilization & initial cure</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian border border-white/10 space-y-3">
              <span className="text-cyan-400 font-mono font-bold text-xs">DAY 02: CERAMIC COATING & IR BAKE</span>
              <ul className="space-y-2 text-xs font-mono text-silver">
                <li>• 08:30 AM – Full 360° nano-ceramic window tinting installation</li>
                <li>• 11:00 AM – Solvent wipe & 9H liquid glass application (Paint + PPF)</li>
                <li>• 01:30 PM – Wheels-off ceramic barrel & caliper application</li>
                <li>• 03:00 PM – 16-Hour targeted short-wave infrared heat lamp bake</li>
                <li>• 05:30 PM – Gloss-meter audit, CARFAX registration & release</li>
              </ul>
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
            TRACK & GLOSS PRO FAQ
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
        <div className="p-8 sm:p-12 rounded-3xl bg-carbon border-2 border-crimson shadow-2xl shadow-crimson/20">
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white">
            RESERVE TRACK & GLOSS PRO FOR ${currentPrice}
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Our most requested package. 2-day cleanroom turnaround with transferable 5-year warranty.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
            >
              BOOK STAGE 02 INTAKE
            </Link>
            <Link
              to="/packages"
              className="px-6 py-3.5 bg-obsidian hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/20 transition-all"
            >
              COMPARE ALL PACKAGES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

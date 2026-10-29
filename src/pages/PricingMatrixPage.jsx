import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  CheckCircle2,
  X,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Palette,
  Calculator,
  ChevronDown
} from 'lucide-react';

export default function PricingMatrixPage() {
  const [vehicleClass, setVehicleClass] = useState('Sports');
  const [multiplier, setMultiplier] = useState(1.0);
  const [activeFaq, setActiveFaq] = useState(null);

  const classes = [
    { id: 'Sports', label: 'Sports / Coupe', mult: 1.0, examples: '911, Corvette, Cayman, M4, Emira' },
    { id: 'Sedan', label: 'Executive Sedan', mult: 1.15, examples: 'Panamera, M5, RS7, S-Class, Taycan' },
    { id: 'SUV', label: 'Luxury SUV / Truck', mult: 1.3, examples: 'Urus, Cayenne, G-Wagen, DBX, Cullinan' },
    { id: 'Exotic', label: 'Hypercar / Bespoke', mult: 1.5, examples: 'Revuelto, SF90, Chiron, Valkyrie, Jesko' }
  ];

  const handleClassSelect = (cls, mult) => {
    setVehicleClass(cls);
    setMultiplier(mult);
  };

  const p1 = Math.round(499 * multiplier);
  const p2 = Math.round(1299 * multiplier);
  const p3 = Math.round(2899 * multiplier);
  const p4 = Math.round(4899 * multiplier);

  const addOns = [
    { name: 'Ceramic Wheel Coating (Barrel & Face)', price: '$299' },
    { name: 'Brembo Caliper Ceramic Refinishing (4x)', price: '$699' },
    { name: 'Full Windshield 70% Optical IR Shield', price: '$249' },
    { name: 'Interior Leather & Alcantara Shield', price: '$399' },
    { name: 'Headlight & Fog Light Sacrificial PPF', price: '$189' },
    { name: 'Door Cups, Edges & Trunk Luggage Strip PPF', price: '$149' },
  ];

  const faqs = [
    {
      q: 'Why does pricing scale with vehicle body class?',
      a: 'Larger vehicles such as luxury SUVs, long-wheelbase executive sedans, and complex aerodynamic hypercars require significantly more square footage of raw material, multi-curved heat shrinkage time, and extra labor hours for cleanroom edge wrapping.'
    },
    {
      q: 'Do you offer package discounts if bundling multiple services?',
      a: 'Yes. Combining Nano-Ceramic Window Tint with our 10H Ceramic Coating or Front Track Pack PPF automatically saves between 15% and 25% compared to purchasing individual à la carte services.'
    },
    {
      q: 'Are your listed prices inclusive of surface paint correction?',
      a: 'Stage 01 includes a single-stage decontamination gloss polish. Stages 02, 03, and 04 include comprehensive multi-stage rotary compounding and jewel polishing to eliminate 98%+ of swirl marks prior to coating or film application.'
    },
    {
      q: 'Can I pay in installments or secure cleanroom dates with a deposit?',
      a: 'We accept all major corporate credit cards, wire transfers, and provide 0% APR financing options through Affirm and ShopPay. A 20% refundable deposit secures your reserved cleanroom bay date.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO HEADER */}
      <section className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>PILLAR 06 • TRANSPARENT PRICING ARCHITECTURE</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white mt-1">
          VEHICLE CLASS PRICING MATRIX
        </h1>
        <p className="text-xs sm:text-sm text-silver mt-2 max-w-2xl mx-auto font-body">
          Select your vehicle silhouette below to calculate certified transparent pricing across all four APEX protection stages.
        </p>

        {/* Vehicle Class Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-10">
          {classes.map((c) => (
            <button
              key={c.id}
              onClick={() => handleClassSelect(c.id, c.mult)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                vehicleClass === c.id
                  ? 'bg-carbon border-crimson ring-2 ring-crimson/40 shadow-glow-red scale-105'
                  : 'bg-carbon/60 border-white/10 hover:border-white/20'
              }`}
            >
              <span className="text-[10px] font-mono text-crimson font-bold uppercase block">{c.mult}x MULTIPLIER</span>
              <h3 className="font-display font-bold text-sm text-white mt-1 uppercase">{c.label}</h3>
              <p className="text-[10px] text-silver font-mono mt-1 truncate">{c.examples}</p>
            </button>
          ))}
        </div>
      </section>

      {/* 2. THE 4 TIERED PLANS */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Stage 1 */}
          <div className="p-6 rounded-3xl bg-carbon border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">STAGE 01</span>
              <h3 className="font-display font-bold text-lg text-white mt-1 uppercase">Essential Shield</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">Nano-ceramic window tint with baseline hydrophobic sealant.</p>
              <div className="my-6 pt-4 border-t border-white/10">
                <span className="font-display font-black text-3xl text-white">${p1}</span>
                <span className="text-[10px] text-silver font-mono block mt-1">For {vehicleClass}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Full Ceramic Window Tint</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Single-Stage Gloss Polish</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 2-Yr Hydrophobic Seal</li>
                <li className="flex items-center gap-2 text-neutral-600 line-through"><X className="w-3.5 h-3.5 text-neutral-600" /> High-Impact PPF</li>
              </ul>
            </div>
            <Link to="/packages/essential-shield" className="mt-8 w-full py-3 bg-white/10 hover:bg-white/20 text-white text-center font-display font-bold text-xs uppercase rounded-xl transition-all block">
              VIEW STAGE 01 DETAILS
            </Link>
          </div>

          {/* Stage 2 */}
          <div className="p-6 rounded-3xl bg-carbon border-2 border-crimson shadow-glow-red flex flex-col justify-between relative transform lg:-translate-y-2">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-crimson px-3 py-0.5 rounded-full text-[9px] font-display font-black uppercase text-white whitespace-nowrap">
              MOST POPULAR
            </span>
            <div>
              <span className="text-[10px] font-mono font-bold text-crimson uppercase">STAGE 02</span>
              <h3 className="font-display font-bold text-lg text-white mt-1 uppercase">Track & Gloss Pro</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">Front impact PPF armor with 5-year 9H liquid glass coating.</p>
              <div className="my-6 pt-4 border-t border-white/10">
                <span className="font-display font-black text-3xl text-white">${p2}</span>
                <span className="text-[10px] text-silver font-mono block mt-1">For {vehicleClass}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-200 font-mono">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Ceramic Solar IR Tint</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Front Track 8.5-Mil PPF</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> 5-Year 9H Ceramic Shield</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Wheel & Caliper Coating</li>
              </ul>
            </div>
            <Link to="/packages/track-gloss-pro" className="mt-8 w-full py-3.5 bg-crimson hover:bg-crimson/90 text-white text-center font-display font-bold text-xs uppercase rounded-xl transition-all block shadow-glow-red">
              VIEW STAGE 02 DETAILS
            </Link>
          </div>

          {/* Stage 3 */}
          <div className="p-6 rounded-3xl bg-carbon border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">STAGE 03</span>
              <h3 className="font-display font-bold text-lg text-white mt-1 uppercase">Bespoke Concourse</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">Full body PPF wrap conversion with 10-year 10H graphene coating.</p>
              <div className="my-6 pt-4 border-t border-white/10">
                <span className="font-display font-black text-3xl text-white">${p3}</span>
                <span className="text-[10px] text-silver font-mono block mt-1">For {vehicleClass}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Full Body PPF (Gloss or Matte)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 10-Year 10H Graphene Coating</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Multi-Stage Paint Correction</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Alcantara & Leather Seal</li>
              </ul>
            </div>
            <Link to="/packages/bespoke-concourse" className="mt-8 w-full py-3 bg-white/10 hover:bg-white/20 text-white text-center font-display font-bold text-xs uppercase rounded-xl transition-all block">
              VIEW STAGE 03 DETAILS
            </Link>
          </div>

          {/* Stage 4 */}
          <div className="p-6 rounded-3xl bg-carbon border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">STAGE 04</span>
              <h3 className="font-display font-bold text-lg text-white mt-1 uppercase">Ultimate Concourse PTS</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">Total vehicle disassembly, custom caliper paint, and 100% wrapped edges.</p>
              <div className="my-6 pt-4 border-t border-white/10">
                <span className="font-display font-black text-3xl text-white">${p4}</span>
                <span className="text-[10px] text-silver font-mono block mt-1">For {vehicleClass}</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Full Stealth Body Conversion</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Brembo Caliper Paint-to-Sample</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Enclosed Trailer Transport</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Lifetime Studio Allocation</li>
              </ul>
            </div>
            <Link to="/contact" className="mt-8 w-full py-3 bg-white/10 hover:bg-white/20 text-white text-center font-display font-bold text-xs uppercase rounded-xl transition-all block">
              BOOK STAGE 04 INTAKE
            </Link>
          </div>
        </div>
      </section>

      {/* 3. À LA CARTE CUSTOMIZATION MENU */}
      <section className="py-20 bg-carbon/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              ENHANCEMENT MENU
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              INDIVIDUAL SERVICE ADD-ONS
            </h2>
            <p className="text-xs text-silver mt-2">
              Select specialized enhancements to integrate into your primary cleanroom build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {addOns.map((add, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-obsidian border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase">{add.name}</h4>
                  <span className="text-[10px] font-mono text-silver">Single vehicle application</span>
                </div>
                <span className="font-mono font-bold text-sm text-crimson">{add.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQS */}
      <section className="py-20 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
            PRICING & PACKAGES FAQ
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
            READY TO LOCK IN YOUR ALLOCATION?
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Book now with our cleanroom intake team. Transparent quote guaranteed with zero hidden fees.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
            >
              RESERVE STUDIO ALLOCATION
            </Link>
            <Link
              to="/estimate"
              className="px-6 py-3.5 bg-obsidian hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/20 transition-all"
            >
              USE INSTANT ESTIMATE ENGINE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

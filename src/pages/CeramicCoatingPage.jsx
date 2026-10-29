import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Shield,
  Droplets,
  Flame,
  CheckCircle,
  ArrowRight,
  Layers,
  ChevronDown,
  Sun,
  Award,
  Zap,
  Activity,
  Maximize2
} from 'lucide-react';

export default function CeramicCoatingPage() {
  const [activeLayer, setActiveLayer] = useState('graphene');
  const [activeFaq, setActiveFaq] = useState(null);

  const layerData = {
    clearcoat: {
      title: 'FACTORY OEM CLEARCOAT',
      thickness: '35 - 50 µm',
      role: 'Factory urethane clearcoat with microscopic porosity, prone to swirl marks, acid rain etching, and UV oxidation.'
    },
    primer: {
      title: 'NANO-SILICA COVALENT PRIMER',
      thickness: '0.5 µm',
      role: 'Sub-molecular bonding agent that fills paint microscopic peaks and valleys, creating an unyielding chemical anchor.'
    },
    graphene: {
      title: '10H REDUCED GRAPHENE MATRIX',
      thickness: '2.5 µm',
      role: 'True covalent crystalline network with diamond 10H pencil hardness. Heat resistant to 1,400°F and impervious to road salts.'
    },
    topcoat: {
      title: 'HYPER-HYDROPHOBIC SLICK TOPCOAT',
      thickness: '1.0 µm',
      role: 'Fluorocarbon-infused silica providing 115° contact water beading and an anti-static surface that repels road grime and dust.'
    }
  };

  const currentLayer = layerData[activeLayer];

  const faqs = [
    {
      q: 'What is the actual difference between 9H ceramic and 10H graphene coating?',
      a: '9H coatings use silicon dioxide (SiO2). Graphene introduces a two-dimensional hexagonal carbon lattice that significantly improves heat dispersion, eliminates water-spot etching, and increases scratch resistance from standard 9H to certified 10H on the ASTM D3363 scale.'
    },
    {
      q: 'Does my car need paint correction before ceramic coating?',
      a: 'Yes, mandatory. Ceramic coatings are semi-permanent liquid glass bonds that lock in whatever lies beneath them. Even brand-new factory vehicles arrive with dealership wash swirls, transit contamination, and micro-scratches that must be corrected to 98%+ perfection under high-CRI lights.'
    },
    {
      q: 'Can 10H ceramic coating be applied on top of Paint Protection Film (PPF)?',
      a: 'Absolutely. We formulate specialized PPF-specific ceramic coatings that flex with the film’s self-healing thermal expansion while infusing the film with extreme slickness, UV shielding, and ease of cleaning.'
    },
    {
      q: 'How do I wash and maintain the car after ceramic coating?',
      a: 'Maintenance is remarkably fast. Because dirt cannot bond to the 115° hydrophobic surface, a pH-neutral foam wash and touchless leaf blower or microfiber towel drying takes under 20 minutes. No waxing or polishing is ever needed.'
    },
    {
      q: 'What is the warranty and annual inspection process?',
      a: 'Our 10H Graphene Coating includes a 10-Year Studio Warranty registered in the CARFAX vehicle database. We offer annual inspections to decontaminate the topcoat with an iron bath and apply a booster seal.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PILLAR 02 • MOLECULAR LIQUID GLASS</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white leading-tight">
            10H GRAPHENE CERAMIC COATING
          </h1>
          <p className="text-silver text-sm sm:text-base font-body mt-4 leading-relaxed">
            Reduced graphene oxide hexagonal honeycomb lattice cross-linked with covalent silica polymers. Imparts extreme 10H ASTM scratch hardness, 115° contact water beading, and lasting mirror depth.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center gap-2"
            >
              <span>RESERVE COATING CLEANROOM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/packages"
              className="px-6 py-3.5 bg-carbon hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/15 transition-all"
            >
              VIEW TIERED PACKAGES
            </Link>
          </div>
        </div>

        {/* Telemetry Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Shield className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-3xl text-white">10H ASTM</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Pencil Hardness</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Maximum certified hardness scale</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Droplets className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">115.4°</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Beading Contact Angle</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Tight water pearls roll off panels</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Flame className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">1,400°F</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Thermal Resistance</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Resists carbon ceramic rotor heat</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Award className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">10 YRS</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Certified Guarantee</p>
            <span className="text-[10px] text-silver/60 mt-2 block">CARFAX registered coverage</span>
          </div>
        </div>
      </section>

      {/* 2. MOLECULAR LAYER ARCHITECTURE EXPLORER */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            MICRO-STRATIGRAPHY
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            MOLECULAR CROSS-LINKING ARCHITECTURE
          </h2>
          <p className="text-xs text-silver mt-2">
            Click each layer below to understand how our 4-stage covalent system bonds permanently to factory clearcoat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-carbon/90 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="lg:col-span-6 space-y-3">
            {[
              { id: 'topcoat', label: 'Layer 4: Hyper-Hydrophobic Topcoat', color: 'border-cyan-400/50 bg-cyan-950/20' },
              { id: 'graphene', label: 'Layer 3: 10H Graphene Hexagonal Lattice', color: 'border-crimson/50 bg-crimson/15' },
              { id: 'primer', label: 'Layer 2: Nano-Silica Covalent Primer', color: 'border-amber-400/50 bg-amber-950/20' },
              { id: 'clearcoat', label: 'Layer 1: Factory OEM Clearcoat Surface', color: 'border-white/20 bg-white/5' }
            ].map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`w-full p-4 rounded-xl border text-left font-mono text-xs transition-all flex items-center justify-between ${
                  activeLayer === layer.id
                    ? `${layer.color} border-2 scale-[1.02] shadow-lg text-white font-bold`
                    : 'bg-obsidian border-white/10 text-silver hover:text-white'
                }`}
              >
                <span>{layer.label}</span>
                <span className="text-[10px] text-silver/60">
                  {layerData[layer.id].thickness}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-obsidian border border-white/10 space-y-4 font-mono">
            <span className="text-[10px] text-crimson font-bold uppercase tracking-wider block">
              LAYER SPECIFICATION AUDIT
            </span>
            <h3 className="font-display font-black text-xl text-white uppercase">
              {currentLayer.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-silver border-y border-white/5 py-3">
              <span>Thickness: <strong className="text-white">{currentLayer.thickness}</strong></span>
              <span>•</span>
              <span>ASTM Hardness: <strong className="text-emerald-400">Certified 10H</strong></span>
            </div>
            <p className="text-xs text-silver leading-relaxed font-body">
              {currentLayer.role}
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono text-crimson hover:underline font-bold"
              >
                <span>Book 4-Layer Application Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HARDNESS & TEST AUDIT COMPARISON */}
      <section className="py-20 bg-carbon/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              LABORATORY DEFORMATION TESTING
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              ASTM D3363 PENCIL HARDNESS AUDIT
            </h2>
            <p className="text-xs text-silver mt-2">
              Testing clearcoat resistance against scratch deformation under mechanical pressure.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border border-white/10 rounded-2xl overflow-hidden bg-obsidian">
              <thead className="bg-carbon border-b border-white/10 text-silver text-[11px] uppercase">
                <tr>
                  <th className="p-4">Surface Treatment</th>
                  <th className="p-4">ASTM Hardness</th>
                  <th className="p-4">Contact Angle</th>
                  <th className="p-4">Durability</th>
                  <th className="p-4">Chemical pH Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-silver">
                <tr>
                  <td className="p-4 font-bold text-white">Carnuaba Paste Wax</td>
                  <td className="p-4 text-neutral-400">1H – 2H</td>
                  <td className="p-4 text-neutral-400">85° – 90°</td>
                  <td className="p-4 text-red-400 font-bold">1 – 3 Months</td>
                  <td className="p-4 text-neutral-400">pH 7 (Neutral only)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Polymer Sealant</td>
                  <td className="p-4 text-neutral-400">3H – 4H</td>
                  <td className="p-4 text-neutral-400">92° – 98°</td>
                  <td className="p-4 text-yellow-400 font-bold">6 – 8 Months</td>
                  <td className="p-4 text-neutral-400">pH 6 – pH 8</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Standard SiO2 Ceramic</td>
                  <td className="p-4 text-neutral-300">9H</td>
                  <td className="p-4 text-cyan-400">105° – 110°</td>
                  <td className="p-4 text-emerald-400 font-bold">2 – 5 Years</td>
                  <td className="p-4 text-emerald-400">pH 3 – pH 11</td>
                </tr>
                <tr className="bg-crimson/10 font-bold text-white">
                  <td className="p-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-crimson"></span>
                    <span>APEX 10H Graphene Pro</span>
                  </td>
                  <td className="p-4 text-crimson font-black text-sm">10H ASTM</td>
                  <td className="p-4 text-cyan-400 font-black text-sm">115.4°</td>
                  <td className="p-4 text-emerald-400 font-black text-sm">10 Years</td>
                  <td className="p-4 text-emerald-400 font-black text-sm">pH 2 – pH 13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. MULTI-SURFACE APPLICATION ZONES */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            TOTAL VEHICLE IMMERSION
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            SPECIALIZED SURFACE FORMULATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <span className="text-crimson font-mono font-bold text-xs">ZONE 01</span>
            <h4 className="font-display font-bold text-base text-white mt-2">Exterior Paintwork & Carbon</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Full multi-stage compounding followed by dual-layer 10H graphene application cured under infrared bake lamps.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <span className="text-crimson font-mono font-bold text-xs">ZONE 02</span>
            <h4 className="font-display font-bold text-base text-white mt-2">Brembo Calipers & Wheels</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Wheels removed for 360° inner barrel and brake caliper ceramic coat resisting 1,400°F track temperatures and brake dust.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <span className="text-crimson font-mono font-bold text-xs">ZONE 03</span>
            <h4 className="font-display font-bold text-base text-white mt-2">Hydrophobic Exterior Glass</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Fluorinated glass coating causing rainwater to disperse effortlessly above 40 mph without requiring wiper blades.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <span className="text-crimson font-mono font-bold text-xs">ZONE 04</span>
            <h4 className="font-display font-bold text-base text-white mt-2">Interior Alcantara & Leather</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Invisible breathable nanoparticle barrier repelling coffee, dye transfers, UV fading, and liquid spills on Italian leather.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="py-20 bg-carbon/40 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              KNOWLEDGE BASE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              CERAMIC & GRAPHENE FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl bg-obsidian border border-white/10 overflow-hidden transition-all"
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
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-carbon border-2 border-crimson/50 shadow-2xl">
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white">
            INVEST IN MOLECULAR LIQUID GLASS
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Give your vehicle mirror gloss and permanent 10H ASTM protection. Includes 16-hour short-wave infrared bake.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
            >
              BOOK CERAMIC COATING
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

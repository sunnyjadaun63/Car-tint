import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ShieldCheck,
  RefreshCw,
  Zap,
  Check,
  ArrowRight,
  Shield,
  Activity,
  Maximize2,
  ChevronDown,
  Eye,
  Sliders
} from 'lucide-react';

export default function PpfArmorPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [finishType, setFinishType] = useState('stealth');

  const faqs = [
    {
      q: 'How does the thermal self-healing mechanism actually work?',
      a: 'The top layer consists of an advanced elastomeric polymer matrix with memory retention. When micro-scratches, swirl marks, or wash marring occur, warmth from the sun, engine heat, or warm water (120°F+) relaxes the polymer bonds, allowing them to reflow back into their original uniform flat state in under 30 seconds.'
    },
    {
      q: 'What is the difference between a Stealth Matte wrap and Gloss PPF?',
      a: 'Both use our 8.5-mil high-impact aliphatic TPU film. Gloss PPF is optically invisible, enhancing factory paint depth. Stealth Matte PPF has a micro-textured satin topcoat that diffuses specular reflections, transforming any factory gloss paint into a factory-grade satin frozen finish while maintaining full stone chip defense.'
    },
    {
      q: 'Do you wrap the edges and remove badges?',
      a: 'Yes. Wherever technically possible without compromising factory warranty, we remove emblems, side markers, and trim to wrap and tuck film edges seamlessly behind panels. There are no exposed dirty edge lines or visible relief cuts.'
    },
    {
      q: 'Will removing Paint Protection Film harm factory OEM paint later?',
      a: 'No. We utilize patented acrylic pressure-sensitive adhesives (PSA) engineered specifically for high-end automotive factory clearcoats. When removed by a certified technician using steam, the film pulls cleanly with zero adhesive residue or clearcoat delamination.'
    },
    {
      q: 'How long does a full vehicle wrap take to install?',
      a: 'A front Track Pack takes 2 business days. A full-body gloss or stealth conversion takes 4 to 6 business days, as every vehicle undergoes surgical intake decontamination, multi-stage paint correction, panel disassembly, cleanroom installation, and a 24-hour edge curing audit.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>PILLAR 03 • HIGH-IMPACT SACRIFICIAL ARMOR</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white leading-tight">
            PAINT PROTECTION FILM (PPF)
          </h1>
          <p className="text-silver text-sm sm:text-base font-body mt-4 leading-relaxed">
            High-tensile 8.5-mil aliphatic thermoplastic polyurethane (TPU) armor. Shields panels against 130+ mph highway stone impacts, road gravel, and key vandalism with instantaneous thermal scratch self-healing.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center gap-2"
            >
              <span>LOCK PPF CLEANROOM SLOT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/simulator"
              className="px-6 py-3.5 bg-carbon hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/15 transition-all"
            >
              SIMULATE STEALTH MATTE
            </Link>
          </div>
        </div>

        {/* Telemetry Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <ShieldCheck className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-3xl text-white">8.5 MIL</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Total Film Thickness</p>
            <span className="text-[10px] text-silver/60 mt-2 block">215 microns sacrificial gauge</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <RefreshCw className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">&lt; 30 SEC</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Thermal Self-Healing</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Triggered by sun or hot water</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Zap className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">130+ MPH</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Impact Resistance</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Ballistic gravel test certified</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Check className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">10 YRS</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Non-Yellowing Warranty</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Guaranteed against cracking or haze</span>
          </div>
        </div>
      </section>

      {/* 2. FILM ANATOMY DEEP DIVE */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            MICROSCOPIC STRATIGRAPHY
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            ANATOMY OF 8.5-MIL HIGH-IMPACT TPU
          </h2>
          <p className="text-xs text-silver mt-2">
            Engineered through three specialized polymer strata to absorb blunt kinetic energy while maintaining crystal optical transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-crimson font-bold">TOP LAYER • 0.5 MIL</span>
              <span className="text-silver">13 µm</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white uppercase">Elastomeric Self-Healing Clearcoat</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              Contains shape-memory polymers cross-linked with fluorocarbon slick agents. Repels environmental etching and autonomously heals car-wash swirls and key scuffs when heated.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border-2 border-crimson/50 shadow-glow-red space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-crimson font-bold">CORE LAYER • 6.0 MIL</span>
              <span className="text-silver">152 µm</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white uppercase">Aliphatic Thermoplastic Polyurethane</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              The shock-absorbing kinetic core. Yields under high-speed gravel strikes, dissipating stone impact forces laterally across the panel to protect factory paint from chipping.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-crimson font-bold">BASE LAYER • 2.0 MIL</span>
              <span className="text-silver">50 µm</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white uppercase">High-Tack Acrylic Polymer PSA</h3>
            <p className="text-xs text-silver leading-relaxed font-body">
              Optically clear repositionable pressure-sensitive adhesive. Bonds aggressively around complex aerodynamic curves and splitters without orange peel or lift lines.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FINISH COMPARISON: HIGH-GLOSS VS STEALTH SATIN MATTE */}
      <section className="py-20 bg-carbon/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              AESTHETIC FINISH SELECTION
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              CHOOSE YOUR ARMOR FINISH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Gloss Card */}
            <div className="p-8 rounded-2xl bg-obsidian border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-silver uppercase font-bold tracking-wider">OPTION A</span>
                <h3 className="font-display font-black text-2xl text-white uppercase mt-1">Ultra-Gloss Clear Shield</h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  100% optically clear invisible barrier. Preserves and deepens your factory paint's natural metallic flake and reflection without alteration.
                </p>
                <div className="mt-6 space-y-2 text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-2">✓ Completely invisible high-gloss finish</div>
                  <div className="flex items-center gap-2">✓ Enhances metallic & pearl clearcoat depth</div>
                  <div className="flex items-center gap-2">✓ Perfect for front Track Pack combinations</div>
                  <div className="flex items-center gap-2">✓ 10-Year Anti-Yellowing Warranty</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-8 w-full py-3 text-center border border-white/20 hover:bg-white hover:text-black font-display font-bold text-xs uppercase tracking-wider rounded transition-colors block"
              >
                SELECT ULTRA-GLOSS
              </Link>
            </div>

            {/* Stealth Card */}
            <div className="p-8 rounded-2xl bg-carbon border-2 border-crimson shadow-glow-red flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-crimson px-3 py-0.5 rounded-full text-[9px] font-display font-black uppercase text-white">
                FLAGSHIP CONVERSION
              </span>
              <div>
                <span className="text-[10px] font-mono text-crimson uppercase font-bold tracking-wider">OPTION B</span>
                <h3 className="font-display font-black text-2xl text-white uppercase mt-1">Stealth Satin Matte Armor</h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Transforms any gloss factory car into a satin frozen hypercar. Accentuates body creases, fender lines, and muscular curves with a rich matte finish.
                </p>
                <div className="mt-6 space-y-2 text-xs font-mono text-neutral-200">
                  <div className="flex items-center gap-2">✓ Converts gloss paint to bespoke frozen satin</div>
                  <div className="flex items-center gap-2">✓ Seamless edge wrapping behind badges & seals</div>
                  <div className="flex items-center gap-2">✓ Ceramic coating included over matte film</div>
                  <div className="flex items-center gap-2">✓ 100% reversible to factory gloss whenever desired</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-8 w-full py-3.5 text-center bg-crimson hover:bg-crimson/90 text-white font-display font-black text-xs uppercase tracking-widest rounded shadow-glow-red transition-all block"
              >
                SELECT STEALTH MATTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COVERAGE PACKAGES */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            PRECISION PACKAGES
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            ARMOR COVERAGE TIERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-silver font-bold uppercase">FRONT HIGH-IMPACT</span>
              <h3 className="font-display font-bold text-xl text-white mt-1">Front Track Pack</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Covers the primary strike areas susceptible to highway stone chips and debris.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">✓ Full Front Bumper & Splitter</li>
                <li className="flex items-center gap-2">✓ Full Hood (Seams Tucked)</li>
                <li className="flex items-center gap-2">✓ Left & Right Front Fenders</li>
                <li className="flex items-center gap-2">✓ Side Mirrors & Headlights</li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-8 w-full py-3 bg-white/10 hover:bg-crimson text-white text-center font-display font-bold text-xs uppercase rounded transition-colors block"
            >
              Configure Track Pack
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-silver font-bold uppercase">EXTENDED TRACK</span>
              <h3 className="font-display font-bold text-xl text-white mt-1">Extended Track & Rockers</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Adds high-velocity rear wheel tire kickback zones, rocker panels, and A-pillars.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">✓ Complete Front Track Pack</li>
                <li className="flex items-center gap-2">✓ Lower Rocker Panels & Sills</li>
                <li className="flex items-center gap-2">✓ Windshield A-Pillars & Roof Line</li>
                <li className="flex items-center gap-2">✓ Rear Wheel Impact Splash Splashbacks</li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-8 w-full py-3 bg-white/10 hover:bg-crimson text-white text-center font-display font-bold text-xs uppercase rounded transition-colors block"
            >
              Configure Extended
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border-2 border-crimson flex flex-col justify-between relative shadow-glow-red">
            <div>
              <span className="font-mono text-xs text-crimson font-bold uppercase">TOTAL WRAP</span>
              <h3 className="font-display font-bold text-xl text-white mt-1">Full Vehicle Concourse Wrap</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Every painted exterior surface wrapped edge-to-edge. Available in Gloss or Stealth Matte.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-neutral-200 font-mono">
                <li className="flex items-center gap-2">✓ 100% Complete Vehicle Coverage</li>
                <li className="flex items-center gap-2">✓ Doors, Quarter Panels, Trunk, Roof</li>
                <li className="flex items-center gap-2">✓ Ceramic Coating Applied Over PPF</li>
                <li className="flex items-center gap-2">✓ 10-Year Warranty & Free Annual Audit</li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-8 w-full py-3.5 bg-crimson hover:bg-crimson/90 text-white text-center font-display font-bold text-xs uppercase rounded transition-all block shadow-glow-red"
            >
              Configure Full Body
            </Link>
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
              PAINT PROTECTION FILM FAQ
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
            SECURE YOUR VEHICLE WITH SACRIFICIAL ARMOR
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Highway stone chips are permanent; our 8.5-mil TPU film takes the impact so your factory paint remains concourse-pristine.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
            >
              BOOK PPF INSTALLATION
            </Link>
            <Link
              to="/packages"
              className="px-6 py-3.5 bg-obsidian hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/20 transition-all"
            >
              VIEW FULL PRICING MATRIX
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

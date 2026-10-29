import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, RefreshCw, Zap, Check, ArrowRight } from 'lucide-react';

export default function PpfPage() {
  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* Hero Header */}
      <section className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-3">
          <Layers className="w-4 h-4" />
          <span>PILLAR 03 • PHYSICAL IMPACT DEFENSE</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-white max-w-3xl">
          PPF & STEALTH VINYL ARMOR
        </h1>
        <p className="text-silver text-sm sm:text-base font-body mt-3 max-w-2xl leading-relaxed">
          Thermoplastic polyurethane 8.5-mil sacrificial armor shielding panels against highway rock chips, road gravel, and key scratches with instantaneous thermal self-healing capabilities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <ShieldCheck className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-2xl text-white">8.5 MIL</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">High-Impact Gauge</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <RefreshCw className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">&lt;30 SEC</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Thermal Self-Healing</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Zap className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">100% CAD</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Laser Blade-Free Cut</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Check className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">10 YEARS</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Anti-Yellowing Warranty</p>
          </div>
        </div>
      </section>

      {/* Coverage Packages */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mb-8 text-center">
          CHOOSE YOUR ARMOR COVERAGE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-silver font-bold uppercase">FRONT BUMPER & HOOD</span>
              <h3 className="font-display font-bold text-xl text-white mt-1">Track Pack Front Shield</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Protects the highest-impact zones: front bumper, full hood, mirrors, and front fenders.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">✓ Front Bumper & Splitter</li>
                <li className="flex items-center gap-2">✓ Full Hood & Fenders</li>
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

          <div className="p-6 rounded-2xl bg-carbon border-2 border-crimson flex flex-col justify-between relative shadow-glow-red">
            <span className="absolute -top-3 right-6 bg-crimson px-3 py-0.5 rounded-full text-[9px] font-display font-bold uppercase">
              RECOMMENDED
            </span>
            <div>
              <span className="font-mono text-xs text-crimson font-bold uppercase">FULL BODY CONVERSION</span>
              <h3 className="font-display font-bold text-xl text-white mt-1">Full Stealth Matte Armor</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Converts any factory gloss finish into a factory satin matte supercar with 100% complete body coverage.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-neutral-200 font-mono">
                <li className="flex items-center gap-2">✓ Complete Body Wrap (All Panels)</li>
                <li className="flex items-center gap-2">✓ Edges Wrapped & Tucked Inside</li>
                <li className="flex items-center gap-2">✓ Transforms Gloss to Satin Matte</li>
                <li className="flex items-center gap-2">✓ Ceramic Coated Over PPF</li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-8 w-full py-3 bg-crimson hover:bg-crimson/90 text-white text-center font-display font-bold text-xs uppercase rounded transition-all block shadow-glow-red"
            >
              Configure Stealth Wrap
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-silver font-bold uppercase">HIGH-GLOSS PRESERVATION</span>
              <h3 className="font-display font-bold text-xl text-white mt-1">Full Ultra-Gloss Clear</h3>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Invisible 8.5-mil shield maintaining factory OEM gloss with zero orange peel distortion or seam lines.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">✓ 100% Panel Coverage</li>
                <li className="flex items-center gap-2">✓ Invisible Optical Clear Finish</li>
                <li className="flex items-center gap-2">✓ Self-Healing Under Sunlight</li>
                <li className="flex items-center gap-2">✓ 10-Year Warranty Registry</li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-8 w-full py-3 bg-white/10 hover:bg-crimson text-white text-center font-display font-bold text-xs uppercase rounded transition-colors block"
            >
              Configure Full Gloss
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

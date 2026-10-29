import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Droplets, Flame, CheckCircle, ArrowRight } from 'lucide-react';

export default function CoatingPage() {
  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* Hero Header */}
      <section className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-3">
          <Sparkles className="w-4 h-4" />
          <span>PILLAR 02 • MOLECULAR LIQUID GLASS</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-wider text-white max-w-3xl">
          10H GRAPHENE CERAMIC COATING
        </h1>
        <p className="text-silver text-sm sm:text-base font-body mt-3 max-w-2xl leading-relaxed">
          Engineered covalent liquid glass with reduced graphene oxide lattice matrix. Provides hyper-hydrophobic 115° contact water beading, extreme chemical resistance, and permanent deep mirror reflection.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Shield className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-2xl text-white">10H ASTM</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Pencil Hardness</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Droplets className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">115°</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Water Contact Angle</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <Flame className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">1,400°F</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Thermal Resistance</p>
          </div>
          <div className="p-4 rounded-xl bg-carbon border border-white/10">
            <CheckCircle className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-2xl text-white">10 YEARS</span>
            <p className="text-silver text-[11px] font-mono uppercase mt-1">Certified Guarantee</p>
          </div>
        </div>
      </section>

      {/* Visual Coating Matrix */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">COVALENT BONDING TECHNOLOGY</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              BEYOND WAX: MOLECULAR PERMANENCE
            </h2>
            <p className="text-xs text-silver mt-3 leading-relaxed">
              Traditional sealants sit atop clearcoat and wash away within months. APEX Graphene molecularly cross-links into clearcoat pores, forming a non-porous silica-graphene crystalline barrier that resists bird drop etching, industrial fallout, and UV oxidation.
            </p>

            <div className="space-y-4 mt-6">
              <div className="p-4 rounded-xl bg-carbon border border-white/10">
                <h4 className="font-display font-bold text-sm text-white uppercase">Self-Cleaning Hydrophobic Shield</h4>
                <p className="text-xs text-silver mt-1">Water forms tight spheres at 115° contact angles, rolling off panels and encapsulating surface dirt as you drive.</p>
              </div>
              <div className="p-4 rounded-xl bg-carbon border border-white/10">
                <h4 className="font-display font-bold text-sm text-white uppercase">Anti-Static Graphene Matrix</h4>
                <p className="text-xs text-silver mt-1">Reduces surface electrical conductivity to repel dust, brake powder, and road grime accumulation between washes.</p>
              </div>
              <div className="p-4 rounded-xl bg-carbon border border-white/10">
                <h4 className="font-display font-bold text-sm text-white uppercase">Infrared Curing Protocol</h4>
                <p className="text-xs text-silver mt-1">Each vehicle spends 16 hours under short-wave IR baking lamps at 140°F to guarantee full molecular curing.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-crimson text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red hover:bg-crimson/90 transition-all"
              >
                <span>RESERVE COATING BAY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/assets/coating-closeup.png"
              alt="10H Ceramic Coating Detail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-crimson font-bold">LABORATORY TEST AUDIT</span>
              <h3 className="font-display font-bold text-lg text-white mt-0.5">High-Pressure Water Beading Verification</h3>
              <p className="text-xs text-silver mt-1">Tested against pH 2 acids and pH 12 alkaline washes with zero optical degradation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

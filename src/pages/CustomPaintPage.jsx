import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Flame,
  ShieldAlert,
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Eye,
  Sliders,
  Sparkles,
  Zap
} from 'lucide-react';

export default function CustomPaintPage() {
  const [selectedCaliperColor, setSelectedCaliperColor] = useState('guards-red');
  const [activeFaq, setActiveFaq] = useState(null);

  const caliperColors = [
    { id: 'guards-red', name: 'Guards Red (OEM Porsche)', hex: '#D91424', logoColor: '#FFFFFF' },
    { id: 'racing-yellow', name: 'Racing Yellow (Ferrari Giallo)', hex: '#F0B800', logoColor: '#000000' },
    { id: 'acid-green', name: 'Acid Green (918 Spyder Spec)', hex: '#87E500', logoColor: '#000000' },
    { id: 'mexico-blue', name: 'Mexico Blue (Custom PTS)', hex: '#0070BA', logoColor: '#FFFFFF' },
    { id: 'titanium-bronze', name: 'Titanium Anodized Bronze', hex: '#8A623B', logoColor: '#FFFFFF' },
    { id: 'satin-black', name: 'Stealth Satin Black', hex: '#1A1A1D', logoColor: '#D91424' },
    { id: 'pearl-white', name: 'Bespoke Bianco Pearl', hex: '#F0EFF4', logoColor: '#D91424' },
    { id: 'tiffany-cyan', name: 'Tiffany Heritage Cyan', hex: '#0ABAB5', logoColor: '#000000' },
  ];

  const activeCaliper = caliperColors.find(c => c.id === selectedCaliperColor);

  const faqs = [
    {
      q: 'Will caliper painting withstand aggressive track day braking temperatures?',
      a: 'Yes. Standard automotive body paint burns, blisters, and turns brown above 350°F. APEX uses specialized high-temp poly-ceramic caliper coatings cured at 400°F that endure continuous 1,200°F rotor radiant heat cycles without discoloring or flaking.'
    },
    {
      q: 'Do you remove the calipers from the vehicle for painting?',
      a: 'Yes, mandatory. We never mask calipers on the car with plastic wrap like budget shops. Each caliper is unbolted, hydraulic lines capped, brake pads and stainless hardware removed, ultrasonically degreased, media-blasted, painted in our downdraft booth, cured, and re-bled with Motul 660 synthetic brake fluid.'
    },
    {
      q: 'Can you match my vehicle factory paint color or PTS (Paint-to-Sample)?',
      a: 'We use high-precision multi-angle spectrophotometer cameras to scan your vehicle VIN and paint flake density. We formulate Glasurit and PPG waterborne OEM paint mixtures to achieve 99.9% exact paint-to-sample matches for Porsche PTS, Ferrari Extra-Campionario, and Lamborghini Ad Personam colors.'
    },
    {
      q: 'Can carbon fiber splitters with clouding or stone rash be restored?',
      a: 'Yes. When carbon fiber clears oxidize from UV radiation, the epoxy resin turns cloudy yellow. We block-sand the failed top epoxy down to the bare carbon weave, inspect for structural fiber damage, and respray with high-solids UV-absorbing polyurethane clearcoat to restore 100% optical depth.'
    },
    {
      q: 'What is the warranty on custom caliper and paint booth work?',
      a: 'Our custom caliper refinishing and paint booth resprays include a 5-Year Studio Warranty covering peeling, blistering, flaking, or thermal discoloration under normal road and track conditions.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>PILLAR 04 • CONCOURSE REFINISHING</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white leading-tight">
            OEM+ CUSTOM PAINT BOOTH
          </h1>
          <p className="text-silver text-sm sm:text-base font-body mt-4 leading-relaxed">
            Pressurized Italian heated downdraft spray booths offering OEM+ concourse refinishing, multi-stage spectrophotometer color matching, high-temp Brembo caliper customizations, and carbon fiber aero resprays.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center gap-2"
            >
              <span>REQUEST PAINT ESTIMATE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              className="px-6 py-3.5 bg-carbon hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/15 transition-all"
            >
              VIEW PAINT STUDIO FILMS
            </Link>
          </div>
        </div>

        {/* Telemetry Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Palette className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-3xl text-white">99.9%</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Color Match Accuracy</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Spectrophotometer computerized mix</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Flame className="w-5 h-5 text-amber-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">1,200°F</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Caliper High-Temp Paint</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Track day continuous thermal rating</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <ShieldAlert className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">DOWNDRAFT</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Pressurized Booth</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Heated Italian baking cleanroom</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Award className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">5 YEARS</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Studio Warranty</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Against peeling, fading, or bubbling</span>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CALIPER FINISH SELECTOR */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            BESPOKE HARDWARE ACCENTS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            BREMBO & CERAMIC CALIPER STUDIO
          </h2>
          <p className="text-xs text-silver mt-2">
            Click through our factory-to-sample caliper color palette below to preview your brake hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-carbon/90 border border-white/10 rounded-2xl p-6 sm:p-8">
          {/* Caliper Visualization Mockup */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 bg-obsidian rounded-2xl border border-white/10 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 blur-3xl transition-colors duration-500"
              style={{ backgroundColor: activeCaliper.hex }}
            ></div>

            {/* SVG Caliper Representation */}
            <div className="relative z-10 w-full max-w-md aspect-[4/3] flex items-center justify-center">
              <div
                className="w-72 h-44 rounded-3xl p-6 border-4 flex flex-col justify-between shadow-2xl transition-all duration-300 relative"
                style={{
                  backgroundColor: activeCaliper.hex,
                  borderColor: 'rgba(255,255,255,0.3)',
                  boxShadow: `0 0 40px ${activeCaliper.hex}60`
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold" style={{ color: activeCaliper.logoColor }}>
                    6-PISTON MONOBLOC
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                  </div>
                </div>

                <div className="text-center my-auto">
                  <span
                    className="font-display font-black text-3xl tracking-[0.2em] uppercase transition-colors"
                    style={{ color: activeCaliper.logoColor }}
                  >
                    APEX
                  </span>
                  <span
                    className="block text-[9px] font-mono tracking-widest uppercase mt-0.5"
                    style={{ color: activeCaliper.logoColor, opacity: 0.8 }}
                  >
                    CERAMIC HEAT COATING
                  </span>
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono" style={{ color: activeCaliper.logoColor, opacity: 0.85 }}>
                  <span>ASTM 1200°F</span>
                  <span>10H TOPCOAT</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="font-display font-bold text-sm text-white uppercase block">
                {activeCaliper.name}
              </span>
              <span className="text-xs font-mono text-silver">
                Precision laser stenciled emblem + 10H ceramic coating barrier
              </span>
            </div>
          </div>

          {/* Color Swatch Options */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-display font-bold text-xs uppercase tracking-wider text-white block pb-2 border-b border-white/10">
              SELECT CALIPER COLORWAY
            </span>
            <div className="grid grid-cols-2 gap-3">
              {caliperColors.map((col) => (
                <button
                  key={col.id}
                  onClick={() => setSelectedCaliperColor(col.id)}
                  className={`p-3 rounded-xl border text-left font-mono text-xs transition-all flex items-center gap-3 ${
                    selectedCaliperColor === col.id
                      ? 'border-crimson bg-crimson/15 shadow-glow-red scale-[1.02] text-white font-bold'
                      : 'border-white/10 bg-obsidian text-silver hover:text-white'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-white/30 flex-shrink-0"
                    style={{ backgroundColor: col.hex }}
                  ></span>
                  <span className="truncate">{col.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-obsidian border border-white/10 space-y-2 text-xs font-mono text-silver mt-4">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Thermal Rating:</span>
                <span className="text-white font-bold">1,200°F (650°C)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Fluid Service:</span>
                <span className="text-emerald-400 font-bold">Motul RBF 660 Flush</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Ceramic Barrier:</span>
                <span className="text-cyan-400 font-bold">10H Wheel & Caliper Shield</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="w-full py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all block text-center"
            >
              BOOK CALIPER REFINISHING
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 5-STAGE CLINICAL DISASSEMBLY PROTOCOL */}
      <section className="py-20 bg-carbon/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              SURGICAL WORKFLOW
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              THE CALIPER BENCH PROCESS
            </h2>
            <p className="text-xs text-silver mt-2">
              We never spray calipers while mounted on vehicle hubs. Every piece is treated as fine aerospace hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">STAGE 01</span>
              <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Wheels-Off Disassembly</h4>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Pads, anti-rattle clips, and fluid lines capped. Calipers dismounted and moved to our clean room bench.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">STAGE 02</span>
              <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Ultrasonic Degreasing</h4>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Submerged in heated ultrasonic solvent tanks to dissolve burnt brake dust, road oils, and factory contamination.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">STAGE 03</span>
              <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Vapor Media Etching</h4>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Fine ceramic blast media creates mechanical anchor micro-profile on raw aluminum without pitting pistons or seals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">STAGE 04</span>
              <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Downdraft Ceramic Respray</h4>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Three coats of 1,200°F poly-ceramic color followed by precision laser-cut logo application and high-temp clearcoat.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-obsidian border border-white/10">
              <span className="text-crimson font-mono font-bold text-xs">STAGE 05</span>
              <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Motul 660 Bleed & Audit</h4>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Reinstalled to factory torque specs with fresh crush washers. Computerized pressure bleed eliminates all air bubbles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQS */}
      <section className="py-20 bg-carbon/40 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              KNOWLEDGE BASE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              CUSTOM PAINT & CALIPER FAQ
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

      {/* 5. BOTTOM CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-carbon border-2 border-crimson/50 shadow-2xl">
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white">
            CUSTOMIZE YOUR VEHICLE FINISH
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            From concourse caliper refinishing to custom carbon aero resprays. Handcrafted in our pressurized downdraft booth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
            >
              REQUEST CUSTOM PAINT QUOTE
            </Link>
            <Link
              to="/packages"
              className="px-6 py-3.5 bg-obsidian hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/20 transition-all"
            >
              EXPLORE ALL PACKAGES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

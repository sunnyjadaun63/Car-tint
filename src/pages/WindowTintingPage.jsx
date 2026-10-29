import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../context/themesData';
import {
  Shield,
  Sun,
  Thermometer,
  Zap,
  Eye,
  Award,
  Check,
  CheckCircle2,
  Sliders,
  ChevronDown,
  ArrowRight,
  Layers,
  Sparkles,
  Radio
} from 'lucide-react';

export default function WindowTintingPage() {
  const { theme } = useTheme();
  const activeThemeConfig = themes.find((t) => t.id === theme) || themes[0];

  const [activeVlt, setActiveVlt] = useState(20);
  const [activeFaq, setActiveFaq] = useState(null);
  const [filmType, setFilmType] = useState('ceramic');

  const vltData = {
    5: { ir: '98.8%', tser: '73%', uv: '99.9%', privacy: 'Maximum VIP Limo', glare: '95% Glare Cut', bestFor: 'Rear cabins, executive shuttles, extreme privacy' },
    15: { ir: '97.5%', tser: '69%', uv: '99.9%', privacy: 'Dark Custom Aesthetic', glare: '90% Glare Cut', bestFor: 'Exotics, track coupes, rear windshields' },
    20: { ir: '96.4%', tser: '66%', uv: '99.9%', privacy: 'Standard Obsidian Match', glare: '88% Glare Cut', bestFor: 'Factory SUV rear tint match, balanced visibility' },
    35: { ir: '95.1%', tser: '61%', uv: '99.9%', privacy: 'Medium Legal Shadow', glare: '79% Glare Cut', bestFor: 'Front side glass in compliant states' },
    50: { ir: '93.0%', tser: '55%', uv: '99.9%', privacy: 'Subtle Smoke Tint', glare: '64% Glare Cut', bestFor: 'Night track driving, mild cabin glare control' },
    70: { ir: '89.5%', tser: '49%', uv: '99.9%', privacy: 'Crystal Optical Clear', glare: '45% Glare Cut', bestFor: 'Full front windshields, 100% legal optical heat shield' },
  };

  const currentVlt = vltData[activeVlt];

  const faqs = [
    {
      q: 'Will nano-ceramic tint interfere with keyless entry, GPS, radar detectors, or 5G cell signals?',
      a: 'Zero interference. Traditional metallic tints contain metallic aluminum particles that create a Faraday cage effect. APEX Nano-Ceramic uses non-conductive, dielectric zirconium oxide and titanium nitride nanoparticles that are 100% radio-transparent.'
    },
    {
      q: 'Can the front windshield be tinted legally?',
      a: 'Yes. Our 70% or 80% Crystal Nano-Ceramic shield transmits over 70% visible light while rejecting 89%+ of infrared thermal energy and 99.9% of UV rays. Most states permit high-transmittance optical shields with medical waivers or DOT compliance stamps.'
    },
    {
      q: 'How does micro-edge shaving differ from standard computer precuts?',
      a: 'Standard installers leave a 2mm to 4mm light gap at the top edge of roll-down windows to prevent peeling. APEX master technicians micro-bevel each pane with surgical files directly against the glass curvature, creating an authentic factory-dipped glass look with zero visible borders.'
    },
    {
      q: 'How long before I can roll down my windows after cleanroom installation?',
      a: 'Due to our positive-pressure cleanroom heat-shrink and short-wave IR drying bake, curing time is reduced from 5 days to 48 hours. We apply micro-gasket seals that allow normal vehicle operation immediately upon release.'
    },
    {
      q: 'What is the warranty coverage against bubbling, color change, or purple fading?',
      a: 'Every APEX installation includes our transferable 10-Year Master Studio Warranty. If the film ever delaminates, purples, oxidizes, or shows micro-bubbles, it is stripped and reinstalled free of charge at any authorized cleanroom center.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>PILLAR 01 • ARCHITECTURAL OPTICS</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white leading-tight">
            NANO-CERAMIC WINDOW TINTING
          </h1>
          <p className="text-silver text-sm sm:text-base font-body mt-4 leading-relaxed">
            Multi-layer dielectric optical shielding engineering. Blocking 99.9% of destructive UV-A/UV-B radiation and 96.4% of solar infrared heat without metallized signal dampening.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center gap-2"
            >
              <span>BOOK TINT CALIBRATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/simulator"
              className="px-6 py-3.5 bg-carbon hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/15 transition-all"
            >
              TRY 2D VLT SIMULATOR
            </Link>
          </div>
        </div>

        {/* Telemetry Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Sun className="w-5 h-5 text-crimson mb-2" />
            <span className="font-display font-black text-3xl text-white">99.9%</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">UV-A & UV-B Cut</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Prevents leather dash cracking</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Thermometer className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">96.4%</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Infrared Heat Block</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Tested 780nm – 2500nm band</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Zap className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">0.0 dB</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Signal Attenuation</p>
            <span className="text-[10px] text-silver/60 mt-2 block">5G, Radar & GPS transparent</span>
          </div>
          <div className="p-5 rounded-2xl bg-carbon border border-white/10">
            <Award className="w-5 h-5 text-yellow-400 mb-2" />
            <span className="font-display font-black text-3xl text-white">10 YRS</span>
            <p className="text-silver text-xs font-mono uppercase mt-1">Studio Guarantee</p>
            <span className="text-[10px] text-silver/60 mt-2 block">Transferable digital registry</span>
          </div>
        </div>
      </section>

      {/* 2. OPTICAL SPECTRUM INTERACTIVE SELECTOR */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            CALIBRATED DENSITY SPECTRUM
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            SELECT VISIBLE LIGHT TRANSMISSION (VLT)
          </h2>
          <p className="text-xs text-silver mt-2">
            Every percentage tier is engineered with specialized nanoparticle grain density to balance night optical clarity, privacy, and solar heat mitigation.
          </p>
        </div>

        {/* VLT Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[5, 15, 20, 35, 50, 70].map((val) => (
            <button
              key={val}
              onClick={() => setActiveVlt(val)}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                activeVlt === val
                  ? 'bg-crimson text-white shadow-glow-red scale-105'
                  : 'bg-carbon text-silver hover:text-white border border-white/10'
              }`}
            >
              {val}% VLT
            </button>
          ))}
        </div>

        {/* Telemetry Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-carbon/90 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/10">
              <img
                src={activeThemeConfig.profileImage}
                alt={`${activeThemeConfig.carName} Tint Shade Simulator`}
                key={activeThemeConfig.profileImage}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/assets/supercar-profile.png';
                }}
              />
              <div
                className="absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none"
                style={{ opacity: 1 - (activeVlt / 100) * 0.88 }}
              ></div>
              <div className="absolute top-4 left-4 bg-obsidian/90 px-3 py-1.5 rounded text-xs font-mono text-white border border-white/20">
                ACTIVE VLT SHADE: <span className="text-crimson font-bold">{activeVlt}%</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-[10px] font-mono text-emerald-400 border border-white/10">
                RECOMMENDED: {currentVlt.bestFor}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <div className="pb-3 border-b border-white/10 flex justify-between items-center">
              <span className="font-display font-bold text-sm text-white uppercase">SHADE TELEMETRY AUDIT</span>
              <span className="text-[10px] text-crimson font-bold">LABORATORY CERTIFIED</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-silver">Solar Infrared Rejection (IR):</span>
              <span className="text-emerald-400 font-bold">{currentVlt.ir}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-silver">Total Solar Energy Rejection (TSER):</span>
              <span className="text-white font-bold">{currentVlt.tser}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-silver">Ultraviolet Rejection (UV):</span>
              <span className="text-cyan-400 font-bold">{currentVlt.uv}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-silver">Glare Reduction:</span>
              <span className="text-white font-bold">{currentVlt.glare}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-silver">Privacy Rating:</span>
              <span className="text-silver font-bold">{currentVlt.privacy}</span>
            </div>
            <div className="pt-4">
              <Link
                to="/contact"
                className="w-full py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-wider rounded shadow-glow-red transition-all block text-center"
              >
                REQUEST {activeVlt}% VLT ALLOCATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MATERIAL ARCHITECTURE: CERAMIC VS DYED VS METALLIZED */}
      <section className="py-20 bg-carbon/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              MATERIAL ARCHITECTURE COMPARISON
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              WHY NANO-CERAMIC OBSIDIAN TECHNOLOGY LEADS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-obsidian border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase block font-bold">BUDGET CONVENTIONAL</span>
                <h3 className="font-display font-bold text-lg text-white mt-1">Standard Dyed Film</h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Basic polyester tinted with organic dyes. Absorbs visible light but offers negligible infrared mitigation and turns purple after 18-24 months of UV exposure.
                </p>
                <div className="mt-6 space-y-2 text-xs font-mono text-neutral-400">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>IR Heat Cut:</span>
                    <span className="text-red-400 font-bold">&lt; 20%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Color Stability:</span>
                    <span className="text-red-400 font-bold">1 - 2 Years</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Signal Blocking:</span>
                    <span className="text-white font-bold">None</span>
                  </div>
                </div>
              </div>
              <span className="mt-6 block text-[10px] font-mono text-neutral-500 uppercase text-center">
                NOT INSTALLED AT APEX
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase block font-bold">METALLIZED ALLOY</span>
                <h3 className="font-display font-bold text-lg text-white mt-1">Metallic Sputtered Film</h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Reflective aluminum or nickel micro-coatings. Reflects moderate heat but produces a mirror-like sheen and severely degrades radar detectors and key fobs.
                </p>
                <div className="mt-6 space-y-2 text-xs font-mono text-neutral-400">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>IR Heat Cut:</span>
                    <span className="text-yellow-400 font-bold">45% - 60%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Color Stability:</span>
                    <span className="text-yellow-400 font-bold">3 - 5 Years</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Signal Interference:</span>
                    <span className="text-red-400 font-bold">High (-12 dB)</span>
                  </div>
                </div>
              </div>
              <span className="mt-6 block text-[10px] font-mono text-neutral-500 uppercase text-center">
                LEGACY TECHNOLOGY
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-carbon border-2 border-crimson shadow-glow-red flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-crimson px-3 py-0.5 rounded-full text-[9px] font-display font-black uppercase text-white">
                APEX STANDARD
              </span>
              <div>
                <span className="text-[10px] font-mono text-crimson uppercase block font-bold">FLAGSHIP DIELECTRIC</span>
                <h3 className="font-display font-bold text-lg text-white mt-1">Nano-Ceramic Obsidian</h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Sub-nanometer titanium nitride & zirconium oxide atomic lattice. Targets solar infrared wavelengths with zero haze, optical true black, and 100% radio transparency.
                </p>
                <div className="mt-6 space-y-2 text-xs font-mono text-neutral-200">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span>IR Heat Cut:</span>
                    <span className="text-emerald-400 font-bold">96.4%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span>Color Stability:</span>
                    <span className="text-emerald-400 font-bold">Lifetime (10+ Yrs)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span>Signal Interference:</span>
                    <span className="text-emerald-400 font-bold">0.0 dB (Transparent)</span>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-6 w-full py-2.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase text-center rounded tracking-wider shadow-glow-red block"
              >
                SELECT NANO-CERAMIC
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 4-STAGE SURGICAL INSTALLATION PROTOCOL */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            CLINICAL CLEANROOM PROTOCOL
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
            HOW WE TINT EXOTIC VEHICLES
          </h2>
          <p className="text-xs text-silver mt-2">
            Eliminating lint, air bubbles, edge gaps, and dashboard moisture damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <span className="text-crimson font-mono font-bold text-xs">STAGE 01</span>
            <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Interior Soak Rope Shielding</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              We insert high-absorbency microfiber braided soak ropes along dashboard and A-pillar seams to shield sensitive vehicle electronics, ECUs, and leather stitching from slip solution.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <span className="text-crimson font-mono font-bold text-xs">STAGE 02</span>
            <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Digital CAD Plotting</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Using robotic Graphtec plotting cutters, patterns are precision plotted to vehicle factory glass blueprints. No razor blades ever touch rubber seals, defroster lines, or glass.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <span className="text-crimson font-mono font-bold text-xs">STAGE 03</span>
            <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Compound Heat Shrinking</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Double-curved hypercar rear windshields (e.g. Porsche 911 GT3 RS, Corvette Z06) are dry-shrunk on the exterior glass using digital heat guns to shape the film without tension stress.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <span className="text-crimson font-mono font-bold text-xs">STAGE 04</span>
            <h4 className="font-display font-bold text-sm uppercase text-white mt-2">Micro-Edge Shaved Finish</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Edges of roll-down windows are shaved with a fine surgical micro-file at a 45-degree angle, bonding the film flush with the glass edge with zero light gaps.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-carbon/40 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              KNOWLEDGE BASE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              WINDOW TINT FAQ
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
        <div className="p-8 sm:p-12 rounded-3xl bg-carbon border-2 border-crimson/50 shadow-2xl relative overflow-hidden">
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white">
            READY FOR OPTICAL SOLAR PROTECTION?
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Reserve your cleanroom bay today. Receive digital compliance certification and a transferable 10-year warranty.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all"
            >
              BOOK DIRECT ALLOCATION
            </Link>
            <Link
              to="/compliance"
              className="px-6 py-3.5 bg-obsidian hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded border border-white/20 transition-all"
            >
              CHECK STATE TINT LAWS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

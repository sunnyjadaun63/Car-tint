import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../context/themesData';
import {
  Shield,
  Layers,
  Sparkles,
  Palette,
  Check,
  CheckCircle2,
  X,
  Play,
  ArrowRight,
  Sliders
} from 'lucide-react';

export default function HomePage() {
  const { theme } = useTheme();
  const activeThemeConfig = themes.find((t) => t.id === theme) || themes[0];

  // Active Hotspot Modal
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Pricing Matrix State
  const [vehicleClass, setVehicleClass] = useState('Sports');
  const [priceMultiplier, setPriceMultiplier] = useState(1.0);

  // Simulator State
  const [vlt, setVlt] = useState(20);
  const [carColor, setCarColor] = useState('crimson');
  const [carImage, setCarImage] = useState('/assets/car-crimson.jpg');
  const [underglowColor, setUnderglowColor] = useState('rgba(217, 20, 36, 0.45)');
  const [ceramicBoost, setCeramicBoost] = useState(false);
  const [specClass, setSpecClass] = useState('Sports');

  // Before & After comparison slider
  const [sliderPos, setSliderPos] = useState(50);

  // State Law Compliance
  const [selectedState, setSelectedState] = useState('CA: Front 70% | Rear Any');
  const [lawResult, setLawResult] = useState('');

  // Video Reel Modal
  const [activeVideo, setActiveVideo] = useState(null);

  const baseP1 = 499;
  const baseP2 = 1299;
  const baseP3 = 2899;

  const handleColorChange = (name, img, glow) => {
    setCarColor(name);
    setCarImage(img);
    setUnderglowColor(glow);
  };

  const calculatedIr = (99 - vlt * 0.12).toFixed(1);
  const calculatedVltOpacity = 1 - (vlt / 100) * 0.88;

  const handleStateLookup = () => {
    setLawResult(`STATE REGULATION DETAILS: ${selectedState} — Apex Studio certified nano-ceramic films include digital QR warranty registration and compliance stamp.`);
  };

  const colorSwatches = [
    { id: 'crimson', label: 'Crimson Red', bg: '#D91424', image: '/assets/car-crimson.jpg', glow: 'rgba(217, 20, 36, 0.45)' },
    { id: 'obsidian', label: 'Obsidian Black', bg: '#101012', image: '/assets/car-obsidian.jpg', glow: 'rgba(180, 180, 200, 0.2)' },
    { id: 'nardo', label: 'Nardo Grey', bg: '#8A8D91', image: '/assets/profile-light.jpg', glow: 'rgba(200, 200, 220, 0.3)' },
    { id: 'cobalt', label: 'Cobalt Blue', bg: '#0A4D94', image: '/assets/car-cobalt.jpg', glow: 'rgba(10, 77, 148, 0.45)' },
    { id: 'solar', label: 'Solar Yellow', bg: '#E5A812', image: '/assets/car-solar.jpg', glow: 'rgba(229, 168, 18, 0.45)' },
    { id: 'ultraviolet', label: 'Ultraviolet', bg: '#682082', image: '/assets/car-ultraviolet.jpg', glow: 'rgba(104, 32, 130, 0.45)' },
  ];

  const finishSwatches = [
    { id: 'matte-black', label: 'MATTE', name: 'Stealth Matte Black', bg: '#1F1F24', image: '/assets/car-matte-black.jpg', glow: 'rgba(80, 80, 90, 0.25)' },
    { id: 'satin-grey', label: 'SATIN', name: 'Satin Grey Armor', bg: '#4B4E54', image: '/assets/car-frozen-silver.jpg', glow: 'rgba(140, 140, 160, 0.3)' },
    { id: 'frozen-silver', label: 'FROZ', name: 'Frozen Metallic Silver', bg: '#A6ACB5', image: '/assets/car-frozen-silver.jpg', glow: 'rgba(220, 220, 255, 0.35)' },
    { id: 'carbon', label: 'CARB', name: 'Raw Carbon Weave', bg: '#18181A', image: '/assets/car-carbon.jpg', glow: 'rgba(217, 20, 36, 0.3)' },
    { id: 'pearl', label: 'PEARL', name: 'Bespoke Pearl Essence', bg: '#EDE8EA', image: '/assets/car-pearl.jpg', glow: 'rgba(255, 255, 255, 0.4)' },
    { id: 'candy', label: 'CANDY', name: 'Deep Candy Gloss', bg: '#B50014', image: '/assets/car-candy.jpg', glow: 'rgba(230, 15, 30, 0.5)' },
  ];

  return (
    <div>
      {/* ======================================================== */}
      {/* SCENE 1: HERO SECTION                                    */}
      {/* ======================================================== */}
      <section className="relative w-full min-h-screen pt-20 flex flex-col justify-between overflow-hidden bg-obsidian" id="hero">
        {/* Full-bleed 100vw Background */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            key={activeThemeConfig.heroImage}
            alt={`${activeThemeConfig.carName} Apex Studio Hypercar Environment`}
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] transition-opacity duration-700"
            src={activeThemeConfig.heroImage}
            onError={(e) => {
              e.currentTarget.src = '/assets/hero-bg.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60"></div>
        </div>

        {/* Watermark */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-10 w-full text-center">
          <span className="font-display font-black text-[15vw] sm:text-[14vw] tracking-[0.16em] uppercase text-metallic-silver leading-none block drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] opacity-25">
            {activeThemeConfig.watermark}
          </span>
        </div>

        {/* HUD Arc + Hotspots */}
        <div className="relative z-20 w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center px-4 mt-8 sm:mt-4 min-h-[460px]">
          <div className="relative w-full max-w-[860px] aspect-[16/9] flex items-center justify-center">
            {/* Precision Optical Telemetry HUD Frame (No Curved Dome Arc) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 900 480" fill="none">
              {/* Corner Precision Targeting Brackets */}
              <path d="M 30 30 L 30 65 M 30 30 L 65 30" stroke="currentColor" strokeWidth="2" className="text-crimson" />
              <path d="M 870 30 L 870 65 M 870 30 L 835 30" stroke="currentColor" strokeWidth="2" className="text-crimson" />
              <path d="M 30 450 L 30 415 M 30 450 L 65 450" stroke="currentColor" strokeWidth="2" className="text-crimson" />
              <path d="M 870 450 L 870 415 M 870 450 L 835 450" stroke="currentColor" strokeWidth="2" className="text-crimson" />

              {/* Top Precision Scan Grid */}
              <line x1="75" y1="30" x2="825" y2="30" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 6" />
              <line x1="75" y1="450" x2="825" y2="450" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 6" />

              {/* Subdued horizontal laser scan guideline */}
              <line x1="50" y1="180" x2="850" y2="180" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 8" className="text-crimson/30" />
            </svg>

            {/* Hotspot 1: TINT (Positioned directly on side window) */}
            <div className="absolute top-[36%] left-[54%] z-30 -translate-x-1/2 -translate-y-1/2 group">
              <button
                className="relative flex items-center justify-center w-8 h-8 focus:outline-none"
                onClick={() =>
                  setActiveHotspot({
                    title: 'TINT [NANO-CERAMIC]',
                    link: '/services/tinting',
                    desc: '99% UV & 96% Solar IR Rejection nano-ceramic barrier with scratch-resistant hardcoat.'
                  })
                }
              >
                <span className="ping-hotspot absolute w-full h-full rounded-full bg-crimson opacity-80"></span>
                <span className="relative w-3.5 h-3.5 rounded-full bg-crimson border-2 border-white shadow-glow-red"></span>
              </button>
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-display text-[10px] font-bold tracking-widest text-white uppercase bg-black/80 px-2 py-0.5 rounded border border-white/20 whitespace-nowrap shadow-lg">
                TINT
              </span>
            </div>

            {/* Hotspot 2: COATING (Positioned on roof clearcoat) */}
            <div className="absolute top-[26%] left-[45%] z-30 -translate-x-1/2 -translate-y-1/2 group">
              <button
                className="relative flex items-center justify-center w-8 h-8 focus:outline-none"
                onClick={() =>
                  setActiveHotspot({
                    title: 'COATING [10H GRAPHENE]',
                    link: '/services/coating',
                    desc: '10H Graphene Dual-Layer molecular liquid glass with 115° contact water beading.'
                  })
                }
              >
                <span className="ping-hotspot absolute w-full h-full rounded-full bg-crimson opacity-80"></span>
                <span className="relative w-3.5 h-3.5 rounded-full bg-crimson border-2 border-white shadow-glow-red"></span>
              </button>
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-display text-[10px] font-bold tracking-widest text-white uppercase bg-black/80 px-2 py-0.5 rounded border border-white/20 whitespace-nowrap shadow-lg">
                COATING
              </span>
            </div>

            {/* Hotspot 3: PPF (Positioned on front bumper / headlights impact zone) */}
            <div className="absolute top-[58%] left-[16%] z-30 -translate-x-1/2 -translate-y-1/2 group">
              <button
                className="relative flex items-center justify-center w-8 h-8 focus:outline-none"
                onClick={() =>
                  setActiveHotspot({
                    title: 'PPF [SELF-HEALING ARMOR]',
                    link: '/services/ppf',
                    desc: 'Nanomorphic Spec: 8Mil front impact protection with thermal scratch self-healing recovery.'
                  })
                }
              >
                <span className="ping-hotspot absolute w-full h-full rounded-full bg-crimson opacity-80"></span>
                <span className="relative w-3.5 h-3.5 rounded-full bg-crimson border-2 border-white shadow-glow-red"></span>
              </button>
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-display text-[10px] font-bold tracking-widest text-white uppercase bg-black/80 px-2 py-0.5 rounded border border-white/20 whitespace-nowrap shadow-lg">
                PPF
              </span>

              <div className="hidden sm:block absolute -top-16 -right-48 w-52 p-2.5 rounded bg-black/85 border border-white/20 backdrop-blur-md shadow-2xl pointer-events-none text-left">
                <div className="text-[9px] font-mono text-crimson font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>Nanomorphic Spec</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <p className="text-[10px] text-neutral-300 font-body leading-tight mt-1">
                  8Mil front impact protection & scratch self-healing.
                </p>
              </div>
            </div>

            {/* Hotspot 4: CUSTOM PAINT (Positioned on front brake caliper) */}
            <div className="absolute top-[64%] left-[28%] z-30 -translate-x-1/2 -translate-y-1/2 group">
              <button
                className="relative flex items-center justify-center w-8 h-8 focus:outline-none"
                onClick={() =>
                  setActiveHotspot({
                    title: 'CUSTOM PAINT [OEM+ BOOTH]',
                    link: '/services/custom-paint',
                    desc: 'OEM+ multi-stage concourse paint resprays and high-temperature Brembo caliper refinishing.'
                  })
                }
              >
                <span className="ping-hotspot absolute w-full h-full rounded-full bg-crimson opacity-80"></span>
                <span className="relative w-3.5 h-3.5 rounded-full bg-crimson border-2 border-white shadow-glow-red"></span>
              </button>
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-display text-[10px] font-bold tracking-widest text-white uppercase bg-black/80 px-2 py-0.5 rounded border border-white/20 whitespace-nowrap shadow-lg">
                CUSTOM PAINT
              </span>
              <div className="hidden sm:block absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9px] font-mono text-silver/80 whitespace-nowrap">
                • Caliper Ceramic Coating
              </div>
            </div>
          </div>
        </div>

        {/* Anchored Trapezoidal HUD Telemetry Dock */}
        <div className="relative z-30 w-full max-w-4xl mx-auto px-4 pb-6">
          <div className="bg-carbon/90 border border-white/10 backdrop-blur-2xl rounded-2xl p-4 sm:px-8 sm:py-5 shadow-2xl shadow-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-display font-black text-sm tracking-wider text-white">
                    99% <span className="text-xs text-silver font-normal">UV BLOCK</span>
                  </span>
                  <span className="font-mono text-[9px] text-emerald-400 font-bold">CALIBRATED</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-crimson h-full w-[99%] shadow-glow-red"></div>
                </div>
                <div className="flex justify-between text-[8px] font-mono text-silver/60 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-display font-black text-sm tracking-wider text-white">
                    10H <span className="text-xs text-silver font-normal">GRAPHENE COATING</span>
                  </span>
                  <span className="font-mono text-[9px] text-crimson font-bold">CERTIFIED</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-crimson h-full w-[100%] shadow-glow-red"></div>
                </div>
                <div className="flex justify-between text-[8px] font-mono text-silver/60 mt-1">
                  <span>9H HARDNESS</span>
                  <span>10H DIAMOND</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-display font-black text-sm tracking-wider text-white">
                    SELF-HEALING <span className="text-xs text-silver font-normal">PPF</span>
                  </span>
                  <span className="font-mono text-[9px] text-white font-bold">8.5 MIL</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-crimson h-full w-[94%] shadow-glow-red"></div>
                </div>
                <div className="flex justify-between text-[8px] font-mono text-silver/60 mt-1">
                  <span>TRACK SHIELD</span>
                  <span>10-YR GUARANTEE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SCENE 2: TIERED PROTECTION PLANS                         */}
      {/* ======================================================== */}
      <section className="relative py-28 bg-alabaster text-obsidian clip-slant-white z-20" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-4 pb-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-crimson uppercase block">
              &lt; TIERED AUTOMOTIVE PROTECTION
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-obsidian mt-2">
              FIND THE PROTECTION PLAN BUILT FOR YOUR CAR
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-medium">
              Laser-plotted optical heat barriers, sacrificial impact films, and covalent liquid glass finishes.
            </p>

            <div className="inline-flex items-center justify-center gap-1.5 p-1 mt-6 rounded-lg bg-neutral-200 border border-neutral-300">
              {[
                { label: 'Sports', mult: 1.0 },
                { label: 'Sedan', mult: 1.15 },
                { label: 'SUV', mult: 1.3 },
                { label: 'Exotic', mult: 1.5 }
              ].map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => {
                    setVehicleClass(tab.label);
                    setPriceMultiplier(tab.mult);
                  }}
                  className={`px-4 py-1.5 text-xs font-display font-bold rounded transition-all ${
                    vehicleClass === tab.label
                      ? 'bg-obsidian text-white shadow-sm'
                      : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            {/* Stage 01 */}
            <div className="bg-white border border-neutral-300/80 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                  STAGE 01 • ENTRY LEVEL
                </div>
                <h3 className="font-display font-black text-xl uppercase tracking-wider text-obsidian mt-1">
                  ESSENTIAL SHIELD
                </h3>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  High-grade nano-ceramic tint package providing solar IR mitigation & daily clearcoat protection.
                </p>
                <div className="my-6 pt-4 border-t border-neutral-200 flex items-baseline gap-2">
                  <span className="font-display font-black text-4xl text-obsidian">
                    ${Math.round(baseP1 * priceMultiplier)}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono font-medium">/ complete vehicle</span>
                </div>
                <ul className="space-y-3 text-xs text-neutral-700 font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Full Nano-Ceramic Window Tint (All Sides & Rear)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Single-Stage Paint Decontamination & Gloss Polish</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>2-Year Certified Hydrophobic Topcoat Seal</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-neutral-400 line-through">
                    <X className="w-4 h-4 text-neutral-300 flex-shrink-0" />
                    <span>Front High-Impact Self-Healing PPF</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-8 w-full py-3 text-center border-2 border-obsidian text-obsidian hover:bg-obsidian hover:text-white font-display font-bold text-xs uppercase tracking-wider rounded transition-colors block"
              >
                SELECT PLAN
              </Link>
            </div>

            {/* Stage 02: Most Popular */}
            <div className="relative bg-carbon text-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/50 border-2 border-crimson transform lg:-translate-y-4 flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-crimson text-white px-4 py-1 rounded-full text-[10px] font-display font-black tracking-widest uppercase shadow-glow-red">
                MOST POPULAR
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-crimson uppercase">
                  STAGE 02 • COMPREHENSIVE ARMOR
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white mt-1">
                  TRACK & GLOSS PRO
                </h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Integrated track package shielding impact zones with PPF and coating paintwork in certified liquid glass.
                </p>
                <div className="my-6 pt-4 border-t border-white/10 flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-white">
                    ${Math.round(baseP2 * priceMultiplier)}
                  </span>
                  <span className="text-xs text-silver font-mono font-medium">/ complete vehicle</span>
                </div>
                <ul className="space-y-3 text-xs text-neutral-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                    <span>Full Ceramic Solar IR Tint (Windshield Included)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                    <span>Front Track Pack 8.5-Mil PPF (Bumper, Hood, Fenders, Mirrors)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                    <span>5-Year Certified 9H Liquid Glass Ceramic Shield</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                    <span>Ultra-Hydrophobic Wheel & Brembo Caliper Ceramic Coating</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-8 w-full py-3.5 text-center bg-crimson hover:bg-crimson/90 text-white font-display font-black text-xs uppercase tracking-widest rounded shadow-glow-red transition-all block"
              >
                SELECT PLAN
              </Link>
            </div>

            {/* Stage 03 */}
            <div className="bg-white border border-neutral-300/80 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                  STAGE 03 • CONCOURSE LEVEL
                </div>
                <h3 className="font-display font-black text-xl uppercase tracking-wider text-obsidian mt-1">
                  BESPOKE CONCOURSE
                </h3>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  Full-body automotive wrapping and dual-layer coating, PPF wrap, and custom paintwork enhancements.
                </p>
                <div className="my-6 pt-4 border-t border-neutral-200 flex items-baseline gap-2">
                  <span className="font-display font-black text-4xl text-obsidian">
                    ${Math.round(baseP3 * priceMultiplier)}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono font-medium">/ complete vehicle</span>
                </div>
                <ul className="space-y-3 text-xs text-neutral-700 font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Full-Body Stealth Matte or Mirror Ultra-Gloss 8.5-Mil PPF Wrap</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>10H Graphene Dual-Layer Coating (10-Year Warranty)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Multi-Stage Paint Correction + Custom Accent Respray</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Interior Alcantara & Fine Leather Hydrophobic Shield</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-8 w-full py-3 text-center border-2 border-obsidian text-obsidian hover:bg-obsidian hover:text-white font-display font-bold text-xs uppercase tracking-wider rounded transition-colors block"
              >
                SELECT PLAN
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-crimson text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red hover:bg-crimson/90 transition-all"
            >
              <span>EXPLORE ALL PACKAGES & MATRIX</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SCENE 3: INTERACTIVE 4-PILLAR VISUALIZER                 */}
      {/* ======================================================== */}
      <section className="relative py-24 bg-obsidian text-white overflow-hidden" id="simulator">
        <div className="absolute inset-y-0 left-[28%] w-[38%] bg-crimson clip-diag-slash-panel opacity-95 pointer-events-none transform -skew-x-12 hidden lg:block shadow-[0_0_90px_rgba(217,20,36,0.5)]"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-crimson uppercase block">
                REAL-TIME TELEMETRY ENGINE
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-wider text-white mt-1">
                INTERACTIVE 4-PILLAR VISUALIZER
              </h2>
              <p className="text-xs text-silver mt-1 max-w-lg">
                Configurable photorealistic hardware view. Adjust tint darkness and view real-time changes to ambient heat opacity and spec sheet factors.
              </p>
            </div>
            <Link
              to="/simulator"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carbon border border-white/10 text-xs font-mono hover:border-crimson transition-all"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-ping"></span>
              <span className="text-neutral-300 font-bold">FULLSCREEN SIMULATOR →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Car Preview */}
            <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center overflow-hidden rounded-2xl bg-obsidian/90 border border-white/10 shadow-2xl">
                <div
                  className="absolute bottom-0 inset-x-0 h-28 blur-3xl pointer-events-none transition-all duration-500"
                  style={{ backgroundColor: underglowColor }}
                ></div>

                <img
                  alt={`${carColor} Apex Simulator Supercar`}
                  className="relative z-10 w-full h-full object-cover object-center transition-all duration-300"
                  src={carImage}
                  key={carImage}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/profile-light.jpg';
                  }}
                />

                {/* Accurate Window Tint Mask */}
                <div
                  className="absolute inset-0 pointer-events-none z-20 transition-all duration-300"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, ${calculatedVltOpacity * 0.94})`,
                    clipPath: 'polygon(37.5% 46%, 42% 37.5%, 52% 34%, 61.5% 36%, 67.5% 42.5%, 66% 44%, 58% 45%, 44% 46%, 38.5% 47%)',
                    mixBlendMode: 'multiply'
                  }}
                ></div>

                <div
                  className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-20 transition-opacity duration-500 ${
                    ceramicBoost ? 'opacity-100 animate-pulse' : 'opacity-0'
                  }`}
                ></div>

                <div className="absolute top-4 left-5 z-20 flex items-center gap-2 text-[10px] font-mono text-silver bg-black/75 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                  <span className="text-crimson font-bold uppercase">{carColor} McLaren</span>
                  <span>•</span>
                  <span>{vlt}% {vlt <= 5 ? 'LIMO TINT' : 'DARK TINT'}</span>
                </div>
              </div>
            </div>

            {/* Right: Controls & Spec */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-carbon/90 border border-white/15 rounded-2xl p-5 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="font-display font-bold text-xs tracking-wider uppercase text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-crimson"></span>
                    SIMULATOR CONTROLS
                  </span>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-silver">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    ACTIVE
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-[11px] font-mono mb-1.5">
                    <span className="text-silver uppercase font-bold">VLT % (TINT DARKNESS)</span>
                    <span className="text-crimson font-bold">{vlt}% VLT</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="70"
                    step="5"
                    value={vlt}
                    onChange={(e) => setVlt(Number(e.target.value))}
                    className="w-full accent-crimson cursor-pointer bg-white/20 h-1 rounded-lg"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-silver/60 mt-1">
                    <span>5% Limo</span>
                    <span>20%</span>
                    <span>35%</span>
                    <span>50%</span>
                    <span>70% Clear</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-silver mb-2 font-bold">
                    Paint & Finish ({carColor.toUpperCase()})
                  </span>
                  <div className="grid grid-cols-6 gap-2 mb-2">
                    {colorSwatches.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleColorChange(c.id, c.image, c.glow)}
                        className={`h-6 rounded border transition-all ${
                          carColor === c.id ? 'border-white ring-2 ring-crimson scale-105' : 'border-white/20 hover:border-white'
                        }`}
                        style={{ backgroundColor: c.bg }}
                        title={c.label}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {finishSwatches.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => handleColorChange(f.id, f.image, f.glow)}
                        className={`h-6 rounded border transition-all flex items-center justify-center text-[7px] font-mono font-bold ${
                          carColor === f.id ? 'border-white ring-2 ring-crimson scale-105 text-white' : 'border-white/20 hover:border-white text-silver'
                        }`}
                        style={{ backgroundColor: f.bg }}
                        title={f.name}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/10">
                  <span className="text-xs font-display font-bold uppercase text-white">10H Ceramic Gloss Boost</span>
                  <button
                    type="button"
                    onClick={() => setCeramicBoost(!ceramicBoost)}
                    className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
                      ceramicBoost ? 'bg-crimson' : 'bg-neutral-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                        ceramicBoost ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="bg-carbon/90 border border-white/15 rounded-2xl p-5 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <span className="font-display font-bold text-xs tracking-wider uppercase text-white">
                    LIVE TECHNICAL SPEC
                  </span>
                  <div className="flex items-center gap-1 p-0.5 rounded bg-black/60 border border-white/10 text-[9px] font-mono">
                    {['Sports', 'Sedan', 'SUV'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setSpecClass(c)}
                        className={`px-2 py-0.5 rounded transition-all ${
                          specClass === c ? 'bg-crimson text-white font-bold' : 'text-silver hover:text-white'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-silver">Solar IR Heat Rejection</span>
                    <span className="text-emerald-400 font-bold">{calculatedIr}%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-silver">Specular Gloss Units</span>
                    <span className="text-white font-bold">{ceramicBoost ? '109.4 GU' : '94.8 GU'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-silver">Hydrophobic Beading Angle</span>
                    <span className="text-cyan-400 font-bold">115°</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-silver">Total Film Thickness</span>
                    <span className="text-white font-bold">
                      {specClass === 'Sports' ? '8.5 Mil (215µ)' : specClass === 'Sedan' ? '8.2 Mil (208µ)' : '9.0 Mil (228µ)'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-silver">ASTM Pencil Hardness</span>
                    <span className="text-crimson font-bold">Certified 10H ASTM</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-4 w-full py-2.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-wider rounded shadow-glow-red transition-all block text-center"
                >
                  Book Calibrated Setup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SCENE 4: 4 CORE PILLARS BENTO GRID                       */}
      {/* ======================================================== */}
      <section className="py-24 bg-obsidian border-t border-white/10 text-white" id="bento">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-crimson uppercase block">4 CORE PILLARS</span>
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-wider text-white mt-1">
                BESPOKE STYLING ARCHITECTURE
              </h2>
            </div>
            <p className="text-xs text-silver mt-2 md:mt-0 max-w-md">
              Laser accuracy, pressurized climate-controlled cleanrooms, and robotic plotting for flawless automotive execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/tinting" className="group bg-carbon/90 rounded-2xl p-6 border border-white/10 hover:border-crimson/70 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-black text-2xl text-crimson">01</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-silver border border-white/10">LEGAL COMPLIANT</span>
                </div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white group-hover:text-crimson transition-colors">
                  Window Tinting
                </h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Multi-layer nano-ceramic optical shielding rejecting 99% UV rays and 96% solar infrared heat with zero radio interference.
                </p>
                <div className="mt-4 p-3 rounded bg-obsidian border border-white/5 text-[11px] font-mono">
                  <div className="flex justify-between text-silver mb-1">
                    <span>IR REJECTION</span>
                    <span className="text-emerald-400 font-bold">96%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-crimson to-emerald-400 h-full w-[96%]"></div>
                  </div>
                </div>
              </div>
              <span className="mt-6 flex items-center justify-between text-xs font-mono font-bold text-white group-hover:text-crimson pt-4 border-t border-white/10">
                <span>EXPLORE TINT HUB</span>
                <span>→</span>
              </span>
            </Link>

            <Link to="/services/coating" className="group bg-carbon/90 rounded-2xl p-6 border border-white/10 hover:border-crimson/70 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-black text-2xl text-crimson">02</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-silver border border-white/10">10H HARDNESS</span>
                </div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white group-hover:text-crimson transition-colors">
                  Ceramic & Graphene
                </h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Molecular covalent bonding creating a glass shield resistant to acid rain, bird dropping corrosion, and micro-marring.
                </p>
                <div className="mt-4 p-3 rounded bg-obsidian border border-white/5 text-[11px] font-mono">
                  <div className="flex justify-between text-silver mb-1">
                    <span>BEADING ANGLE</span>
                    <span className="text-cyan-400 font-bold">115°</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-crimson to-cyan-400 h-full w-[92%]"></div>
                  </div>
                </div>
              </div>
              <span className="mt-6 flex items-center justify-between text-xs font-mono font-bold text-white group-hover:text-crimson pt-4 border-t border-white/10">
                <span>EXPLORE COATING HUB</span>
                <span>→</span>
              </span>
            </Link>

            <Link to="/services/ppf" className="group bg-carbon/90 rounded-2xl p-6 border border-white/10 hover:border-crimson/70 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-black text-2xl text-crimson">03</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-silver border border-white/10">SELF-HEALING</span>
                </div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white group-hover:text-crimson transition-colors">
                  PPF & Vinyl Armor
                </h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Thermoplastic 8.5-mil sacrificial film shielding panels against high-speed stone chips with instantaneous sun heat recovery.
                </p>
                <div className="mt-4 p-3 rounded bg-obsidian border border-white/5 text-[11px] font-mono">
                  <div className="flex justify-between text-silver mb-1">
                    <span>HEAT RECOVERY</span>
                    <span className="text-white font-bold">&lt; 30 SEC</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-crimson h-full w-[98%]"></div>
                  </div>
                </div>
              </div>
              <span className="mt-6 flex items-center justify-between text-xs font-mono font-bold text-white group-hover:text-crimson pt-4 border-t border-white/10">
                <span>EXPLORE PPF HUB</span>
                <span>→</span>
              </span>
            </Link>

            <Link to="/services/custom-paint" className="group bg-carbon/90 rounded-2xl p-6 border border-white/10 hover:border-crimson/70 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-black text-2xl text-crimson">04</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-silver border border-white/10">PRESSURIZED</span>
                </div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white group-hover:text-crimson transition-colors">
                  Custom Paint Studio
                </h3>
                <p className="text-xs text-silver mt-2 leading-relaxed">
                  Italian heated downdraft spray booths offering OEM+ concourse refinishing, pearl metallics, and high-temp caliper paintwork.
                </p>
                <div className="mt-4 p-3 rounded bg-obsidian border border-white/5 text-[11px] font-mono">
                  <div className="flex justify-between text-silver mb-1">
                    <span>COLOR MATCH ACCURACY</span>
                    <span className="text-crimson font-bold">99.9%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-crimson h-full w-[99.9%]"></div>
                  </div>
                </div>
              </div>
              <span className="mt-6 flex items-center justify-between text-xs font-mono font-bold text-white group-hover:text-crimson pt-4 border-t border-white/10">
                <span>EXPLORE PAINT HUB</span>
                <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SCENE 5: OPTICAL MICROSCOPY INSPECTION (BEFORE & AFTER)  */}
      {/* ======================================================== */}
      <section className="py-20 bg-carbon/50 border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-crimson uppercase block">
            OPTICAL MICROSCOPY INSPECTION
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-white mt-1">
            FACTORY SWIRLED CLEARCOAT VS 10H MIRROR CERAMIC
          </h2>
          <p className="text-xs text-silver mt-2 max-w-xl mx-auto">
            Drag the interactive optical separator to reveal high-intensity swirl scratch elimination and covalent liquid glass reflection.
          </p>

          <div className="relative w-full aspect-[16/9] max-h-[460px] rounded-2xl overflow-hidden mt-8 border border-white/15 shadow-2xl select-none">
            <img
              alt="After 10H Mirror Ceramic"
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/coating-closeup.png"
              onError={(e) => {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/aida/AEtjO1XqcgLXKrn5PHcwJyisSjy0rHP52k0CEgzDqgqgoFy7l6TzESMHWu45b23fMMhBX2GD87N4JYOfYxHGSkZVEyAH1Fjb39_Sd1KAm93Wz0ZGSxuIA0f4p3C5pxHrIO_TVD24OaUjIiwByj80TbyG6cYopdVW_Vl2VBBYhoChEEytpxMsP2Gc9HCLtYT1y8ec7n5D3anEj9DWd9yCCT3wPoVKH3b6fvu7RpMhGdocIbTNelv24fbqjQNBQ2uh';
              }}
            />
            <span className="absolute top-4 right-4 z-10 bg-black/80 text-white font-mono text-[10px] font-bold px-3 py-1 rounded border border-white/20">
              AFTER: 10H CERAMIC + PPF (MIRROR FINISH)
            </span>

            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                alt="Before Swirled Clearcoat"
                className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-75 sepia-[0.25] blur-[0.4px]"
                style={{ width: '100%', maxWidth: 'none', height: '100%' }}
                src="/assets/coating-closeup.png"
                onError={(e) => {
                  e.currentTarget.src = 'https://lh3.googleusercontent.com/aida/AEtjO1XqcgLXKrn5PHcwJyisSjy0rHP52k0CEgzDqgqgoFy7l6TzESMHWu45b23fMMhBX2GD87N4JYOfYxHGSkZVEyAH1Fjb39_Sd1KAm93Wz0ZGSxuIA0f4p3C5pxHrIO_TVD24OaUjIiwByj80TbyG6cYopdVW_Vl2VBBYhoChEEytpxMsP2Gc9HCLtYT1y8ec7n5D3anEj9DWd9yCCT3wPoVKH3b6fvu7RpMhGdocIbTNelv24fbqjQNBQ2uh';
                }}
              />
              <div className="absolute inset-0 bg-white/[0.04]"></div>
              <span className="absolute top-4 left-4 z-10 bg-crimson text-white font-mono text-[10px] font-bold px-3 py-1 rounded shadow-glow-red whitespace-nowrap">
                BEFORE: FACTORY OXIDIZED & SWIRLED
              </span>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-30 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-8 h-8 rounded-full bg-crimson border-2 border-white flex items-center justify-center text-white shadow-glow-red">
                <Sliders className="w-3.5 h-3.5" />
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SCENE 6: 6-STAGE STUDIO PROTOCOL TIMELINE                */}
      {/* ======================================================== */}
      <section className="py-20 bg-obsidian text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-crimson uppercase block">LABORATORY STANDARDS</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-wider text-white mt-1">
              THE 6-STAGE STUDIO PROTOCOL
            </h2>
            <p className="text-xs text-silver mt-2">
              Every vehicle undergoes our clinical white-glove intake and surgical installation process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { num: '01', title: 'Surface Decon', desc: 'Multi-chemical iron fallout bath and clay bar treatment removing sub-surface brake contamination.' },
              { num: '02', title: 'Paint Correction', desc: '2-to-3 stage rotary compounding eliminating 98% of swirl marks under 5000K high-CRI inspection lights.' },
              { num: '03', title: 'Laser PPF Plot', desc: 'Bespoke CAD laser templating to ensure zero razor-to-paint blade contact across edges and emblems.' },
              { num: '04', title: 'Nano-Tint Fit', desc: 'Micro-edge shaved heat shrinking across double-curved hypercar glass in a positive-pressure cleanroom.' },
              { num: '05', title: 'Liquid Glass Coat', desc: 'Dual-layer 10H graphene application cured under targeted short-wave infrared heat lamps for 16 hours.' },
              { num: '06', title: 'Certified Release', desc: 'Gloss-meter gloss unit audit, warranty registry issuance, and enclosed shuttle delivery allocation.' },
            ].map((step) => (
              <div key={step.num} className="p-4 rounded-xl bg-carbon/80 border border-white/10 hover:border-crimson/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="font-mono text-crimson text-xs font-bold">{step.num} / STAGE</span>
                  <h4 className="font-display font-bold text-sm uppercase text-white mt-2">{step.title}</h4>
                  <p className="text-[11px] text-silver mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SCENE 7: DUAL CINEMA VIDEO REELS + TINT LAW LOOKUP       */}
      {/* ======================================================== */}
      <section className="py-20 bg-carbon/70 border-t border-b border-white/10 text-white" id="videos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-crimson uppercase block">BEHIND THE CURTAIN</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-wider text-white mt-1">
              INSIDE THE STUDIO
            </h2>
            <p className="text-xs text-silver mt-2">
              Cinematic video captures documenting multi-stage correction, laser PPF installs, and coating curation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
            <div
              onClick={() => setActiveVideo('Multi-Stage Paint Correction & 10H Ceramic Coating Process')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-obsidian shadow-2xl cursor-pointer"
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  alt="Ceramic Coating Master Process"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  src="/assets/coating-closeup.png"
                  onError={(e) => {
                    e.currentTarget.src = 'https://lh3.googleusercontent.com/aida/AEtjO1XqcgLXKrn5PHcwJyisSjy0rHP52k0CEgzDqgqgoFy7l6TzESMHWu45b23fMMhBX2GD87N4JYOfYxHGSkZVEyAH1Fjb39_Sd1KAm93Wz0ZGSxuIA0f4p3C5pxHrIO_TVD24OaUjIiwByj80TbyG6cYopdVW_Vl2VBBYhoChEEytpxMsP2Gc9HCLtYT1y8ec7n5D3anEj9DWd9yCCT3wPoVKH3b6fvu7RpMhGdocIbTNelv24fbqjQNBQ2uh';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-crimson flex items-center justify-center shadow-glow-red group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-white border border-white/20">
                  04:22 • 4K
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-mono text-crimson font-bold uppercase tracking-widest">STAGE 01 PROCESS</span>
                <h3 className="font-display font-bold text-sm uppercase text-white mt-1 group-hover:text-crimson transition-colors">
                  Multi-Stage Paint Correction & 10H Ceramic Coating Process
                </h3>
                <p className="text-xs text-silver mt-1 leading-relaxed">
                  Eliminating swirl marks under surgical high-CRI inspection lamps followed by liquid glass bonding.
                </p>
              </div>
            </div>

            <div
              onClick={() => setActiveVideo('Laser-Cut PPF & Nano-Ceramic Window Tint Installation')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-obsidian shadow-2xl cursor-pointer"
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  alt="Laser Cut PPF Installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  src="/assets/supercar-profile.png"
                  onError={(e) => {
                    e.currentTarget.src = 'https://lh3.googleusercontent.com/aida/AEtjO1WHY7DuNOlB-rhBV6puWjadgEBVtzHRg96dNAkR1n4e_D3D1jo7pw2nmPDzq846h9BIhi7igLK16d8xVHvVh7Ruf9yH-rPbE7Ak7YYBqE2DV7554SOniAT-MU1D3JrN_1Ohm28dmGPZ-kvGoAKT9ZLjRQ26ioU8mzxtVS-bQ8VkgY-p3hGkzwYHZsB0390kwFB3lGtkBvXrsH_wB5LUKXXI2ISWKrhGa4euT3jnvDq-89niVsH9zuXSxJl5';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-crimson flex items-center justify-center shadow-glow-red group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-white border border-white/20">
                  06:14 • 4K
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-mono text-crimson font-bold uppercase tracking-widest">STAGE 02 PROCESS</span>
                <h3 className="font-display font-bold text-sm uppercase text-white mt-1 group-hover:text-crimson transition-colors">
                  Laser-Cut PPF & Nano-Ceramic Window Tint Installation
                </h3>
                <p className="text-xs text-silver mt-1 leading-relaxed">
                  CAD plotting and cleanroom heat shrinkage application over aerodynamic curves and composite splitters.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-obsidian border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono text-crimson uppercase font-bold tracking-wider">COMPLIANCE ENGINE</span>
              <h4 className="font-display font-bold text-base text-white uppercase mt-0.5">State VLT Tint Legal Compliance Registry</h4>
              <p className="text-xs text-silver mt-1">Check legal front door and rear window VLT% guidelines across all 50 US states & EU directives.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full sm:w-auto bg-carbon border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              >
                <option value="CA: Front 70% | Rear Any">California (CA)</option>
                <option value="NY: Front 70% | Rear 70%">New York (NY)</option>
                <option value="FL: Front 28% | Rear 15%">Florida (FL)</option>
                <option value="TX: Front 25% | Rear Any">Texas (TX)</option>
                <option value="NV: Front 35% | Rear Any">Nevada (NV)</option>
                <option value="IL: Front 35% | Rear 35%">Illinois (IL)</option>
                <option value="WA: Front 24% | Rear 24%">Washington (WA)</option>
                <option value="AZ: Front 33% | Rear Any">Arizona (AZ)</option>
              </select>
              <button
                onClick={handleStateLookup}
                className="w-full sm:w-auto px-4 py-2 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase rounded whitespace-nowrap shadow-glow-red"
              >
                LOOKUP
              </button>
            </div>
          </div>

          {lawResult && (
            <div className="max-w-4xl mx-auto mt-4 p-4 rounded-xl bg-carbon border border-crimson/50 text-xs font-mono text-silver flex items-center justify-between">
              <span>{lawResult}</span>
              <button onClick={() => setLawResult('')} className="text-silver hover:text-white ml-2">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Hotspot Breakdown Modal */}
      {activeHotspot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-carbon border border-crimson/60 rounded-2xl max-w-md w-full p-6 shadow-2xl shadow-crimson/20">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-ping"></span>
                <h3 className="font-display font-bold text-sm text-white uppercase">{activeHotspot.title}</h3>
              </div>
              <button onClick={() => setActiveHotspot(null)} className="text-silver hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-neutral-300 font-mono leading-relaxed mb-6">
              {activeHotspot.desc}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveHotspot(null)}
                className="px-4 py-2 rounded bg-white/10 text-white font-mono text-xs hover:bg-white/20"
              >
                Close Telemetry
              </button>
              <Link
                to={activeHotspot.link}
                onClick={() => setActiveHotspot(null)}
                className="px-5 py-2 rounded bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase shadow-glow-red inline-flex items-center gap-1.5"
              >
                <span>Deep Dive Pillar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Cinema Video Preview Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
          <div className="bg-carbon border border-white/20 rounded-2xl max-w-2xl w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <h3 className="font-display font-bold text-sm text-white uppercase flex items-center gap-2">
                <Play className="w-4 h-4 text-crimson fill-crimson" />
                {activeVideo}
              </h3>
              <button onClick={() => setActiveVideo(null)} className="text-silver hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full rounded-xl bg-black flex flex-col items-center justify-center border border-white/10 text-center p-6">
              <div className="w-16 h-16 rounded-full bg-crimson/20 border border-crimson flex items-center justify-center mb-4 shadow-glow-red animate-pulse">
                <Play className="w-8 h-8 text-crimson fill-crimson ml-1" />
              </div>
              <span className="font-display font-bold text-sm text-white uppercase tracking-wider">
                4K Ultra-HD Master Reel Stream
              </span>
              <p className="text-xs text-silver font-mono mt-1 max-w-md">
                Laboratory Cleanroom footage showing ultrasonic decontamination, infrared lamp curing, and micro-edge shaved tint installation.
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center text-xs font-mono text-silver">
              <span>Resolution: 3840 x 2160 @ 60fps</span>
              <button
                onClick={() => setActiveVideo(null)}
                className="px-4 py-1.5 bg-crimson text-white rounded font-display font-bold text-xs uppercase hover:bg-crimson/90"
              >
                Back to Studio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

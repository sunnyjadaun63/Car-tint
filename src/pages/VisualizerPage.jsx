import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../context/themesData';
import {
  Sliders,
  ArrowRight,
  ShieldCheck,
  Download,
  Sparkles,
  Layers,
  Palette,
  Eye,
  CheckCircle2,
  RefreshCw,
  Sun,
  Award
} from 'lucide-react';

export default function VisualizerPage() {
  const { theme } = useTheme();
  const activeThemeConfig = themes.find((t) => t.id === theme) || themes[0];

  const [vlt, setVlt] = useState(20);
  const [carColor, setCarColor] = useState('crimson');
  const [carImage, setCarImage] = useState('/assets/car-crimson.jpg');
  const [underglowColor, setUnderglowColor] = useState('rgba(217, 20, 36, 0.45)');
  const [ceramicBoost, setCeramicBoost] = useState(true);
  const [vehicleClass, setVehicleClass] = useState('Sports');
  const [clientModel, setClientModel] = useState('2025 Porsche 911 GT3 RS');

  const calculatedIr = (99 - vlt * 0.12).toFixed(1);
  const calculatedVltOpacity = 1 - (vlt / 100) * 0.88;

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

  const handleColorChange = (name, img, glow) => {
    setCarColor(name);
    setCarImage(img);
    setUnderglowColor(glow);
  };

  const handleExportSpec = () => {
    alert(`APEX STUDIO CONFIGURATOR EXPORT:\nVehicle: ${clientModel}\nClass: ${vehicleClass}\nVLT Shade: ${vlt}%\nIR Heat Rejection: ${calculatedIr}%\nFinish: ${carColor.toUpperCase()}\n10H Ceramic Gloss: ${ceramicBoost ? '109.4 GU (Active)' : '94.8 GU'}\nSpecification locked and ready for Cleanroom Intake.`);
  };

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      {/* 1. HERO HEADER */}
      <section className="relative py-14 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/40 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>PILLAR 05 • 2D REAL-TIME TELEMETRY ENGINE</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white mt-1">
              INTERACTIVE 4-PILLAR VISUALIZER
            </h1>
            <p className="text-xs sm:text-sm text-silver mt-2 max-w-2xl font-body">
              Calibrate window tint shade density, paint surface finishes, and covalent ceramic liquid reflections. Export certified vehicle build specifications directly to our engineering intake queue.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-full bg-carbon border border-white/10 text-xs font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-ping"></span>
            <span className="text-white font-bold">PHYSICS ENGINE V2.4 ONLINE</span>
          </div>
        </div>
      </section>

      {/* 2. FULL INTERACTIVE SIMULATOR STAGE */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visualizer Stage */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-3xl bg-obsidian border border-white/10 shadow-2xl">
              {/* Floor Underglow */}
              <div
                className="absolute bottom-0 inset-x-0 h-40 blur-3xl pointer-events-none transition-all duration-500"
                style={{ backgroundColor: underglowColor }}
              ></div>

              {/* Hypercar Profile */}
              <img
                alt={`${carColor} Apex Studio Supercar Profile`}
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

              {/* Ceramic Shimmer Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-20 transition-opacity duration-500 ${
                  ceramicBoost ? 'opacity-100 animate-pulse' : 'opacity-0'
                }`}
              ></div>

              {/* HUD Telemetry Badges */}
              <div className="absolute top-4 left-5 z-20 flex flex-wrap items-center gap-2 text-[10px] font-mono text-silver bg-black/75 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                <span className="text-crimson font-bold uppercase">{clientModel}</span>
                <span>•</span>
                <span className="text-white font-bold">{vlt}% VLT TINT</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">{calculatedIr}% IR REJECTION</span>
                {ceramicBoost && (
                  <>
                    <span>•</span>
                    <span className="text-cyan-400 font-bold">10H CERAMIC BOOST</span>
                  </>
                )}
              </div>
            </div>

            {/* 4 Bottom Telemetry Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-carbon border border-white/10 text-center font-mono">
                <span className="text-silver text-[10px] uppercase block">SHADE TRANSMITTANCE</span>
                <span className="font-display font-black text-white text-xl mt-1 block">{vlt}% VLT</span>
                <span className="text-[10px] text-silver/60">Visible light pass</span>
              </div>
              <div className="p-4 rounded-2xl bg-carbon border border-white/10 text-center font-mono">
                <span className="text-silver text-[10px] uppercase block">IR HEAT REJECTION</span>
                <span className="font-display font-black text-emerald-400 text-xl mt-1 block">{calculatedIr}%</span>
                <span className="text-[10px] text-emerald-400/60">Solar barrier</span>
              </div>
              <div className="p-4 rounded-2xl bg-carbon border border-white/10 text-center font-mono">
                <span className="text-silver text-[10px] uppercase block">SPECULAR GLOSS</span>
                <span className="font-display font-black text-white text-xl mt-1 block">
                  {ceramicBoost ? '109.4 GU' : '94.8 GU'}
                </span>
                <span className="text-[10px] text-silver/60">60° optical reflection</span>
              </div>
              <div className="p-4 rounded-2xl bg-carbon border border-white/10 text-center font-mono">
                <span className="text-silver text-[10px] uppercase block">ARMOR THICKNESS</span>
                <span className="font-display font-black text-crimson text-xl mt-1 block">
                  {vehicleClass === 'Sports' ? '8.5 Mil' : vehicleClass === 'Sedan' ? '8.2 Mil' : '9.0 Mil'}
                </span>
                <span className="text-[10px] text-crimson/60">215µ High-Impact</span>
              </div>
            </div>
          </div>

          {/* Right Control Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-carbon border border-white/15 rounded-3xl p-6 shadow-2xl space-y-6">
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-white block mb-1">
                  VEHICLE TELEMETRY PROFILE
                </span>
                <input
                  type="text"
                  value={clientModel}
                  onChange={(e) => setClientModel(e.target.value)}
                  className="w-full bg-obsidian border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-crimson"
                  placeholder="Vehicle Model..."
                />
              </div>

              {/* VLT Range */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-silver font-bold uppercase">WINDOW TINT DENSITY</span>
                  <span className="text-crimson font-black text-sm">{vlt}% VLT</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="70"
                  step="5"
                  value={vlt}
                  onChange={(e) => setVlt(Number(e.target.value))}
                  className="w-full accent-crimson cursor-pointer bg-white/20 h-2 rounded-lg"
                />
                <div className="flex justify-between text-[9px] font-mono text-silver/60 mt-1">
                  <span>5% Limo</span>
                  <span>20%</span>
                  <span>35%</span>
                  <span>50%</span>
                  <span>70% Clear</span>
                </div>
              </div>

              {/* Colors */}
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-silver mb-2 font-bold">
                  Primary Paint Colorway ({carColor})
                </span>
                <div className="grid grid-cols-6 gap-2 mb-3">
                  {colorSwatches.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleColorChange(c.id, c.image, c.glow)}
                      className={`h-7 rounded-lg border transition-all ${
                        carColor === c.id ? 'border-white ring-2 ring-crimson scale-105' : 'border-white/20 hover:border-white'
                      }`}
                      style={{ backgroundColor: c.bg }}
                      title={c.label}
                    />
                  ))}
                </div>

                <span className="block text-[10px] font-mono uppercase tracking-wider text-silver mb-2 font-bold">
                  Stealth Satin & Specialty Finishes
                </span>
                <div className="grid grid-cols-6 gap-2">
                  {finishSwatches.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => handleColorChange(f.id, f.image, f.glow)}
                      className={`h-7 rounded-lg border transition-all flex items-center justify-center text-[7px] font-mono font-bold ${
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

              {/* Ceramic Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian border border-white/10">
                <div>
                  <span className="text-xs font-display font-bold uppercase text-white block">10H Ceramic Gloss Boost</span>
                  <span className="text-[10px] font-mono text-silver">Adds 115° contact beading shimmer</span>
                </div>
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

              {/* Class Selector */}
              <div>
                <span className="block text-[10px] font-mono uppercase text-silver mb-2 font-bold">Vehicle Class Calibration</span>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  {['Sports', 'Sedan', 'SUV'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setVehicleClass(c)}
                      className={`py-2 rounded-lg border transition-all ${
                        vehicleClass === c ? 'bg-crimson border-crimson text-white font-bold' : 'bg-obsidian border-white/10 text-silver hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={handleExportSpec}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>EXPORT SPEC SHEET (.PDF)</span>
                </button>
                <Link
                  to="/contact"
                  className="w-full py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl shadow-glow-red transition-all block text-center"
                >
                  LOCK INTAKE WITH THIS SPEC
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

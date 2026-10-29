import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../context/themesData';
import { Sliders, ArrowRight, ShieldCheck, Download } from 'lucide-react';

export default function SimulatorPage() {
  const { theme } = useTheme();
  const activeThemeConfig = themes.find((t) => t.id === theme) || themes[0];

  const [vlt, setVlt] = useState(20);
  const [carColor, setCarColor] = useState('crimson');
  const [carImage, setCarImage] = useState('/assets/car-crimson.jpg');
  const [underglowColor, setUnderglowColor] = useState('rgba(217, 20, 36, 0.45)');
  const [ceramicBoost, setCeramicBoost] = useState(true);
  const [specClass, setSpecClass] = useState('Sports');

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

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              HARDWARE CONFIGURATOR
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-1">
              FULL 4-PILLAR TELEMETRY SIMULATOR
            </h1>
            <p className="text-xs text-silver mt-1 max-w-lg">
              Simulate Visible Light Transmission, graphene ceramic topcoat reflections, and 12 distinct automotive finishes in real time.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-carbon border border-white/10 text-xs font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-ping"></span>
            <span className="text-white font-bold">CALIBRATION ENGINE ACTIVE</span>
          </div>
        </div>

        {/* Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-2xl bg-obsidian/90 border border-white/10 shadow-2xl">
              <div
                className="absolute bottom-0 inset-x-0 h-36 blur-3xl pointer-events-none transition-all duration-500"
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

              <div className="absolute top-4 left-5 z-20 flex items-center gap-2 text-[10px] font-mono text-silver bg-black/60 px-3 py-1.5 rounded border border-white/10">
                <span className="text-crimson font-bold">{activeThemeConfig.carName}</span>
                <span>•</span>
                <span>{vlt}% VLT SHADE</span>
                <span>•</span>
                <span className="text-emerald-400">{calculatedIr}% IR REJECTION</span>
              </div>
            </div>

            {/* Quick Specs Under Car */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-carbon border border-white/10 text-center font-mono">
                <span className="text-silver text-[10px] block">SHADE LEVEL</span>
                <span className="text-white font-bold text-lg">{vlt}% VLT</span>
              </div>
              <div className="p-4 rounded-xl bg-carbon border border-white/10 text-center font-mono">
                <span className="text-silver text-[10px] block">IR REJECTION</span>
                <span className="text-emerald-400 font-bold text-lg">{calculatedIr}%</span>
              </div>
              <div className="p-4 rounded-xl bg-carbon border border-white/10 text-center font-mono">
                <span className="text-silver text-[10px] block">GLOSS VALUE</span>
                <span className="text-white font-bold text-lg">{ceramicBoost ? '109.4 GU' : '94.8 GU'}</span>
              </div>
              <div className="p-4 rounded-xl bg-carbon border border-white/10 text-center font-mono">
                <span className="text-silver text-[10px] block">EST. HARDNESS</span>
                <span className="text-crimson font-bold text-lg">10H ASTM</span>
              </div>
            </div>
          </div>

          {/* Right Controls */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-carbon border border-white/15 rounded-2xl p-5 shadow-2xl">
              <span className="font-display font-bold text-xs tracking-wider uppercase text-white block mb-4">
                CONFIGURATOR CONTROLS
              </span>

              {/* VLT Slider */}
              <div className="mb-6">
                <div className="flex justify-between text-[11px] font-mono mb-2">
                  <span className="text-silver font-bold uppercase">WINDOW TINT DENSITY</span>
                  <span className="text-crimson font-bold">{vlt}% VLT</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="70"
                  step="5"
                  value={vlt}
                  onChange={(e) => setVlt(Number(e.target.value))}
                  className="w-full accent-crimson cursor-pointer bg-white/20 h-1.5 rounded-lg"
                />
                <div className="flex justify-between text-[9px] font-mono text-silver/60 mt-1">
                  <span>5% Limo</span>
                  <span>20%</span>
                  <span>35%</span>
                  <span>50%</span>
                  <span>70% Clear</span>
                </div>
              </div>

              {/* Swatches */}
              <div className="mb-6">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-silver mb-2 font-bold">
                  Select Paint / Finish ({carColor})
                </span>
                <div className="grid grid-cols-6 gap-2 mb-2">
                  {colorSwatches.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleColorChange(c.id, c.image, c.glow)}
                      className={`h-7 rounded border transition-all ${
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
                      className={`h-7 rounded border transition-all flex items-center justify-center text-[7px] font-mono font-bold ${
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
              <div className="flex items-center justify-between p-3 rounded bg-black/40 border border-white/10 mb-6">
                <div>
                  <span className="text-xs font-display font-bold uppercase text-white block">10H Ceramic Gloss</span>
                  <span className="text-[10px] font-mono text-silver">Adds covalent liquid reflection</span>
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

              {/* Direct Booking */}
              <Link
                to="/contact"
                className="w-full py-3 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-wider rounded shadow-glow-red transition-all block text-center"
              >
                Book This Exact Spec
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

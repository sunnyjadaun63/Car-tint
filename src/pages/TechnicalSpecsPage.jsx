import React, { useState } from 'react';
import { Activity, ShieldCheck, Cpu, Gauge, Zap, FileText, Download, CheckCircle2, ChevronRight, ArrowRight, Layers, Thermometer, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechnicalSpecsPage() {
  const [activeTab, setActiveTab] = useState('ASTM');
  const [activeWavelength, setActiveWavelength] = useState('IR');

  const astmTests = [
    {
      code: 'ASTM D3363',
      title: 'Film Hardness by Pencil Test',
      metric: '10H Certified',
      baseline: 'OEM Clearcoat: 2H - 4H',
      protocol: 'Wolff-Wilborn hardness scale applied at 45° angle under 750g load. Zero gouge or scratch deformation detected.',
      certifiedBy: 'SGS North America Inc.'
    },
    {
      code: 'ASTM B117',
      title: 'Salt Spray (Fog) Corrosion Resistance',
      metric: '3,500+ Hours',
      baseline: 'Standard Clear: 500 Hours',
      protocol: '5% continuous NaCl aqueous mist exposure at 35°C chamber temperature. No corrosion pitting, delamination, or creepage.',
      certifiedBy: 'TÜV SÜD Testing Lab'
    },
    {
      code: 'ASTM D3359',
      title: 'Cross-Hatch Adhesion Test',
      metric: '5B (Zero Flaking)',
      baseline: 'Standard PPF: 3B - 4B',
      protocol: 'Lattice pattern cross-cuts through TPU substrate; high-tack pressure adhesive tape applied and stripped at 180° angle.',
      certifiedBy: 'Intertek Laboratories'
    },
    {
      code: 'ASTM D1004',
      title: 'Graves Tear Resistance',
      metric: '185 lbs / inch',
      baseline: 'Generic TPU: 95 lbs / in',
      protocol: 'Crosshead displacement velocity of 20 in/min pulling nicked die specimens to catastrophic tear failure.',
      certifiedBy: 'SGS North America Inc.'
    },
    {
      code: 'ASTM D882',
      title: 'Tensile Strength at Break',
      metric: '6,800 PSI',
      baseline: 'Vinyl Wrap: 2,400 PSI',
      protocol: 'Elongation yield capacity testing exceeding 420% before plastic deformation on 8.5-Mil aliphatic polyurethane substrate.',
      certifiedBy: 'Intertek Laboratories'
    },
    {
      code: 'ASTM G154',
      title: 'Accelerated UV Weathering QUV',
      metric: '2,500 Hours (ΔE < 0.8)',
      baseline: 'Generic Film: ΔE > 3.5 (Yellowing)',
      protocol: 'Fluorescent UVA-340 lamps cycling 8 hours UV at 60°C and 4 hours condensation at 50°C. Spectrophotometer delta E under 0.8.',
      certifiedBy: 'Atlas Weathering Services'
    }
  ];

  const chemicalReagents = [
    { name: 'Avian Uric Acid (pH 3.2)', exposure: '72 Hours at 45°C', result: 'Zero Etching', note: 'Self-healing elastomeric topcoat rejects acid absorption.' },
    { name: 'DOT 4 Brake Fluid', exposure: '24 Hours Immersion', result: 'Zero Softening', note: 'Cross-linked ceramic fluorocarbon barrier resists solvent breakdown.' },
    { name: 'Industrial Iron Fallout (Fe)', exposure: '48 Hours Salt Fog', result: 'Pass (No Oxidation)', note: 'Dense nano-matrix prevents ferrous particles from embedding in paint pores.' },
    { name: 'Ethanol / Methanol Fuel Splatter', exposure: 'Instant Wipe', result: 'No Clouding', note: 'Aliphatic polycaprolactone core retains 100% optical clarity.' },
    { name: 'Acetone / Paint Thinner', exposure: '15 Minutes Dwell', result: 'Impervious', note: 'Inorganic SiO2 / Graphene lattice prevents solvent permeation.' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-carbon to-obsidian">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/50 text-crimson text-xs font-mono uppercase tracking-widest mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>ISO 9001:2015 CERTIFIED FACILITY • LABORATORY TELEMETRY</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white">
            TECHNICAL SPECIFICATIONS
          </h1>
          <p className="text-sm sm:text-base text-silver mt-3 max-w-3xl mx-auto leading-relaxed">
            Empirical scientific testing standards for Apex Studio protective films, graphene coatings, and cleanroom atmospheric protocols. Every metric validated by independent third-party laboratories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">10H</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">ASTM D3363 Hardness</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">99.2%</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Infrared Heat Rejection</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">8.5-MIL</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">TPU Armor Thickness</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">ISO 6</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Cleanroom Cleanliness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Radiation Spectrum Explorer */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            SPECTROPHOTOMETER TELEMETRY
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-1">
            SOLAR RADIATION ATTENUATION SPECTRUM
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2">
            The electromagnetic spectrum entering automotive glass is divided into three primary bands. Select a radiation zone to observe Apex Nano-Ceramic filtering performance.
          </p>
        </div>

        {/* Wavelength Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveWavelength('UV')}
            className={`px-5 py-2.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeWavelength === 'UV'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-carbon text-silver border border-white/10'
            }`}
          >
            Ultraviolet (300 - 380 nm)
          </button>
          <button
            onClick={() => setActiveWavelength('VIS')}
            className={`px-5 py-2.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeWavelength === 'VIS'
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                : 'bg-carbon text-silver border border-white/10'
            }`}
          >
            Visible Light (380 - 780 nm)
          </button>
          <button
            onClick={() => setActiveWavelength('IR')}
            className={`px-5 py-2.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeWavelength === 'IR'
                ? 'bg-crimson text-white shadow-glow-red'
                : 'bg-carbon text-silver border border-white/10'
            }`}
          >
            Infrared Heat (780 - 2500 nm)
          </button>
        </div>

        {/* Wavelength Detail Visualizer */}
        <div className="p-8 sm:p-12 rounded-2xl bg-carbon border-2 border-crimson/40 shadow-2xl">
          {activeWavelength === 'UV' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest block">
                  300 NM - 380 NM ULTRAVIOLET SPECTRUM
                </span>
                <h3 className="font-display font-black text-3xl uppercase text-white mt-2">
                  99.9% UV-A & UV-B REJECTION
                </h3>
                <p className="text-xs sm:text-sm text-silver mt-3 leading-relaxed">
                  Ultraviolet photons carry high energy that chemically breaks down OEM aniline leather dyes, Alcantara adhesive bindings, and carbon fiber clearcoats. Apex Nano-Ceramic film contains UV-blocking benzotriazole absorbers that extinguish 99.9% of UV transmission.
                </p>
                <div className="mt-6 space-y-2 text-xs font-mono text-silver">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Skin Cancer Foundation Recommendation:</span>
                    <span className="text-emerald-400 font-bold">Approved Seal</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Cockpit Material Longevity Index:</span>
                    <span className="text-white font-bold">15+ Years No Cracking</span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-obsidian border border-purple-500/30 text-center">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-bold">MEASURED UV TRANSMITTANCE</span>
                <div className="font-display font-black text-6xl text-purple-400 my-4">&lt; 0.1%</div>
                <span className="text-xs font-mono text-silver">Validated with Cary 5000 UV-Vis-NIR Spectrophotometer</span>
              </div>
            </div>
          )}

          {activeWavelength === 'VIS' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                  380 NM - 780 NM VISIBLE LIGHT SPECTRUM
                </span>
                <h3 className="font-display font-black text-3xl uppercase text-white mt-2">
                  CUSTOM VLT DENSITIES (5% - 70%)
                </h3>
                <p className="text-xs sm:text-sm text-silver mt-3 leading-relaxed">
                  Engineered with non-dyed, inorganic titanium nitride (TiN) nanoparticles that selectively filter glare without distorting true color rendering. Eliminates 94% of nighttime headlight scatter while maintaining crisp HD optical clarity.
                </p>
                <div className="mt-6 space-y-2 text-xs font-mono text-silver">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Reflectivity (Glare Reduction):</span>
                    <span className="text-white font-bold">Up to 94% Glare Attenuation</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Color Rendering Index (Ra):</span>
                    <span className="text-emerald-400 font-bold">Ra 98.4 (True Spectrum)</span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-obsidian border border-amber-500/30 text-center">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">OPTICAL CLARITY COEFFICIENT</span>
                <div className="font-display font-black text-6xl text-amber-400 my-4">99.4%</div>
                <span className="text-xs font-mono text-silver">Haze Level &lt; 0.4% (Zero orange peel or milky blur)</span>
              </div>
            </div>
          )}

          {activeWavelength === 'IR' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
                  780 NM - 2500 NM INFRARED THERMAL BAND
                </span>
                <h3 className="font-display font-black text-3xl uppercase text-white mt-2">
                  99.2% SELECTIVE IR HEAT DISSIPATION
                </h3>
                <p className="text-xs sm:text-sm text-silver mt-3 leading-relaxed">
                  Infrared radiation comprises 53% of all solar thermal energy hitting vehicle glass. Our sub-nanometer zirconium dioxide and antimony tin oxide (ATO) matrix absorbs and dissipates infrared heat before it penetrates vehicle interior volume.
                </p>
                <div className="mt-6 space-y-2 text-xs font-mono text-silver">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Total Solar Energy Rejected (TSER):</span>
                    <span className="text-crimson font-bold">Up to 71% TSER</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Cabin Temperature Differential:</span>
                    <span className="text-emerald-400 font-bold">-32°F cooler under direct sun</span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-obsidian border border-crimson/50 text-center">
                <span className="text-[10px] font-mono text-crimson uppercase tracking-widest block font-bold">INFRARED HEAT REJECTION</span>
                <div className="font-display font-black text-6xl text-crimson my-4">99.2%</div>
                <span className="text-xs font-mono text-silver">Tested at 900nm - 1,000nm Peak Solar IR Band</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ASTM Testing Standard Table */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            CERTIFIED LABORATORY BENCHMARKS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-1">
            ASTM INTERNATIONAL COMPLIANCE AUDIT
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2">
            Every roll of film and bottle of graphene resin is batch-tested against ASTM International specifications before entering our cleanroom inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {astmTests.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-carbon border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-1 rounded bg-crimson/20 text-crimson font-mono text-xs font-bold">
                    {t.code}
                  </span>
                  <span className="text-[10px] font-mono text-silver">{t.certifiedBy}</span>
                </div>
                <h3 className="font-display font-bold text-base uppercase text-white mt-2">
                  {t.title}
                </h3>
                <div className="my-4 p-3 rounded-lg bg-obsidian border border-white/5">
                  <div className="text-xs font-mono text-silver">Apex Result: <span className="text-white font-bold">{t.metric}</span></div>
                  <div className="text-[11px] font-mono text-silver/60 mt-0.5">OEM Baseline: {t.baseline}</div>
                </div>
                <p className="text-xs text-silver leading-relaxed">
                  {t.protocol}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Certified Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chemical Reagent Resistance Table */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              CORROSIVE AGENT RESISTANCE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              CHEMICAL REAGENT IMMERSION MATRIX
            </h2>
            <p className="text-xs text-silver mt-2">
              Results from 72-hour controlled chemical drop tests on panels coated with Apex 10H Graphene ceramic and XPEL TPU.
            </p>
          </div>

          <div className="bg-carbon border border-white/10 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-obsidian border-b border-white/10 text-silver uppercase text-[10px]">
                  <tr>
                    <th className="p-4">Chemical Reagent</th>
                    <th className="p-4">Exposure Duration</th>
                    <th className="p-4">Surface Outcome</th>
                    <th className="p-4">Material Mechanism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-silver">
                  {chemicalReagents.map((r, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="p-4 font-bold text-white">{r.name}</td>
                      <td className="p-4">{r.exposure}</td>
                      <td className="p-4 text-emerald-400 font-bold">{r.result}</td>
                      <td className="p-4 text-xs font-sans text-silver/80">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cleanroom ISO 6 Environmental Chamber Telemetry */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              CONTROLLED ENVIRONMENT
            </span>
            <h2 className="font-display font-black text-3xl uppercase text-white mt-2">
              ISO CLASS 6 CLEANROOM ATMOSPHERIC SPECS
            </h2>
            <p className="text-xs sm:text-sm text-silver mt-3 leading-relaxed">
              Airborne dust, lint, and textile fibers ruin PPF and ceramic installations by creating visible bubbles and inclusions. Apex Studio operates positive-pressure installation bays sealed against external drafts.
            </p>
            <div className="mt-8 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-3 rounded-lg bg-carbon border border-white/10">
                <span className="text-silver">HEPA H14 Filtration Efficiency:</span>
                <span className="text-white font-bold">99.995% at 0.3 Microns</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-carbon border border-white/10">
                <span className="text-silver">Air Changes Per Hour (ACH):</span>
                <span className="text-white font-bold">45 Complete Recirculations / hr</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-carbon border border-white/10">
                <span className="text-silver">Ambient Humidity Regulation:</span>
                <span className="text-white font-bold">48% ± 3% Constant RH</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-carbon border border-white/10">
                <span className="text-silver">Positive Atmospheric Differential:</span>
                <span className="text-emerald-400 font-bold">+18 Pascals (Excludes Dust)</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-carbon to-obsidian border-2 border-crimson/50 shadow-2xl text-center">
            <Cpu className="w-12 h-12 text-crimson mx-auto mb-4" />
            <h3 className="font-display font-black text-xl uppercase text-white">
              DOWNLOAD TECHNICAL WHITEPAPER
            </h3>
            <p className="text-xs text-silver mt-2 max-w-sm mx-auto">
              Access the complete 42-page ISO 9001 technical dossier detailing material spectrometry, ASTM lab certificates, and curing kinetics.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#download"
                onClick={(e) => { e.preventDefault(); alert("Technical Whitepaper PDF: Sent to your email."); }}
                className="w-full sm:w-auto px-6 py-3 rounded bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD DOSSIER (PDF)</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded bg-white/5 hover:bg-white/10 border border-white/20 text-white font-display font-bold text-xs uppercase tracking-widest"
              >
                LAB CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto text-center border-t border-white/10">
        <h2 className="font-display font-black text-3xl uppercase text-white">
          READY FOR SURGICAL VEHICLE PROTECTION?
        </h2>
        <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
          Reserve a positive-pressure booth allocation for your supercar or hypercar.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/packages"
            className="px-8 py-3.5 rounded bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red flex items-center gap-2"
          >
            <span>VIEW PROTECTION PACKAGES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

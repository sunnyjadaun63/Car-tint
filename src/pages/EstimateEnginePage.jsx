import React, { useState } from 'react';
import { Calculator, ShieldCheck, Truck, Car, CheckCircle2, ArrowRight, Clock, Calendar, Sparkles, DollarSign, Download, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EstimateEnginePage() {
  const [vehicleClass, setVehicleClass] = useState('exotic');
  const [ppfOption, setPpfOption] = useState('track');
  const [ceramicOption, setCeramicOption] = useState('graphene10');
  const [tintOption, setTintOption] = useState('full');
  const [caliperOption, setCaliperOption] = useState(false);
  const [transportOption, setTransportOption] = useState('enclosed');
  const [vehicleDetails, setVehicleDetails] = useState({ year: '2024', make: 'Porsche', model: '911 GT3 RS', vin: '' });
  const [contactDetails, setContactDetails] = useState({ name: '', phone: '', email: '', preferredDate: '' });
  const [submitted, setSubmitted] = useState(false);

  // Pricing Matrix Logic
  const classBasePrices = {
    exotic: { name: 'Exotic Sports / Coupe', multiplier: 1.0, hours: 38 },
    supercar: { name: 'Supercar / Hypercar', multiplier: 1.35, hours: 64 },
    sedan: { name: 'Performance Sedan', multiplier: 1.15, hours: 44 },
    suv: { name: 'Luxury Performance SUV', multiplier: 1.25, hours: 52 },
    vintage: { name: 'Bespoke Vintage / Collector', multiplier: 1.5, hours: 75 }
  };

  const ppfPrices = {
    none: { name: 'No PPF', price: 0 },
    track: { name: 'Track Front Armor (Bumper, Hood, Fenders, Mirrors)', price: 2450 },
    full: { name: 'Full-Body High-Gloss XPEL TPU Armor', price: 6850 },
    stealth: { name: 'Full-Body XPEL Stealth Satin Matte Conversion', price: 7950 }
  };

  const ceramicPrices = {
    none: { name: 'No Ceramic', price: 0 },
    quartz5: { name: '5-Year SiO2 Liquid Quartz Coating', price: 1450 },
    graphene10: { name: '10-Year 10H Nanotube Graphene Ceramic + IR Cure', price: 2450 }
  };

  const tintPrices = {
    none: { name: 'No Window Tint', price: 0 },
    sides: { name: 'Front 2 Sides Nano-Ceramic (99% IR)', price: 395 },
    full: { name: 'All Sides + Rear Glass Nano-Ceramic (99% IR)', price: 895 },
    windshield: { name: 'Complete Vehicle + Optical Front Windshield Armor', price: 1395 }
  };

  const caliperPrice = caliperOption ? 1650 : 0;

  const transportPrices = {
    self: { name: 'Client Self Drop-Off at Studio', price: 0 },
    enclosed: { name: 'Single-Car Hydraulic Enclosed Liftgate (Metro 50mi)', price: 350 },
    statewide: { name: 'Regional Covered Dedicated Transporter (250mi)', price: 850 },
    hotshot: { name: 'Nationwide VIP Hotshot Direct Dispatch', price: 2400 }
  };

  const currentMultiplier = classBasePrices[vehicleClass].multiplier;
  const rawSubtotal = (ppfPrices[ppfOption].price + ceramicPrices[ceramicOption].price + tintPrices[tintOption].price + caliperPrice) * currentMultiplier + transportPrices[transportOption].price;
  const subtotal = Math.round(rawSubtotal);
  const requiredDeposit = Math.round(subtotal * 0.20);
  const totalHours = Math.round(classBasePrices[vehicleClass].hours * (ppfOption === 'full' || ppfOption === 'stealth' ? 1.4 : 1.0));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactDetails.email || !contactDetails.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-carbon to-obsidian">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/50 text-crimson text-xs font-mono uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>DIRECT STUDIO ALLOCATION CALCULATOR</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white">
            INSTANT ESTIMATE ENGINE
          </h1>
          <p className="text-sm sm:text-base text-silver mt-3 max-w-3xl mx-auto leading-relaxed">
            Configure your exact vehicle protection architecture in real time. Transparent itemized pricing, calculated cleanroom technician hours, and guaranteed booth reservation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-mono text-silver">
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-emerald-400" /> Price-Lock Guarantee</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> $5,000,000 Transit Insurance</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 10-Year Transferable Warranty</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Engine Grid */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Configuration Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Vehicle Class */}
            <div className="p-6 rounded-2xl bg-carbon border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-crimson flex items-center justify-center text-white font-mono text-xs font-bold">1</span>
                <h3 className="font-display font-bold text-base uppercase text-white">SELECT VEHICLE CLASSIFICATION</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(classBasePrices).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setVehicleClass(key)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      vehicleClass === key
                        ? 'border-crimson bg-crimson/10 text-white shadow-glow-red'
                        : 'border-white/10 bg-obsidian text-silver hover:border-white/30'
                    }`}
                  >
                    <span className="block font-display font-bold text-xs uppercase">{item.name}</span>
                    <span className="text-[10px] font-mono text-silver/70 mt-1 block">Multiplier: {item.multiplier}x</span>
                  </button>
                ))}
              </div>

              {/* Vehicle Make & Model Input */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
                <div>
                  <label className="text-[10px] font-mono text-silver uppercase block mb-1">Year</label>
                  <input
                    type="text"
                    value={vehicleDetails.year}
                    onChange={(e) => setVehicleDetails({ ...vehicleDetails, year: e.target.value })}
                    className="w-full bg-obsidian border border-white/10 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-crimson"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-silver uppercase block mb-1">Make</label>
                  <input
                    type="text"
                    value={vehicleDetails.make}
                    onChange={(e) => setVehicleDetails({ ...vehicleDetails, make: e.target.value })}
                    className="w-full bg-obsidian border border-white/10 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-crimson"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-silver uppercase block mb-1">Model / Trim</label>
                  <input
                    type="text"
                    value={vehicleDetails.model}
                    onChange={(e) => setVehicleDetails({ ...vehicleDetails, model: e.target.value })}
                    className="w-full bg-obsidian border border-white/10 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-crimson"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Paint Protection Film Coverage */}
            <div className="p-6 rounded-2xl bg-carbon border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-crimson flex items-center justify-center text-white font-mono text-xs font-bold">2</span>
                <h3 className="font-display font-bold text-base uppercase text-white">PAINT PROTECTION FILM (PPF) ARMOR</h3>
              </div>
              <div className="space-y-2.5">
                {Object.entries(ppfPrices).map(([key, item]) => (
                  <div
                    key={key}
                    onClick={() => setPpfOption(key)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      ppfOption === key
                        ? 'border-crimson bg-crimson/10 shadow-glow-red'
                        : 'border-white/10 bg-obsidian hover:border-white/30'
                    }`}
                  >
                    <div>
                      <span className="font-display font-bold text-xs uppercase text-white block">{item.name}</span>
                      <span className="text-[10px] font-mono text-silver">8.5-Mil TPU • Self-Healing Elastomer • Zero Orange Peel</span>
                    </div>
                    <span className="font-mono font-bold text-xs text-crimson">
                      {item.price === 0 ? '$0' : `+$${item.price.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Ceramic & Graphene Coating */}
            <div className="p-6 rounded-2xl bg-carbon border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-crimson flex items-center justify-center text-white font-mono text-xs font-bold">3</span>
                <h3 className="font-display font-bold text-base uppercase text-white">10H GRAPHENE CERAMIC COATING</h3>
              </div>
              <div className="space-y-2.5">
                {Object.entries(ceramicPrices).map(([key, item]) => (
                  <div
                    key={key}
                    onClick={() => setCeramicOption(key)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      ceramicOption === key
                        ? 'border-crimson bg-crimson/10 shadow-glow-red'
                        : 'border-white/10 bg-obsidian hover:border-white/30'
                    }`}
                  >
                    <div>
                      <span className="font-display font-bold text-xs uppercase text-white block">{item.name}</span>
                      <span className="text-[10px] font-mono text-silver">Includes multi-stage machine paint correction under surgical lamps</span>
                    </div>
                    <span className="font-mono font-bold text-xs text-crimson">
                      {item.price === 0 ? '$0' : `+$${item.price.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Window Tinting & Caliper Add-ons */}
            <div className="p-6 rounded-2xl bg-carbon border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-crimson flex items-center justify-center text-white font-mono text-xs font-bold">4</span>
                <h3 className="font-display font-bold text-base uppercase text-white">NANO-CERAMIC TINT & CALIPERS</h3>
              </div>
              <div className="space-y-2.5">
                {Object.entries(tintPrices).map(([key, item]) => (
                  <div
                    key={key}
                    onClick={() => setTintOption(key)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      tintOption === key
                        ? 'border-crimson bg-crimson/10 shadow-glow-red'
                        : 'border-white/10 bg-obsidian hover:border-white/30'
                    }`}
                  >
                    <span className="font-display font-bold text-xs uppercase text-white">{item.name}</span>
                    <span className="font-mono font-bold text-xs text-crimson">
                      {item.price === 0 ? '$0' : `+$${item.price.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>

              {/* Caliper Checkbox */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-display font-bold text-xs uppercase text-white block">Downdraft Caliper Refinish & OEM Decals</span>
                  <span className="text-[10px] font-mono text-silver">Disassembly, chemical strip, high-temp epoxy bake</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCaliperOption(!caliperOption)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    caliperOption
                      ? 'bg-crimson text-white shadow-glow-red'
                      : 'bg-obsidian border border-white/20 text-silver'
                  }`}
                >
                  {caliperOption ? 'SELECTED (+$1,650)' : '+ ADD (+$1,650)'}
                </button>
              </div>
            </div>

            {/* Step 5: Logistics & Covered Transport */}
            <div className="p-6 rounded-2xl bg-carbon border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-crimson flex items-center justify-center text-white font-mono text-xs font-bold">5</span>
                <h3 className="font-display font-bold text-base uppercase text-white">ENCLOSED VEHICLE TRANSPORT</h3>
              </div>
              <div className="space-y-2.5">
                {Object.entries(transportPrices).map(([key, item]) => (
                  <div
                    key={key}
                    onClick={() => setTransportOption(key)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      transportOption === key
                        ? 'border-crimson bg-crimson/10 shadow-glow-red'
                        : 'border-white/10 bg-obsidian hover:border-white/30'
                    }`}
                  >
                    <div>
                      <span className="font-display font-bold text-xs uppercase text-white block">{item.name}</span>
                      <span className="text-[10px] font-mono text-silver">Zero-contact tie downs • Climate controlled • $5M Insurance</span>
                    </div>
                    <span className="font-mono font-bold text-xs text-crimson">
                      {item.price === 0 ? 'FREE' : `+$${item.price.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Spec Sheet & Allocation Checkout (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border-2 border-crimson/50 bg-carbon p-6 sm:p-8 shadow-2xl">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-crimson font-bold uppercase tracking-widest block">
                  REAL-TIME QUOTE SPECIFICATION
                </span>
                <h3 className="font-display font-black text-2xl uppercase text-white mt-1">
                  {vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.model}
                </h3>
                <span className="text-xs font-mono text-silver">{classBasePrices[vehicleClass].name}</span>
              </div>

              {/* Breakdown List */}
              <div className="py-4 space-y-2.5 text-xs font-mono border-b border-white/10">
                <div className="flex justify-between text-silver">
                  <span>PPF Armor:</span>
                  <span className="text-white font-bold">{ppfPrices[ppfOption].name}</span>
                </div>
                <div className="flex justify-between text-silver">
                  <span>Ceramic Coating:</span>
                  <span className="text-white font-bold">{ceramicPrices[ceramicOption].name}</span>
                </div>
                <div className="flex justify-between text-silver">
                  <span>Window Tint:</span>
                  <span className="text-white font-bold">{tintPrices[tintOption].name}</span>
                </div>
                {caliperOption && (
                  <div className="flex justify-between text-silver">
                    <span>Caliper Paintwork:</span>
                    <span className="text-white font-bold">Yes (+$1,650)</span>
                  </div>
                )}
                <div className="flex justify-between text-silver">
                  <span>Transport Method:</span>
                  <span className="text-white font-bold">{transportPrices[transportOption].name}</span>
                </div>
                <div className="flex justify-between text-silver pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-crimson" /> Est. Booth Labor:</span>
                  <span className="text-crimson font-bold">{totalHours} Cleanroom Hours</span>
                </div>
              </div>

              {/* Subtotal & Deposit */}
              <div className="py-6 border-b border-white/10">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-silver uppercase font-bold">Total Estimated Investment:</span>
                  <span className="font-display font-black text-3xl sm:text-4xl text-white">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-2 text-xs font-mono">
                  <span className="text-silver">20% Reservation Deposit:</span>
                  <span className="text-crimson font-bold">${requiredDeposit.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-silver/60 mt-2 font-mono">
                  Includes 10-year warranty certificate, lifetime Carfax registration, and white-glove inspection report.
                </p>
              </div>

              {/* Allocation Booking Form */}
              <form onSubmit={handleSubmit} className="pt-6 space-y-3">
                <div>
                  <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Christian Von Koenigsegg"
                    value={contactDetails.name}
                    onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
                    className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-crimson font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={contactDetails.phone}
                      onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                      className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-crimson font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="client@luxury.com"
                      value={contactDetails.email}
                      onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                      className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-crimson font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Preferred Studio Intake Window</label>
                  <input
                    type="date"
                    value={contactDetails.preferredDate}
                    onChange={(e) => setContactDetails({ ...contactDetails, preferredDate: e.target.value })}
                    className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center justify-center gap-2"
                >
                  <span>LOCK IN ESTIMATE & RESERVE BAY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-mono">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4" /> ESTIMATE SPECIFICATION DISPATCHED
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Formal PDF spec sheet for {vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.model} (${subtotal.toLocaleString()}) sent to {contactDetails.email}. Concierge assigned.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Guarantee & Financing Banner */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <Lock className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-base uppercase text-white">PRICE-LOCK GUARANTEE</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              The quote generated above is binding for 30 calendar days upon deposit. No surprise shop supplies, razor blade surcharges, or hidden prep fees.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <DollarSign className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-base uppercase text-white">0% APR CONCIERGE FINANCING</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Split your bespoke styling and PPF investment over 6, 12, or 24 months with zero interest through Apex Studio Financial partners. Instant credit decision with zero hard inquiry.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <Truck className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-base uppercase text-white">ENCLOSED TRANSPORT INTEGRATION</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              We dispatch hydraulic liftgate transporters nationwide. Your vehicle never touches the pavement or highway elements until fully protected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

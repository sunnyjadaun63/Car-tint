import React, { useState } from 'react';
import { Truck, ShieldCheck, MapPin, Navigation, Clock, CheckCircle2, AlertCircle, ArrowRight, Phone, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnclosedTransportPage() {
  const [pickupZip, setPickupZip] = useState('90210');
  const [destinationStudio, setDestinationStudio] = useState('LA');
  const [vehicleMake, setVehicleMake] = useState('McLaren Senna');
  const [calculatedRate, setCalculatedRate] = useState(null);

  // Active Fleet Telemetry Simulation State
  const [activeTelemetry, setActiveTelemetry] = useState({
    carrierId: 'APEX-CARRIER-04',
    driver: 'Capt. Daniel Hayes (12 Yrs Exotic Logistics)',
    status: 'IN TRANSIT',
    location: 'Interstate 10 East, Palm Springs Sector',
    speed: '63 MPH',
    temp: '68.4°F (Regulated)',
    shockG: '0.04 G (Air-Ride Active)',
    eta: 'Today, 15:30 PST'
  });

  const studioLocations = {
    LA: { name: 'Apex Flagship (Los Angeles - Silicon Beach)', state: 'CA' },
    NYC: { name: 'Apex Manhattan (Tribeca / Hudson Yards)', state: 'NY' },
    MIA: { name: 'Apex Miami (Design District)', state: 'FL' },
    DAL: { name: 'Apex Dallas (Addison Airpark)', state: 'TX' },
    PHX: { name: 'Apex Scottsdale (Airpark)', state: 'AZ' }
  };

  const handleCalculateRate = (e) => {
    e.preventDefault();
    if (!pickupZip) return;
    // Mock algorithmic rate estimate
    const baseRate = destinationStudio === 'LA' ? 385 : destinationStudio === 'NYC' ? 1450 : 850;
    setCalculatedRate({
      distance: '185 Miles',
      transitTime: 'Same-Day (4.5 Hours)',
      rate: `$${baseRate.toLocaleString()}`,
      insurance: '$5,000,000 All-Risk Policy Included'
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-carbon to-obsidian">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/50 text-crimson text-xs font-mono uppercase tracking-widest mb-4">
            <Truck className="w-3.5 h-3.5" />
            <span>WHITE-GLOVE VEHICLE LOGISTICS • 50 STATES</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white">
            ENCLOSED CARRIER TRANSPORT
          </h1>
          <p className="text-sm sm:text-base text-silver mt-3 max-w-3xl mx-auto leading-relaxed">
            Zero road wear. Zero stone chips. Zero weather exposure. Our proprietary fleet of hydraulic liftgate transporters delivers your exotic or hypercar directly from your residential hangar into our positive-pressure cleanroom bays.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">&lt; 4°</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Sub-4° Splitter Clearance</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">$5,000,000</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">All-Risk Cargo Insurance</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">100% AIR-RIDE</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Dual Pneumatic Isolation</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">GPS LIVE</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Satellite Client Telemetry</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Telemetry Live Tracker Simulator */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="p-6 sm:p-10 rounded-2xl bg-carbon border-2 border-crimson/50 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
                  LIVE SATELLITE CARRIER TELEMETRY
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
                DISPATCH UNIT: {activeTelemetry.carrierId}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-silver uppercase block">Assigned Transport Specialist:</span>
              <span className="text-xs font-mono text-white font-bold">{activeTelemetry.driver}</span>
            </div>
          </div>

          {/* Telemetry Sensor Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-6 border-b border-white/10 text-xs font-mono">
            <div className="p-3 rounded-lg bg-obsidian border border-white/5">
              <span className="text-silver/60 text-[10px] block">CURRENT STATUS</span>
              <span className="text-emerald-400 font-bold mt-1 block">{activeTelemetry.status}</span>
            </div>
            <div className="p-3 rounded-lg bg-obsidian border border-white/5">
              <span className="text-silver/60 text-[10px] block">LOCATION</span>
              <span className="text-white font-bold mt-1 block truncate">{activeTelemetry.location}</span>
            </div>
            <div className="p-3 rounded-lg bg-obsidian border border-white/5">
              <span className="text-silver/60 text-[10px] block">CRUISE SPEED</span>
              <span className="text-white font-bold mt-1 block">{activeTelemetry.speed}</span>
            </div>
            <div className="p-3 rounded-lg bg-obsidian border border-white/5">
              <span className="text-silver/60 text-[10px] block">BAY TEMPERATURE</span>
              <span className="text-white font-bold mt-1 block">{activeTelemetry.temp}</span>
            </div>
            <div className="p-3 rounded-lg bg-obsidian border border-white/5">
              <span className="text-silver/60 text-[10px] block">ACCELEROMETER G-LOAD</span>
              <span className="text-crimson font-bold mt-1 block">{activeTelemetry.shockG}</span>
            </div>
            <div className="p-3 rounded-lg bg-obsidian border border-white/5">
              <span className="text-silver/60 text-[10px] block">ESTIMATED BOOTH INTAKE</span>
              <span className="text-white font-bold mt-1 block">{activeTelemetry.eta}</span>
            </div>
          </div>

          <p className="text-[11px] font-mono text-silver mt-4">
            *Every client is provided a private, end-to-end encrypted satellite tracking URL upon trailer dispatch, featuring interior cabin video feeds and temperature/shock alarms.
          </p>
        </div>
      </section>

      {/* Hydraulic Liftgate & Engineering Standards */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            HYPERCAR-SPECIFIC RIGGING
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-1">
            BUILT FOR GROUND-EFFECT AERODYNAMICS
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2">
            Modern hypercars feature delicate carbon-fiber front splitters, rear underbody venturis, and race suspension setups with only 60mm of ground clearance. Standard ramps damage bodywork instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              01
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">HORIZONTAL LIFTGATES</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Our trailers utilize 6,000-lb full-horizontal hydraulic elevators. The car is driven flat onto the platform at ground level, lifted vertically, and rolled straight into the trailer bed with zero angular incline.
            </p>
            <div className="mt-4 p-2.5 rounded bg-obsidian text-[11px] font-mono text-silver">
              Suitable for: Senna, Valkyrie, GT3 RS, STO
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              02
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">OVER-THE-TIRE SOFT STRAPS</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              We NEVER attach metal hooks or winch chains to vehicle suspension arms, control links, or forged center-lock wheels. Wheels are cradled with soft synthetic tire nets secured to floor E-tracks.
            </p>
            <div className="mt-4 p-2.5 rounded bg-obsidian text-[11px] font-mono text-silver">
              Zero contact with rims or carbon ceramic brakes.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              03
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">CLIMATE & MOISTURE REGULATION</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Trailer enclosures are insulated with aerospace composite walls and dual Webasto HVAC systems maintaining constant 68°F (20°C) and low humidity to protect delicate bare metal and carbon finishes.
            </p>
            <div className="mt-4 p-2.5 rounded bg-obsidian text-[11px] font-mono text-silver">
              Impervious to rain, road salt, gravel, and UV.
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Door-to-Booth Protocol */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            WHITE-GLOVE DISPATCH LIFECYCLE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-1">
            4-STAGE DOOR-TO-BOOTH PROTOCOL
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-carbon border border-white/10">
            <span className="text-xs font-mono text-crimson font-bold block mb-1">STAGE 01</span>
            <h4 className="font-display font-bold text-sm uppercase text-white">RESIDENTIAL INTAKE INSPECTION</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Our uniformed technician performs a 360° 4K video scan and electronic paint micrometer mapping at your home or facility before any transit movement.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-carbon border border-white/10">
            <span className="text-xs font-mono text-crimson font-bold block mb-1">STAGE 02</span>
            <h4 className="font-display font-bold text-sm uppercase text-white">STERILE CABIN PROTECTION</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Application of disposable microfiber seat blankets, steering wheel covers, and carbon sill guards before driving onto the low-clearance liftgate.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-carbon border border-white/10">
            <span className="text-xs font-mono text-crimson font-bold block mb-1">STAGE 03</span>
            <h4 className="font-display font-bold text-sm uppercase text-white">NON-STOP DEDICATED TRANSIT</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Direct point-to-point transit with zero intermediate stops or vehicle offloading. Continuous satellite telemetry and temperature logging.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-carbon border border-white/10">
            <span className="text-xs font-mono text-crimson font-bold block mb-1">STAGE 04</span>
            <h4 className="font-display font-bold text-sm uppercase text-white">CLEANROOM BOOTH HANDOFF</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Trailer reverses directly into our negative-draft intake chamber. The vehicle rolls straight onto our cleanroom scissor lift for decontamination.
            </p>
          </div>
        </div>
      </section>

      {/* Transit Rate Estimator Widget */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto border-t border-white/10">
        <div className="p-8 sm:p-10 rounded-2xl bg-carbon border-2 border-crimson/50 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              INSTANT LOGISTICS ESTIMATOR
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              ESTIMATE ENCLOSED TRANSPORT COST
            </h3>
            <p className="text-xs text-silver mt-1">
              Calculate door-to-door enclosed transport to your nearest Apex Studio cleanroom.
            </p>
          </div>

          <form onSubmit={handleCalculateRate} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">1. Pickup Zip Code</label>
              <input
                required
                type="text"
                value={pickupZip}
                onChange={(e) => setPickupZip(e.target.value)}
                placeholder="e.g. 90210"
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">2. Destination Studio</label>
              <select
                value={destinationStudio}
                onChange={(e) => setDestinationStudio(e.target.value)}
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              >
                {Object.entries(studioLocations).map(([key, loc]) => (
                  <option key={key} value={key}>{loc.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">3. Vehicle Model</label>
              <input
                type="text"
                value={vehicleMake}
                onChange={(e) => setVehicleMake(e.target.value)}
                placeholder="e.g. Ferrari SF90"
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              />
            </div>

            <div className="sm:col-span-3 mt-2">
              <button
                type="submit"
                className="w-full py-3 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center justify-center gap-2"
              >
                <span>CALCULATE TRANSIT RATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {calculatedRate && (
            <div className="mt-6 p-4 rounded-xl bg-obsidian border border-crimson/50 text-xs font-mono">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <span className="text-[10px] text-silver block">EST. DISTANCE</span>
                  <span className="text-white font-bold">{calculatedRate.distance}</span>
                </div>
                <div>
                  <span className="text-[10px] text-silver block">TRANSIT WINDOW</span>
                  <span className="text-white font-bold">{calculatedRate.transitTime}</span>
                </div>
                <div>
                  <span className="text-[10px] text-silver block">ESTIMATED RATE</span>
                  <span className="text-crimson font-black text-sm">{calculatedRate.rate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-silver block">CARGO POLICY</span>
                  <span className="text-emerald-400 font-bold">$5,000,000</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Dispatch CTA */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto text-center border-t border-white/10">
        <h2 className="font-display font-black text-3xl uppercase text-white">
          BOOK WHITE-GLOVE CARRIER DISPATCH
        </h2>
        <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
          Speak with our logistics director to coordinate single-car or multi-car enclosed transport.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red flex items-center gap-2"
          >
            <span>REQUEST CARRIER DISPATCH</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, CheckCircle2, Building, Eye, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudioLocatorPage() {
  const [activeStudioId, setActiveStudioId] = useState('la');
  const [tourForm, setTourForm] = useState({ name: '', phone: '', email: '', date: '', studio: 'la' });
  const [tourSubmitted, setTourSubmitted] = useState(false);

  const studios = {
    la: {
      id: 'la',
      city: 'Los Angeles',
      name: 'APEX FLAGSHIP • SILICON BEACH',
      address: '12880 W Jefferson Blvd, Playa Vista, CA 90094',
      phone: '+1 (310) 890-APEX',
      email: 'losangeles@apexstudio.com',
      hours: 'Mon - Sat: 07:00 - 19:00 PST (VIP 24/7 After-Hours Intake)',
      area: '24,000 Sq Ft',
      bays: '8 ISO 6 Cleanroom Bays',
      specialties: 'Hypercar Wraps • XPEL Stealth • 10H Graphene Curing • Enclosed Logistics Hub',
      features: [
        'Dedicated Italian Blowtherm heated downdraft spray booth',
        'In-ground 8,000-lb flush scissor lifts with zero incline',
        'Private VIP mezzanine lounge with biometric keycard access',
        'Direct connection to LAX private jet FBO hangars'
      ],
      availability: [
        { bay: 'Cleanroom Bay 01', status: 'OCCUPIED (McLaren P1)', nextOpen: 'Oct 24' },
        { bay: 'Cleanroom Bay 02', status: 'AVAILABLE', nextOpen: 'Immediate' },
        { bay: 'Cleanroom Bay 03', status: 'RESERVED (Porsche GT3 RS)', nextOpen: 'Oct 26' },
        { bay: 'Spray Oven Booth', status: 'AVAILABLE', nextOpen: 'Immediate' }
      ]
    },
    nyc: {
      id: 'nyc',
      city: 'New York City',
      name: 'APEX MANHATTAN • TRIBECA / HUDSON YARDS',
      address: '540 W 26th St, New York, NY 10001',
      phone: '+1 (212) 790-APEX',
      email: 'manhattan@apexstudio.com',
      hours: 'Mon - Sat: 08:00 - 18:00 EST (Subterranean Secure Vault Access)',
      area: '18,500 Sq Ft',
      bays: '6 ISO 6 Cleanroom Bays',
      specialties: 'Ceramic Coating • Window Tinting • Exotic Paint Correction',
      features: [
        'Climate-regulated subterranean vehicle vault',
        'Ultra-high security facility with armed 24/7 security',
        'Freight elevator accommodating 10,000 lbs',
        'High-CRI 98 surgical inspection lighting grid'
      ],
      availability: [
        { bay: 'Cleanroom Bay 01', status: 'OCCUPIED (Ferrari 812)', nextOpen: 'Oct 23' },
        { bay: 'Cleanroom Bay 02', status: 'AVAILABLE', nextOpen: 'Immediate' },
        { bay: 'Cleanroom Bay 03', status: 'AVAILABLE', nextOpen: 'Immediate' }
      ]
    },
    mia: {
      id: 'mia',
      city: 'Miami',
      name: 'APEX MIAMI • DESIGN DISTRICT',
      address: '3900 NE 2nd Ave, Miami, FL 33137',
      phone: '+1 (305) 690-APEX',
      email: 'miami@apexstudio.com',
      hours: 'Mon - Sat: 08:00 - 19:00 EST',
      area: '21,000 Sq Ft',
      bays: '6 ISO 6 Cleanroom Bays',
      specialties: 'Full Body PPF • Marine Grade Ceramic • Nano-Ceramic Heat Shielding',
      features: [
        'Hurricane-reinforced monolithic concrete cleanrooms',
        'Specialized high-humidity air desiccation chillers',
        'Custom caliper paint refinishing laboratory',
        'Enclosed hydraulic transporter dispatch ramp'
      ],
      availability: [
        { bay: 'Cleanroom Bay 01', status: 'RESERVED (Lamborghini Revuelto)', nextOpen: 'Oct 25' },
        { bay: 'Cleanroom Bay 02', status: 'AVAILABLE', nextOpen: 'Immediate' },
        { bay: 'Cleanroom Bay 03', status: 'AVAILABLE', nextOpen: 'Immediate' }
      ]
    },
    dal: {
      id: 'dal',
      city: 'Dallas / Fort Worth',
      name: 'APEX DALLAS • ADDISON AIRPARK',
      address: '4550 Jimmy Doolittle Dr, Addison, TX 75001',
      phone: '+1 (972) 590-APEX',
      email: 'dallas@apexstudio.com',
      hours: 'Mon - Sat: 07:30 - 18:30 CST',
      area: '26,000 Sq Ft',
      bays: '8 ISO 6 Cleanroom Bays',
      specialties: 'Full Track Protection • XPEL Stealth Wraps • Collector Storage',
      features: [
        'Direct tarmac access for private aviation cargo',
        'Dedicated 8-vehicle staging cleanroom hall',
        'Multi-stage paint correction laboratory',
        'State-of-the-art 3D laser CAD template plotters'
      ],
      availability: [
        { bay: 'Cleanroom Bay 01', status: 'AVAILABLE', nextOpen: 'Immediate' },
        { bay: 'Cleanroom Bay 02', status: 'AVAILABLE', nextOpen: 'Immediate' },
        { bay: 'Cleanroom Bay 03', status: 'RESERVED (Ford GT)', nextOpen: 'Oct 28' }
      ]
    },
    phx: {
      id: 'phx',
      city: 'Scottsdale',
      name: 'APEX SCOTTSDALE • AIRPARK',
      address: '15000 N Airport Dr, Scottsdale, AZ 85260',
      phone: '+1 (480) 490-APEX',
      email: 'scottsdale@apexstudio.com',
      hours: 'Mon - Sat: 07:00 - 18:00 MST',
      area: '19,000 Sq Ft',
      bays: '6 ISO 6 Cleanroom Bays',
      specialties: 'Extreme Desert IR Rejection Tint • 10H Graphene Coating • Self-Healing PPF',
      features: [
        'High-capacity dual HVAC chiller systems',
        'Full solar heat rejection testing laboratory',
        'Collector lounge overlooking cleanroom installation bays',
        'Barrett-Jackson auction preparation protocols'
      ],
      availability: [
        { bay: 'Cleanroom Bay 01', status: 'AVAILABLE', nextOpen: 'Immediate' },
        { bay: 'Cleanroom Bay 02', status: 'AVAILABLE', nextOpen: 'Immediate' },
        { bay: 'Cleanroom Bay 03', status: 'AVAILABLE', nextOpen: 'Immediate' }
      ]
    }
  };

  const activeStudio = studios[activeStudioId];

  const handleTourSubmit = (e) => {
    e.preventDefault();
    if (!tourForm.email || !tourForm.name) return;
    setTourSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-carbon to-obsidian">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/50 text-crimson text-xs font-mono uppercase tracking-widest mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>NATIONWIDE FACILITY DIRECTORY</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white">
            CLEANROOM STUDIO LOCATOR
          </h1>
          <p className="text-sm sm:text-base text-silver mt-3 max-w-3xl mx-auto leading-relaxed">
            Five world-class, positive-pressure automotive cleanroom laboratories engineered to the standards of aerospace sterile facilities. Locate your nearest Apex Studio or book nationwide enclosed carrier transport.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">5</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Metropolitan Studios</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">34</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">ISO 6 Cleanroom Bays</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">108,000</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Total Studio Square Feet</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">24/7</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">VIP Transporter Intake</span>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Selector & Detail Hub */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        {/* City Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {Object.entries(studios).map(([key, s]) => (
            <button
              key={key}
              onClick={() => setActiveStudioId(key)}
              className={`px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeStudioId === key
                  ? 'bg-crimson text-white shadow-glow-red scale-105'
                  : 'bg-carbon text-silver border border-white/10 hover:border-white/30'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{s.city}</span>
            </button>
          ))}
        </div>

        {/* Selected Studio Card */}
        <div className="rounded-2xl border-2 border-crimson/50 bg-carbon p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
                FLAGSHIP FACILITY SPECIFICATION
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
                {activeStudio.name}
              </h2>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-silver">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-crimson" /> {activeStudio.address}</span>
                <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-crimson" /> {activeStudio.phone}</span>
                <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-crimson" /> {activeStudio.email}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/estimate"
                className="px-6 py-3 rounded-lg bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red flex items-center justify-center gap-2"
              >
                <span>RESERVE BOOTH HERE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-white/10 text-xs font-mono">
            <div className="p-4 rounded-xl bg-obsidian border border-white/5">
              <span className="text-[10px] text-silver block uppercase">Studio Footprint</span>
              <span className="font-display font-bold text-lg text-white mt-1 block">{activeStudio.area}</span>
            </div>
            <div className="p-4 rounded-xl bg-obsidian border border-white/5">
              <span className="text-[10px] text-silver block uppercase">Cleanroom Capacity</span>
              <span className="font-display font-bold text-lg text-crimson mt-1 block">{activeStudio.bays}</span>
            </div>
            <div className="p-4 rounded-xl bg-obsidian border border-white/5">
              <span className="text-[10px] text-silver block uppercase">Operating Schedule</span>
              <span className="font-display font-bold text-xs text-white mt-1 block truncate">{activeStudio.hours}</span>
            </div>
            <div className="p-4 rounded-xl bg-obsidian border border-white/5">
              <span className="text-[10px] text-silver block uppercase">Core Specialties</span>
              <span className="font-display font-bold text-xs text-white mt-1 block truncate">{activeStudio.specialties}</span>
            </div>
          </div>

          {/* Architectural Features & Live Bay Availability */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Features (7 cols) */}
            <div className="lg:col-span-7">
              <h3 className="font-display font-bold text-base uppercase text-white mb-4">
                FACILITY ARCHITECTURAL HIGHLIGHTS
              </h3>
              <div className="space-y-3">
                {activeStudio.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                    <span className="text-xs text-silver leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Bay Radar (5 cols) */}
            <div className="lg:col-span-5">
              <h3 className="font-display font-bold text-base uppercase text-white mb-4">
                LIVE BOOTH OCCUPANCY RADAR
              </h3>
              <div className="space-y-2.5">
                {activeStudio.availability.map((b, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-obsidian border border-white/5 flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="font-bold text-white block">{b.bay}</span>
                      <span className={`text-[10px] font-bold ${b.status.includes('AVAILABLE') ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {b.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-silver block">Earliest Slot:</span>
                      <span className="text-white font-bold">{b.nextOpen}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleanroom Visiting Protocol & Confidentiality */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <ShieldCheck className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-base uppercase text-white">PROTOTYPE CONFIDENTIALITY (NDA)</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              We regularly protect unreleased OEM prototypes and private collection vehicles. All cameras in visitor areas require optical privacy stickers, and technicians sign binding non-disclosure agreements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <Clock className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-base uppercase text-white">24/7 ENCLOSED DROP-OFF VAULT</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Arriving late via private jet or enclosed trailer? Our biometric nocturnal intake vault allows secure delivery at any hour with automated security logging and climate stabilization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <Sparkles className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-base uppercase text-white">VIP VIEWING MEZZANINE</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Clients are welcome to relax in our private club lounge featuring high-speed Starlink, espresso bar, and acoustic glass overlooking your vehicle being prepped under surgical lamps.
            </p>
          </div>
        </div>
      </section>

      {/* Private Facility Tour RSVP Form */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto border-t border-white/10">
        <div className="p-8 sm:p-10 rounded-2xl bg-carbon border-2 border-crimson/50 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              VIP INVITATION
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              SCHEDULE PRIVATE CLEANROOM TOUR
            </h3>
            <p className="text-xs text-silver mt-1">
              Inspect our positive-pressure cleanroom bays and meet master technicians before commissioning your build.
            </p>
          </div>

          <form onSubmit={handleTourSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Client Name</label>
              <input
                required
                type="text"
                placeholder="e.g. Christian Von Koenigsegg"
                value={tourForm.name}
                onChange={(e) => setTourForm({ ...tourForm, name: e.target.value })}
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Phone Number</label>
              <input
                required
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={tourForm.phone}
                onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Email Address</label>
              <input
                required
                type="email"
                placeholder="client@luxury.com"
                value={tourForm.email}
                onChange={(e) => setTourForm({ ...tourForm, email: e.target.value })}
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Select Studio</label>
              <select
                value={tourForm.studio}
                onChange={(e) => setTourForm({ ...tourForm, studio: e.target.value })}
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              >
                {Object.entries(studios).map(([key, s]) => (
                  <option key={key} value={key}>{s.city} - {s.name}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center justify-center gap-2"
              >
                <span>CONFIRM PRIVATE TOUR APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {tourSubmitted && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-mono">
              <div className="flex items-center gap-2 font-bold mb-1">
                <CheckCircle2 className="w-4 h-4" /> PRIVATE TOUR CONFIRMED
              </div>
              <p className="text-[11px] leading-relaxed">
                VIP admission passes and security clearance details sent to {tourForm.email}. Studio director assigned.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Shield } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleYear: '2024',
    vehicleModel: '',
    services: ['Nano-Ceramic Window Tint'],
    timeframe: 'Next 7 Days',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Nano-Ceramic Window Tint',
    '10H Graphene Ceramic Coating',
    'Front Track Pack PPF (8.5 Mil)',
    'Full Body Stealth Matte Wrap',
    'OEM+ Concourse Paint Respray',
    'Brembo Caliper Ceramic Refinishing'
  ];

  const handleToggleService = (srv) => {
    if (formData.services.includes(srv)) {
      setFormData({ ...formData, services: formData.services.filter(s => s !== srv) });
    } else {
      setFormData({ ...formData, services: [...formData.services, srv] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.vehicleModel) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10 text-center">
        <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
          VIP CONCIERGE & ALLOCATION
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white mt-2">
          RESERVE DIRECT STUDIO ALLOCATION
        </h1>
        <p className="text-xs sm:text-sm text-silver mt-2 max-w-2xl mx-auto">
          Submit your vehicle specifications to lock your climate-controlled cleanroom bay slot. Dedicated master technicians allocated within 2 hours.
        </p>
      </section>

      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-carbon border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-green">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-2xl text-white uppercase">
                  STUDIO ALLOCATION CONFIRMED
                </h3>
                <p className="text-xs text-silver max-w-md mx-auto leading-relaxed font-mono">
                  Thank you, {formData.name}. We have reserved preliminary intake queue for your {formData.vehicleYear} {formData.vehicleModel}. Our master technician will contact {formData.phone} with enclosed transport and bay timing details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase rounded"
                >
                  Submit Another Vehicle
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display font-bold text-lg text-white uppercase border-b border-white/10 pb-3">
                  Vehicle & Intake Specifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-silver uppercase mb-1 font-bold">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alexander Vance"
                      className="w-full bg-obsidian border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-crimson"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-silver uppercase mb-1 font-bold">Direct Phone Number</label>
                    <input
                      required
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-obsidian border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-crimson"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-silver uppercase mb-1 font-bold">Year</label>
                    <select
                      value={formData.vehicleYear}
                      onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                      className="w-full bg-obsidian border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-crimson"
                    >
                      <option>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>Classic / Collector</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-mono text-silver uppercase mb-1 font-bold">Make & Model</label>
                    <input
                      required
                      type="text"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      placeholder="e.g. Porsche 911 GT3 RS / Ferrari 296 GTB"
                      className="w-full bg-obsidian border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-crimson"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-silver uppercase mb-2 font-bold">
                    Select Desired Architectural Pillars
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableServices.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => handleToggleService(srv)}
                        className={`p-3 rounded-lg border text-left text-xs font-mono transition-all flex items-center justify-between ${
                          formData.services.includes(srv)
                            ? 'bg-crimson/15 border-crimson text-white'
                            : 'bg-obsidian border-white/10 text-silver hover:border-white/20'
                        }`}
                      >
                        <span>{srv}</span>
                        {formData.services.includes(srv) && <CheckCircle2 className="w-4 h-4 text-crimson" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-silver uppercase mb-1 font-bold">Special Requests or Transport Requirements</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Enclosed transport pickup address, track dates, or special color match requirements..."
                    className="w-full bg-obsidian border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-crimson"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center justify-center gap-2"
                >
                  <span>CONFIRM STUDIO ALLOCATION REQUEST</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-carbon border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-base text-white uppercase border-b border-white/10 pb-3">
                Concierge Contact Details
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-silver uppercase block">VIP DIRECT HOTLINE</span>
                  <span className="font-mono text-white text-sm font-bold">+1 (800) 590-APEX</span>
                  <p className="text-[11px] text-silver mt-0.5">24/7 dedicated intake client manager</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-silver uppercase block">ENCLOSED LOGISTICS</span>
                  <span className="font-mono text-white text-sm font-bold">concierge@apexstudio.com</span>
                  <p className="text-[11px] text-silver mt-0.5">Air freight & enclosed trailer coordination</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-silver uppercase block">STUDIO CLEANROOM LOCATION</span>
                  <span className="font-mono text-white text-sm font-bold">Apex Performance Center</span>
                  <p className="text-[11px] text-silver mt-0.5">Automotive Industrial Zone, Cleanroom Bay #04</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-silver uppercase block">OPERATING HOURS</span>
                  <span className="font-mono text-white text-sm font-bold">Monday – Saturday: 07:00 – 20:00</span>
                  <p className="text-[11px] text-silver mt-0.5">Sunday private trackside dispatch by appointment</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-crimson/20 via-carbon to-carbon border border-crimson/40">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-crimson" />
                <span className="font-display font-bold text-sm text-white uppercase">100% DISCRETION GUARANTEE</span>
              </div>
              <p className="text-xs text-silver leading-relaxed">
                We sign standard Non-Disclosure Agreements (NDAs) for pre-release prototypes, private collection exotics, and bespoke concourse builds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

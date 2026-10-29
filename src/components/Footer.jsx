import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Footer() {
  const [quoteForm, setQuoteForm] = useState({
    model: '',
    pillar: 'Full Track Pack (PPF + Ceramic + Tint)',
    contact: ''
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (!quoteForm.model || !quoteForm.contact) return;
    setQuoteSubmitted(true);
  };

  return (
    <footer className="relative pt-16 pb-12 bg-midnight text-white overflow-hidden clip-slant-white" id="quote-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-6">
        {/* Instant Studio Quote Funnel Bar */}
        <div className="bg-black/60 p-6 sm:p-8 rounded-2xl border-2 border-crimson/50 backdrop-blur-2xl shadow-2xl mb-16">
          <div className="max-w-3xl mb-6">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-crimson uppercase block">
              INSTANT VEHICLE QUOTE ENGINE
            </span>
            <h3 className="font-display font-black text-xl sm:text-3xl uppercase tracking-wider text-white mt-1">
              REQUEST DIRECT STUDIO ALLOCATION
            </h3>
            <p className="text-xs text-white/80 mt-1">
              Receive custom spec sheet, timeline estimate, and reserved cleanroom booth slot within 2 hours.
            </p>
          </div>

          <form onSubmit={handleQuoteSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-[10px] font-mono text-white/80 uppercase mb-1 font-bold">1. Vehicle Model</label>
              <input
                required
                type="text"
                value={quoteForm.model}
                onChange={(e) => setQuoteForm({ ...quoteForm, model: e.target.value })}
                placeholder="e.g. 2024 Porsche 911 GT3 RS"
                className="w-full bg-black/60 border border-white/25 rounded px-3.5 py-2.5 text-xs text-white placeholder-white/45 focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-white/80 uppercase mb-1 font-bold">2. Primary Pillar</label>
              <select
                value={quoteForm.pillar}
                onChange={(e) => setQuoteForm({ ...quoteForm, pillar: e.target.value })}
                className="w-full bg-black/60 border border-white/25 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all"
              >
                <option className="bg-neutral-900 text-white">Full Track Pack (PPF + Ceramic + Tint)</option>
                <option className="bg-neutral-900 text-white">01. Nano-Ceramic Window Tinting</option>
                <option className="bg-neutral-900 text-white">02. 10H Graphene Ceramic Coating</option>
                <option className="bg-neutral-900 text-white">03. Full-Body PPF / Stealth Wrap</option>
                <option className="bg-neutral-900 text-white">04. Custom Downdraft Paintwork</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-white/80 uppercase mb-1 font-bold">3. Phone or Email</label>
              <input
                required
                type="text"
                value={quoteForm.contact}
                onChange={(e) => setQuoteForm({ ...quoteForm, contact: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-black/60 border border-white/25 rounded px-3.5 py-2.5 text-xs text-white placeholder-white/45 focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson transition-all"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-wider rounded shadow-glow-red transition-all flex items-center justify-center gap-1.5 h-[42px]"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {quoteSubmitted && (
            <div className="mt-4 p-3 rounded bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center justify-between">
              <span>✓ Specification received for {quoteForm.model}. Master technician assigned. Allocation details sent to {quoteForm.contact}.</span>
              <button onClick={() => setQuoteSubmitted(false)} className="text-emerald-300 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Complete 16-Page Sitemap Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs" id="sitemap">
          {/* Pillar Group 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-crimson rounded flex items-center justify-center text-white font-display font-bold text-xs">A</div>
              <span className="font-display font-bold text-sm tracking-widest text-white uppercase">APEX STUDIO</span>
            </div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-crimson mb-2">Core Services</h4>
            <ul className="space-y-1.5 text-silver text-[11px] font-mono">
              <li><Link className="hover:text-white transition-colors" to="/services/tinting">01. Window Tinting & IR Rejection</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/services/coating">02. Ceramic & Graphene Coating</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/services/ppf">03. Paint Protection Film (PPF)</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/services/custom-paint">04. Custom Paint & Calipers</Link></li>
            </ul>
          </div>

          {/* Pillar Group 2 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-3">Simulation & Plans</h4>
            <ul className="space-y-1.5 text-silver text-[11px] font-mono">
              <li><Link className="hover:text-white transition-colors" to="/simulator">05. Interactive 4-Pillar Visualizer</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/pricing-matrix">06. Vehicle Class Pricing Matrix</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/packages/essential-shield">07. Essential Shield Package</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/packages/track-gloss-pro">08. Track & Gloss Pro Package</Link></li>
            </ul>
          </div>

          {/* Pillar Group 3 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-3">Engineering Hub</h4>
            <ul className="space-y-1.5 text-silver text-[11px] font-mono">
              <li><Link className="hover:text-white transition-colors" to="/packages/bespoke-concourse">09. Bespoke Concourse Wrap</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/films">10. 4K Studio Process Films</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/compliance">11. State VLT Legal Compliance</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/technical-specs">12. ISO 9001 Technical Specs</Link></li>
            </ul>
          </div>

          {/* Pillar Group 4 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-3">VIP Concierge</h4>
            <ul className="space-y-1.5 text-silver text-[11px] font-mono">
              <li><Link className="hover:text-white transition-colors" to="/estimate">13. Instant Estimate Engine</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/transport">14. Enclosed Transport Logistics</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/studios">15. Cleanroom Studio Locator</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/warranty">16. Master 10-Yr Warranty Portal</Link></li>
            </ul>
            <div className="mt-4 pt-2 text-[11px] font-mono text-crimson font-bold">
              Direct Concierge: +1 (800) 590-APEX
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-silver gap-4">
          <div>
            © 2025 APEX STUDIO AUTOMOTIVE S.P.A. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link className="hover:text-white" to="/">PRIVACY POLICY</Link>
            <Link className="hover:text-white" to="/">TERMS OF WARRANTY</Link>
            <Link className="hover:text-white" to="/compliance">LEGAL TINT REGISTRY</Link>
            <div className="pt-1 sm:pt-0">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

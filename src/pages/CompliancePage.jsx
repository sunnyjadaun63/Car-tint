import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function CompliancePage() {
  const [selectedState, setSelectedState] = useState('CA');

  const stateData = {
    CA: { name: 'California', front: '70% VLT', rear: 'Any Darkness', windshield: 'Top 4 inches only', note: 'Certified certificate of compliance issued for CHP verification.' },
    NY: { name: 'New York', front: '70% VLT', rear: '70% VLT (Sedans) / Any (SUVs)', windshield: 'Top 6 inches only', note: 'Annual inspection requires certified photo-meter test.' },
    FL: { name: 'Florida', front: '28% VLT', rear: '15% VLT', windshield: 'AS-1 line or top 5 inches', note: 'High solar heat state allowing darker legal limit.' },
    TX: { name: 'Texas', front: '25% VLT', rear: 'Any Darkness', windshield: 'Top 5 inches only', note: 'Standard state compliance sticker affixed to driver jamb.' },
    NV: { name: 'Nevada', front: '35% VLT', rear: 'Any Darkness', windshield: 'AS-1 line only', note: 'Exotic vehicle registration compliance guaranteed.' },
    IL: { name: 'Illinois', front: '35% VLT', rear: '35% VLT', windshield: 'Top 6 inches only', note: '35% all-around standard for balanced luxury aesthetic.' },
    WA: { name: 'Washington', front: '24% VLT', rear: '24% VLT', windshield: 'Top 6 inches only', note: 'State patrol compliant.' },
    AZ: { name: 'Arizona', front: '33% VLT', rear: 'Any Darkness', windshield: 'AS-1 line only', note: 'Maximized IR heat mitigation approved.' }
  };

  const curr = stateData[selectedState];

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white">
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-b border-white/10 text-center">
        <div className="inline-flex items-center gap-2 text-crimson font-mono text-xs font-bold tracking-widest uppercase mb-3">
          <Scale className="w-4 h-4" />
          <span>LEGAL COMPLIANCE REGISTRY</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white mt-1">
          STATE VLT TINT LAW COMPLIANCE
        </h1>
        <p className="text-xs sm:text-sm text-silver mt-2 max-w-2xl mx-auto">
          Every APEX STUDIO window tint installation is precision-cut to your state's Department of Transportation (DOT) visible light transmission regulations and includes a digital compliance stamp.
        </p>
      </section>

      {/* Interactive Compliance Selector */}
      <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="bg-carbon border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-crimson font-bold uppercase">SELECT JURISDICTION</span>
              <h3 className="font-display font-bold text-lg text-white">State Regulations & Limits</h3>
            </div>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-obsidian border border-white/20 rounded-lg px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-crimson"
            >
              {Object.keys(stateData).map((st) => (
                <option key={st} value={st}>
                  {stateData[st].name} ({st})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 font-mono">
            <div className="p-4 rounded-xl bg-obsidian border border-white/10">
              <span className="text-[10px] text-silver block uppercase">FRONT SIDE WINDOWS</span>
              <span className="font-display font-bold text-2xl text-white mt-1 block">{curr.front}</span>
              <span className="text-[10px] text-emerald-400 mt-1 block">Maximum Legal Dark</span>
            </div>

            <div className="p-4 rounded-xl bg-obsidian border border-white/10">
              <span className="text-[10px] text-silver block uppercase">REAR SIDE & BACK GLASS</span>
              <span className="font-display font-bold text-2xl text-white mt-1 block">{curr.rear}</span>
              <span className="text-[10px] text-emerald-400 mt-1 block">Full Legal Coverage</span>
            </div>

            <div className="p-4 rounded-xl bg-obsidian border border-white/10">
              <span className="text-[10px] text-silver block uppercase">WINDSHIELD VISOR STRIP</span>
              <span className="font-display font-bold text-2xl text-white mt-1 block">{curr.windshield}</span>
              <span className="text-[10px] text-cyan-400 mt-1 block">Glare Strip Approved</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian/70 border border-crimson/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-crimson flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs font-bold text-white block">APEX STUDIO COMPLIANCE CERTIFICATION</span>
              <p className="text-xs text-silver mt-1">{curr.note}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-crimson text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red hover:bg-crimson/90 transition-all"
            >
              <span>BOOK 100% COMPLIANT TINT INSTALLATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

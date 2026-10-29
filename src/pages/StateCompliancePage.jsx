import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, FileText, CheckCircle2, Search, Scale, HelpCircle, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StateCompliancePage() {
  const [selectedState, setSelectedState] = useState('CA');
  const [searchTerm, setSearchTerm] = useState('');

  // 50-State VLT Registry Data
  const stateLaws = {
    AL: { name: 'Alabama', frontSides: '32%', backSides: '32%', rear: '32%', windshield: 'Top 6 inches', medical: 'Yes (Form MV-12)', penalty: '$100 - $300 fine' },
    AK: { name: 'Alaska', frontSides: '70%', backSides: '40%', rear: '40%', windshield: 'Top 5 inches', medical: 'No exemption', penalty: 'Fix-it citation' },
    AZ: { name: 'Arizona', frontSides: '33%', backSides: 'Any %', rear: 'Any %', windshield: 'Above AS-1 Line', medical: 'Yes (Form 40-0203)', penalty: 'Class 2 Misdemeanor / $250' },
    AR: { name: 'Arkansas', frontSides: '25%', backSides: '25%', rear: '10%', windshield: 'Top 5 inches', medical: 'Yes', penalty: 'Class C Misdemeanor' },
    CA: { name: 'California', frontSides: '70%', backSides: 'Any %', rear: 'Any %', windshield: 'Top 4 inches', medical: 'Yes (Form DMV-88)', penalty: '$25 fix-it or $197 standard' },
    CO: { name: 'Colorado', frontSides: '27%', backSides: '27%', rear: '27%', windshield: 'Top 4 inches', medical: 'Yes', penalty: 'Class B Traffic Infraction' },
    CT: { name: 'Connecticut', frontSides: '35%', backSides: '35%', rear: 'Any %', windshield: 'Top AS-1 Line', medical: 'Yes (Form E-220)', penalty: 'Mandatory inspection + $60 fine' },
    DE: { name: 'Delaware', frontSides: '70%', backSides: 'Any %', rear: 'Any %', windshield: 'Top AS-1 Line', medical: 'Yes (Medical Waiver)', penalty: '$50 - $100' },
    FL: { name: 'Florida', frontSides: '28%', backSides: '15%', rear: '15%', windshield: 'Above AS-1 Line', medical: 'Yes (Form HSMV 83390)', penalty: '$116 Non-moving citation' },
    GA: { name: 'Georgia', frontSides: '32%', backSides: '32%', rear: '32%', windshield: 'Top 6 inches', medical: 'Yes (DPS Exemption)', penalty: 'Misdemeanor up to $1,000' },
    HI: { name: 'Hawaii', frontSides: '35%', backSides: '35%', rear: '35%', windshield: 'Top 4 inches', medical: 'Yes (Special Permit)', penalty: '$250 - $500' },
    ID: { name: 'Idaho', frontSides: '35%', backSides: '20%', rear: '35%', windshield: 'Top AS-1 Line', medical: 'Yes', penalty: '$67 Infraction' },
    IL: { name: 'Illinois', frontSides: '35%', backSides: '35%', rear: '35%', windshield: 'Top 6 inches', medical: 'Yes (Form VSD 892)', penalty: '$120 - $500' },
    IN: { name: 'Indiana', frontSides: '30%', backSides: '30%', rear: '30%', windshield: 'Top AS-1 Line', medical: 'Yes', penalty: 'Class C Infraction' },
    IA: { name: 'Iowa', frontSides: '70%', backSides: 'Any %', rear: 'Any %', windshield: 'Top AS-1 Line', medical: 'Yes (Form 411033)', penalty: '$127.50 fine' },
    KS: { name: 'Kansas', frontSides: '35%', backSides: '35%', rear: '35%', windshield: 'Top AS-1 Line', medical: 'Yes', penalty: '$45 fine + court fees' },
    KY: { name: 'Kentucky', frontSides: '35%', backSides: '18%', rear: '18%', windshield: 'Top AS-1 Line', medical: 'Yes (TC 96-302)', penalty: '$100 fine' },
    LA: { name: 'Louisiana', frontSides: '40%', backSides: '25%', rear: '12%', windshield: 'Top 5 inches', medical: 'Yes (DPS Permit)', penalty: '$150 - $350' },
    MA: { name: 'Massachusetts', frontSides: '35%', backSides: '35%', rear: '35%', windshield: 'Top 6 inches', medical: 'Yes (Form RMV-T10)', penalty: '$250 + fail annual inspection' },
    MI: { name: 'Michigan', frontSides: 'Top 4 in', backSides: 'Any %', rear: 'Any %', windshield: 'Top 4 inches', medical: 'Yes (Physician letter)', penalty: '$150 civil infraction' },
    NV: { name: 'Nevada', frontSides: '35%', backSides: 'Any %', rear: 'Any %', windshield: 'Above AS-1 Line', medical: 'Yes (Form VP-262)', penalty: '$100 - $250' },
    NJ: { name: 'New Jersey', frontSides: 'No tint', backSides: 'Any %', rear: 'Any %', windshield: 'No tint permitted', medical: 'Yes (Form MVC-ST1)', penalty: '$54 - $150 per window' },
    NY: { name: 'New York', frontSides: '70%', backSides: '70%', rear: 'Any %', windshield: 'Top 6 inches', medical: 'Yes (Form MV-80W)', penalty: 'Fails NYS Inspection / $150' },
    NC: { name: 'North Carolina', frontSides: '35%', backSides: '35%', rear: '35%', windshield: 'Top AS-1 Line', medical: 'Yes (Form MVR-338)', penalty: '$50 court fee + $100 fine' },
    OH: { name: 'Ohio', frontSides: '50%', backSides: 'Any %', rear: 'Any %', windshield: 'Top 7 inches', medical: 'Yes', penalty: 'Minor Misdemeanor' },
    PA: { name: 'Pennsylvania', frontSides: '70%', backSides: '70%', rear: '70%', windshield: 'Top 3 inches', medical: 'Yes (Form MV-463)', penalty: '$110 fine + fix-it order' },
    TX: { name: 'Texas', frontSides: '25%', backSides: 'Any %', rear: 'Any %', windshield: 'Above AS-1 Line', medical: 'Yes (TxDPS Exemption)', penalty: '$20 - $250 fine' },
    VA: { name: 'Virginia', frontSides: '50%', backSides: '35%', rear: '35%', windshield: 'Top AS-1 Line', medical: 'Yes (Form MED-20)', penalty: 'Traffic infraction' },
    WA: { name: 'Washington', frontSides: '24%', backSides: '24%', rear: '24%', windshield: 'Top 6 inches', medical: 'Yes', penalty: '$136 infraction' }
  };

  const currentState = stateLaws[selectedState] || stateLaws['CA'];

  const filteredStates = Object.entries(stateLaws).filter(([code, data]) => {
    return code.toLowerCase().includes(searchTerm.toLowerCase()) || data.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-carbon to-obsidian">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/50 text-crimson text-xs font-mono uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>STATUTORY VLT REGULATORY DIRECTORY • 50 STATES</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white">
            STATE VLT LEGAL COMPLIANCE
          </h1>
          <p className="text-sm sm:text-base text-silver mt-3 max-w-3xl mx-auto leading-relaxed">
            Every window film installation at Apex Studio is verified with two-piece laser spectrophotometers to ensure strict adherence to state Visible Light Transmission (VLT) statutes, DOT mandates, and FMVSS 205 regulations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-carbon border border-white/10 text-silver flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Tamper-Proof Holographic Decals
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-carbon border border-white/10 text-silver flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> DOT / FMVSS 205 Compliant
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-carbon border border-white/10 text-silver flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Medical Exemption Filing Assistance
            </span>
          </div>
        </div>
      </section>

      {/* Interactive 50-State Law Explorer */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              STATUTORY LOOKUP ENGINE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              SELECT YOUR VEHICLE JURISDICTION
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-silver absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search State or Code..."
              className="w-full bg-carbon border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-silver/50 focus:outline-none focus:border-crimson font-mono"
            />
          </div>
        </div>

        {/* State Selection Pills */}
        <div className="flex flex-wrap gap-2 mb-10 max-h-36 overflow-y-auto p-2 bg-carbon/50 rounded-xl border border-white/10">
          {filteredStates.map(([code, data]) => (
            <button
              key={code}
              onClick={() => setSelectedState(code)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all ${
                selectedState === code
                  ? 'bg-crimson text-white shadow-glow-red'
                  : 'bg-carbon text-silver hover:text-white border border-white/10'
              }`}
            >
              {code} - {data.name}
            </button>
          ))}
        </div>

        {/* Detailed State Law Card */}
        <div className="rounded-2xl border-2 border-crimson/50 bg-carbon p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest">
                OFFICIAL STATUTE SUMMARY • JURISDICTION CODE: {selectedState}
              </span>
              <h3 className="font-display font-black text-3xl sm:text-5xl uppercase text-white mt-1">
                {currentState.name} Tint Laws
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Apex Certified Protocol
              </span>
            </div>
          </div>

          {/* VLT Limits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-b border-white/10">
            <div className="p-5 rounded-xl bg-obsidian border border-white/10">
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider block font-bold">FRONT SIDE WINDOWS</span>
              <div className="font-display font-black text-4xl text-crimson mt-2">{currentState.frontSides}</div>
              <p className="text-[11px] text-silver mt-2 font-mono">Driver & Front Passenger door glass limit.</p>
            </div>

            <div className="p-5 rounded-xl bg-obsidian border border-white/10">
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider block font-bold">REAR SIDE WINDOWS</span>
              <div className="font-display font-black text-4xl text-white mt-2">{currentState.backSides}</div>
              <p className="text-[11px] text-silver mt-2 font-mono">Rear passenger & quarter panel glass.</p>
            </div>

            <div className="p-5 rounded-xl bg-obsidian border border-white/10">
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider block font-bold">REAR WINDSHIELD</span>
              <div className="font-display font-black text-4xl text-white mt-2">{currentState.rear}</div>
              <p className="text-[11px] text-silver mt-2 font-mono">Back glass with dual side mirrors.</p>
            </div>

            <div className="p-5 rounded-xl bg-obsidian border border-white/10">
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider block font-bold">FRONT WINDSHIELD VISOR</span>
              <div className="font-display font-black text-2xl text-crimson mt-2">{currentState.windshield}</div>
              <p className="text-[11px] text-silver mt-2 font-mono">Non-reflective visor strip above line.</p>
            </div>
          </div>

          {/* Regulatory Specifics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-4 rounded-xl bg-obsidian/60 border border-white/5">
              <div className="flex items-center gap-2 text-white font-display font-bold text-xs uppercase mb-1">
                <FileText className="w-4 h-4 text-crimson" /> Medical Exemption Status
              </div>
              <div className="text-sm font-mono text-crimson font-bold mt-1">{currentState.medical}</div>
              <p className="text-xs text-silver mt-1">Available for documented photosensitivity, lupus, or melanoma conditions.</p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian/60 border border-white/5">
              <div className="flex items-center gap-2 text-white font-display font-bold text-xs uppercase mb-1">
                <AlertTriangle className="w-4 h-4 text-yellow-400" /> Non-Compliance Penalty
              </div>
              <div className="text-sm font-mono text-yellow-400 font-bold mt-1">{currentState.penalty}</div>
              <p className="text-xs text-silver mt-1">Typical law enforcement citation tier for uncertified dark tinting.</p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian/60 border border-white/5">
              <div className="flex items-center gap-2 text-white font-display font-bold text-xs uppercase mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Apex Studio Guarantee
              </div>
              <div className="text-sm font-mono text-emerald-400 font-bold mt-1">100% Legal Certification</div>
              <p className="text-xs text-silver mt-1">We affix tamper-evident door jamb certification decals with verified VLT reading.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Laser Spectrophotometer Verification Protocol */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            LAW ENFORCEMENT COMPATIBILITY
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-2">
            CALIBRATED TO LASER LABS ENFORCER II STANDARDS
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2">
            Police officers and state troopers utilize Laser Labs two-piece tint meters during traffic inspections. We calibrate every install against identical optical instrumentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              01
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">GLASS BASELINE SPECTROMETRY</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Factory automotive glass carries a baseline tint between 72% and 78% VLT. Applying a nominal 35% film to 75% glass results in an actual net reading of 26.25% VLT, which could fail inspection.
            </p>
            <div className="mt-4 p-3 rounded bg-obsidian text-[11px] font-mono text-silver">
              Formula: VLT(net) = VLT(glass) × VLT(film)
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              02
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">NET VLT OPTIMIZATION</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              We compute the exact combined coefficient before cutting. If your state requires 35% net VLT, we install an engineering-grade 42% film that settles at precisely 35.4% on your specific vehicle glass.
            </p>
            <div className="mt-4 p-3 rounded bg-obsidian text-[11px] font-mono text-silver">
              Result: Zero citations, 100% legal compliance.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              03
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">DOOR JAMB HOLOGRAPHIC SEAL</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Each vehicle leaves our cleanroom with an official, weather-sealed certification plaque affixed inside the driver-side B-pillar door jamb containing technician ID, film serial, and laser VLT reading.
            </p>
            <div className="mt-4 p-3 rounded bg-obsidian text-[11px] font-mono text-silver">
              Includes tamper-evident QR code verification.
            </div>
          </div>
        </div>
      </section>

      {/* Interstate Driving Reciprocity Guide */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-carbon via-midnight to-carbon border border-white/10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              INTERSTATE TRAVEL ADVISORY
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-2">
              DOES OUT-OF-STATE TINT GET TICKETS?
            </h3>
            <p className="text-xs sm:text-sm text-silver mt-3 leading-relaxed">
              Under the Driver License Compact and constitutional interstate commerce clauses, most states extend temporary reciprocity to visitors whose vehicles comply with their home state of registration. However, states like California and New York enforce strict equipment codes on any vehicle operated on public highways regardless of origin.
            </p>
            <p className="text-xs text-silver/80 mt-2 leading-relaxed">
              If you cross state lines frequently, our technicians recommend selecting our 70% VLT Nano-Ceramic film, which delivers 99% infrared thermal rejection with crystal-clear optical clarity legal in all 50 states.
            </p>
          </div>
        </div>
      </section>

      {/* Medical Exemption Process Accordion */}
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto border-t border-white/10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            SPECIAL PERMITS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-2">
            HOW MEDICAL TINT EXEMPTIONS WORK
          </h2>
          <p className="text-xs text-silver mt-2">
            If you or a frequent passenger suffers from medical light sensitivity conditions, you may qualify for darker tint than statutory limits.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-carbon border border-white/10">
            <h4 className="font-display font-bold text-sm uppercase text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-crimson" /> 1. Physician Certification
            </h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Obtain a signed medical necessity form from a licensed dermatologist, ophthalmologist, or physician detailing conditions such as systemic lupus erythematosus (SLE), solar urticaria, albinism, or severe photophobia.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-carbon border border-white/10">
            <h4 className="font-display font-bold text-sm uppercase text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-crimson" /> 2. State DMV / Highway Patrol Submission
            </h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Submit the statutory application form (e.g. Form DMV-88 in California, HSMV 83390 in Florida) along with the physician certification. The state will issue an official Medical Exemption Certificate.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-carbon border border-white/10">
            <h4 className="font-display font-bold text-sm uppercase text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-crimson" /> 3. Apex Studio Cleanroom Commission
            </h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Present your state certificate to our intake concierge. We will install any desired shade down to 5% VLT Limo Tint while recording your state permit number on the vehicle door plaque for law enforcement cross-referencing.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto text-center border-t border-white/10">
        <div className="p-10 rounded-2xl bg-carbon border-2 border-crimson/50 max-w-3xl mx-auto shadow-2xl">
          <h2 className="font-display font-black text-3xl uppercase text-white">
            CONFIRM YOUR VEHICLE COMPLIANCE
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Bring your car to any Apex Studio cleanroom location for a complimentary 5-minute laser spectrophotometer VLT reading and legal assessment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red transition-all flex items-center gap-2"
            >
              <span>SCHEDULE VLT INSPECTION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services/tinting"
              className="px-8 py-3.5 rounded bg-white/5 hover:bg-white/10 border border-white/20 text-white font-display font-bold text-xs uppercase tracking-widest transition-all"
            >
              EXPLORE CERAMIC TINT SPECS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

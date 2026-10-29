import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle2, AlertTriangle, FileText, Download, Award, ArrowRight, RefreshCw, Car, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WarrantyPortalPage() {
  const [searchVin, setSearchVin] = useState('');
  const [vinRecord, setVinRecord] = useState(null);
  const [searchError, setSearchError] = useState(false);

  // Claim Form State
  const [claimForm, setClaimForm] = useState({
    vin: '',
    owner: '',
    phone: '',
    email: '',
    issueType: 'PPF Edge Lift',
    description: ''
  });
  const [claimSubmitted, setClaimSubmitted] = useState(false);

  // Sample Registered Registry Database
  const sampleDatabase = {
    'WP0AB2A99PS123456': {
      model: '2024 Porsche 911 GT3 RS',
      registeredDate: 'April 14, 2024',
      expirationDate: 'April 14, 2034 (10 Years)',
      coverageTier: 'Stage 03: Bespoke Concourse (Full PPF + 10H Ceramic + Tint)',
      studio: 'Apex Flagship • Silicon Beach (Bay 02)',
      masterTech: 'Leo Thorne (ID #APX-88)',
      status: 'ACTIVE & CERTIFIED',
      carfaxLogged: 'YES (Carfax Provenance ID #CFX-90821)',
      lastInspection: 'April 14, 2024',
      nextAuditDue: 'April 14, 2025'
    },
    'ZHWUC1ZF3PLA09876': {
      model: '2023 Lamborghini Huracán Tecnica',
      registeredDate: 'November 02, 2023',
      expirationDate: 'November 02, 2033 (10 Years)',
      coverageTier: 'Stage 02: Track & Gloss Pro (Track PPF + Ceramic)',
      studio: 'Apex Miami • Design District (Bay 01)',
      masterTech: 'Elena Rostova (ID #APX-42)',
      status: 'ACTIVE & CERTIFIED',
      carfaxLogged: 'YES (Carfax Provenance ID #CFX-77412)',
      lastInspection: 'November 02, 2023',
      nextAuditDue: 'November 02, 2024'
    }
  };

  const handleVinSearch = (e) => {
    e.preventDefault();
    const clean = searchVin.trim().toUpperCase();
    if (!clean) return;

    if (sampleDatabase[clean]) {
      setVinRecord(sampleDatabase[clean]);
      setSearchError(false);
    } else {
      // Dynamic fallback record for any 17-character VIN entered
      if (clean.length >= 11) {
        setVinRecord({
          model: 'Verified Client Vehicle',
          registeredDate: 'Current Active Registry',
          expirationDate: '10-Year Active Policy from Installation',
          coverageTier: 'Master Apex Armor Protocol',
          studio: 'Apex Cleanroom Laboratory',
          masterTech: 'Certified Master Installer',
          status: 'ACTIVE & CERTIFIED',
          carfaxLogged: 'YES (Carfax Integration Active)',
          lastInspection: 'Prior Cleanroom Delivery',
          nextAuditDue: '12 Months Post-Intake'
        });
        setSearchError(false);
      } else {
        setSearchError(true);
        setVinRecord(null);
      }
    }
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    if (!claimForm.vin || !claimForm.email) return;
    setClaimSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-carbon to-obsidian">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/50 text-crimson text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>APEX MASTER REGISTRY • 10-YEAR DIRECT INDEMNITY</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white">
            10-YEAR WARRANTY PORTAL
          </h1>
          <p className="text-sm sm:text-base text-silver mt-3 max-w-3xl mx-auto leading-relaxed">
            Every vehicle protected at Apex Studio receives our ironclad 10-Year Transferable Warranty. Fully recorded on Carfax and AutoCheck databases to ensure maximum vehicle equity and auction provenance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">10 YEARS</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Unconditional Guarantee</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">100%</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Transferable to Next Owner</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">CARFAX</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Official Integration Log</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">$0 CO-PAY</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Expedited Cleanroom Fix</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive VIN Registry Search Hub */}
      <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl bg-carbon border-2 border-crimson/50 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              OFFICIAL CENTRAL DATABASE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              LOOK UP VEHICLE WARRANTY STATUS
            </h2>
            <p className="text-xs text-silver mt-2">
              Enter the 17-character VIN to verify active cleanroom installation records, warranty validity, and technician certifications.
            </p>
          </div>

          {/* VIN Search Form */}
          <form onSubmit={handleVinSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchVin}
                onChange={(e) => setSearchVin(e.target.value)}
                placeholder="Enter 17-Digit VIN (e.g. WP0AB2A99PS123456)..."
                className="w-full bg-obsidian border border-white/20 rounded-xl px-4 py-3.5 text-xs text-white uppercase placeholder-silver/40 focus:outline-none focus:border-crimson font-mono tracking-wider"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>VERIFY VIN</span>
            </button>
          </form>

          {/* Sample VIN Hints */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[11px] font-mono text-silver">
            <span>Try sample VINs:</span>
            <button
              type="button"
              onClick={() => setSearchVin('WP0AB2A99PS123456')}
              className="text-crimson hover:underline"
            >
              WP0AB2A99PS123456 (GT3 RS)
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setSearchVin('ZHWUC1ZF3PLA09876')}
              className="text-crimson hover:underline"
            >
              ZHWUC1ZF3PLA09876 (Huracán)
            </button>
          </div>

          {/* VIN Search Result Card */}
          {vinRecord && (
            <div className="mt-8 p-6 sm:p-8 rounded-xl bg-obsidian border-2 border-emerald-500/50 text-xs font-mono">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> OFFICIAL CERTIFICATE ACTIVE
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-white mt-1">
                    {vinRecord.model}
                  </h3>
                  <span className="text-silver text-[11px]">VIN: {searchVin.toUpperCase()}</span>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs inline-block">
                    {vinRecord.status}
                  </span>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 text-silver">
                <div>
                  <span className="text-[10px] text-silver/60 uppercase block">Protection Tier:</span>
                  <span className="text-white font-bold text-[11px] mt-0.5 block">{vinRecord.coverageTier}</span>
                </div>
                <div>
                  <span className="text-[10px] text-silver/60 uppercase block">Commission Studio:</span>
                  <span className="text-white font-bold text-[11px] mt-0.5 block">{vinRecord.studio}</span>
                </div>
                <div>
                  <span className="text-[10px] text-silver/60 uppercase block">Master Technician:</span>
                  <span className="text-white font-bold text-[11px] mt-0.5 block">{vinRecord.masterTech}</span>
                </div>
                <div>
                  <span className="text-[10px] text-silver/60 uppercase block">Installation Date:</span>
                  <span className="text-white font-bold text-[11px] mt-0.5 block">{vinRecord.registeredDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-silver/60 uppercase block">Warranty Valid Through:</span>
                  <span className="text-crimson font-bold text-[11px] mt-0.5 block">{vinRecord.expirationDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-silver/60 uppercase block">Carfax Verified Record:</span>
                  <span className="text-emerald-400 font-bold text-[11px] mt-0.5 block">{vinRecord.carfaxLogged}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-silver/80">Next Complimentary Annual Audit Due: {vinRecord.nextAuditDue}</span>
                <button
                  type="button"
                  onClick={() => alert("Digital Warranty Certificate PDF generated and downloaded.")}
                  className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD CERTIFICATE (PDF)</span>
                </button>
              </div>
            </div>
          )}

          {searchError && (
            <div className="mt-6 p-4 rounded-xl bg-crimson/20 border border-crimson/50 text-crimson text-xs font-mono text-center">
              Please enter a valid 17-digit automotive Vehicle Identification Number (VIN).
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive Coverage Breakdown */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            INDEMNITY PROTOCOL
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-1">
            WHAT OUR 10-YEAR WARRANTY COVERS
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2">
            No prorating. No exclusions for high-horsepower track use. If any protected surface fails due to material defect or installation error, we replace it in our cleanroom at zero charge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              PPF
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">PAINT PROTECTION FILM</h3>
            <ul className="mt-4 space-y-2 text-xs font-mono text-silver">
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Yellowing or discoloration (&gt;ΔE 1.0)</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Edge lifting or contour curling</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Air blistering or moisture entrapment</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Stress cracking or adhesive delamination</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Self-healing elastomeric failure</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              10H
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">10H GRAPHENE CERAMIC</h3>
            <ul className="mt-4 space-y-2 text-xs font-mono text-silver">
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Premature loss of hydrophobicity (&lt;100°)</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Paint oxidation or clearcoat chalking</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Avian acid etching or tree sap permeation</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Gloss retention drop below 90 GU</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Chemical wash degradation</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson font-display font-bold mb-4">
              TINT
            </div>
            <h3 className="font-display font-bold text-base uppercase text-white">NANO-CERAMIC WINDOW FILM</h3>
            <ul className="mt-4 space-y-2 text-xs font-mono text-silver">
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Purple dye fade or color shifting</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Glass defroster line delamination</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Dot-matrix edge silvering or peel</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Optical distortion or milky hazing</li>
              <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Demetallization or RF interference</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Transferability & Carfax Pedigree Value */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-carbon via-midnight to-carbon border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
                RESALE EQUITY PRESERVATION
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-2">
                100% TRANSFERABLE PEDIGREE ON CARFAX
              </h3>
              <p className="text-xs sm:text-sm text-silver mt-3 leading-relaxed">
                When you sell your vehicle or consign it through auction houses like Bring a Trailer or RM Sotheby's, the Apex 10-Year Warranty automatically transfers to the subsequent owner.
              </p>
              <p className="text-xs text-silver mt-2 leading-relaxed">
                Because our cleanroom protocols are recognized globally by collectors, vehicles bearing verified Apex certification consistently command documented premiums over unprotected comps.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-obsidian border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-silver">Carfax Integration:</span>
                <span className="text-emerald-400 font-bold">Auto-Logged to Permanent VIN</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-silver">Transfer Fee:</span>
                <span className="text-white font-bold">$0 (Zero Admin Surcharge)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-silver">Re-Inspection Requirement:</span>
                <span className="text-white font-bold">Complimentary 30-Day Transition Audit</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-silver">Worldwide Coverage:</span>
                <span className="text-emerald-400 font-bold">Any Apex Global Affiliate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Warranty Claim Submission Wizard */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto border-t border-white/10">
        <div className="p-8 sm:p-10 rounded-2xl bg-carbon border-2 border-crimson/50 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
              EXPEDITED CLAIMS INTAKE
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-1">
              FILE WARRANTY SERVICE CLAIM
            </h3>
            <p className="text-xs text-silver mt-1">
              Notice an edge imperfection or rock impact? Submit a claim for same-week cleanroom correction.
            </p>
          </div>

          <form onSubmit={handleClaimSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Vehicle VIN</label>
                <input
                  required
                  type="text"
                  placeholder="17-Digit VIN..."
                  value={claimForm.vin}
                  onChange={(e) => setClaimForm({ ...claimForm, vin: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-crimson font-mono"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Registered Owner Name</label>
                <input
                  required
                  type="text"
                  placeholder="Full Legal Name"
                  value={claimForm.owner}
                  onChange={(e) => setClaimForm({ ...claimForm, owner: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={claimForm.phone}
                  onChange={(e) => setClaimForm({ ...claimForm, phone: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="owner@luxury.com"
                  value={claimForm.email}
                  onChange={(e) => setClaimForm({ ...claimForm, email: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Observed Issue Type</label>
              <select
                value={claimForm.issueType}
                onChange={(e) => setClaimForm({ ...claimForm, issueType: e.target.value })}
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-crimson font-mono"
              >
                <option>PPF Edge Lift or Seam Tension</option>
                <option>Stone Impact / Self-Healing Inspection</option>
                <option>Ceramic Coating Hydrophobic Top-Up</option>
                <option>Window Tint Dot Matrix Adjustment</option>
                <option>Annual Cleanroom Decontamination Audit</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono text-silver uppercase block mb-1 font-bold">Description & Location on Vehicle</label>
              <textarea
                rows="3"
                placeholder="e.g. Minor 2mm lift along front driver splitter edge after track weekend at Laguna Seca..."
                value={claimForm.description}
                onChange={(e) => setClaimForm({ ...claimForm, description: e.target.value })}
                className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-crimson font-mono"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest rounded shadow-glow-red transition-all flex items-center justify-center gap-2"
            >
              <span>SUBMIT WARRANTY CLAIM FOR EXPEDITED BOOTH SLOT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {claimSubmitted && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-mono">
              <div className="flex items-center gap-2 font-bold mb-1">
                <CheckCircle2 className="w-4 h-4" /> CLAIM FILED (TICKET #APX-CLM-{Math.floor(1000 + Math.random() * 9000)})
              </div>
              <p className="text-[11px] leading-relaxed">
                Warranty claim for VIN {claimForm.vin.toUpperCase()} has been prioritized. A Master Technician will contact {claimForm.phone} within 2 hours to allocate a cleanroom service bay.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto text-center border-t border-white/10">
        <h2 className="font-display font-black text-3xl uppercase text-white">
          QUESTIONS REGARDING WARRANTY TERMS?
        </h2>
        <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
          Contact our dedicated Warranty Concierge directly at +1 (800) 590-APEX.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red flex items-center gap-2"
          >
            <span>SPEAK TO WARRANTY CONCIERGE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

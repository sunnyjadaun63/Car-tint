import React, { useState } from 'react';
import { Play, X, ArrowRight, ShieldCheck, Film, Video, Eye, Sliders, Sparkles, CheckCircle2, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudioFilmsPage() {
  const [activeFilm, setActiveFilm] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const categories = ['ALL', 'PAINT CORRECTION', 'PPF SURGERY', 'CERAMIC CURATION', 'DOWNDRAFT FINISH'];

  const films = [
    {
      id: 'film-1',
      title: 'McLaren Senna: 120-Hour 0.3mm Edge-Tucked XPEL Stealth Conversion',
      category: 'PPF SURGERY',
      duration: '08:42 • 4K UHD 60FPS',
      director: 'Directed by Marcus Vance',
      lens: 'Arri Alexa Mini LF • Cooke Anamorphic /i',
      desc: 'Complete optical disassembly of active aerodynamics, rear dual-element gurney flap, and unibody carbon weave wrapping in class ISO 6 positive-pressure bay.',
      thumbnail: '/assets/supercar-profile.png',
      stats: { hours: '128 hrs', resolution: '4K DCI', stages: '6 Stages', tech: 'Master Leo Thorne' },
      chapters: ['00:00 Intake & Decontamination', '02:15 Disassembly & CAD Scribing', '04:30 8.5-Mil TPU Tension Stretch', '06:40 Seamless Edge Tuck', '08:00 Final Inspection']
    },
    {
      id: 'film-2',
      title: 'Porsche 911 GT3 RS: 3-Stage Surgical Paint Correction & 10H Graphene Curing',
      category: 'PAINT CORRECTION',
      duration: '06:18 • 4K UHD 60FPS',
      director: 'Apex Studio Cinema Team',
      lens: 'RED V-Raptor 8K • 100mm Macro f/2.8',
      desc: 'Eliminating micro-marring and factory orange peel under 6,500K high-CRI surgical lamps before liquid quartz stratification and 16-hour shortwave infrared baking.',
      thumbnail: '/assets/coating-closeup.png',
      stats: { hours: '46 hrs', resolution: '4K DCI', stages: '4 Stages', tech: 'Master Elena Rostova' },
      chapters: ['00:00 Paint Depth Micrometer Mapping', '01:45 Rotary Heavy Cut Compound', '03:30 Dual-Action Jeweling', '05:10 Graphene Chemical Stratification']
    },
    {
      id: 'film-3',
      title: 'Ferrari SF90 XX Stradale: Ceramic IR Rejection Tinting & Windshield Armor',
      category: 'PPF SURGERY',
      duration: '05:30 • 4K UHD 60FPS',
      director: 'Directed by Julian Cole',
      lens: 'Sony FX9 • Zeiss Supreme Prime',
      desc: 'Heat-forming 99% infrared rejection nano-ceramic film inside our lint-free cleanroom booth to preserve cockpit telemetry and prevent UV photodegradation.',
      thumbnail: '/assets/hero-bg.png',
      stats: { hours: '18 hrs', resolution: '4K DCI', stages: '3 Stages', tech: 'Senior Tech Kai Tanaka' },
      chapters: ['00:00 Glass Surface Clay & Squeegee', '01:40 Heat Gun Curved Contouring', '03:20 Slip-Solution Float & Tuck', '04:50 Solar Radiometer Verification']
    },
    {
      id: 'film-4',
      title: 'Pagani Huayra BC: Downdraft Caliper Refinish & Carbon Aerocoat',
      category: 'DOWNDRAFT FINISH',
      duration: '07:15 • 4K UHD 60FPS',
      director: 'Apex Studio Cinema Team',
      lens: 'Arri Alexa Mini LF • Leica M 0.8',
      desc: 'Full titanium caliper bench disassembly, chemical bead stripping, multi-stage Rosso Corsa respray, and laser-etched Brembo insignia reconstruction.',
      thumbnail: '/assets/coating-closeup.png',
      stats: { hours: '38 hrs', resolution: '4K DCI', stages: '5 Stages', tech: 'Lead Finisher Marco Rossi' },
      chapters: ['00:00 Ultrasonic Bath Cleaning', '02:00 Epoxy Acid Etch Primer', '03:45 Base Coat Atomization', '05:30 180°F Downdraft Thermal Cure']
    },
    {
      id: 'film-5',
      title: 'Bugatti Chiron Pur Sport: Bespoke Liquid Matrix Full Body PPF',
      category: 'PPF SURGERY',
      duration: '11:04 • 4K UHD 60FPS',
      director: 'Directed by Marcus Vance',
      lens: 'RED Monstro 8K VV • Angenieux Optimo',
      desc: 'The ultimate protection journey on a $4M hypercar. Zero-blade custom template installation over exposed blue carbon fiber weave.',
      thumbnail: '/assets/supercar-profile.png',
      stats: { hours: '164 hrs', resolution: '4K DCI', stages: '7 Stages', tech: 'Master Leo Thorne' },
      chapters: ['00:00 Laser Geometry Profiling', '03:10 Complex Vent Scribing', '06:00 Underbody Diffuser Armor', '09:20 48-Hour Curing Chamber Log']
    },
    {
      id: 'film-6',
      title: 'Lamborghini Revuelto: 10H Ceramic Hydrophobic Water Contact Telemetry',
      category: 'CERAMIC CURATION',
      duration: '04:45 • 4K UHD 60FPS',
      director: 'Apex Studio Cinema Team',
      lens: 'Phantom Flex 4K • 1000 FPS High Speed',
      desc: 'Slow-motion 1,000 FPS droplet rebound dynamics proving 118° water contact angle and instant sheeting on hybrid V12 aerospace bodywork.',
      thumbnail: '/assets/hero-bg.png',
      stats: { hours: '24 hrs', resolution: '4K DCI', stages: '3 Stages', tech: 'Master Elena Rostova' },
      chapters: ['00:00 Contact Angle Goniometer Setup', '01:30 1,000 FPS Water Droplet Impact', '03:00 Mud & Mudslide Slurry Resistance Test']
    }
  ];

  const filteredFilms = selectedFilter === 'ALL' ? films : films.filter(f => f.category === selectedFilter);

  return (
    <div className="pt-24 min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white">
      {/* Hero Section with Cinema Backdrop */}
      <section className="relative py-20 px-4 sm:px-8 border-b border-white/10 overflow-hidden bg-gradient-to-b from-carbon to-obsidian">
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/50 text-crimson text-xs font-mono uppercase tracking-widest mb-4">
            <Film className="w-3.5 h-3.5 animate-pulse" />
            <span>APEX CINEMA ARCHIVES • 4K ULTRA HD</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-wider text-white">
            4K STUDIO PROCESS FILMS
          </h1>
          <p className="text-sm sm:text-base text-silver mt-3 max-w-3xl mx-auto leading-relaxed">
            Witness the surgical precision behind our hypercar transformations. Every cut, buff, and ceramic stratification captured with cinema-grade RED and Arri sensors in our ISO 6 positive-pressure laboratory.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">4K DCI</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Uncompressed Cinema</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">ISO 6</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Dust-Free Laboratory Bay</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-crimson block">1,000 FPS</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">High-Speed Droplet Capture</span>
            </div>
            <div className="p-4 rounded-xl bg-carbon/80 border border-white/10 text-center">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">100% BLADELESS</span>
              <span className="text-[10px] font-mono text-silver uppercase tracking-wider">Laser Edge Installation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all uppercase tracking-wider ${
                selectedFilter === cat
                  ? 'bg-crimson text-white shadow-glow-red'
                  : 'bg-carbon text-silver hover:text-white hover:bg-white/5 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Master Film Spotlight */}
      <section className="py-6 px-4 sm:px-8 max-w-7xl mx-auto">
        <div
          onClick={() => setActiveFilm(films[0])}
          className="relative rounded-2xl overflow-hidden border-2 border-crimson/50 bg-carbon group cursor-pointer shadow-2xl transition-all hover:border-crimson"
        >
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-black">
            <img
              src="/assets/supercar-profile.png"
              alt="Featured Film"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-crimson/90 backdrop-blur-md flex items-center justify-center shadow-glow-red group-hover:scale-115 transition-transform duration-300">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>

            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-crimson text-white font-mono text-xs font-bold uppercase tracking-wider">
                FEATURED DOCUMENTARY
              </span>
              <span className="px-3 py-1 rounded bg-black/80 border border-white/20 text-silver font-mono text-xs">
                {films[0].duration}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block mb-1">
                {films[0].category} • {films[0].director}
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl uppercase text-white tracking-wide">
                {films[0].title}
              </h2>
              <p className="text-xs sm:text-sm text-silver mt-2 max-w-3xl line-clamp-2">
                {films[0].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Film Reel Grid */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setActiveFilm(film)}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-carbon hover:border-crimson/50 transition-all cursor-pointer flex flex-col justify-between shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-crimson flex items-center justify-center shadow-glow-red group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/85 text-white border border-white/20">
                  {film.duration}
                </div>
                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-crimson font-bold uppercase tracking-widest bg-black/70 px-2 py-0.5 rounded">
                  {film.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base uppercase text-white group-hover:text-crimson transition-colors leading-snug">
                    {film.title}
                  </h3>
                  <p className="text-xs text-silver mt-2.5 leading-relaxed line-clamp-3">
                    {film.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-silver">
                    <div><span className="text-white font-bold">Runtime:</span> {film.stats.hours}</div>
                    <div><span className="text-white font-bold">Tech:</span> {film.stats.tech}</div>
                    <div><span className="text-white font-bold">Format:</span> {film.stats.resolution}</div>
                    <div><span className="text-white font-bold">Phases:</span> {film.stats.stages}</div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-mono font-bold text-crimson">
                    <span>WATCH FULL PROCESS</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cleanroom Soundstage & Capture Technology Specs */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            CINEMATOGRAPHY STANDARDS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-2">
            HOW WE DOCUMENT YOUR MASTERPIECE
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2">
            Every vehicle entrusted to Apex Studio can be commissioned with a custom 4K production package for personal archives, Bring a Trailer auctions, or YouTube release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <Video className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-lg uppercase text-white">RED & ARRI DCI SENSORS</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              We shoot uncompressed RAW footage with anamorphic cinema lenses to capture microscopic carbon fiber weave textures and mirror-reflection depth without optical aberration.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs font-mono text-silver">
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> 8K RAW Master Resolution</li>
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Micro-Scratches Under 100mm Macro</li>
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Color Graded in DaVinci Resolve</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <Sliders className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-lg uppercase text-white">6,500K SURGICAL CRI LIGHTING</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Our studio ceiling features 98 CRI daylight-balanced LED arrays producing zero stroboscopic flicker, allowing high-frame-rate video capture at up to 1,000 frames per second.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs font-mono text-silver">
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> 98+ Color Rendering Index (CRI)</li>
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Zero Shadow Diffused Array</li>
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> High-Speed Phantom Compatibility</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-carbon border border-white/10">
            <Award className="w-8 h-8 text-crimson mb-4" />
            <h3 className="font-display font-bold text-lg uppercase text-white">CUSTOM PROVENANCE FILM</h3>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Receive a private 4K video reel and leather-bound aluminum USB flight drive documenting your car's exact transformation, including micrometer readings and technician signatures.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs font-mono text-silver">
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Provenance Value Retention Asset</li>
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Private YouTube / Vimeo 4K Hosting</li>
              <li className="flex items-center gap-1.5 text-white"><CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> Social Cutdowns (9:16 Reels) Included</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Production FAQ Accordion */}
      <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto border-t border-white/10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            CINEMA PRODUCTION INQUIRIES
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white mt-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-carbon border border-white/10">
            <h4 className="font-display font-bold text-sm uppercase text-white">Can I commission a cinema film for my car build?</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Yes. Our Cinema Production Package is available as an add-on to any Track & Gloss Pro or Bespoke Concourse commission. A dedicated camera operator and director document every milestone of the transformation.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-carbon border border-white/10">
            <h4 className="font-display font-bold text-sm uppercase text-white">Can I share the video for auction listings (e.g. BaT or RM Sotheby's)?</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              Absolutely. In fact, many of our clients use our 4K studio films to establish flawless provenance, proving paint depth uniformity and zero-blade PPF installation to prospective bidders worldwide.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-carbon border border-white/10">
            <h4 className="font-display font-bold text-sm uppercase text-white">Are license plates and VINs blurred for privacy?</h4>
            <p className="text-xs text-silver mt-2 leading-relaxed">
              By default, all client identifiers, license plates, garage locations, and registration numbers are obfuscated unless the owner gives explicit written permission for public exhibition.
            </p>
          </div>
        </div>
      </section>

      {/* VIP CTA */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto text-center border-t border-white/10">
        <div className="p-10 rounded-2xl bg-gradient-to-r from-carbon via-obsidian to-carbon border-2 border-crimson/50 max-w-4xl mx-auto shadow-2xl">
          <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block">
            DOCUMENT YOUR BUILD
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-2">
            COMMISSION A CINEMATIC REEL
          </h2>
          <p className="text-xs sm:text-sm text-silver mt-2 max-w-xl mx-auto">
            Reserve your cleanroom booth alongside our cinema production crew. Receive an archival 4K film of your vehicle's transformation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded bg-crimson hover:bg-crimson/90 text-white font-display font-bold text-xs uppercase tracking-widest shadow-glow-red transition-all flex items-center gap-2"
            >
              <span>INQUIRE ABOUT PRODUCTION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/simulator"
              className="px-8 py-3.5 rounded bg-white/5 hover:bg-white/10 border border-white/20 text-white font-display font-bold text-xs uppercase tracking-widest transition-all"
            >
              CONFIGURE SPEC FIRST
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {activeFilm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="bg-carbon border border-crimson/50 rounded-2xl max-w-3xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveFilm(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-crimson text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10 mb-4">
              <img
                src={activeFilm.thumbnail}
                alt={activeFilm.title}
                className="w-full h-full object-cover filter brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-crimson flex items-center justify-center shadow-glow-red mb-3">
                  <Play className="w-8 h-8 text-white fill-white ml-1 animate-pulse" />
                </div>
                <span className="font-display font-bold text-sm uppercase tracking-wider text-white">4K ULTRA HD STREAMING READY</span>
                <span className="text-[11px] font-mono text-silver mt-1">{activeFilm.duration} • Dolby Atmos 7.1 Audio</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-crimson font-bold uppercase">
                <span>{activeFilm.category}</span>
                <span>{activeFilm.director}</span>
              </div>
              <h3 className="font-display font-black text-xl uppercase text-white">
                {activeFilm.title}
              </h3>
              <p className="text-xs text-silver leading-relaxed">
                {activeFilm.desc}
              </p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-silver uppercase tracking-wider block mb-2 font-bold">
                  CHAPTER TIMESTAMPS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono text-silver">
                  {activeFilm.chapters.map((ch, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-1.5 rounded bg-black/40 border border-white/5">
                      <span className="text-crimson font-bold">{ch.slice(0, 5)}</span>
                      <span className="truncate">{ch.slice(6)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

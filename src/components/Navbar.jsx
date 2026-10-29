import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X, Shield, Sparkles, Layers, Palette } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-2xl bg-midnight/95 border-b-2 border-crimson/60 shadow-glow-red transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 xl:gap-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
          <div className="relative w-9 h-9 flex items-center justify-center bg-carbon/90 border border-crimson/50 rounded group-hover:border-crimson shadow-glow-red transition-all">
            <svg className="w-6 h-6" viewBox="0 0 36 36" fill="none">
              <path d="M7 29L18 7L29 29H22L18 20L14 29H7Z" className="fill-crimson transition-colors" />
              <path d="M18 17L22 7L31 7L26 17H18Z" fill="#FFFFFF" fillOpacity="0.9" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg tracking-[0.24em] text-white leading-none whitespace-nowrap">APEX</span>
            <span className="font-mono text-[8px] font-bold tracking-[0.35em] text-crimson uppercase mt-1 whitespace-nowrap">STUDIO</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-[11px] font-display font-bold tracking-[0.12em] xl:tracking-[0.16em] uppercase whitespace-nowrap">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-2.5 xl:px-3 py-2 transition-colors relative whitespace-nowrap ${isActive ? 'text-white' : 'text-silver hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="whitespace-nowrap">HOME</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-crimson shadow-glow-red"></span>
                )}
              </>
            )}
          </NavLink>

          {/* Services with Mega Menu Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-2.5 xl:px-3 py-2 text-silver hover:text-white transition-colors focus:outline-none whitespace-nowrap"
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            >
              <span className="whitespace-nowrap">SERVICES</span>
              <ChevronDown className={`w-3.5 h-3.5 text-crimson transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] pt-4 z-50">
                <div className="bg-carbon/95 backdrop-blur-2xl border border-white/10 rounded-xl p-5 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[10px] font-mono text-silver">
                    <span>02-06, 12 PILLARS ARCHITECTURE</span>
                    <Link to="/packages" onClick={() => setMegaMenuOpen(false)} className="text-crimson hover:underline font-bold">
                      VIEW ALL PACKAGES →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <Link
                      to="/services/tinting"
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-lg bg-obsidian/70 border border-white/5 hover:border-crimson/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-crimson font-mono text-xs font-bold">01</span>
                        <Shield className="w-3.5 h-3.5 text-silver group-hover:text-crimson transition-colors" />
                      </div>
                      <h4 className="text-xs font-display font-bold text-white mt-0.5">Nano-Ceramic Window Tint</h4>
                      <p className="text-[11px] text-silver font-body font-normal tracking-normal mt-0.5">99% UV radiation block, solar heat shield</p>
                    </Link>

                    <Link
                      to="/services/coating"
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-lg bg-obsidian/70 border border-white/5 hover:border-crimson/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-crimson font-mono text-xs font-bold">02</span>
                        <Sparkles className="w-3.5 h-3.5 text-silver group-hover:text-crimson transition-colors" />
                      </div>
                      <h4 className="text-xs font-display font-bold text-white mt-0.5">10H Graphene Ceramic Coating</h4>
                      <p className="text-[11px] text-silver font-body font-normal tracking-normal mt-0.5">Covalent liquid glass 115° water beading</p>
                    </Link>

                    <Link
                      to="/services/ppf"
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-lg bg-obsidian/70 border border-white/5 hover:border-crimson/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-crimson font-mono text-xs font-bold">03</span>
                        <Layers className="w-3.5 h-3.5 text-silver group-hover:text-crimson transition-colors" />
                      </div>
                      <h4 className="text-xs font-display font-bold text-white mt-0.5">PPF & Stealth Vinyl Armor</h4>
                      <p className="text-[11px] text-silver font-body font-normal tracking-normal mt-0.5">Self-healing 8.5-mil high impact wrap</p>
                    </Link>

                    <Link
                      to="/services/custom-paint"
                      onClick={() => setMegaMenuOpen(false)}
                      className="p-3 rounded-lg bg-obsidian/70 border border-white/5 hover:border-crimson/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-crimson font-mono text-xs font-bold">04</span>
                        <Palette className="w-3.5 h-3.5 text-silver group-hover:text-crimson transition-colors" />
                      </div>
                      <h4 className="text-xs font-display font-bold text-white mt-0.5">OEM+ Custom Paint Booth</h4>
                      <p className="text-[11px] text-silver font-body font-normal tracking-normal mt-0.5">Pressurized concourse caliper & respray</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/simulator"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-2.5 xl:px-3 py-2 transition-colors relative whitespace-nowrap ${isActive ? 'text-white' : 'text-silver hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="whitespace-nowrap">SIMULATOR</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-crimson/20 border border-crimson/50 text-crimson font-mono font-bold animate-pulse whitespace-nowrap leading-none">
                  LIVE 2D
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-crimson shadow-glow-red"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `px-2.5 xl:px-3 py-2 transition-colors relative whitespace-nowrap ${isActive ? 'text-white' : 'text-silver hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="whitespace-nowrap">PACKAGES</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-crimson shadow-glow-red"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `px-2.5 xl:px-3 py-2 transition-colors relative whitespace-nowrap ${isActive ? 'text-white' : 'text-silver hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="whitespace-nowrap">PORTFOLIO</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-crimson shadow-glow-red"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/compliance"
            className={({ isActive }) =>
              `px-2.5 xl:px-3 py-2 transition-colors relative whitespace-nowrap ${isActive ? 'text-white' : 'text-silver hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="whitespace-nowrap">LEGAL TINT</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-crimson shadow-glow-red"></span>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-2.5 xl:px-3 py-2 transition-colors relative whitespace-nowrap ${isActive ? 'text-white' : 'text-silver hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="whitespace-nowrap">CONTACT</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-crimson shadow-glow-red"></span>
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 xl:gap-2.5 flex-shrink-0">
          {/* 4-Theme Interactive Selector */}
          <ThemeSwitcher />

          <Link
            to="/estimate"
            className="hidden xl:inline-flex items-center justify-center px-3.5 xl:px-4 py-2 border border-crimson/50 hover:border-crimson hover:bg-crimson/10 text-white font-display font-bold text-[11px] xl:text-xs tracking-wider uppercase rounded-sm transition-all whitespace-nowrap"
          >
            GET A FREE QUOTE
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-3.5 sm:px-4 xl:px-5 py-2 bg-crimson hover:bg-crimson-hover text-white font-display font-bold text-[11px] xl:text-xs tracking-wider uppercase transition-all shadow-glow-red rounded-sm whitespace-nowrap"
          >
            BOOK YOUR TINT
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-silver hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-midnight/95 border-b border-white/10 px-6 py-4 space-y-3 font-display uppercase text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-[10px] text-silver font-bold">SELECT PALETTE:</span>
            <ThemeSwitcher />
          </div>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white">
            Home
          </Link>
          <div className="py-2 border-y border-white/5 space-y-2">
            <span className="text-[10px] font-mono text-crimson font-bold block">4 CORE PILLARS</span>
            <Link to="/services/tinting" onClick={() => setMobileMenuOpen(false)} className="block pl-3 text-silver hover:text-white">
              01. Window Tinting
            </Link>
            <Link to="/services/coating" onClick={() => setMobileMenuOpen(false)} className="block pl-3 text-silver hover:text-white">
              02. Ceramic & Graphene
            </Link>
            <Link to="/services/ppf" onClick={() => setMobileMenuOpen(false)} className="block pl-3 text-silver hover:text-white">
              03. PPF & Vinyl Armor
            </Link>
            <Link to="/services/custom-paint" onClick={() => setMobileMenuOpen(false)} className="block pl-3 text-silver hover:text-white">
              04. Custom Paint Booth
            </Link>
          </div>
          <Link to="/simulator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-silver hover:text-white">
            Live Simulator 2D
          </Link>
          <Link to="/packages" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-silver hover:text-white">
            Packages & Pricing
          </Link>
          <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-silver hover:text-white">
            Studio Portfolio
          </Link>
          <Link to="/compliance" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-silver hover:text-white">
            Legal Tint Registry
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-silver hover:text-white">
            Instant Estimate
          </Link>
        </div>
      )}
    </header>
  );
}


import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme, themes, activeThemeMeta } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Switcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-all focus:outline-none"
        title="Change Studio Theme"
        aria-label="Theme Selector"
      >
        <span
          className="w-3 h-3 rounded-full border border-white/30 shadow-sm"
          style={{ backgroundColor: activeThemeMeta.colors.primary }}
        />
        <span className="hidden md:inline font-bold tracking-wider uppercase text-[11px]">
          {activeThemeMeta.name}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-silver transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Floating Theme Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-midnight/95 backdrop-blur-2xl border border-white/15 shadow-2xl z-50 p-3 text-white animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-crimson" />
              <span className="font-display font-black text-xs uppercase tracking-wider text-white">
                STUDIO COLOR PALETTE
              </span>
            </div>
            <span className="text-[10px] font-mono text-silver uppercase font-bold">
              4 THEMES
            </span>
          </div>

          <div className="mt-2 space-y-1.5">
            {themes.map((t) => {
              const isSelected = theme === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`p-3 rounded-xl cursor-pointer transition-all border text-left flex flex-col justify-between ${
                    isSelected
                      ? 'border-crimson bg-white/[0.08] shadow-md'
                      : 'border-transparent hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      {/* Color Swatch Preview Pill */}
                      <div className="flex items-center -space-x-1.5">
                        <span
                          className="w-4 h-4 rounded-full border border-white/40 shadow-sm z-30"
                          style={{ backgroundColor: t.colors.primary }}
                          title="Accent / Highlight"
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-white/30 shadow-sm z-20"
                          style={{ backgroundColor: t.colors.headerFooter }}
                          title="Header & Footer"
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-white/20 shadow-sm z-10"
                          style={{ backgroundColor: t.colors.background }}
                          title="Main Background"
                        />
                      </div>
                      <span className="font-display font-bold text-xs uppercase text-white">
                        {t.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 text-silver">
                        {t.tag}
                      </span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-crimson ml-1" />
                      )}
                    </div>
                  </div>

                  <p className="text-[11px] text-silver leading-relaxed font-sans">
                    {t.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-2 pt-2.5 border-t border-white/10 px-2 text-[10px] font-mono text-silver/70 flex items-center justify-between">
            <span>Instant Client-Side Preview</span>
            <span className="text-crimson font-bold">Saved in LocalStorage</span>
          </div>
        </div>
      )}
    </div>
  );
}

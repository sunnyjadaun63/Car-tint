# Apex Studio Car Tint - Project Memory & Context

This file serves as persistent memory and rules for Antigravity AI agents working on this repository.

---

## 1. Project Overview
- **Name**: Apex Studio Car Tint (`apex-studio-car-tint`)
- **Domain**: Ultra-luxury automotive styling, nano-ceramic window tinting, 10H ceramic coating, paint protection film (PPF) armor, custom bespoke paint, and interactive automotive visualizers.
- **Target Audience**: Exotic, luxury, and performance vehicle owners (Porsche, Bugatti, Koenigsegg, Ferrari, McLaren, etc.).

---

## 2. Tech Stack & Environment
- **Framework**: React 18.3 (`src/main.jsx`, `src/App.jsx`)
- **Build Tool**: Vite 5.4 (`vite.config.js`)
- **Routing**: `react-router-dom` (using `HashRouter` for reliable static deployment)
- **Styling**: Tailwind CSS 3.4 (`tailwind.config.js`, `src/index.css`) with custom CSS variables and RGB channel opacity support
- **Icons**: `lucide-react`
- **State Management**: React Context (`ThemeContext`)

---

## 3. Design System & Dynamic Theming
The application features a 4-theme dynamic engine toggled via [ThemeSwitcher.jsx](file:///f:/RitzTek/CarTint/src/components/ThemeSwitcher.jsx) and managed by [ThemeContext.jsx](file:///f:/RitzTek/CarTint/src/context/ThemeContext.jsx):

1. **`electric-blue`** (Default):
   - Broad appeal, charcoal black header & footer, clean white main canvas, electric blue primary accents (`#2563EB`).
   - Flagship vehicle: Porsche 911 GT3.
2. **`black-gold`**:
   - Ultra-luxury aesthetic, deep onyx black canvas (`#09090B`), royal imperial gold accents (`#EAB308`).
   - Flagship vehicle: Bugatti Chiron.
3. **`charcoal-red`**:
   - Track & motorsport performance, obsidian carbon canvas (`#08080A`), racing crimson accents (`#D91424`).
   - Flagship vehicle: Koenigsegg Jesko.
4. **`navy-teal`**:
   - Sophisticated coastal cleanroom, deep navy header/footer, crisp canvas, coastal teal highlights.

### Theming Conventions:
- Theme key is persisted in `localStorage` under `apex_studio_theme`.
- CSS variables (`--color-bg-rgb`, `--color-surface-rgb`, `--color-primary-rgb`, `--color-text-main`, etc.) are defined in `src/index.css`.
- Tailwind classes utilize CSS variables with opacity (e.g., `bg-surface`, `text-primary`, `border-theme`).

---

## 4. Architecture & Key Directories
```
f:\RitzTek\CarTint\
├── public/assets/          # High-resolution supercar imagery, textures, and hero banners
├── src/
│   ├── components/         # Shared global components
│   │   ├── Navbar.jsx          # Dynamic navigation with quote CTA & mobile drawer
│   │   ├── Footer.jsx          # Comprehensive footer with links & brand badges
│   │   ├── ThemeSwitcher.jsx   # Interactive modal/pill to switch the 4 color palettes
│   │   └── ScrollToTop.jsx     # Automatically scrolls to top on route change
│   ├── context/
│   │   ├── ThemeContext.jsx    # React context providing current theme, setter, and metadata
│   │   └── themesData.js       # Configuration array of all available themes
│   ├── pages/              # Modular, dedicated page views
│   │   ├── HomePage.jsx             # Flagship hero landing experience
│   │   ├── WindowTintingPage.jsx    # Nano-ceramic tinting tier breakdown
│   │   ├── CeramicCoatingPage.jsx   # 10H graphene & hydrophobic coating details
│   │   ├── PpfArmorPage.jsx         # Self-healing TPU film packages
│   │   ├── CustomPaintPage.jsx      # Bespoke concourse paint & caliper finishing
│   │   ├── StudioFilmsPage.jsx      # Portfolio & studio showcase
│   │   ├── VisualizerPage.jsx       # Interactive tint & PPF car visualizer/simulator
│   │   ├── PackagesPage.jsx         # Consolidated bundling matrix
│   │   └── NotFoundPage.jsx         # 404 handler
│   ├── App.jsx             # Main router registry & shell layout
│   ├── index.css           # Global theme variables, animations, and Tailwind imports
│   └── main.jsx            # Entry point
```

---

## 5. Development Guidelines & Rules
1. **CRITICAL - DO NOT TOUCH GIT**: Antigravity agents must **NEVER** execute git commands (`git status`, `git diff`, `git add`, `git commit`, `git push`, etc.). The user manages all git operations themselves.
2. **Simulator Car Images**: In the interactive car visualizer / simulator, **NEVER** use CSS filters (`hue-rotate`, `grayscale`, etc.) to change the vehicle color. Always load dedicated, high-resolution car images corresponding to each paint color and finish.
3. **Maintain Aesthetics**: The site must always maintain an ultra-premium, luxury automotive feel (glassmorphism, subtle glows, sleek typography, micro-interactions).
4. **Theme Consistency**: When adding new components or pages, always use theme CSS variables (`bg-surface`, `text-primary`, etc.) or ensure compatibility with both light and dark themes.
5. **Routing**: Continue using `HashRouter` (`/#/...`) to ensure compatibility with static hosting environments.
6. **Image Assets**: Place all assets in `public/assets/` and reference with root-relative paths (`/assets/...`).
7. **Preserve User Code**: Do not remove existing page implementations or break the established theme switcher integration.


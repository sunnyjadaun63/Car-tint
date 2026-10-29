# CarTint Workspace Memory

## Key Rules & Context
- **CRITICAL - DO NOT TOUCH GIT**: Antigravity agents must **NEVER** execute git commands (`git status`, `git diff`, `git add`, `git commit`, `git push`, etc.). The user manages all git operations themselves.
- **Simulator Car Images**: In the car visualizer and simulator, **NEVER** use CSS filters (`hue-rotate`, `grayscale`, etc.) to change vehicle color. Always load dedicated, distinct high-resolution car images per color and finish.
- **Project**: Apex Studio Car Tint (React + Vite + Tailwind CSS + HashRouter).
- **Theme System**: 4 distinct luxury themes (`electric-blue`, `black-gold`, `charcoal-red`, `navy-teal`) controlled via `ThemeContext` and `localStorage`.
- **Pages**: Modular pages in `src/pages/` covering window tinting, ceramic coating, PPF armor, custom paint, interactive visualizer, and packages.
- **Styling Rules**: Use theme-aware CSS variables and Tailwind classes. Avoid hardcoded light/dark assumptions.
- **Asset Paths**: Use `/assets/<filename>` pointing to `public/assets/`.

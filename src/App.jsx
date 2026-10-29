import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Core Pages (All 16 Distinct Pages Separately Authored)
import HomePage from './pages/HomePage';
import WindowTintingPage from './pages/WindowTintingPage';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import PpfArmorPage from './pages/PpfArmorPage';
import CustomPaintPage from './pages/CustomPaintPage';
import VisualizerPage from './pages/VisualizerPage';
import PricingMatrixPage from './pages/PricingMatrixPage';
import EssentialShieldPage from './pages/EssentialShieldPage';
import TrackGlossProPage from './pages/TrackGlossProPage';
import BespokeConcoursePage from './pages/BespokeConcoursePage';
import StudioFilmsPage from './pages/StudioFilmsPage';
import StateCompliancePage from './pages/StateCompliancePage';
import TechnicalSpecsPage from './pages/TechnicalSpecsPage';
import EstimateEnginePage from './pages/EstimateEnginePage';
import EnclosedTransportPage from './pages/EnclosedTransportPage';
import StudioLocatorPage from './pages/StudioLocatorPage';
import WarrantyPortalPage from './pages/WarrantyPortalPage';

// Companion Hubs
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      id="app-root"
      data-theme={theme}
      className={`theme-${theme} min-h-screen bg-obsidian flex flex-col font-body selection:bg-crimson selection:text-white transition-colors duration-300`}
    >
      <Navbar />
      <main className="flex-1 transition-colors duration-300">
        <Routes>
          {/* Flagship Landing Experience */}
          <Route path="/" element={<HomePage />} />

          {/* Pillar Group 1: Core Services */}
          <Route path="/services/tinting" element={<WindowTintingPage />} />
          <Route path="/services/coating" element={<CeramicCoatingPage />} />
          <Route path="/services/ppf" element={<PpfArmorPage />} />
          <Route path="/services/custom-paint" element={<CustomPaintPage />} />
           <Route path="/portfolio" element={<StudioFilmsPage />} />
            <Route path="/compliance" element={<StateCompliancePage />} />
             <Route path="/contact" element={<ContactPage />} />

          {/* Pillar Group 2: Simulation & Packages */}
          <Route path="/simulator" element={<VisualizerPage />} />
           <Route path="/pricing-matrix" element={<PricingMatrixPage />} />
           <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/track-gloss-pro" element={<TrackGlossProPage />} />
           <Route path="/packages/essential-shield" element={<EssentialShieldPage />} />
             <Route path="/technical-specs" element={<TechnicalSpecsPage />} />
        
          <Route path="/packages/bespoke-concourse" element={<BespokeConcoursePage />} /> 

          {/* Pillar Group 3: Engineering Hub */}
          <Route path="/films" element={<StudioFilmsPage />} />
         
         
        

          {/* Pillar Group 4: VIP Concierge & Logistics */}
          <Route path="/estimate" element={<EstimateEnginePage />} />
          <Route path="/transport" element={<EnclosedTransportPage />} />
          <Route path="/studios" element={<StudioLocatorPage />} />
          <Route path="/warranty" element={<WarrantyPortalPage />} />
         

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

import React from 'react';
import Hero3D from './components/Hero3D';
import WatchGrid from './components/WatchGrid';
import TechSpecs from './components/TechSpecs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero3D />
      <main className="relative z-10">
        <WatchGrid />
        <TechSpecs />
      </main>
      <Footer />
    </div>
  );
}

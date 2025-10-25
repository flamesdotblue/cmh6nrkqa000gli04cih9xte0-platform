import React from 'react';
import { Shield, Droplets, Gauge, Activity } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sapphire Crystal',
    desc: 'Mohs 9 hardness with anti-reflective nano-coating for true-to-life clarity.',
  },
  {
    icon: Droplets,
    title: '10 ATM',
    desc: 'Engineered gaskets and screw-down crown provide dependable water resistance.',
  },
  {
    icon: Gauge,
    title: 'COSC Precision',
    desc: 'Chronometer-grade accuracy with temperature-compensated regulation.',
  },
  {
    icon: Activity,
    title: 'Auto-Wind',
    desc: 'Bidirectional rotor on ceramic bearings stores 60 hours of power reserve.',
  },
];

export default function TechSpecs() {
  return (
    <section id="specs" className="relative z-10 bg-gradient-to-b from-black to-zinc-950/60 border-y border-white/10">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <h2 className="text-3xl md:text-5xl font-semibold">Engineering that feels alive</h2>
        <p className="mt-3 text-zinc-300 max-w-2xl">Tuned materials, precise tolerances, and purposeful finishing. Every interaction responds with smooth, realistic motion and light.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 grid place-items-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4TrRyLcIHhcItjnk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-300">Apex Horology</p>
            <h1 className="mt-4 font-[Mona_Sans] text-5xl md:text-7xl font-semibold leading-tight">
              Time, made tangible.
            </h1>
            <p className="mt-5 text-zinc-300 max-w-xl">
              Precision timepieces engineered with aerospace alloys and sapphire crystal. Interact in 3D and feel the response with lifelike gloss, depth, and motion.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#collection" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-zinc-200 transition-colors">
                Explore Collection <ArrowRight size={18} />
              </a>
              <a href="#specs" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-zinc-200 hover:bg-white/10 transition-colors">
                Technology
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

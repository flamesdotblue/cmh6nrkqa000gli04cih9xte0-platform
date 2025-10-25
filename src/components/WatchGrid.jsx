import React, { useRef } from 'react';

const watches = [
  {
    id: '01',
    name: 'Spectre X1',
    price: '$1,980',
    desc: 'Titanium case, ceramic bezel, sapphire crystal.',
    color: '#a3b7ff',
    image: null,
  },
  {
    id: '02',
    name: 'Nebula S',
    price: '$2,450',
    desc: 'Skeleton dial, 10ATM, perpetual auto-wind.',
    color: '#9bf6ff',
    image: null,
  },
  {
    id: '03',
    name: 'Aether GMT',
    price: '$2,180',
    desc: 'Dual-time complication, anti-magnetic core.',
    color: '#ffd6a5',
    image: null,
  },
];

function useTilt() {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1..1
    const py = (y / rect.height) * 2 - 1; // -1..1

    const rotateX = (-py) * 10; // degrees
    const rotateY = (px) * 12; // degrees

    const glossX = x;
    const glossY = y;

    el.style.setProperty('--rx', rotateX.toFixed(2) + 'deg');
    el.style.setProperty('--ry', rotateY.toFixed(2) + 'deg');
    el.style.setProperty('--gx', glossX + 'px');
    el.style.setProperty('--gy', glossY + 'px');
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return { ref, onMouseMove, onLeave };
}

function GlossyWatch({ name, price, desc, accent }) {
  const { ref, onMouseMove, onLeave } = useTilt();

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className="group relative rounded-3xl bg-gradient-to-b from-white/5 to-white/2 border border-white/10 p-6 overflow-hidden will-change-transform"
      style={{
        transform: 'perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
        transition: 'transform 180ms ease-out',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          `radial-gradient(250px 150px at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.25), transparent 60%)`,
      }} />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-300">Automatic</span>
          <span className="text-xs text-zinc-400">{price}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-zinc-300">{desc}</p>

        <div className="mt-6 aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(600px 260px at 20% 10%, ${accent}33, transparent 60%), radial-gradient(400px 300px at 80% 90%, ${accent}22, transparent 60%)`,
          }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[68%] h-[68%] rounded-full border border-white/10" style={{
            boxShadow: `0 0 40px ${accent}55 inset, 0 20px 80px ${accent}22`,
            background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.12), transparent 60%)',
          }} />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6%] h-[6%] rounded-full bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.6)]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-[calc(50%-1px)] -translate-y-[calc(50%-1px)] origin-[calc(50%-1px)_calc(50%-1px)]" style={{
            width: '40%', height: '2px', background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.9))',
            transform: 'rotate(25deg)',
          }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-[calc(50%-1px)] -translate-y-[calc(50%-1px)] origin-[calc(50%-1px)_calc(50%-1px)]" style={{
            width: '30%', height: '2px', background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.7))',
            transform: 'rotate(300deg)',
          }} />

          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0) 40%)',
            transform: 'translateY(-20%) rotate(-10deg)',
          }} />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">Interact</button>
          <a className="text-sm text-zinc-300 hover:text-white underline-offset-4 hover:underline" href="#">View details</a>
        </div>
      </div>
    </div>
  );
}

export default function WatchGrid() {
  return (
    <section id="collection" className="relative z-10 container mx-auto px-6 md:px-10 py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold">Interactive Collection</h2>
          <p className="mt-2 text-zinc-300 max-w-2xl">Hover and drag your cursor over each timepiece to feel depth, gloss, and parallax. On touch devices, tap and move to tilt.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {watches.map((w) => (
          <GlossyWatch key={w.id} name={w.name} price={w.price} desc={w.desc} accent={w.color} />
        ))}
      </div>
    </section>
  );
}

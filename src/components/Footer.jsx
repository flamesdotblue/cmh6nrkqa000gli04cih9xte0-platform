import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-300 text-sm">© {new Date().getFullYear()} Apex Horology. All rights reserved.</div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#collection" className="text-zinc-300 hover:text-white">Collection</a>
          <a href="#specs" className="text-zinc-300 hover:text-white">Technology</a>
          <a href="#" className="text-zinc-300 hover:text-white">Support</a>
        </nav>
      </div>
    </footer>
  );
}

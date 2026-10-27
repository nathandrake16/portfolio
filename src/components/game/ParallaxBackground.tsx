import React, { useMemo } from 'react';

interface ParallaxProps {
  scrollProgress: number; // 0 to 1
}

export const ParallaxBackground: React.FC<ParallaxProps> = ({ scrollProgress }) => {
  // Generate stable random stars
  const stars = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: (i * 2.2 + 1) % 100,
      y: (i * 7.3 + 3) % 45,
      size: (i % 3) + 1,
      color: i % 4 === 0 ? '#00f5d4' : i % 7 === 0 ? '#ff4655' : i % 5 === 0 ? '#f59e0b' : '#ffffff',
      delay: (i * 0.3) % 2,
    }));
  }, []);

  // Parallax translation offsets
  const skyOffset = -scrollProgress * 15;
  const cityOffset = -scrollProgress * 40;
  const gridOffset = -scrollProgress * 120;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#070b13]">
      {/* Layer 0: Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060911] via-[#0b1329] to-[#0f172a] opacity-95" />

      {/* Layer 1: Distant Pixel Stars */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateX(${skyOffset}px)` }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-none animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 2}px`,
              height: `${star.size * 2}px`,
              backgroundColor: star.color,
              boxShadow: `0 0 6px ${star.color}`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Layer 2: Distant Cyber City Skyline */}
      <div
        className="absolute bottom-20 left-0 right-0 h-64 opacity-35 transition-transform duration-150 ease-out"
        style={{ transform: `translateX(${cityOffset}px)` }}
      >
        <svg
          viewBox="0 0 1600 240"
          className="w-[180%] h-full object-cover pixelated"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Skyline silhouette */}
          <path
            d="M 0 240 L 0 160 L 40 160 L 40 120 L 70 120 L 70 90 L 110 90 L 110 160 L 140 160 L 140 70 L 170 70 L 170 180 L 220 180 L 220 110 L 260 110 L 260 50 L 300 50 L 300 190 L 340 190 L 340 130 L 380 130 L 380 80 L 410 80 L 410 200 L 460 200 L 460 100 L 510 100 L 510 60 L 540 60 L 540 210 L 590 210 L 590 140 L 630 140 L 630 85 L 680 85 L 680 190 L 730 190 L 730 115 L 770 115 L 770 45 L 820 45 L 820 180 L 870 180 L 870 125 L 920 125 L 920 75 L 960 75 L 960 200 L 1020 200 L 1020 95 L 1080 95 L 1080 150 L 1140 150 L 1140 65 L 1200 65 L 1200 190 L 1270 190 L 1270 110 L 1330 110 L 1330 80 L 1390 80 L 1390 200 L 1460 200 L 1460 120 L 1520 120 L 1520 70 L 1570 70 L 1570 240 Z"
            fill="#090d16"
          />
          {/* City Windows (Cyan & Amber) */}
          <rect x="75" y="100" width="8" height="6" fill="#00f5d4" opacity="0.6" />
          <rect x="90" y="110" width="8" height="6" fill="#f59e0b" opacity="0.6" />
          <rect x="270" y="70" width="10" height="8" fill="#00f5d4" opacity="0.8" />
          <rect x="285" y="85" width="8" height="8" fill="#ff4655" opacity="0.6" />
          <rect x="475" y="115" width="12" height="8" fill="#00f5d4" opacity="0.6" />
          <rect x="785" y="60" width="14" height="8" fill="#38bdf8" opacity="0.7" />
          <rect x="1155" y="80" width="12" height="8" fill="#f59e0b" opacity="0.6" />
          <rect x="1345" y="95" width="10" height="8" fill="#00f5d4" opacity="0.7" />
        </svg>
      </div>

      {/* Layer 3: Neon Fog / Horizon Haze */}
      <div className="absolute bottom-28 left-0 right-0 h-32 bg-gradient-to-t from-[#00f5d4]/10 via-[#ff4655]/5 to-transparent blur-xl" />

      {/* Layer 4: Retro Cyber Highway Grid */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 border-t-2 border-cyber-cyan/30 bg-gradient-to-b from-[#0c1424] to-[#05080f] overflow-hidden"
      >
        {/* Road Surface */}
        <div className="absolute inset-0 bg-[#090e1a]/80" />

        {/* Moving Yellow/Cyan Road Divider */}
        <div
          className="absolute top-1/2 left-0 right-0 h-1 border-t-2 border-dashed border-cyber-cyan/50 -translate-y-1/2 transition-transform duration-75"
          style={{
            transform: `translateY(-50%) translateX(${gridOffset % 40}px)`,
          }}
        />

        {/* Curb / Edge lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-red to-cyber-cyan opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-950 border-t border-slate-800" />
      </div>

      {/* CRT Scanline overlay effect */}
      <div className="absolute inset-0 crt-overlay opacity-30 pointer-events-none" />
    </div>
  );
};

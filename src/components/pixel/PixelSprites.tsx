import React from 'react';

interface SpriteProps {
  vehicle: 'foot' | 'bike' | 'skateboard';
  direction?: 'left' | 'right';
  isMoving?: boolean;
  className?: string;
}

/**
 * Pixel Avatar Component
 * Renders Shahadat in three forms: On Foot, on Motorcycle, or on Skateboard!
 */
export const PixelAvatar: React.FC<SpriteProps> = ({
  vehicle,
  direction = 'right',
  isMoving = false,
  className = '',
}) => {
  const flip = direction === 'left' ? 'scale-x-[-1]' : '';

  if (vehicle === 'bike') {
    return (
      <div className={`relative inline-block transition-transform duration-100 ${flip} ${className}`}>
        {/* Motorcycle & Rider Sprite */}
        <svg
          viewBox="0 0 72 40"
          className="w-20 h-12 md:w-28 md:h-16 pixelated filter drop-shadow-[0_4px_10px_rgba(0,245,212,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Headlight Beam */}
          <polygon
            points="60,24 72,18 72,30"
            fill="rgba(0, 245, 212, 0.25)"
            className={isMoving ? 'animate-pulse' : ''}
          />
          <line x1="60" y1="24" x2="72" y2="24" stroke="#00f5d4" strokeWidth="2" strokeDasharray="2 2" />

          {/* Rear Wheel */}
          <rect x="6" y="22" width="14" height="14" fill="#0f172a" />
          <rect x="8" y="24" width="10" height="10" fill="#1e293b" />
          <rect x="11" y="27" width="4" height="4" fill="#00f5d4" />
          {/* Front Wheel */}
          <rect x="50" y="22" width="14" height="14" fill="#0f172a" />
          <rect x="52" y="24" width="10" height="10" fill="#1e293b" />
          <rect x="55" y="27" width="4" height="4" fill="#00f5d4" />

          {/* Bike Frame & Engine */}
          <path
            d="M 16 28 L 32 28 L 44 20 L 56 28 L 40 28 L 32 20 Z"
            fill="#ff4655"
          />
          <rect x="26" y="24" width="12" height="7" fill="#334155" />
          <rect x="28" y="26" width="4" height="3" fill="#64748b" />

          {/* Exhaust Pipe & Flame */}
          <rect x="4" y="28" width="16" height="3" fill="#94a3b8" />
          {isMoving && (
            <polygon
              points="0,29 4,27 4,31"
              fill="#f59e0b"
              className="animate-ping"
            />
          )}

          {/* Handlebars */}
          <rect x="46" y="14" width="4" height="8" fill="#cbd5e1" />
          <rect x="44" y="13" width="8" height="3" fill="#1e293b" />

          {/* Shahadat - Rider */}
          {/* Legs & Torso (Leaning forward) */}
          <rect x="24" y="16" width="14" height="8" fill="#1e293b" />
          <rect x="26" y="12" width="12" height="8" fill="#0284c7" /> {/* Jacket */}
          {/* Hands */}
          <rect x="40" y="16" width="6" height="4" fill="#d97706" />

          {/* Helmet / Head with visor */}
          <rect x="34" y="4" width="12" height="10" fill="#0f172a" />
          <rect x="36" y="3" width="8" height="4" fill="#ff4655" /> {/* Helmet accent stripe */}
          <rect x="40" y="7" width="6" height="4" fill="#00f5d4" /> {/* Cyan Visor */}
        </svg>

        {/* Speed / Dust particles */}
        {isMoving && (
          <div className="absolute -left-3 bottom-0 flex space-x-1">
            <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-none animate-ping"></span>
            <span className="w-1 h-1 bg-amber-400 rounded-none animate-bounce"></span>
          </div>
        )}
      </div>
    );
  }

  if (vehicle === 'skateboard') {
    return (
      <div className={`relative inline-block transition-transform duration-100 ${flip} ${className}`}>
        {/* Shahadat on Skateboard */}
        <svg
          viewBox="0 0 48 48"
          className="w-14 h-14 md:w-20 md:h-20 pixelated filter drop-shadow-[0_4px_10px_rgba(16,185,129,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Skateboard Wheels */}
          <rect x="8" y="42" width="5" height="5" fill="#10b981" />
          <rect x="32" y="42" width="5" height="5" fill="#10b981" />
          {/* Skateboard Deck */}
          <rect x="4" y="38" width="38" height="4" fill="#1e293b" />
          <rect x="6" y="37" width="34" height="2" fill="#34d399" />
          <rect x="18" y="37" width="10" height="2" fill="#ff4655" />

          {/* Sneakers */}
          <rect x="12" y="34" width="7" height="4" fill="#f8fafc" />
          <rect x="26" y="34" width="7" height="4" fill="#f8fafc" />

          {/* Pants / Legs in skater stance */}
          <rect x="14" y="24" width="5" height="11" fill="#1e293b" />
          <rect x="25" y="24" width="6" height="11" fill="#1e293b" />

          {/* Hoodie / Casual Jacket */}
          <rect x="14" y="14" width="17" height="11" fill="#4f46e5" />
          <rect x="18" y="15" width="8" height="10" fill="#6366f1" />

          {/* Arms out for balance */}
          <rect x="8" y="17" width="7" height="4" fill="#4f46e5" />
          <rect x="30" y="15" width="8" height="4" fill="#4f46e5" />
          <rect x="6" y="18" width="3" height="3" fill="#d97706" />
          <rect x="37" y="14" width="3" height="3" fill="#d97706" />

          {/* Head & Hair */}
          <rect x="18" y="6" width="10" height="9" fill="#d97706" /> {/* Face */}
          <rect x="16" y="4" width="13" height="5" fill="#0f172a" /> {/* Hair */}
          <rect x="24" y="8" width="3" height="3" fill="#0f172a" /> {/* Eye */}
          <rect x="17" y="5" width="10" height="2" fill="#38bdf8" /> {/* Headband / Cap */}
        </svg>

        {isMoving && (
          <div className="absolute -left-2 bottom-0 flex space-x-1">
            <span className="w-1 h-1 bg-emerald-400 rounded-none animate-ping"></span>
          </div>
        )}
      </div>
    );
  }

  // Default: On Foot (Running / Idle)
  return (
    <div className={`relative inline-block transition-transform duration-100 ${flip} ${className}`}>
      <svg
        viewBox="0 0 36 48"
        className="w-12 h-16 md:w-16 md:h-20 pixelated filter drop-shadow-[0_4px_10px_rgba(0,245,212,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Running animation frame based on isMoving */}
        {isMoving ? (
          <>
            {/* Front Leg */}
            <rect x="18" y="32" width="5" height="11" fill="#1e293b" />
            <rect x="21" y="41" width="7" height="4" fill="#00f5d4" />

            {/* Back Leg */}
            <rect x="8" y="32" width="6" height="8" fill="#0f172a" />
            <rect x="5" y="38" width="6" height="4" fill="#00f5d4" />

            {/* Torso / Tech Hoodie */}
            <rect x="11" y="16" width="14" height="16" fill="#0284c7" />
            <rect x="14" y="18" width="8" height="14" fill="#38bdf8" />

            {/* Swinging Arms */}
            <rect x="5" y="20" width="7" height="4" fill="#0284c7" />
            <rect x="24" y="18" width="8" height="4" fill="#0284c7" />
            <rect x="3" y="22" width="3" height="3" fill="#d97706" />
            <rect x="31" y="17" width="3" height="3" fill="#d97706" />
          </>
        ) : (
          <>
            {/* Standing Legs */}
            <rect x="11" y="32" width="5" height="13" fill="#1e293b" />
            <rect x="19" y="32" width="5" height="13" fill="#1e293b" />
            <rect x="10" y="42" width="7" height="4" fill="#00f5d4" />
            <rect x="18" y="42" width="7" height="4" fill="#00f5d4" />

            {/* Torso */}
            <rect x="10" y="16" width="15" height="16" fill="#0284c7" />
            <rect x="14" y="17" width="8" height="15" fill="#38bdf8" />

            {/* Arms resting */}
            <rect x="6" y="17" width="5" height="12" fill="#0284c7" />
            <rect x="24" y="17" width="5" height="12" fill="#0284c7" />
            <rect x="6" y="28" width="4" height="3" fill="#d97706" />
            <rect x="25" y="28" width="4" height="3" fill="#d97706" />
          </>
        )}

        {/* Head & Hair */}
        <rect x="12" y="7" width="11" height="10" fill="#d97706" /> {/* Face */}
        <rect x="10" y="4" width="15" height="5" fill="#0f172a" /> {/* Hair Top */}
        <rect x="9" y="7" width="4" height="5" fill="#0f172a" /> {/* Hair Side */}
        <rect x="18" y="10" width="3" height="3" fill="#0f172a" /> {/* Eyes */}
        <rect x="17" y="13" width="3" height="1" fill="#78350f" /> {/* Smile */}
        {/* Cyber Earbud / Glasses tint */}
        <rect x="20" y="9" width="3" height="2" fill="#00f5d4" />
      </svg>
    </div>
  );
};

/**
 * Pixel Traffic Light for Gulshan-2 Intersection
 */
export const PixelTrafficLight: React.FC<{
  phase: 'red' | 'yellow' | 'green';
  size?: number;
}> = ({ phase, size = 1 }) => {
  return (
    <div
      className="inline-block bg-slate-950 p-2 border-2 border-slate-700 shadow-pixel"
      style={{ transform: `scale(${size})` }}
    >
      <div className="flex flex-col space-y-2">
        {/* Red light */}
        <div
          className={`w-6 h-6 border border-red-950 transition-all duration-200 ${
            phase === 'red'
              ? 'bg-red-500 shadow-[0_0_12px_#ff4655]'
              : 'bg-red-950 opacity-40'
          }`}
        />
        {/* Yellow light */}
        <div
          className={`w-6 h-6 border border-amber-950 transition-all duration-200 ${
            phase === 'yellow'
              ? 'bg-yellow-400 shadow-[0_0_12px_#f59e0b]'
              : 'bg-amber-950 opacity-40'
          }`}
        />
        {/* Green light */}
        <div
          className={`w-6 h-6 border border-emerald-950 transition-all duration-200 ${
            phase === 'green'
              ? 'bg-emerald-400 shadow-[0_0_12px_#00f5d4]'
              : 'bg-emerald-950 opacity-40'
          }`}
        />
      </div>
      {/* Pole */}
      <div className="w-2 h-8 bg-slate-800 mx-auto mt-1" />
    </div>
  );
};

/**
 * Pixel Arcade Cabinet
 */
export const PixelArcadeCabinet: React.FC<{ color?: string }> = ({ color = '#00f5d4' }) => {
  return (
    <div className="w-16 h-24 md:w-20 md:h-32 relative pixelated inline-block">
      <svg viewBox="0 0 40 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cabinet body */}
        <path d="M 6 4 L 34 4 L 34 60 L 6 60 Z" fill="#0f172a" />
        <path d="M 4 8 L 36 8 L 36 20 L 32 36 L 36 38 L 36 62 L 4 62 L 4 38 L 8 36 L 4 20 Z" stroke="#334155" strokeWidth="2" />
        
        {/* Marquee */}
        <rect x="8" y="6" width="24" height="8" fill="#1e293b" />
        <rect x="10" y="8" width="20" height="4" fill={color} className="animate-pulse" />

        {/* Screen */}
        <rect x="9" y="16" width="22" height="16" fill="#020617" />
        <rect x="11" y="18" width="18" height="12" fill="#0c4a6e" />
        <rect x="13" y="20" width="14" height="8" fill="#000" />
        {/* Pixel code matrix inside screen */}
        <line x1="14" y1="22" x2="20" y2="22" stroke={color} strokeWidth="1" />
        <line x1="14" y1="24" x2="24" y2="24" stroke="#ff4655" strokeWidth="1" />
        <line x1="14" y1="26" x2="18" y2="26" stroke="#f59e0b" strokeWidth="1" />

        {/* Control Deck */}
        <polygon points="6,34 34,34 32,42 8,42" fill="#1e293b" />
        {/* Joystick & Buttons */}
        <circle cx="14" cy="38" r="2" fill="#ff4655" />
        <circle cx="22" cy="37" r="1.5" fill={color} />
        <circle cx="26" cy="39" r="1.5" fill="#f59e0b" />

        {/* Coin Door */}
        <rect x="12" y="46" width="16" height="12" fill="#090d16" />
        <rect x="15" y="48" width="3" height="5" fill="#f59e0b" />
        <rect x="22" y="48" width="3" height="5" fill="#f59e0b" />
      </svg>
    </div>
  );
};

/**
 * 20x Blood Donor Honor Shield Badge
 */
export const PixelBloodDonorBadge: React.FC = () => {
  return (
    <div className="relative inline-flex flex-col items-center group">
      <div className="relative p-2 bg-gradient-to-br from-red-950 via-slate-900 to-red-950 border-2 border-red-500 shadow-pixel-red rounded-none animate-bounce-subtle">
        <svg viewBox="0 0 32 32" className="w-12 h-12 pixelated" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blood Drop with Glow */}
          <path
            d="M 16 3 C 16 3 26 14 26 21 C 26 26.5 21.5 30 16 30 C 10.5 30 6 26.5 6 21 C 6 14 16 3 16 3 Z"
            fill="#dc2626"
            stroke="#ff4655"
            strokeWidth="1.5"
          />
          {/* Highlight */}
          <path
            d="M 12 18 C 12 15 15 11 16 9 C 15 12 13 16 13 19 C 13 22 14 24 15 25 C 13 24 12 21 12 18 Z"
            fill="#ffffff"
            opacity="0.6"
          />
          {/* "20" Text inside drop */}
          <text
            x="16"
            y="23"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="8"
            fontFamily="Press Start 2P, monospace"
            fontWeight="bold"
          >
            20
          </text>
        </svg>
      </div>
      <div className="mt-1 px-2 py-0.5 bg-red-600 text-white font-pixel text-[9px] uppercase tracking-wider shadow-pixel">
        20x Donor
      </div>
    </div>
  );
};

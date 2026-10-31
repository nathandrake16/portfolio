import React from 'react';
import { Eye, Activity } from 'lucide-react';
import { useVisitorCount } from '../utils/useVisitorCount';
import { sound } from '../utils/audio';

interface VisitorBadgeProps {
  variant?: 'navbar' | 'hud' | 'pill';
  className?: string;
}

export const VisitorBadge: React.FC<VisitorBadgeProps> = ({ variant = 'navbar', className = '' }) => {
  const { formatted, loading } = useVisitorCount();

  const handleClick = () => {
    sound.playCoin();
  };

  if (variant === 'hud') {
    return (
      <div 
        onClick={handleClick}
        className={`bg-slate-900/80 p-2.5 border border-slate-700 hover:border-cyber-cyan transition-all shadow-pixel cursor-pointer group ${className}`}
        title="Verified Portfolio Visits"
      >
        <div className="flex items-center justify-between text-slate-400 text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-400 group-hover:text-cyber-cyan transition-colors">
            <Eye className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>PORTFOLIO VISITS</span>
          </span>
          <span className="flex items-center space-x-1 font-pixel text-[9px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 border border-emerald-500/40">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none animate-pulse" />
            <span>LIVE</span>
          </span>
        </div>
        <div className="font-pixel text-xs sm:text-sm text-cyber-cyan font-bold mt-1.5 flex items-center space-x-1.5">
          <span>{loading ? '...' : formatted}</span>
          <span className="font-mono text-[10px] text-slate-400 font-normal">RUNS</span>
        </div>
      </div>
    );
  }

  if (variant === 'pill') {
    return (
      <span
        onClick={handleClick}
        className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-slate-900/90 text-cyber-cyan border border-cyber-cyan/40 text-xs font-mono rounded cursor-pointer hover:border-cyber-cyan transition-colors shadow-sm ${className}`}
        title="Verified Portfolio Visitors"
      >
        <Eye className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
        <span className="text-slate-400">Visits:</span>
        <span className="font-bold text-white">{loading ? '...' : formatted}</span>
      </span>
    );
  }

  // Default: Navbar Badge (Sleek, retro arcade pixel aesthetic)
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center space-x-1.5 px-2.5 py-1.5 bg-slate-950 hover:bg-slate-900 border-2 border-slate-700 hover:border-cyber-cyan shadow-pixel transition-all group cursor-pointer ${className}`}
      title="Total Portfolio Explorers & Visits"
      aria-label="Portfolio Visitor Count"
    >
      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none animate-pulse shrink-0" />
      <Eye className="w-3.5 h-3.5 text-cyber-cyan group-hover:scale-110 transition-transform shrink-0" />
      <span className="font-pixel text-[9px] text-slate-400 hidden lg:inline">VISITS:</span>
      <span className="font-mono text-xs font-bold text-cyber-cyan tracking-wider">
        {loading ? '...' : formatted}
      </span>
    </button>
  );
};

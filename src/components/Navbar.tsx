import React from 'react';
import { 
  Gamepad2, 
  FileText, 
  Volume2, 
  VolumeX, 
  Download, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface NavbarProps {
  mode: 'game' | 'recruiter';
  onToggleMode: (newMode: 'game' | 'recruiter') => void;
  activeZoneId: number;
  onSelectZone: (zoneId: number) => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  mode,
  onToggleMode,
  activeZoneId,
  onSelectZone,
  isMuted,
  onToggleMute,
}) => {
  const { personal, zones } = portfolioData;
  const [avatarError, setAvatarError] = React.useState(false);

  const handleModeSwitch = (targetMode: 'game' | 'recruiter') => {
    if (mode !== targetMode) {
      sound.playWarp();
      onToggleMode(targetMode);
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#0a0e17]/90 backdrop-blur-md border-b-2 border-slate-800 shadow-pixel">
      {/* Top HUD Line */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand / Avatar HUD */}
        <div className="flex items-center space-x-3">
          <div className="relative group cursor-pointer" onClick={() => onSelectZone(1)}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-950 border-2 border-cyber-cyan flex items-center justify-center shadow-pixel overflow-hidden">
              {!avatarError ? (
                <img
                  src={personal.avatarPhoto}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <span className="font-pixel text-xs text-cyber-cyan">SH</span>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border border-black rounded-none animate-pulse" />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="font-pixel text-[10px] sm:text-xs text-cyber-cyan tracking-wider">
                {personal.name.toUpperCase()}
              </span>
              <span className="hidden md:inline-flex items-center px-1.5 py-0.2 bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700">
                LVL. 2026 BRACU
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono text-slate-400">
              <span className="text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 inline text-amber-400" />
                CGPA 3.91
              </span>
              <span>•</span>
              <span className="truncate max-w-[200px] text-slate-300">
                {personal.currentQuest}
              </span>
            </div>
          </div>
        </div>

        {/* Central Prominent Mode Switcher */}
        <div className="flex items-center bg-slate-950 p-1 border-2 border-slate-700 shadow-pixel rounded-none">
          <button
            onClick={() => handleModeSwitch('game')}
            className={`flex items-center space-x-1.5 px-2.5 sm:px-3.5 py-1 text-xs font-pixel transition-all ${
              mode === 'game'
                ? 'bg-cyber-cyan text-slate-950 shadow-pixel-cyan font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Interactive 2D World Map Journey"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GAME MODE</span>
            <span className="sm:hidden">GAME</span>
          </button>

          <button
            onClick={() => handleModeSwitch('recruiter')}
            className={`flex items-center space-x-1.5 px-2.5 sm:px-3.5 py-1 text-xs font-pixel transition-all ${
              mode === 'recruiter'
                ? 'bg-cyber-red text-white shadow-pixel-red font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Clean, fast-scanning dark portfolio for hiring managers"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RECRUITER MODE</span>
            <span className="sm:hidden">CV MODE</span>
          </button>
        </div>

        {/* Right Controls: Audio & Download CV */}
        <div className="flex items-center space-x-2">
          {/* Audio Mute/Unmute */}
          <button
            onClick={onToggleMute}
            className={`p-2 bg-slate-900 border-2 transition-all shadow-pixel ${
              isMuted
                ? 'border-slate-700 text-slate-500 hover:text-slate-300'
                : 'border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10'
            }`}
            title={isMuted ? 'Unmute 8-bit sound effects' : 'Mute 8-bit sound effects'}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
          </button>

          {/* Download CV (PDF) */}
          <a
            href={personal.cvPdfUrl}
            download="MD_Shahadat_Hossain_Main.pdf"
            onClick={() => sound.playCoin()}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-pixel text-[10px] sm:text-xs border-2 border-black shadow-pixel-gold transition-all"
            title="Download Official CV (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV PDF</span>
          </a>
        </div>
      </div>

      {/* Secondary Fast Travel Bar (Active only in Game Mode or as anchor links) */}
      {mode === 'game' && (
        <div className="bg-slate-950/80 border-t border-slate-800 px-3 py-1.5 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto flex items-center justify-between min-w-max space-x-2 text-[10px] font-pixel">
            <span className="text-slate-500 flex items-center gap-1 uppercase tracking-wider text-[9px]">
              <MapPin className="w-3 h-3 text-cyber-cyan" />
              Fast Travel:
            </span>
            <div className="flex items-center space-x-1.5">
              {zones.map((zone) => {
                const isActive = activeZoneId === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => {
                      sound.playClick();
                      onSelectZone(zone.id);
                    }}
                    className={`px-2 py-0.5 border transition-all ${
                      isActive
                        ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10 font-bold shadow-pixel-cyan'
                        : 'border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {zone.id}. {zone.shortName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

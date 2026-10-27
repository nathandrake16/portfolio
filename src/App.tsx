import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { GameWorld } from './components/game/GameWorld';
import { RecruiterView } from './components/recruiter/RecruiterView';
import { sound } from './utils/audio';

export const App: React.FC = () => {
  const [mode, setMode] = useState<'game' | 'recruiter'>('game');
  const [activeZoneId, setActiveZoneId] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(() => sound.isMuted());

  // Keyboard shortcut: Press 'M' to toggle between Game Mode and Recruiter Mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'm' || e.key === 'M') {
        setMode((prev) => {
          const next = prev === 'game' ? 'recruiter' : 'game';
          sound.playWarp();
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleMute = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleSelectZone = (zoneId: number) => {
    setActiveZoneId(zoneId);
    if (mode !== 'game') {
      setMode('game');
    }
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 flex flex-col font-sans selection:bg-[#00f5d4] selection:text-black">
      {/* Sticky Navigation & HUD */}
      <Navbar
        mode={mode}
        onToggleMode={(newMode) => setMode(newMode)}
        activeZoneId={activeZoneId}
        onSelectZone={handleSelectZone}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main View Area */}
      <div className="flex-1 w-full">
        {mode === 'game' ? (
          <GameWorld
            activeZoneId={activeZoneId}
            onZoneChange={(zoneId) => setActiveZoneId(zoneId)}
          />
        ) : (
          <RecruiterView onSwitchToGameMode={() => {
            sound.playWarp();
            setMode('game');
          }} />
        )}
      </div>
    </div>
  );
};

export default App;

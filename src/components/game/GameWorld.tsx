import React, { useEffect, useRef, useState } from 'react';
import { ParallaxBackground } from './ParallaxBackground';
import { Zone1Spawn } from './Zone1Spawn';
import { Zone2TechHub } from './Zone2TechHub';
import { Zone3Intersection } from './Zone3Intersection';
import { Zone4Arcade } from './Zone4Arcade';
import { Zone5GuildHall } from './Zone5GuildHall';
import { Zone6SafeHouse } from './Zone6SafeHouse';
import { Zone7Extraction } from './Zone7Extraction';
import { PixelAvatar } from '../pixel/PixelSprites';
import { portfolioData } from '../../data/portfolioData';
import { sound } from '../../utils/audio';
import { Compass, Sparkles } from 'lucide-react';

interface GameWorldProps {
  activeZoneId: number;
  onZoneChange: (zoneId: number) => void;
}

export const GameWorld: React.FC<GameWorldProps> = ({ activeZoneId, onZoneChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [avatarDirection, setAvatarDirection] = useState<'left' | 'right'>('right');

  const { zones } = portfolioData;
  const currentZone = zones.find((z) => z.id === activeZoneId) || zones[0];

  // Scroll to active zone when changed from outside
  useEffect(() => {
    const targetElement = document.getElementById(`zone-${activeZoneId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeZoneId]);

  // Track scroll position to calculate progress and determine active zone
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setScrollProgress(progress);

      // Determine which zone is in view
      const zoneElements = zones.map((z) => ({
        id: z.id,
        el: document.getElementById(`zone-${z.id}`),
      }));

      for (let i = zoneElements.length - 1; i >= 0; i--) {
        const item = zoneElements[i];
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            if (activeZoneId !== item.id) {
              onZoneChange(item.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeZoneId, onZoneChange, zones]);

  // Keyboard navigation (Arrow keys / WASD / Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setIsMoving(true);
        setAvatarDirection('right');
        sound.playRev();
        const nextId = Math.min(activeZoneId + 1, 7);
        onZoneChange(nextId);
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setIsMoving(true);
        setAvatarDirection('left');
        sound.playRev();
        const prevId = Math.max(activeZoneId - 1, 1);
        onZoneChange(prevId);
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        sound.playJump();
        setIsMoving(true);
        setTimeout(() => setIsMoving(false), 500);
      }
    };

    const handleKeyUp = () => {
      setTimeout(() => setIsMoving(false), 300);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeZoneId, onZoneChange]);

  const goToZone = (id: number) => {
    onZoneChange(id);
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen text-white">
      {/* Dynamic Parallax Background Layers */}
      <ParallaxBackground scrollProgress={scrollProgress} />

      {/* World Map Checkpoints */}
      <div className="relative z-10 flex flex-col">
        <div id="zone-1">
          <Zone1Spawn onNextZone={() => goToZone(2)} />
        </div>
        <div id="zone-2">
          <Zone2TechHub onNextZone={() => goToZone(3)} />
        </div>
        <div id="zone-3">
          <Zone3Intersection onNextZone={() => goToZone(4)} />
        </div>
        <div id="zone-4">
          <Zone4Arcade onNextZone={() => goToZone(5)} />
        </div>
        <div id="zone-5">
          <Zone5GuildHall onNextZone={() => goToZone(6)} />
        </div>
        <div id="zone-6">
          <Zone6SafeHouse onNextZone={() => goToZone(7)} />
        </div>
        <div id="zone-7">
          <Zone7Extraction onRestartRun={() => goToZone(1)} />
        </div>
      </div>

      {/* Persistent Bottom Floating Avatar & Mini-Map HUD */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#070b13]/90 border-t-2 border-slate-800 backdrop-blur-md px-3 py-2 shadow-pixel">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Avatar Movement Stage */}
          <div className="flex items-center space-x-3">
            <div className="relative w-20 h-10 flex items-center justify-center">
              <PixelAvatar
                vehicle={currentZone.vehicle}
                direction={avatarDirection}
                isMoving={isMoving}
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-1.5 font-pixel text-[10px] text-cyber-cyan">
                <span>CHECKPOINT {currentZone.id}/7:</span>
                <span className="text-white uppercase">{currentZone.name}</span>
              </div>
              <div className="font-mono text-[11px] text-slate-400">
                Mode: {currentZone.vehicle === 'bike' ? '🏍️ Motorcycle' : currentZone.vehicle === 'skateboard' ? '🛹 Skateboard' : '🏃 On Foot'}
              </div>
            </div>
          </div>

          {/* World Progress Bar */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
              <span>PROGRESS</span>
              <span>{Math.round(scrollProgress * 100)}% EXPLORED</span>
            </div>
            <div className="w-full h-2 bg-slate-900 border border-slate-700 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-red to-amber-400 transition-all duration-200"
                style={{ width: `${Math.max(scrollProgress * 100, 5)}%` }}
              />
            </div>
          </div>

          {/* Keyboard Controls Legend */}
          <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400">
            <div className="hidden lg:flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">A / ←</kbd>
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">D / →</kbd>
              <span>MOVE</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1 ml-2">
              <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-300">SPACE</kbd>
              <span>BOOST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

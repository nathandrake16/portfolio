import React, { useState, useRef } from 'react';
import { Building2, Landmark, GraduationCap, CheckCircle2, ChevronRight, BarChart3, Users, Zap, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

interface Zone2Props {
  onNextZone: () => void;
}

export const Zone2TechHub: React.FC<Zone2Props> = ({ onNextZone }) => {
  const { experience } = portfolioData;
  const [selectedId, setSelectedId] = useState<string>(experience[0].id);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeExp = experience.find((e) => e.id === selectedId) || experience[0];

  const handleSelect = (id: string) => {
    sound.playClick();
    setSelectedId(id);

    // On mobile screens (< 768px), smoothly scroll so the clicked item & details are in view
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const el = cardRefs.current[id];
        if (el) {
          const navOffset = 64;
          const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top: Math.max(0, top),
            behavior: 'smooth',
          });
        }
      }, 60);
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'grameenphone':
        return <Building2 className="w-5 h-5 text-cyber-cyan" />;
      case 'city-bank':
        return <Landmark className="w-5 h-5 text-amber-400" />;
      case 'bracu-ta':
        return <GraduationCap className="w-5 h-5 text-cyber-purple" />;
      default:
        return <Building2 className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  const renderDetails = (item: typeof activeExp) => (
    <div className="glass-panel border-2 border-slate-700 p-4 sm:p-6 shadow-pixel space-y-4">
      {/* Mission Header */}
      <div className="border-b border-slate-700/80 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="p-2 bg-slate-900 border border-slate-700">
              {getIcon(item.id)}
            </span>
            <div>
              <h3 className="font-mono text-base sm:text-xl font-bold text-white">
                {item.role}
              </h3>
              <p className="font-mono text-xs text-cyber-cyan">
                {item.company} • {item.period}
              </p>
            </div>
          </div>

          <span className="px-2 py-0.5 bg-slate-900 border border-slate-700 font-mono text-[11px] sm:text-xs text-slate-300">
            {item.location}
          </span>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-300 font-sans italic border-l-2 border-cyber-cyan pl-3">
          "{item.tagline}"
        </p>
      </div>

      {/* Metrics Showcase Grid */}
      <div>
        <div className="text-[10px] sm:text-[11px] font-pixel text-slate-400 mb-2 flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
          VERIFIED OPERATIONAL METRICS:
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
          {item.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-2.5 sm:p-3 bg-slate-900/90 border border-slate-700 text-center shadow-pixel"
            >
              <div className="font-pixel text-xs sm:text-sm text-cyber-cyan font-bold">
                {metric.value}
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Mission Deliverables */}
      <div>
        <div className="text-[10px] sm:text-[11px] font-pixel text-slate-400 mb-2 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-cyber-cyan" />
          KEY DELIVERABLES & ACHIEVEMENTS:
        </div>
        <ul className="space-y-2">
          {item.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan mt-0.5 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Pills */}
      <div className="border-t border-slate-800 pt-3">
        <div className="text-[9px] sm:text-[10px] font-pixel text-slate-400 mb-1.5">
          TECHNOLOGY & SYSTEMS:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-700 font-mono text-[10px] sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-w-[100vw] w-full min-h-[calc(100vh-100px)] flex flex-col justify-center px-4 sm:px-8 py-12">
      {/* Zone Header Badge */}
      <div className="max-w-6xl mx-auto w-full mb-6">
        <div className="flex items-center space-x-2 border-2 border-sky-400 p-2 bg-slate-950/80 shadow-pixel inline-block">
          <span className="font-pixel text-[11px] text-sky-400">
            [ CHECKPOINT 02 : THE TELECOM & TECH HUB ]
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono mt-3">
          Corporate Quests & Industry Impact
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans mt-1">
          Explore interactive enterprise headquarters: Grameenphone, City Bank, and BRAC University.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Skyline Buildings Selector */}
        <div className="md:col-span-5 space-y-4">
          <div className="text-xs font-pixel text-slate-400 mb-2 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyber-cyan" />
            SELECT ENTERPRISE CHECKPOINT:
          </div>

          {experience.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[item.id] = el;
                }}
                className="space-y-3"
              >
                <div
                  onClick={() => handleSelect(item.id)}
                  className={`cursor-pointer p-4 border-2 transition-all shadow-pixel ${
                    isSelected
                      ? 'bg-slate-900 border-cyber-cyan shadow-pixel-cyan'
                      : 'bg-slate-950/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-slate-950 border border-slate-700 shadow-sm">
                        {getIcon(item.id)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-mono text-sm sm:text-base font-bold text-white">
                            {item.company}
                          </h3>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 bg-cyan-950 text-cyber-cyan border border-cyber-cyan/40 text-[9px] font-pixel">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-xs text-slate-300 font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className="md:hidden text-[9px] font-pixel text-slate-400">
                        {isSelected ? 'OPEN ▼' : 'VIEW >'}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isSelected ? 'text-cyber-cyan md:translate-x-1 rotate-90 md:rotate-0' : 'text-slate-600'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
                    <span>{item.period}</span>
                    <span className="text-slate-400">{item.location}</span>
                  </div>
                </div>

                {/* Mobile Inline Expansion (Comes directly down under the clicked card on phones) */}
                {isSelected && (
                  <div className="md:hidden pt-1">
                    {renderDetails(item)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Terminal Card for Selected Quest (Desktop / Tablet view) */}
        <div className="hidden md:block md:col-span-7">
          {renderDetails(activeExp)}
        </div>
      </div>

      {/* Advance Checkpoint Button (Always at bottom of section) */}
      <div className="max-w-6xl mx-auto w-full pt-6">
        <button
          onClick={() => {
            sound.playCheckpoint();
            onNextZone();
          }}
          className="w-full sm:w-auto sm:min-w-[340px] inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-sky-400 font-pixel text-xs border-2 border-sky-400 shadow-pixel hover:shadow-pixel-cyan transition-all"
        >
          <span>ADVANCE TO GULSHAN-2 INTERSECTION</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

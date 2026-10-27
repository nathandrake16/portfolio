import React, { useState } from 'react';
import { Gamepad2, ExternalLink, Terminal, Sparkles, ChevronRight, CheckCircle2, Star, Cpu } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { portfolioData } from '../../data/portfolioData';
import { PixelArcadeCabinet } from '../pixel/PixelSprites';
import { sound } from '../../utils/audio';

interface Zone4Props {
  onNextZone: () => void;
}

export const Zone4Arcade: React.FC<Zone4Props> = ({ onNextZone }) => {
  const { projects, skills } = portfolioData;
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);
  const [activeTab, setActiveTab] = useState<'cartridges' | 'loadout'>('cartridges');

  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section className="relative min-w-[100vw] w-full min-h-[calc(100vh-100px)] flex flex-col justify-center px-4 sm:px-8 py-12">
      {/* Zone Header Badge */}
      <div className="max-w-6xl mx-auto w-full mb-6">
        <div className="flex items-center space-x-2 border-2 border-cyber-purple p-2 bg-slate-950/80 shadow-pixel inline-block">
          <span className="font-pixel text-[11px] text-cyber-purple">
            [ CHECKPOINT 04 : THE ARCADE & CODE LAB ]
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
              Mission Logs & Agent Loadout
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans mt-1">
              Select a project cartridge to mount into the arcade deck or inspect the full skill loadout.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-slate-900 border-2 border-slate-700 p-1 shadow-pixel">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('cartridges');
              }}
              className={`px-3 py-1.5 font-pixel text-xs transition-all ${
                activeTab === 'cartridges'
                  ? 'bg-cyber-purple text-white shadow-pixel font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              PROJECT CARTRIDGES ({projects.length})
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('loadout');
              }}
              className={`px-3 py-1.5 font-pixel text-xs transition-all ${
                activeTab === 'loadout'
                  ? 'bg-cyber-cyan text-slate-950 shadow-pixel font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              AGENT LOADOUT (SKILLS)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {activeTab === 'cartridges' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Cartridge Shelf */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-pixel text-slate-400 mb-2 flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5 text-cyber-purple" />
                INSERT CARTRIDGE:
              </div>

              {projects.map((project, idx) => {
                const isSelected = selectedProjectId === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={() => {
                      sound.playCoin();
                      setSelectedProjectId(project.id);
                    }}
                    className={`cursor-pointer p-3.5 border-2 transition-all shadow-pixel relative group ${
                      isSelected
                        ? 'bg-slate-900 border-cyber-purple shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                        : 'bg-slate-950/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* Cartridge notch icon */}
                        <div
                          className="w-8 h-8 flex items-center justify-center font-pixel text-xs text-black border border-black shadow-sm"
                          style={{ backgroundColor: project.cartridgeColor }}
                        >
                          0{idx + 1}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors">
                              {project.title}
                            </h4>
                            {project.featured && (
                              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            )}
                          </div>
                          <p className="font-mono text-[11px] text-slate-400 truncate max-w-[200px]">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-300">
                        {project.category}
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={() => {
                    sound.playCheckpoint();
                    onNextZone();
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-cyber-purple font-pixel text-xs border-2 border-cyber-purple shadow-pixel transition-all"
                >
                  <span>ADVANCE TO THE GUILD HALL</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Arcade Machine Screen & GitHub Link */}
            <div className="lg:col-span-7">
              <div className="glass-panel border-2 border-slate-700 p-5 sm:p-6 shadow-pixel space-y-5">
                {/* Cartridge Marquee */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
                  <div className="flex items-center space-x-3">
                    <PixelArcadeCabinet color={activeProject.cartridgeColor} />
                    <div>
                      <span className="text-[10px] font-pixel text-slate-400">CARTRIDGE MOUNTED:</span>
                      <h3 className="font-mono text-lg sm:text-xl font-bold text-white mt-0.5">
                        {activeProject.title}
                      </h3>
                      <p className="font-mono text-xs text-cyber-purple">
                        {activeProject.subtitle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playCoin()}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-cyber-cyan border-2 border-cyber-cyan shadow-pixel-cyan font-pixel text-xs transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW GITHUB REPO</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Verified Metrics Grid */}
                <div>
                  <div className="text-[10px] font-pixel text-slate-400 mb-2">BENCHMARK METRICS:</div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {activeProject.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 bg-slate-900/90 border border-slate-700 text-center">
                        <div className="font-pixel text-xs text-cyber-cyan font-bold">{m.value}</div>
                        <div className="font-mono text-[10px] text-slate-400 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Bullets */}
                <div>
                  <div className="text-[10px] font-pixel text-slate-400 mb-2">SYSTEM HIGHLIGHTS:</div>
                  <ul className="space-y-2">
                    {activeProject.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-cyber-purple mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="border-t border-slate-800 pt-3">
                  <div className="text-[10px] font-pixel text-slate-400 mb-2">TECH STACK:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-700 font-mono text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Agent Loadout Tab (Skills Grid) */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skills.map((categoryGroup, idx) => (
                <div
                  key={idx}
                  className="glass-panel border-2 border-slate-700 p-5 shadow-pixel space-y-4"
                >
                  <div className="flex items-center space-x-2.5 border-b border-slate-700/80 pb-3">
                    <span className="p-2 bg-slate-900 border border-slate-700">
                      <Cpu className="w-4 h-4 text-cyber-cyan" />
                    </span>
                    <h3 className="font-mono text-base font-bold text-white">
                      {categoryGroup.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-200 font-medium">{skill.name}</span>
                          <span className="text-slate-400 text-[11px]">{skill.note}</span>
                        </div>
                        {/* Retro progress bar */}
                        <div className="w-full h-2 bg-slate-900 border border-slate-700 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyber-cyan to-sky-400 transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-900 border-2 border-cyber-cyan/30 text-center font-mono text-xs text-slate-300 shadow-pixel">
              Note: Cleaned and filtered directly from verified CV metrics. Ready for immediate deployment in Data Science, Machine Learning, and AdTech Product teams.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

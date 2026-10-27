import React, { useState } from 'react';
import { Shield, Heart, Users, Sparkles, ChevronRight, CheckCircle2, Award, Flame, ExternalLink } from 'lucide-react';
import { FacebookIcon } from '../icons/BrandIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';
import { PixelBloodDonorBadge } from '../pixel/PixelSprites';
import { sound } from '../../utils/audio';

interface Zone5Props {
  onNextZone: () => void;
}

export const Zone5GuildHall: React.FC<Zone5Props> = ({ onNextZone }) => {
  const { community } = portfolioData;

  const triggerConfetti = () => {
    sound.playCheckpoint();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4655', '#f59e0b', '#00f5d4', '#ffffff'],
    });
  };

  return (
    <section className="relative min-w-[100vw] w-full min-h-[calc(100vh-100px)] flex flex-col justify-center px-4 sm:px-8 py-12">
      {/* Zone Header Badge */}
      <div className="max-w-6xl mx-auto w-full mb-6">
        <div className="flex items-center space-x-2 border-2 border-amber-500 p-2 bg-slate-950/80 shadow-pixel-gold inline-block">
          <span className="font-pixel text-[11px] text-amber-400">
            [ CHECKPOINT 05 : THE GUILD HALL ]
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono mt-3">
          Community, Leadership & Social Impact
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans mt-1">
          Real-world leadership beyond code: blood donation drives, flood/winter relief, and teaching underprivileged kids.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 20x Blood Donor Honor Showcase */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel border-2 border-red-500/60 p-6 shadow-pixel-red text-center space-y-4">
            <div className="inline-block cursor-pointer transform hover:scale-110 transition-transform" onClick={triggerConfetti}>
              <PixelBloodDonorBadge />
            </div>

            <div>
              <span className="font-pixel text-[10px] text-red-400 tracking-wider">
                LEGENDARY BADGE UNLOCKED
              </span>
              <h3 className="font-mono text-xl font-bold text-white mt-1">
                20x Blood Donor & Lifesaver
              </h3>
              <p className="font-sans text-xs text-slate-300 mt-2 leading-relaxed">
                Personally stepped up during critical hospital emergencies 20 times. Architected a 350+ person emergency blood donor database for rapid dispatch.
              </p>
            </div>

            <button
              onClick={triggerConfetti}
              className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white font-pixel text-[11px] border-2 border-black shadow-pixel transition-all flex items-center justify-center space-x-2"
            >
              <Heart className="w-4 h-4 text-white fill-white" />
              <span>TAP TO CELEBRATE 20 DONATIONS 🎉</span>
            </button>

            {/* Real Blood Donation Campaign Photo */}
            {community[0].image && (
              <div className="w-full rounded-none border border-slate-700 overflow-hidden bg-slate-950 relative group">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={community[0].image}
                    alt="Blood Donation Campaign"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1.5 left-2 right-2 bg-slate-950/85 px-2 py-0.5 text-[9px] font-mono text-slate-300 border border-slate-800 text-left">
                    🩸 Puthia Blood Group Testing & Awareness Campaign
                  </div>
                </div>

                {community[0].facebookUrl && (
                  <div className="p-2 bg-slate-900 border-t border-slate-800">
                    <a
                      href={community[0].facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playClick()}
                      className="inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 bg-[#1877f2] hover:bg-[#1567d3] text-white font-mono text-[10px] font-bold shadow-pixel transition-colors w-full"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                      <span>View Official Blood Campaign Post</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Impact Numbers */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 font-mono text-center">
              <div className="p-2 bg-slate-900 border border-slate-800">
                <div className="text-sm font-bold text-red-400">20x</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Donations</div>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800">
                <div className="text-sm font-bold text-amber-400">350+</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Database</div>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800">
                <div className="text-sm font-bold text-emerald-400">100%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Voluntary</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playCheckpoint();
              onNextZone();
            }}
            className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-amber-400 font-pixel text-xs border-2 border-amber-500 shadow-pixel transition-all"
          >
            <span>ADVANCE TO SAFE HOUSE & SIDE QUESTS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column: Nissorgo Foundation & Project Srijon */}
        <div className="lg:col-span-7 space-y-4">
          {community.slice(1).map((item) => (
            <div
              key={item.id}
              className="glass-panel border-2 border-slate-700 p-5 sm:p-6 shadow-pixel space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
                <div className="flex items-center space-x-2.5">
                  <span className="p-2 bg-slate-900 border border-slate-700">
                    {item.id === 'nissorgo' ? (
                      <Users className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-cyber-cyan" />
                    )}
                  </span>
                  <div>
                    <h3 className="font-mono text-base sm:text-lg font-bold text-white">
                      {item.organization}
                    </h3>
                    <p className="font-mono text-xs text-slate-400">
                      {item.role} • {item.period}
                    </p>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className="px-2 py-0.5 font-pixel text-[10px] border shadow-pixel"
                    style={{
                      borderColor: item.badgeColor || '#00f5d4',
                      color: item.badgeColor || '#00f5d4',
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Photo Showcase (Single or Gallery) */}
              {item.gallery && item.gallery.length > 1 ? (
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.gallery.slice(0, 2).map((imgUrl, gIdx) => {
                      const isCert = imgUrl.toLowerCase().includes('certificate');
                      const caption = item.galleryCaptions?.[gIdx] || (
                        gIdx === 0
                          ? `📸 ${item.organization} Showcase #1`
                          : `📸 ${item.organization} Showcase #2`
                      );
                      return (
                        <div
                          key={gIdx}
                          className="h-44 sm:h-52 border border-slate-700 overflow-hidden bg-slate-950 relative group cursor-pointer"
                          onClick={() => window.open(imgUrl, '_blank')}
                          title="Click to view full image in new tab"
                        >
                          <img
                            src={imgUrl}
                            alt={caption}
                            className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                              isCert ? 'object-contain bg-slate-950 p-1' : 'object-cover'
                            }`}
                          />
                          <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-cyber-cyan border border-cyber-cyan/40 px-1.5 py-0.5 text-[9px] font-mono rounded flex items-center space-x-1">
                            <ExternalLink className="w-2.5 h-2.5" />
                            <span>Full View</span>
                          </div>
                          <div className="absolute bottom-1.5 inset-x-1.5 bg-slate-950/90 px-2 py-0.5 text-[9px] font-mono text-slate-200 border border-slate-800 truncate flex items-center justify-between">
                            <span className="truncate">{caption}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Links / Post Links */}
                  <div className="flex flex-wrap gap-2 justify-end pt-1">
                    {item.facebookPosts ? (
                      item.facebookPosts.map((post, pIdx) => (
                        <a
                          key={pIdx}
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sound.playClick()}
                          className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#1877f2] hover:bg-[#1567d3] text-white font-mono text-[10px] font-bold shadow-pixel transition-colors"
                        >
                          <FacebookIcon className="w-3.5 h-3.5" />
                          <span>{post.label}</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      ))
                    ) : item.facebookUrl ? (
                      <a
                        href={item.facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => sound.playClick()}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#1877f2] hover:bg-[#1567d3] text-white font-mono text-[10px] font-bold shadow-pixel transition-colors"
                      >
                        <FacebookIcon className="w-3.5 h-3.5" />
                        <span>View Official Facebook Post</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    ) : item.id === 'srijon' ? (
                      <a
                        href={item.image || '/images/community/srijon-certificate.jpg'}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => sound.playClick()}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 bg-slate-900 hover:bg-slate-800 text-cyber-cyan border border-cyber-cyan/50 font-mono text-[10px] font-bold shadow-pixel transition-colors"
                      >
                        <Award className="w-3.5 h-3.5 text-cyber-cyan" />
                        <span>View Official Certificate (Full Res)</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : item.image ? (
                <div className="w-full h-44 sm:h-56 rounded-none border border-slate-700 overflow-hidden bg-slate-950 relative group">
                  <img
                    src={item.image}
                    alt={item.organization}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <span className="bg-slate-950/85 px-2 py-0.5 text-[9px] font-mono text-slate-300 border border-slate-700">
                      📸 {item.organization} Field Photo
                    </span>
                    {item.facebookUrl && (
                      <a
                        href={item.facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => sound.playClick()}
                        className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-[#1877f2] hover:bg-[#1567d3] text-white font-mono text-[10px] font-bold shadow-pixel transition-colors"
                      >
                        <FacebookIcon className="w-3.5 h-3.5" />
                        <span>View Facebook Post</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              ) : null}

              {/* If no image but Facebook link is attached */}
              {!item.image && item.facebookUrl && (
                <div className="flex justify-end">
                  <a
                    href={item.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#1877f2]/20 hover:bg-[#1877f2]/30 text-[#1877f2] border border-[#1877f2]/50 font-mono text-xs transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>View Official Facebook Post</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>
              )}

              {/* Impact Numbers Grid */}
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                {item.impactNumbers.map((impact, idx) => (
                  <div key={idx} className="p-2 bg-slate-900/90 border border-slate-700">
                    <div className="font-pixel text-xs text-cyber-cyan font-bold">{impact.value}</div>
                    <div className="font-mono text-[10px] text-slate-400 mt-1">{impact.label}</div>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <ul className="space-y-2">
                {item.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

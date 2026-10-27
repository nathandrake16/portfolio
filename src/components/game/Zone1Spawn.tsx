import React from 'react';
import { ArrowRight, Download, Mail, Phone, Flame, Sparkles, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { portfolioData } from '../../data/portfolioData';
import { PixelAvatar } from '../pixel/PixelSprites';
import { sound } from '../../utils/audio';

interface Zone1Props {
  onNextZone: () => void;
}

export const Zone1Spawn: React.FC<Zone1Props> = ({ onNextZone }) => {
  const { personal, education } = portfolioData;
  const bracuEdu = education[0];
  const [viewMode, setViewMode] = React.useState<'photo' | 'pixel'>('photo');
  const [photoError, setPhotoError] = React.useState(false);

  return (
    <section className="relative min-w-[100vw] w-full min-h-[calc(100vh-100px)] flex flex-col justify-center px-4 sm:px-8 py-12">
      {/* Background Neon Sign */}
      <div className="absolute top-8 left-6 sm:left-12 opacity-80 pointer-events-none">
        <div className="border-2 border-cyber-cyan p-2 bg-slate-950/80 shadow-pixel-cyan inline-block">
          <span className="font-pixel text-[11px] text-cyber-cyan animate-pulse">
            [ CHECKPOINT 01 : SPAWN POINT ]
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        {/* Left Column: Mission Briefing & Headlines */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-900 border border-cyber-cyan shadow-pixel">
            <span className="w-2 h-2 bg-cyber-cyan rounded-none animate-ping" />
            <span className="font-mono text-xs text-cyber-cyan font-semibold uppercase tracking-wider">
              {personal.status}
            </span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight leading-tight">
              Hi, I'm <span className="text-cyber-cyan text-glow-cyan">{personal.name}</span>.
              <br />
              <span className="font-pixel text-xl sm:text-3xl text-cyber-red mt-2 block">
                ALWAYS ON THE RUN.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
              {personal.subHeadline}
            </p>
          </div>

          {/* HUD Stats Box */}
          <div className="glass-panel-cyan p-4 sm:p-5 border-2 border-cyber-cyan/50 shadow-pixel space-y-3">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2">
              <span className="font-pixel text-[10px] text-cyber-cyan flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
                PILOT HUD METRICS
              </span>
              <span className="font-mono text-xs text-amber-400 font-bold">
                CLASS OF 2026
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-slate-900/80 p-2.5 border border-slate-700">
                <div className="text-slate-400 text-[11px]">Primary Institution</div>
                <div className="text-white font-bold mt-0.5">{bracuEdu.institution}</div>
                <div className="text-amber-400 font-semibold text-[11px] mt-1">
                  CGPA: {bracuEdu.score} (Merit Scholar)
                </div>
              </div>

              <div className="bg-slate-900/80 p-2.5 border border-slate-700">
                <div className="text-slate-400 text-[11px]">Current Mission</div>
                <div className="text-cyber-cyan font-bold mt-0.5">AdTech Product Intern</div>
                <div className="text-slate-300 text-[11px] mt-1">@ Grameenphone</div>
              </div>
            </div>

            {/* Honours Ribbon */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400 inline shrink-0" />
              <span className="bg-amber-950/40 text-amber-300 px-2 py-0.5 border border-amber-600/40">
                VC's List 6x
              </span>
              <span className="bg-amber-950/40 text-amber-300 px-2 py-0.5 border border-amber-600/40">
                Dean's List 3x
              </span>
              <span className="bg-amber-950/40 text-amber-300 px-2 py-0.5 border border-amber-600/40">
                50% Tuition Scholarship
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                sound.playRev();
                onNextZone();
              }}
              className="inline-flex items-center space-x-2 px-5 py-3 bg-cyber-cyan hover:bg-cyan-300 text-slate-950 font-pixel text-xs border-2 border-black shadow-pixel-cyan transition-all transform active:translate-y-1"
            >
              <span>START RUN (SCROLL / →)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={personal.cvPdfUrl}
              download="MD_Shahadat_Hossain_Main.pdf"
              onClick={() => sound.playCoin()}
              className="inline-flex items-center space-x-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-pixel text-xs border-2 border-slate-600 shadow-pixel transition-all"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>DOWNLOAD CV</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center space-x-3 pt-2 text-slate-400">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Comm Links:</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 bg-slate-900 hover:text-cyber-cyan border border-slate-700 hover:border-cyber-cyan transition-all shadow-pixel"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 bg-slate-900 hover:text-cyber-cyan border border-slate-700 hover:border-cyber-cyan transition-all shadow-pixel"
              title="GitHub: nathandrake16"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              onClick={() => sound.playClick()}
              className="p-2 bg-slate-900 hover:text-cyber-cyan border border-slate-700 hover:border-cyber-cyan transition-all shadow-pixel"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personal.phone}`}
              onClick={() => sound.playClick()}
              className="p-2 bg-slate-900 hover:text-cyber-cyan border border-slate-700 hover:border-cyber-cyan transition-all shadow-pixel"
              title="Phone Contact"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Stage with Photo & Motorcycle */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-slate-700 p-6 shadow-pixel">
            {/* View Mode Switcher */}
            <div className="flex justify-between items-center mb-5 border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-cyber-red animate-pulse" />
                <span className="font-pixel text-[10px] text-cyber-cyan">PILOT ID & AVATAR</span>
              </div>
              
              <div className="flex bg-slate-950 border border-slate-700 p-0.5">
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode('photo');
                  }}
                  className={`px-2 py-1 font-pixel text-[9px] transition-all ${
                    viewMode === 'photo'
                      ? 'bg-cyber-cyan text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PHOTO
                </button>
                <button
                  onClick={() => {
                    sound.playRev();
                    setViewMode('pixel');
                  }}
                  className={`px-2 py-1 font-pixel text-[9px] transition-all ${
                    viewMode === 'pixel'
                      ? 'bg-cyber-red text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PIXEL RIDER
                </button>
              </div>
            </div>

            {/* Display Area: Either High-Res Pilot Photo or Pixel Bike Animation */}
            {viewMode === 'photo' ? (
              <div className="relative py-3 flex flex-col items-center justify-center bg-slate-950/80 border border-slate-800 overflow-hidden">
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 border-2 border-cyber-cyan shadow-[0_0_20px_rgba(0,245,212,0.3)] overflow-hidden bg-slate-900">
                  {!photoError ? (
                    <img
                      src={personal.avatarPhoto}
                      alt={personal.fullName}
                      className="w-full h-full object-cover object-top"
                      onError={() => setPhotoError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                      <span className="font-pixel text-xs text-cyber-cyan">SHAHADAT</span>
                      <p className="text-[10px] font-mono text-slate-400 mt-2">Place photo in public/images/shahadat.jpg</p>
                    </div>
                  )}

                  {/* Corner Target Accents */}
                  <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyber-cyan" />
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyber-cyan" />
                  <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyber-cyan" />
                  <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-cyber-cyan" />

                  {/* Overlay Name Strip */}
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 backdrop-blur-sm border-t border-cyber-cyan/50 py-1.5 px-2 text-center">
                    <span className="font-pixel text-[9px] text-white">PILOT: {personal.fullName.toUpperCase()}</span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[10px] font-mono text-slate-400">
                    STATUS: <span className="text-emerald-400 font-bold">READY TO RUN</span>
                  </span>
                </div>
              </div>
            ) : (
              /* Pixel Scene Illustration */
              <div className="relative py-8 flex flex-col items-center justify-center bg-slate-950/70 border border-slate-800/80 overflow-hidden">
                {/* Neon Backdrop Light */}
                <div className="absolute top-4 w-32 h-1 bg-cyber-cyan shadow-[0_0_15px_#00f5d4] opacity-80" />
                
                {/* Avatar on Motorcycle */}
                <div
                  className="cursor-pointer group transform hover:scale-105 transition-transform"
                  onClick={() => sound.playRev()}
                  title="Click to rev engine!"
                >
                  <PixelAvatar vehicle="bike" isMoving={true} />
                </div>

                {/* Road Markings under bike */}
                <div className="w-48 h-1 bg-slate-800 mt-4 border-b border-cyber-cyan/40" />

                <div className="mt-4 text-center">
                  <span className="text-[10px] font-pixel text-slate-400 group-hover:text-cyber-cyan transition-colors">
                    [ CLICK BIKE TO REV ENGINE ]
                  </span>
                </div>
              </div>
            )}

            {/* Mini Stat Readouts */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-center font-mono">
              <div className="p-2 bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">AGILITY</div>
                <div className="text-xs font-bold text-cyber-cyan">MAX</div>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">AI / ML</div>
                <div className="text-xs font-bold text-cyber-red">PRO</div>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">PRODUCT</div>
                <div className="text-xs font-bold text-amber-400">LEADER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

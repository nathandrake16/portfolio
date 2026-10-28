import React, { useState } from 'react';
import { 
  Coffee, 
  Bike, 
  BookOpen, 
  Crosshair, 
  Camera, 
  ChevronRight, 
  Sparkles, 
  Quote, 
  RotateCw, 
  Play, 
  Volume2, 
  Trophy,
  ExternalLink,
  Image as ImageIcon 
} from 'lucide-react';
import { FacebookIcon } from '../icons/BrandIcons';
import { portfolioData } from '../../data/portfolioData';
import { PixelAvatar } from '../pixel/PixelSprites';
import { sound } from '../../utils/audio';

interface Zone6Props {
  onNextZone: () => void;
}

export const Zone6SafeHouse: React.FC<Zone6Props> = ({ onNextZone }) => {
  const { hobbies } = portfolioData;
  const [selectedHobbyId, setSelectedHobbyId] = useState<string>(hobbies[0].id);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [videoRotation, setVideoRotation] = useState<number>(90);
  const [imgError, setImgError] = useState<boolean>(false);

  const activeHobby = hobbies.find((h) => h.id === selectedHobbyId) || hobbies[0];
  const activeGallery = activeHobby.gallery && activeHobby.gallery.length > 0 ? activeHobby.gallery : [activeHobby.image];
  const currentPhoto = activeGallery[photoIndex] || activeHobby.image;

  const handleSelectHobby = (id: string) => {
    sound.playClick();
    setSelectedHobbyId((prev) => (prev === id ? '' : id));
    setPhotoIndex(0);
    setImgError(false);
    const item = hobbies.find((h) => h.id === id);
    if (item && item.videoRotation !== undefined) {
      setVideoRotation(item.videoRotation);
    }
  };

  const handleRotateVideo = () => {
    sound.playClick();
    setVideoRotation((prev) => (prev + 90) % 360);
  };

  const getHobbyIcon = (id: string) => {
    switch (id) {
      case 'bike-trips':
        return <Bike className="w-5 h-5 text-cyber-cyan" />;
      case 'skating':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'fps-gaming':
        return <Crosshair className="w-5 h-5 text-cyber-red" />;
      case 'tin-goyenda':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'food-photography':
        return <Camera className="w-5 h-5 text-sky-400" />;
      default:
        return <Coffee className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  const renderHobbyDetails = (hobby: typeof activeHobby) => {
    const hobbyGallery = hobby.gallery && hobby.gallery.length > 0 ? hobby.gallery : (hobby.image ? [hobby.image] : []);
    const photoToDisplay = hobbyGallery[photoIndex] || hobby.image;

    return (
      <div className="glass-panel border-2 border-slate-700 p-4 sm:p-6 shadow-pixel space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
          <div className="flex items-center space-x-3">
            <span className="p-2 bg-slate-900 border border-slate-700">
              {getHobbyIcon(hobby.id)}
            </span>
            <div>
              <h3 className="font-mono text-base sm:text-xl font-bold text-white">
                {hobby.title}
              </h3>
              <p className="font-mono text-xs text-emerald-400">
                {hobby.subtitle} • [{hobby.tag}]
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-block px-2.5 py-1 bg-slate-900 border border-slate-700 font-mono text-xs text-slate-300">
            Safe House Archive
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          {hobby.description}
        </p>

        {/* Quote Card */}
        {hobby.quote && (
          <div className="p-2.5 sm:p-3 bg-slate-900/90 border-l-4 border-emerald-400 font-mono text-xs text-slate-200 flex items-start space-x-2">
            <Quote className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="italic">{hobby.quote}</span>
          </div>
        )}

        {/* Stats Breakdown */}
        {hobby.stats && (
          <div>
            <div className="text-[9px] sm:text-[10px] font-pixel text-slate-400 mb-1.5">FIELD ATTRIBUTES:</div>
            <div className="grid grid-cols-3 gap-2">
              {hobby.stats.map((stat, idx) => (
                <div key={idx} className="p-2 sm:p-2.5 bg-slate-900/90 border border-slate-700 text-center">
                  <div className="font-mono text-[9px] sm:text-[10px] text-slate-400">{stat.label}</div>
                  <div className="font-mono text-[11px] sm:text-xs text-white font-bold mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MEDIA SECTION: VIDEO PLAYER (SKATING) OR POLAROID PHOTOS */}
        {/* ======================================================== */}
        {hobby.video ? (
          /* Video Player with Rotation Controls */
          <div className="border-2 border-slate-700 p-3 sm:p-4 bg-slate-950/90 rounded-none shadow-pixel space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center space-x-2 font-mono text-xs text-emerald-400 font-bold">
                <Play className="w-4 h-4 text-emerald-400" />
                <span>SKATING PRACTICE CLIP</span>
              </div>

              <button
                onClick={handleRotateVideo}
                className="flex items-center space-x-1.5 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-cyber-cyan border border-cyber-cyan/50 text-[11px] font-mono transition-all shadow-pixel"
                title="Click to rotate video orientation"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Rotate View ({videoRotation}°)</span>
              </button>
            </div>

            {/* Video Frame */}
            <div className="relative w-full h-72 sm:h-96 bg-black border border-slate-700 flex items-center justify-center overflow-hidden">
              <video
                src={hobby.video}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full max-h-full transition-transform duration-300"
                style={{
                  transform: `rotate(${videoRotation}deg) ${
                    videoRotation % 180 !== 0 ? 'scale(1.2)' : 'scale(1)'
                  }`,
                }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
              <span>📹 Captured on campus road</span>
              <span className="text-emerald-400">Click Rotate if needed</span>
            </div>
          </div>
        ) : (
          /* Photo Showcase (Bike Trips & Other Hobbies) */
          <div className="border-2 border-slate-700 p-3 sm:p-4 bg-slate-950/90 rounded-none shadow-pixel space-y-3">
            {hobby.id === 'bike-trips' && hobby.gallery ? (
              /* Dual Polaroid Gallery for Dhaka ➔ Sreemangal Expedition */
              <div className="space-y-3">
                <div className="text-xs font-pixel text-cyber-cyan flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    DHAKA ➔ SREEMANGAL PHOTOS (2 SHOTS):
                  </div>
                  <span className="text-slate-400 font-mono text-[10px] sm:text-[11px]">~190 km</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Shot 1: Blue Honda Bike */}
                  <div className="bg-slate-100 p-2.5 pb-3 text-slate-900 shadow-pixel transform hover:rotate-1 transition-transform">
                    <div className="w-full h-44 sm:h-52 bg-slate-900 border border-slate-300 overflow-hidden">
                      <img
                        src={hobby.gallery[0]}
                        alt="Shahadat on Blue Honda Bike in Sreemangal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 text-center font-mono text-xs font-bold text-slate-900">
                      🏍️ Blue Honda @ Sreemangal
                    </div>
                    <div className="text-[10px] text-center font-mono text-slate-600">
                      Tea garden highway stop
                    </div>
                  </div>

                  {/* Shot 2: Baikka Beel Permanent Fish Sanctuary Sign */}
                  <div className="bg-slate-100 p-2.5 pb-3 text-slate-900 shadow-pixel transform hover:-rotate-1 transition-transform">
                    <div className="w-full h-44 sm:h-52 bg-slate-900 border border-slate-300 overflow-hidden">
                      <img
                        src={hobby.gallery[1]}
                        alt="Baikka Beel Permanent Fish Sanctuary in Sreemangal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 text-center font-mono text-xs font-bold text-slate-900">
                      📍 Baikka Beel Fish Sanctuary
                    </div>
                    <div className="text-[10px] text-center font-mono text-slate-600">
                      Sreemangal, Moulvibazar
                    </div>
                  </div>
                </div>
              </div>
            ) : hobby.id === 'fps-gaming' ? (
              /* Dedicated Esports & Valorant Showcase */
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="font-pixel text-[11px] sm:text-xs text-amber-400">
                      1ST RUNNERS-UP • COLOSSEUM 1.0 (BRACU)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-purple-950 text-purple-300 border border-purple-500 font-pixel text-[9px] sm:text-[10px]">
                    PEAK: IMMORTAL
                  </span>
                </div>

                {/* Official Tournament Graphic */}
                <div className="w-full rounded border-2 border-purple-500/60 overflow-hidden bg-slate-950 shadow-[0_0_20px_rgba(168,85,247,0.25)] group">
                  <img
                    src={hobby.image || '/images/hobbies/valorant.jpg'}
                    alt="Colosseum 1.0 - Arcane ES 1st Runners-Up"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Details Strip & Facebook Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1">
                  <div className="text-xs font-mono text-slate-300 text-center sm:text-left">
                    <span className="text-cyber-cyan font-bold">Team: Arcane ES</span> • IGN: <span className="text-amber-400 font-bold">MSS NATHANDRAKEA</span>
                  </div>

                  {hobby.facebookUrl && (
                    <a
                      href={hobby.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playClick()}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#1877f2] hover:bg-[#1567d3] text-white font-mono text-[11px] sm:text-xs font-bold shadow-pixel transition-colors shrink-0"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                      <span>View Official Tournament Post</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              /* Standard Polaroid View */
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-56 sm:w-64 bg-slate-100 p-3 pb-6 text-slate-900 shadow-pixel transform -rotate-1 hover:rotate-0 transition-transform shrink-0">
                  <div className="w-full h-44 sm:h-52 bg-slate-900 border border-slate-300 overflow-hidden relative">
                    {photoToDisplay && !imgError ? (
                      <img
                        key={photoToDisplay}
                        src={photoToDisplay}
                        alt={hobby.title}
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-slate-900 text-slate-400">
                        <ImageIcon className="w-8 h-8 text-emerald-400 mb-1" />
                        <span className="text-[10px] font-mono">{hobby.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-center font-mono text-[11px] font-bold tracking-tight text-slate-800">
                    {hobby.subtitle}
                  </div>
                </div>

                <div className="flex-1 space-y-2 text-xs font-mono">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    HOBBY ARCHIVE
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">
                    {hobby.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="relative min-w-[100vw] w-full min-h-[calc(100vh-100px)] flex flex-col justify-center px-4 sm:px-8 py-12">
      {/* Zone Header Badge */}
      <div className="max-w-6xl mx-auto w-full mb-6">
        <div className="flex items-center space-x-2 border-2 border-emerald-500 p-2 bg-slate-950/80 shadow-pixel inline-block">
          <span className="font-pixel text-[11px] text-emerald-400">
            [ CHECKPOINT 06 : SIDE QUESTS & SAFE HOUSE ]
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
              Life Outside Tech: Wheels, Lore & Reflexes
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans mt-1">
              Switching to skateboard & highway touring — tea gardens, asphalt cruising, and personal lore.
            </p>
          </div>

          {/* Skater Avatar Badge */}
          <div className="hidden md:flex items-center space-x-3 px-3 py-2 bg-slate-900 border border-slate-700 shadow-pixel">
            <PixelAvatar vehicle="skateboard" isMoving={true} />
            <div className="text-left font-mono">
              <div className="text-[10px] text-emerald-400 font-bold">MODE: SKATER</div>
              <div className="text-[11px] text-slate-300">Cruising Safe House</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Side Quest Pills */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-pixel text-slate-400 mb-2 flex items-center gap-1.5">
            <Coffee className="w-3.5 h-3.5 text-emerald-400" />
            SELECT HOBBY & SIDE QUEST:
          </div>

          {hobbies.map((hobby) => {
            const isSelected = selectedHobbyId === hobby.id;
            return (
              <div key={hobby.id} className="space-y-3">
                <div
                  onClick={() => handleSelectHobby(hobby.id)}
                  className={`cursor-pointer p-3.5 border-2 transition-all shadow-pixel ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                      : 'bg-slate-950/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-950 border border-slate-700">
                        {getHobbyIcon(hobby.id)}
                      </div>
                      <div>
                        <h4 className="font-mono text-sm font-bold text-white">
                          {hobby.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-400">
                          {hobby.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 border border-slate-700 text-emerald-400">
                        {hobby.tag}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected ? 'text-emerald-400 rotate-90' : 'text-slate-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Inline Expansion: Appears directly down under clicked hobby */}
                {isSelected && (
                  <div className="lg:hidden">
                    {renderHobbyDetails(hobby)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Media Display (Photos / Videos) & Lore (Desktop View) */}
        <div className="hidden lg:block lg:col-span-7">
          {renderHobbyDetails(activeHobby)}
        </div>
      </div>

      {/* Advance Checkpoint Button (Always at bottom of section) */}
      <div className="max-w-6xl mx-auto w-full pt-6">
        <button
          onClick={() => {
            sound.playCheckpoint();
            onNextZone();
          }}
          className="w-full sm:w-auto sm:min-w-[340px] inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-pixel text-xs border-2 border-emerald-400 shadow-pixel hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
        >
          <span>ADVANCE TO FINAL EXTRACTION POINT</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

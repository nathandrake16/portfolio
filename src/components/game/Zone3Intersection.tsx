import React, { useState, useEffect } from 'react';
import { Cpu, AlertTriangle, Play, RefreshCw, CheckCircle2, ChevronRight, Activity, Car, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { PixelTrafficLight } from '../pixel/PixelSprites';
import { sound } from '../../utils/audio';

interface Zone3Props {
  onNextZone: () => void;
}

export const Zone3Intersection: React.FC<Zone3Props> = ({ onNextZone }) => {
  const { thesis } = portfolioData;

  // Interactive Simulator State
  const [lightPhase, setLightPhase] = useState<'red' | 'yellow' | 'green'>('green');
  const [anomalyActive, setAnomalyActive] = useState<boolean>(false);
  const [carsPassing, setCarsPassing] = useState<number>(42);
  const [queueLength, setQueueLength] = useState<number>(14);
  const [controllerScore, setControllerScore] = useState<number>(94);

  // Auto cycle traffic lights
  useEffect(() => {
    const timer = setInterval(() => {
      setLightPhase((prev) => {
        if (prev === 'green') return 'yellow';
        if (prev === 'yellow') return 'red';
        return 'green';
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Handle Anomaly Toggle
  const toggleAnomaly = () => {
    sound.playAnomaly();
    const nextState = !anomalyActive;
    setAnomalyActive(nextState);

    if (nextState) {
      // Disruption activated: queue temporarily increases then RL stabilizes
      setQueueLength(28);
      setCarsPassing(24);
      setControllerScore(88);
    } else {
      // Return to baseline
      setQueueLength(12);
      setCarsPassing(46);
      setControllerScore(96);
    }
  };

  return (
    <section className="relative min-w-[100vw] w-full min-h-[calc(100vh-100px)] flex flex-col justify-center px-4 sm:px-8 py-12">
      {/* Zone Header Badge */}
      <div className="max-w-6xl mx-auto w-full mb-6">
        <div className="flex items-center space-x-2 border-2 border-cyber-red p-2 bg-slate-950/80 shadow-pixel-red inline-block">
          <span className="font-pixel text-[11px] text-cyber-red">
            [ CHECKPOINT 03 : GULSHAN-2 SMART INTERSECTION ]
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono mt-3">
          Deep Reinforcement Learning & Urban Mobility Lab
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans mt-1">
          Undergraduate Thesis: SUMO Microscopic Traffic Simulation calibrated on Dhaka's Gulshan-2 Roundabout.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Simulation Console */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel-red border-2 border-cyber-red/50 p-5 shadow-pixel space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2">
              <span className="font-pixel text-[10px] text-cyber-red flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyber-red" />
                SUMO REAL-TIME CONTROLLER
              </span>
              <span className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-none animate-ping" />
                AGENT ONLINE
              </span>
            </div>

            {/* Interactive Street Visualization */}
            <div className="relative bg-slate-950 border-2 border-slate-800 p-4 overflow-hidden">
              {/* Traffic light display */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <PixelTrafficLight phase={lightPhase} size={0.9} />
                  <div>
                    <div className="font-pixel text-[10px] text-slate-400">SIGNAL PHASE</div>
                    <div className={`font-mono text-sm font-bold uppercase mt-0.5 ${
                      lightPhase === 'green' ? 'text-emerald-400' : lightPhase === 'yellow' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {lightPhase === 'green' ? '🟢 Dynamic Green (RL Phase)' : lightPhase === 'yellow' ? '🟡 Transition Phase' : '🔴 Clearance Red'}
                    </div>
                    <div className="font-mono text-[11px] text-slate-500 mt-0.5">
                      Target: Gulshan-2 North/South Corridor
                    </div>
                  </div>
                </div>

                {/* Manually trigger green light */}
                <button
                  onClick={() => {
                    sound.playCoin();
                    setLightPhase('green');
                  }}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-700 hover:border-cyber-cyan text-[10px] font-pixel text-slate-300"
                >
                  FORCE GREEN
                </button>
              </div>

              {/* Road Lane with Cars */}
              <div className="relative mt-4 h-14 bg-slate-900 border-y border-dashed border-slate-700 flex items-center px-2 space-x-3 overflow-hidden">
                <Car className="w-6 h-6 text-cyber-cyan animate-pulse" />
                <Car className="w-6 h-6 text-amber-400" />
                <Car className="w-6 h-6 text-slate-500" />
                {anomalyActive && (
                  <div className="flex items-center space-x-1 px-2 py-0.5 bg-red-950/80 border border-red-500 text-red-300 font-pixel text-[8px] animate-bounce">
                    <AlertTriangle className="w-3 h-3 text-red-500 inline mr-1" />
                    POTHOLE + JAYWALKER!
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Anomaly Stress Button */}
            <button
              onClick={toggleAnomaly}
              className={`w-full py-3 px-4 font-pixel text-xs border-2 shadow-pixel transition-all flex items-center justify-center space-x-2 ${
                anomalyActive
                  ? 'bg-red-600 hover:bg-red-500 text-white border-red-900 shadow-pixel-red'
                  : 'bg-slate-900 hover:bg-slate-800 text-cyber-red border-cyber-red/80'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>
                {anomalyActive
                  ? 'ANOMALY ACTIVE: POTHOLES + JAYWALKING'
                  : 'TEST ROBUSTNESS: INJECT ANOMALY'}
              </span>
            </button>

            {/* Live Controller Telemetry */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              <div className="bg-slate-900 p-2.5 border border-slate-800">
                <div className="text-[10px] text-slate-400">FLOW RATE</div>
                <div className="text-sm font-bold text-cyber-cyan mt-0.5">{carsPassing} vpm</div>
              </div>
              <div className="bg-slate-900 p-2.5 border border-slate-800">
                <div className="text-[10px] text-slate-400">QUEUE DELAY</div>
                <div className={`text-sm font-bold mt-0.5 ${queueLength > 20 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {queueLength} vehicles
                </div>
              </div>
              <div className="bg-slate-900 p-2.5 border border-slate-800">
                <div className="text-[10px] text-slate-400">RL EFFICIENCY</div>
                <div className="text-sm font-bold text-amber-400 mt-0.5">{controllerScore}%</div>
              </div>
            </div>

            <p className="text-[11px] font-sans text-slate-400 italic">
              Notice: The RL controller reallocates green-time dynamically to bottlenecked lanes, preventing catastrophic gridlock even under unexpected road disruptions.
            </p>
          </div>

          <button
            onClick={() => {
              sound.playCheckpoint();
              onNextZone();
            }}
            className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-cyber-red font-pixel text-xs border-2 border-cyber-red shadow-pixel transition-all"
          >
            <span>NEXT: ENTER THE ARCADE & CODE LAB</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column: Academic Paper Breakdown */}
        <div className="lg:col-span-7">
          <div className="glass-panel border-2 border-slate-700 p-5 sm:p-6 shadow-pixel space-y-5">
            {/* Thesis Title Header */}
            <div className="border-b border-slate-700/80 pb-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-cyber-red mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FEATURED THESIS RESEARCH • {thesis.institution}</span>
              </div>
              <h3 className="font-mono text-base sm:text-xl font-bold text-white leading-snug">
                {thesis.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {thesis.overview}
              </p>
            </div>

            {/* Research Metrics Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {thesis.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-slate-900/90 border border-slate-700 text-center">
                  <div className="font-pixel text-[11px] text-cyber-cyan font-bold">{m.value}</div>
                  <div className="font-mono text-[10px] text-slate-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Key Contributions & Methodology */}
            <div>
              <div className="text-[11px] font-pixel text-slate-400 mb-2">
                CORE CONTRIBUTIONS & METHODOLOGY:
              </div>
              <ul className="space-y-2">
                {thesis.methodology.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyber-red mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="border-t border-slate-800 pt-3">
              <div className="text-[10px] font-pixel text-slate-400 mb-2">
                RESEARCH TOOLCHAIN:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {thesis.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-700 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

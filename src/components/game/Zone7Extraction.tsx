import React, { useState } from 'react';
import { Radio, Mail, Phone, Download, Copy, Check, Send, RotateCcw, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';
import { sound } from '../../utils/audio';
import { VisitorBadge } from '../VisitorBadge';

interface Zone7Props {
  onRestartRun: () => void;
}

export const Zone7Extraction: React.FC<Zone7Props> = ({ onRestartRun }) => {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    sound.playCoin();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playCheckpoint();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00f5d4', '#ff4655', '#f59e0b'],
    });

    setFormSent(true);
    // Construct mailto link
    const mailto = `mailto:${personal.email}?subject=Transmission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nReply to: ' + formData.email)}`;
    window.open(mailto, '_blank');
  };

  return (
    <section className="relative min-w-[100vw] w-full min-h-[calc(100vh-100px)] flex flex-col justify-center px-4 sm:px-8 py-12">
      {/* Zone Header Badge */}
      <div className="max-w-6xl mx-auto w-full mb-6">
        <div className="flex items-center space-x-2 border-2 border-pink-500 p-2 bg-slate-950/80 shadow-pixel inline-block">
          <span className="font-pixel text-[11px] text-pink-400">
            [ CHECKPOINT 07 : EXTRACTION POINT ]
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono mt-3">
          Finish Line & Extraction Terminal
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans mt-1">
          Transmission channel open. Reach out directly for AdTech, Product, and Data Science opportunities.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Direct Contact & Comms Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel border-2 border-slate-700 p-5 shadow-pixel space-y-4">
            <div className="text-xs font-pixel text-pink-400 flex items-center gap-1.5 border-b border-slate-700/80 pb-2">
              <Radio className="w-4 h-4 text-pink-400 animate-pulse" />
              DIRECT TRANSMISSION FREQUENCIES:
            </div>

            {/* Email Box */}
            <div className="p-3 bg-slate-900 border border-slate-700 flex items-center justify-between shadow-pixel">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="p-2 bg-slate-950 border border-slate-700">
                  <Mail className="w-4 h-4 text-cyber-cyan" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-400">EMAIL</div>
                  <div className="text-xs font-mono text-white truncate font-medium">
                    {personal.email}
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personal.email, 'email')}
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono text-slate-200 flex items-center space-x-1 shrink-0 ml-2"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[10px]">{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Phone Box */}
            <div className="p-3 bg-slate-900 border border-slate-700 flex items-center justify-between shadow-pixel">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-950 border border-slate-700">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">PHONE / WHATSAPP</div>
                  <div className="text-xs font-mono text-white font-medium">
                    {personal.phone}
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personal.phone, 'phone')}
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono text-slate-200 flex items-center space-x-1 shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[10px]">{copiedPhone ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-center font-mono text-xs text-white hover:text-cyber-cyan transition-colors shadow-pixel flex items-center justify-center space-x-2"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-center font-mono text-xs text-white hover:text-cyber-cyan transition-colors shadow-pixel flex items-center justify-center space-x-2"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Official CV Download Action */}
            <a
              href={personal.cvPdfUrl}
              download="MD_Shahadat_Hossain_Main.pdf"
              onClick={() => sound.playCoin()}
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-black font-pixel text-xs border-2 border-black shadow-pixel-gold transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD OFFICIAL CV (PDF)</span>
            </a>
          </div>

          {/* Reset Run Button */}
          <button
            onClick={() => {
              sound.playWarp();
              onRestartRun();
            }}
            className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-pixel text-xs border-2 border-slate-700 shadow-pixel transition-all"
          >
            <RotateCcw className="w-4 h-4 text-cyber-cyan" />
            <span>RUN AGAIN (REWIND TO SPAWN POINT)</span>
          </button>
        </div>

        {/* Right Column: Interactive Send Transmission Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel border-2 border-slate-700 p-5 sm:p-6 shadow-pixel space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
              <span className="font-pixel text-[11px] text-pink-400 flex items-center gap-1.5">
                <Send className="w-4 h-4 text-pink-400" />
                TRANSMIT MESSAGE TERMINAL
              </span>
              <span className="font-mono text-xs text-emerald-400">ENCRYPTION: ACTIVE</span>
            </div>

            {formSent ? (
              <div className="p-6 bg-slate-900 border border-emerald-500/50 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-950 border border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-lg font-bold text-white">Transmission Prepared!</h3>
                <p className="font-sans text-xs text-slate-300 max-w-md mx-auto">
                  Your mail client has been opened to dispatch the transmission directly to <code className="text-cyber-cyan">{personal.email}</code>.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-4 py-2 bg-slate-800 text-xs font-mono text-slate-300 border border-slate-600 mt-2"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 text-[11px]">PILOT / RECRUITER NAME:</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager @ Tech / AdTech Co."
                    className="w-full bg-slate-900 border border-slate-700 px-3 py-2.5 text-white focus:outline-none focus:border-cyber-cyan font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 text-[11px]">RETURN FREQUENCY (EMAIL):</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full bg-slate-900 border border-slate-700 px-3 py-2.5 text-white focus:outline-none focus:border-cyber-cyan font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 text-[11px]">TRANSMISSION PAYLOAD (MESSAGE):</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss an opportunity, project collaboration, or interview invitation..."
                    className="w-full bg-slate-900 border border-slate-700 px-3 py-2.5 text-white focus:outline-none focus:border-cyber-cyan font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-pink-600 hover:bg-pink-500 text-white font-pixel text-xs border-2 border-black shadow-pixel transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE NOW</span>
                </button>
              </form>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-slate-500 border-t border-slate-800/80 mt-3">
              <span>Md. Shahadat Hossain Shamim • Dhaka, Bangladesh • "Always On The Run"</span>
              <VisitorBadge variant="pill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

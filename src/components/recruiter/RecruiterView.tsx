import React, { useState } from 'react';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Cpu, 
  Heart, 
  Users, 
  BookOpen, 
  Copy, 
  Check, 
  Sparkles,
  Gamepad2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../icons/BrandIcons';
import { portfolioData } from '../../data/portfolioData';
import { sound } from '../../utils/audio';
import { VisitorBadge } from '../VisitorBadge';

interface RecruiterViewProps {
  onSwitchToGameMode: () => void;
}

export const RecruiterView: React.FC<RecruiterViewProps> = ({ onSwitchToGameMode }) => {
  const { personal, education, experience, thesis, projects, skills, community } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans pb-24">
      {/* Notice Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-2 px-4 text-center text-xs font-mono text-slate-400">
        <span className="text-cyber-cyan font-bold mr-1">📄 RECRUITER MODE ACTIVE:</span>
        Clean, high-density layout designed for rapid candidate screening & executive evaluation.
        <button
          onClick={onSwitchToGameMode}
          className="ml-3 text-cyber-cyan underline hover:text-cyan-300 font-bold"
        >
          [Switch to 2D Game Mode 🎮]
        </button>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* ========================================================= */}
        {/* HERO / EXECUTIVE PROFILE HEADER */}
        {/* ========================================================= */}
        <section className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center space-x-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-cyber-cyan/60 shrink-0 bg-slate-950">
                <img
                  src={personal.avatarPhoto}
                  alt={personal.fullName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {personal.fullName}
                  </h1>
                  <span className="px-2.5 py-0.5 bg-emerald-950/70 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-medium rounded">
                    Available for Full-Time Roles
                  </span>
                </div>

                <p className="text-base sm:text-lg text-cyber-cyan font-mono font-medium mt-1">
                  {personal.subHeadline}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {personal.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-amber-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    BRAC University (CGPA: 3.91/4.00)
                  </span>
                  <span>•</span>
                  <span className="text-slate-300">
                    AdTech Product Intern @ Grameenphone
                  </span>
                  <span>•</span>
                  <VisitorBadge variant="pill" />
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap md:flex-col gap-2.5 w-full md:w-auto shrink-0">
              <a
                href={personal.cvPdfUrl}
                download="MD_Shahadat_Hossain_Main.pdf"
                onClick={() => sound.playCoin()}
                className="flex-1 md:flex-initial inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs sm:text-sm rounded transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="flex-1 md:flex-initial inline-flex items-center justify-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm rounded border border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-cyber-cyan" />
                <span>Email Candidate</span>
              </a>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            {/* Email */}
            <div className="flex items-center justify-between p-2.5 bg-slate-950/70 rounded border border-slate-800">
              <span className="text-slate-400 truncate mr-2">{personal.email}</span>
              <button
                onClick={() => copyToClipboard(personal.email, 'email')}
                className="text-slate-400 hover:text-white p-1"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-2.5 bg-slate-950/70 rounded border border-slate-800">
              <span className="text-slate-400">{personal.phone}</span>
              <button
                onClick={() => copyToClipboard(personal.phone, 'phone')}
                className="text-slate-400 hover:text-white p-1"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 bg-slate-950/70 hover:bg-slate-800/80 rounded border border-slate-800 text-slate-300 hover:text-cyber-cyan transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                in/shahadathossain16
              </span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 bg-slate-950/70 hover:bg-slate-800/80 rounded border border-slate-800 text-slate-300 hover:text-cyber-cyan transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5" />
                nathandrake16
              </span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

          {/* Executive Career Summary */}
          <div className="mt-6 pt-5 border-t border-slate-800">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Career Objective & Executive Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Currently gaining hands-on experience in Product and AdTech at Grameenphone, working across digital advertising, audience analysis, product ideation, and cross-functional initiatives. I enjoy understanding how technology, data, and user behavior come together to create better products and experiences. Alongside my technical background in Machine Learning, Deep Learning, and Simulation, my experience in teaching, leadership, and presenting ideas has strengthened my communication, collaboration, and ability to work with diverse teams.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* WORK EXPERIENCE */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Building2 className="w-5 h-5 text-cyber-cyan" />
              Professional Experience
            </h2>
            <span className="text-xs font-mono text-slate-400">All dates & metrics from CV</span>
          </div>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-slate-900/60 border border-slate-800 p-5 sm:p-6 rounded-lg space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      {exp.badge && (
                        <span className="px-2 py-0.5 bg-cyan-950 text-cyber-cyan border border-cyber-cyan/40 text-[10px] font-mono rounded font-semibold">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-mono text-cyber-cyan font-medium">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {exp.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-950/80 p-2.5 rounded border border-slate-800 text-center">
                      <div className="font-mono text-xs sm:text-sm font-bold text-cyber-cyan">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pt-1">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="text-cyber-cyan mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-950 text-slate-400 border border-slate-800 font-mono text-[11px] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* UNDERGRADUATE THESIS & RESEARCH */}
        {/* ========================================================= */}
        <section className="bg-slate-900/60 border border-slate-800 p-5 sm:p-6 rounded-lg space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyber-red" />
              Undergraduate Thesis & Research
            </h2>
            <span className="text-xs font-mono text-slate-400">{thesis.institution}</span>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {thesis.title}
            </h3>
            <p className="text-xs font-mono text-cyber-red mt-1">
              Field Study: Gulshan-2 Intersection, Dhaka • Period: {thesis.period}
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {thesis.overview}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {thesis.metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-950/80 p-2.5 rounded border border-slate-800 text-center">
                <div className="font-mono text-xs font-bold text-cyber-red">{m.value}</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Core Technical Contributions:
            </h4>
            <ul className="space-y-1.5">
              {thesis.methodology.map((m, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyber-red mt-0.5 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
            {thesis.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-slate-950 text-slate-400 border border-slate-800 font-mono text-[11px] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ACADEMIC COURSE PROJECTS & GITHUB LINKS */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <GithubIcon className="w-5 h-5 text-amber-400" />
              Academic Course Projects & GitHub Repositories
            </h2>
            <span className="text-xs font-mono text-slate-400">All 5 Projects Verified & Linked</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/60 border border-slate-800 p-5 rounded-lg flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white hover:text-cyber-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 bg-slate-950 text-[10px] font-mono text-amber-400 border border-slate-800 rounded shrink-0">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Benchmark Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                        <div className="font-mono text-xs font-bold text-cyber-cyan">{m.value}</div>
                        <div className="text-[9px] font-mono text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-mono border border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* TECHNICAL SKILLS MATRIX */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyber-cyan" />
              Technical Skills Matrix
            </h2>
            <span className="text-xs font-mono text-slate-400">Excludes 3D printing per request</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((categoryGroup, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg space-y-3">
                <h3 className="font-mono text-sm font-bold text-white border-b border-slate-800 pb-1.5 text-cyber-cyan">
                  {categoryGroup.category}
                </h3>
                <ul className="space-y-2">
                  {categoryGroup.skills.map((s, sIdx) => (
                    <li key={sIdx} className="text-xs font-mono">
                      <div className="text-slate-200 font-medium">{s.name}</div>
                      {s.note && <div className="text-[11px] text-slate-500">{s.note}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* EDUCATION & HONOURS */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              Education & Academic Honours
            </h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 p-5 rounded-lg space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                    <p className="text-xs font-mono text-amber-400">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <div className="text-right self-start sm:self-auto font-mono">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                      {edu.scoreLabel}: {edu.score}
                    </span>
                    <div className="text-[11px] text-slate-400 mt-0.5">{edu.period}</div>
                  </div>
                </div>

                {edu.achievements && (
                  <ul className="space-y-1 text-xs text-slate-300 font-sans">
                    {edu.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-center space-x-2">
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* LEADERSHIP, VOLUNTEERING & 20X BLOOD DONOR */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              Leadership & Community Impact
            </h2>
            <span className="text-xs font-mono text-red-400 font-semibold">
              20x Blood Donor Badge
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {community.map((comm) => (
              <div key={comm.id} className="bg-slate-900/60 border border-slate-800 p-5 rounded-lg space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{comm.period}</span>
                    {comm.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded font-semibold bg-red-950 text-red-400 border border-red-800/40">
                        {comm.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white">{comm.organization}</h3>
                  <p className="text-xs font-mono text-cyber-cyan">{comm.role}</p>

                  {/* Photo if Available (Single or Gallery) */}
                  {comm.gallery && comm.gallery.length > 1 ? (
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {comm.gallery.slice(0, 2).map((imgUrl, gIdx) => {
                        const isCert = imgUrl.toLowerCase().includes('certificate');
                        return (
                          <a
                            key={gIdx}
                            href={imgUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="block h-28 rounded overflow-hidden border border-slate-800 bg-slate-950 relative group"
                            title="Click to view full image in new tab"
                          >
                            <img
                              src={imgUrl}
                              alt={comm.galleryCaptions?.[gIdx] || comm.organization}
                              className={`w-full h-full group-hover:scale-105 transition-transform duration-200 ${
                                isCert ? 'object-contain bg-slate-900/90 p-1' : 'object-cover'
                              }`}
                              onError={(e) => {
                                (e.currentTarget as HTMLElement).style.display = 'none';
                              }}
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 px-1 py-0.5 text-[8px] font-mono text-slate-300 truncate">
                              {comm.galleryCaptions?.[gIdx] || `Photo ${gIdx + 1}`}
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  ) : comm.image ? (
                    <div className="w-full h-32 rounded overflow-hidden border border-slate-800 bg-slate-950 mt-1">
                      <img
                        src={comm.image}
                        alt={comm.organization}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ) : null}

                  {comm.id === 'srijon' && (
                    <a
                      href={comm.image || '/images/community/srijon-certificate.jpg'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-cyber-cyan hover:underline font-mono mt-1"
                    >
                      <Award className="w-3.5 h-3.5 text-cyber-cyan" />
                      <span>View Verified BRACU Certificate</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}

                  {comm.facebookPosts ? (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {comm.facebookPosts.map((post, pIdx) => (
                        <a
                          key={pIdx}
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs text-sky-400 hover:text-sky-300 font-mono"
                        >
                          <FacebookIcon className="w-3.5 h-3.5 text-[#1877f2]" />
                          <span>{post.label}</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      ))}
                    </div>
                  ) : comm.facebookUrl ? (
                    <a
                      href={comm.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-sky-400 hover:text-sky-300 font-mono mt-1"
                    >
                      <FacebookIcon className="w-3.5 h-3.5 text-[#1877f2]" />
                      <span>View Facebook Post</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  ) : null}

                  <ul className="space-y-1.5 pt-1">
                    {comm.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-300 leading-relaxed flex items-start space-x-1.5">
                        <span className="text-slate-500 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-800/80 text-center font-mono">
                  {comm.impactNumbers.map((impact, iIdx) => (
                    <div key={iIdx} className="bg-slate-950 p-1.5 rounded">
                      <div className="text-xs font-bold text-white">{impact.value}</div>
                      <div className="text-[9px] text-slate-500">{impact.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* LIFE OUTSIDE TECH: TOURING & HOBBIES */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              Life Outside Tech: Touring, Skating & Lore
            </h2>
            <span className="text-xs font-mono text-emerald-400">Dhaka ➔ Sreemangal Touring</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Motorcycle Expedition */}
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-lg space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold">MOTORCYCLE TOURING</span>
                  <span className="text-xs font-mono text-slate-400">~190 km</span>
                </div>
                <h3 className="text-base font-bold text-white">Dhaka to Sreemangal Expedition</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Cruised on the blue Honda motorcycle across Sylhet tea gardens and visited Baikka Beel Permanent Fish Sanctuary.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="h-28 rounded overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src="/images/hobbies/bike-sreemangal-2.jpg"
                    alt="Shahadat on Honda Motorcycle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-28 rounded overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src="/images/hobbies/bike-sreemangal-1.jpg"
                    alt="Baikka Beel Fish Sanctuary"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Competitive Esports: Colosseum 1.0 */}
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-lg space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 font-bold">VALORANT ESPORTS</span>
                  <span className="text-xs font-mono text-amber-400 font-bold">PEAK IMMORTAL</span>
                </div>
                <h3 className="text-base font-bold text-white">1st Runners-Up @ Colosseum 1.0</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  BRAC University Valorant Championship with Team Arcane ES. IGN: <span className="text-cyber-cyan font-bold">MSS NATHANDRAKEA</span>. Sub-200ms reflex speed & team tactical utility.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <div className="h-28 rounded overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src="/images/hobbies/valorant.jpg"
                    alt="Colosseum 1.0 Valorant Championship"
                    className="w-full h-full object-contain"
                  />
                </div>

                <a
                  href="https://www.facebook.com/photo?fbid=137226712779869&set=a.107579692411238"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-sky-400 hover:text-sky-300 font-mono"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-[#1877f2]" />
                  <span>View Official Tournament Post</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Skating & Other Pursuits */}
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-lg space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyber-cyan font-bold">SKATEBOARDING & LORE</span>
                  <span className="text-xs font-mono text-slate-400">Kinetic Flow</span>
                </div>
                <h3 className="text-base font-bold text-white">Campus Skating & Tin Goyenda</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Practicing street cruising for kinetic balance, and a lifelong passion for Rokib Hasan's classic mystery series Tin Goyenda.
                </p>
              </div>

              {/* Skating Video in Recruiter View */}
              <div className="h-32 rounded overflow-hidden border border-slate-800 bg-black flex items-center justify-center relative">
                <video
                  src="/images/hobbies/skating.mp4"
                  controls
                  loop
                  muted
                  playsInline
                  className="max-h-full max-w-full"
                  style={{ transform: 'rotate(90deg) scale(1.15)' }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Game Mode Switcher for Quick Access */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onSwitchToGameMode}
          className="flex items-center space-x-2 px-4 py-2.5 bg-cyber-cyan hover:bg-cyan-300 text-slate-950 font-pixel text-xs font-bold shadow-pixel-cyan rounded-none border-2 border-black transition-all transform hover:scale-105"
        >
          <Gamepad2 className="w-4 h-4" />
          <span>PLAY 2D GAME MODE</span>
        </button>
      </div>
    </div>
  );
};

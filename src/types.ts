export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  achievements?: string[];
  coursework?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  tagline: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Machine Learning' | 'Computer Vision' | 'Full Stack' | 'Data Analytics';
  description: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  cartridgeColor: string;
  featured: boolean;
}

export interface ThesisData {
  title: string;
  institution: string;
  period: string;
  overview: string;
  methodology: string[];
  keyContributions: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  anomalySimulation: {
    description: string;
    scenarios: string[];
  };
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface CommunityItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge?: string;
  badgeColor?: string;
  bullets: string[];
  impactNumbers: { label: string; value: string }[];
  image?: string;
  gallery?: string[];
  galleryCaptions?: string[];
  facebookUrl?: string;
  facebookPosts?: { label: string; url: string }[];
}

export interface HobbyItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  image?: string;
  gallery?: string[];
  video?: string;
  videoRotation?: number;
  facebookUrl?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  quote?: string;
}

export interface ZoneConfig {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  subtitle: string;
  vehicle: 'foot' | 'bike' | 'skateboard';
  accentColor: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    fullName: string;
    avatarPhoto: string;
    headline: string;
    subHeadline: string;
    about: string;
    location: string;
    status: string;
    currentQuest: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    cvPdfUrl: string;
    socials: SocialLink[];
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  thesis: ThesisData;
  projects: ProjectItem[];
  skills: SkillCategory[];
  community: CommunityItem[];
  hobbies: HobbyItem[];
  zones: ZoneConfig[];
}

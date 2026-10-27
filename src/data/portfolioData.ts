import { PortfolioData } from '../types';
import { asset } from '../utils/assets';

/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * Centralized data source for Md. Shahadat Hossain Shamim's portfolio.
 * You can easily swap in new photos, GitHub links, and metrics directly here!
 *
 * All image assets can be placed in `public/images/` and referenced as `/images/<filename>`.
 */

export const portfolioData: PortfolioData = {
  // ==========================================
  // PERSONAL & HUD INFO
  // ==========================================
  personal: {
    name: 'Shahadat',
    fullName: 'Md. Shahadat Hossain Shamim',
    avatarPhoto: asset('/images/shahadat.jpg'), // Replace with your custom photo in public/images/
    headline: "Hi, I'm Shahadat. Always On The Run.",
    subHeadline: 'CS Grad Bridging AI & Product | Product & Data Enthusiast',
    about:
      'Gaining hands-on experience in Product and AdTech at Grameenphone, bridging data science, machine learning, and consumer product strategy. Passionate about how technology, analytics, and human behavior come together to create high-impact digital experiences.',
    location: 'Dhaka, Bangladesh',
    status: 'Ready for High-Impact Roles',
    currentQuest: 'AdTech Product Intern @ Grameenphone',
    email: 'shahadat.hossain.2207@gmail.com',
    phone: '+8801317785593',
    linkedin: 'https://linkedin.com/in/shahadathossain16',
    github: 'https://github.com/nathandrake16',
    cvPdfUrl: asset('/MD_Shahadat_Hossain_Main.pdf'),
    socials: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/shahadathossain16',
        label: 'shahadathossain16',
        iconName: 'Linkedin',
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/nathandrake16',
        label: 'nathandrake16',
        iconName: 'Github',
      },
      {
        platform: 'Email',
        url: 'mailto:shahadat.hossain.2207@gmail.com',
        label: 'shahadat.hossain.2207@gmail.com',
        iconName: 'Mail',
      },
      {
        platform: 'Phone',
        url: 'tel:+8801317785593',
        label: '+8801317785593',
        iconName: 'Phone',
      },
    ],
  },

  // ==========================================
  // ZONE CONFIGURATION (WORLD MAP)
  // ==========================================
  zones: [
    {
      id: 1,
      slug: 'spawn',
      name: 'Spawn Point',
      shortName: 'Spawn',
      icon: 'Flag',
      subtitle: 'Hero & Mission Briefing',
      vehicle: 'foot',
      accentColor: '#00f5d4', // Cyan
    },
    {
      id: 2,
      slug: 'tech-hub',
      name: 'The Telecom & Tech Hub',
      shortName: 'Experience',
      icon: 'Building2',
      subtitle: 'Grameenphone, City Bank & BRACU',
      vehicle: 'bike',
      accentColor: '#38bdf8', // Blue
    },
    {
      id: 3,
      slug: 'smart-intersection',
      name: 'Gulshan-2 Smart Intersection',
      shortName: 'Thesis & AI',
      icon: 'Cpu',
      subtitle: 'Adaptive Traffic RL Simulation',
      vehicle: 'bike',
      accentColor: '#ff4655', // Coral/Red
    },
    {
      id: 4,
      slug: 'arcade',
      name: 'The Arcade & Code Lab',
      shortName: 'Projects & Skills',
      icon: 'Gamepad2',
      subtitle: '5 GitHub Repos & Agent Loadout',
      vehicle: 'bike',
      accentColor: '#a855f7', // Purple
    },
    {
      id: 5,
      slug: 'guild-hall',
      name: 'The Guild Hall',
      shortName: 'Community',
      icon: 'Shield',
      subtitle: '20x Blood Donor & Leadership',
      vehicle: 'foot',
      accentColor: '#f59e0b', // Gold
    },
    {
      id: 6,
      slug: 'safe-house',
      name: 'Side Quests & Safe House',
      shortName: 'Life & Hobbies',
      icon: 'Coffee',
      subtitle: 'Bike Tours, Skating, Tin Goyenda',
      vehicle: 'skateboard',
      accentColor: '#10b981', // Emerald
    },
    {
      id: 7,
      slug: 'extraction',
      name: 'Extraction Point',
      shortName: 'Contact',
      icon: 'Radio',
      subtitle: 'Transmit a Message & Hire',
      vehicle: 'foot',
      accentColor: '#ec4899', // Pink
    },
  ],

  // ==========================================
  // EDUCATION & HONOURS
  // ==========================================
  education: [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'BRAC University',
      location: 'Dhaka, Bangladesh',
      period: '2022 – 2026',
      score: '3.91 / 4.00',
      scoreLabel: 'CGPA',
      achievements: [
        "Vice Chancellor's List (6 Semesters)",
        "Dean's List (3 Semesters)",
        '50% Merit Tuition Scholarship for consistent academic excellence',
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning & Deep Learning',
        'Database Management Systems',
        'Reinforcement Learning',
        'Computer Vision',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Rajshahi Government City College',
      location: 'Rajshahi, Bangladesh',
      period: '2020',
      score: '5.00 / 5.00',
      scoreLabel: 'GPA',
      achievements: ['Science Group - Perfect 5.00 GPA score'],
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Rajshahi Cantonment Public School and College',
      location: 'Rajshahi, Bangladesh',
      period: '2018',
      score: '5.00 / 5.00',
      scoreLabel: 'GPA',
      achievements: ['Science Group - Perfect 5.00 GPA score'],
    },
  ],

  // ==========================================
  // WORK EXPERIENCE (TECH HUB)
  // ==========================================
  experience: [
    {
      id: 'grameenphone',
      role: 'AdTech Product Intern',
      company: 'Grameenphone',
      location: 'Dhaka, Bangladesh',
      period: 'June 2026 – Present',
      badge: 'Current Quest',
      tagline: 'Driving AI reporting automation, telco audience segmentation, and multi-platform digital campaigns.',
      technologies: ['AdTech', 'AI Automation', 'Telco Big Data', 'MyGP Platform', 'Campaign Analytics', 'CTR Optimization'],
      metrics: [
        { label: 'Reporting Time', value: '2-3 hrs → Mins' },
        { label: 'Audience Segments', value: '100+ Telco' },
        { label: 'Digital Campaigns', value: '15+ Executed' },
        { label: 'Brand Partners', value: '21 Major Brands' },
      ],
      bullets: [
        'Developed an AI-powered reporting automation solution to streamline post-campaign analytics, reducing a manual 2–3 hour reporting process to minutes while improving consistency and scalability.',
        "Structured 100+ commercially viable audience segments using Grameenphone's first-party telco data to support targeted digital channel expansion and audience-based campaign planning.",
        'Configured and executed 15+ digital campaigns across platform placements (MyGP, Skitto, Bioscope+, Cockpit), driving end-to-end service delivery and user adoption.',
        'Engaged directly with clients and 21 major brands to present digital solutions, negotiate requirements, and drive lead-generation campaigns.',
        'Monitored digital campaign performance through core KPIs (revenue, CTR, engagement), supporting partner optimization and regional rollout strategies.',
        'Analyzed user behavior on the MyGP platform to identify engagement bottlenecks and designed ATL/BTL promotional concepts around daily rewards to drive active participation.',
      ],
      icon: 'Building',
    },
    {
      id: 'city-bank',
      role: 'IT Intern',
      company: 'City Bank',
      location: 'Dhaka, Bangladesh',
      period: 'May 2026 – June 2026',
      tagline: 'Enterprise banking infrastructure, local network maintenance, and security administration.',
      technologies: ['Network Administration', 'LAN Troubleshooting', 'System Security', 'Enterprise IT'],
      metrics: [
        { label: 'System Uptime', value: '100% Reliable' },
        { label: 'Infrastructure', value: 'LAN & Security' },
      ],
      bullets: [
        'Resolved software and OS-related issues for bank employees while managing system configurations and security updates.',
        'Assisted in the maintenance and troubleshooting of local area networks (LAN) to ensure stable and secure connectivity across corporate departments.',
      ],
      icon: 'Landmark',
    },
    {
      id: 'bracu-ta',
      role: 'Undergraduate Teaching Assistant',
      company: 'BRAC University',
      location: 'Dhaka, Bangladesh',
      period: 'Nov 2024 – May 2025',
      tagline: 'Mentored 35+ CS students across 2 lab courses, conducting weekly tutorials and grading portals.',
      technologies: ['Mentorship', 'Lab Logistics', 'Code Review', 'Academic Assessment'],
      metrics: [
        { label: 'Lab Courses', value: '2 Courses' },
        { label: 'Students Mentored', value: '35+ Undergrads' },
      ],
      bullets: [
        'Assisted faculty across 2 lab courses, conducting weekly tutorials and grading assignments for 35+ undergraduate students.',
        'Held regular office hours to clarify course concepts and managed lab logistics and submission portals to streamline grading for large student cohorts.',
      ],
      icon: 'GraduationCap',
    },
  ],

  // ==========================================
  // THESIS & RESEARCH (SMART INTERSECTION)
  // ==========================================
  thesis: {
    title:
      'Adaptive Traffic Signal Control for Urban Intersections Using Reinforcement Learning: A SUMO Simulation Case Study on Gulshan-2',
    institution: 'BRAC University',
    period: '2025 – 2026',
    overview:
      'Tackling urban congestion in Dhaka using Deep Reinforcement Learning. Developed a realistic GIS-calibrated microscopic traffic simulation of the famous Gulshan-2 roundabout/intersection using SUMO, demonstrating robust signal optimization under real-world disruptions.',
    technologies: ['SUMO (Simulation of Urban MObility)', 'Reinforcement Learning', 'Q-Learning', 'Python', 'GIS Modeling', 'TraCI API'],
    metrics: [
      { label: 'Testbed', value: 'Gulshan-2 Intersection' },
      { label: 'Simulation Engine', value: 'SUMO & TraCI' },
      { label: 'Core Focus', value: 'Robustness Beyond Ideal' },
      { label: 'Stress Factors', value: 'Potholes + Jaywalkers' },
    ],
    methodology: [
      'Built a disruption-aware evaluation framework on a GIS-based Gulshan-2 SUMO model calibrated with published field-demand traffic data.',
      'Trained intelligent RL signal controllers to dynamically adjust green-light phases based on real-time vehicle queues, delay times, and throughput.',
      'Pioneered anomaly stress testing by introducing dynamic disruptions: localized potholes and unpredictable jaywalking behaviors.',
      'Demonstrated that while standard RL models degrade during chaotic anomalies, the disruption-aware framework maintains high throughput and minimized waiting times.',
    ],
    keyContributions: [
      'Novel evaluation benchmark explicitly modeling South Asian urban disruptions (potholes and jaywalking).',
      'Realistic road network geometry constructed from GIS geospatial data of Dhaka Gulshan-2.',
      'Significant reduction in intersection queue lengths and carbon emissions compared to fixed-time signal controllers.',
    ],
    anomalySimulation: {
      description: 'Interactive demonstration of the Gulshan-2 intersection under ideal vs anomaly stress scenarios.',
      scenarios: [
        'Scenario A: Standard Traffic Demand (Ideal Flow)',
        'Scenario B: Sudden Road Obstruction (Pothole bottleneck causing lane drops)',
        'Scenario C: Jaywalking & Pedestrian Interference (Unregulated crossing)',
      ],
    },
  },

  // ==========================================
  // PROJECTS & GITHUB REPOSITORIES
  // ==========================================
  projects: [
    {
      id: 'bangla-digit',
      title: 'EfficientCNN',
      subtitle: 'Bangla Handwritten Digit Recognition',
      category: 'Computer Vision',
      description:
        'Designed EfficientCNN, a lightweight convolutional neural network for Bangla handwritten digit recognition on the BHaND dataset, delivering stellar 99.78% test accuracy while keeping compute lightweight.',
      bullets: [
        'Achieved state-of-the-art 99.78% test accuracy on the benchmark BHaND dataset.',
        'Outperformed established heavy architectural baselines including AlexNet, LeNet-5, and MobileNetV2.',
        'Optimized convolutional filter sizes and batch normalization layers for ultra-fast edge inference.',
      ],
      metrics: [
        { label: 'Test Accuracy', value: '99.78%' },
        { label: 'Dataset', value: 'BHaND' },
        { label: 'Baselines Beaten', value: 'AlexNet, LeNet, MobileNetV2' },
      ],
      tags: ['Python', 'CNN', 'Deep Learning', 'Computer Vision', 'PyTorch/TensorFlow'],
      githubUrl: 'https://github.com/nathandrake16/bangla-digit-recognization',
      cartridgeColor: '#00f5d4',
      featured: true,
    },
    {
      id: 'cancer-classification',
      title: 'Cancer Classification ML Pipeline',
      subtitle: 'Clinical & Gene-Expression Analysis',
      category: 'Machine Learning',
      description:
        'Developed a high-dimensional PCA-based machine learning pipeline utilizing clinical and gene-expression microarray data to accurately classify seven distinct cancer types.',
      bullets: [
        'Built an end-to-end bioinformatics pipeline handling high-dimensional genomic features.',
        'Applied Principal Component Analysis (PCA) for variance-preserving dimensionality reduction.',
        'Achieved 93.07% multi-class test accuracy using tuned Logistic Regression classifiers.',
      ],
      metrics: [
        { label: 'Accuracy', value: '93.07%' },
        { label: 'Cancer Classes', value: '7 Types' },
        { label: 'Method', value: 'PCA + Logistic Regression' },
      ],
      tags: ['Python', 'PCA', 'Scikit-Learn', 'Bioinformatics', 'Machine Learning'],
      githubUrl: 'https://github.com/nathandrake16/cancerclassification',
      cartridgeColor: '#ff4655',
      featured: true,
    },
    {
      id: 'flood-prediction',
      title: 'ML Flood-Prediction Pipeline',
      subtitle: 'Disaster Early-Warning Classification',
      category: 'Machine Learning',
      description:
        'Engineered an early-warning flood disaster prediction pipeline to classify evacuation requirements by combining multi-sensor hydrological features across several ML algorithms.',
      bullets: [
        'Integrated multi-source sensor features including rainfall intensity, river gauge levels, soil saturation, and flood-risk indices.',
        'Trained, evaluated, and cross-validated multiple classifiers (Random Forest, Gradient Boosting, SVM).',
        'Engineered decision thresholds to prioritize low false-negative rates for emergency evacuation dispatch.',
      ],
      metrics: [
        { label: 'Features', value: 'Rainfall, River, Soil' },
        { label: 'Models', value: 'Multi-Classifier Ensemble' },
        { label: 'Impact', value: 'Evacuation Alerting' },
      ],
      tags: ['Python', 'Scikit-Learn', 'Pandas', 'Predictive Modeling', 'Risk Analysis'],
      githubUrl: 'https://github.com/nathandrake16/flood-prediction',
      cartridgeColor: '#38bdf8',
      featured: true,
    },
    {
      id: 'sales-dashboard',
      title: 'E-Commerce Sales Analytics',
      subtitle: 'Interactive Power BI Executive Dashboard',
      category: 'Data Analytics',
      description:
        'End-to-end commercial analytics dashboard turning raw multi-channel e-commerce sales datasets into actionable business intelligence with deep KPI tracking and visual reporting.',
      bullets: [
        'Designed interactive visual dashboards tracking Revenue, Average Order Value (AOV), Return on Ad Spend (ROAS), and Customer Retention.',
        'Wrote custom DAX measures for month-over-month (MoM) growth calculations and regional breakdown.',
        'Structured automated data refresh pipelines and dynamic filtering for executive decision-making.',
      ],
      metrics: [
        { label: 'Tool', value: 'Power BI' },
        { label: 'Logic', value: 'Advanced DAX' },
        { label: 'Insights', value: 'Full Sales Funnel' },
      ],
      tags: ['Power BI', 'DAX', 'Data Analysis', 'Business Intelligence', 'SQL'],
      githubUrl: 'https://github.com/nathandrake16/sales-dashboard',
      cartridgeColor: '#f59e0b',
      featured: false,
    },
    {
      id: 'course-management',
      title: 'Software Course Management System',
      subtitle: 'Full-Stack Academic Portal',
      category: 'Full Stack',
      description:
        'A modern full-stack web application built with Next.js and MongoDB to streamline university course enrollments, faculty grade management, and student assignment tracking.',
      bullets: [
        'Built full CRUD architecture with serverless API routes in Next.js and database schema in MongoDB.',
        'Implemented role-based access control (Admin, Faculty, Student) with secure session authentication.',
        'Designed responsive dashboard interface with clean component architecture and reactive state management.',
      ],
      metrics: [
        { label: 'Stack', value: 'Next.js & MongoDB' },
        { label: 'Auth', value: 'Role-Based RBAC' },
        { label: 'Architecture', value: 'Full-Stack SSR' },
      ],
      tags: ['Next.js', 'React', 'MongoDB', 'Node.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/nathandrake16/software-course-management-system',
      cartridgeColor: '#10b981',
      featured: false,
    },
  ],

  // ==========================================
  // TECHNICAL SKILLS (NO 3D PRINTING!)
  // ==========================================
  skills: [
    {
      category: 'Programming Languages',
      icon: 'Code2',
      skills: [
        { name: 'Python', level: 95, note: 'Primary ML/Data Language' },
        { name: 'SQL', level: 90, note: 'PostgreSQL, Complex Queries' },
        { name: 'JavaScript / TypeScript', level: 85, note: 'Web & Front-end' },
        { name: 'C / C++', level: 80, note: 'Algorithms & Systems' },
        { name: 'HTML5 / CSS3', level: 90, note: 'Responsive UI Design' },
      ],
    },
    {
      category: 'Data Science & Machine Learning',
      icon: 'Brain',
      skills: [
        { name: 'Deep Learning', level: 90, note: 'CNN, Neural Networks' },
        { name: 'Reinforcement Learning', level: 85, note: 'Q-Learning, SUMO' },
        { name: 'Computer Vision', level: 88, note: 'Image Classification' },
        { name: 'Data Analysis', level: 92, note: 'Pandas, NumPy, Scikit-learn' },
        { name: 'Power BI', level: 88, note: 'DAX, Dashboards, KPIs' },
      ],
    },
    {
      category: 'Web Development & Databases',
      icon: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 88, note: 'Normalization, ER Diagrams, Schemas' },
        { name: 'Next.js', level: 85, note: 'Full-stack React Framework' },
        { name: 'MongoDB', level: 82, note: 'Document Modeling, Aggregation' },
        { name: 'REST APIs', level: 90, note: 'API Design & Integration' },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: 'Wrench',
      skills: [
        { name: 'SUMO', level: 90, note: 'Microscopic Traffic Simulation' },
        { name: 'Docker', level: 82, note: 'Containerization & Environments' },
        { name: 'Git & GitHub', level: 90, note: 'Version Control & Workflows' },
        { name: 'LaTeX', level: 88, note: 'Academic Paper Typesetting' },
        { name: 'Microsoft Excel / PPT', level: 92, note: 'Advanced Spreadsheets & Exec Decks' },
      ],
    },
  ],

  // ==========================================
  // COMMUNITY, IMPACT & LEADERSHIP
  // ==========================================
  community: [
    {
      id: 'blood-donor',
      role: 'Lifesaver & Database Architect',
      organization: 'Community Blood Network',
      period: 'Ongoing',
      badge: '20x Blood Donor',
      badgeColor: '#ff4655',
      image: asset('/images/community/blood-donation.jpg'),
      facebookUrl: 'https://www.facebook.com/photo?fbid=113456780835966&set=pcb.113457460835898',
      bullets: [
        'Personally donated blood 20 times to patients in urgent medical emergencies across Dhaka and Rajshahi hospitals.',
        'Organized and coordinated community blood donation camps that screened and cataloged blood group data for 350+ donors into an emergency response database.',
        'Actively mobilized emergency donor dispatch networks for critical thalassemia and accident patients.',
      ],
      impactNumbers: [
        { label: 'Personal Donations', value: '20 Times' },
        { label: 'Donors In Database', value: '350+ People' },
        { label: 'Lives Impacted', value: 'Direct Lifesaving' },
      ],
    },
    {
      id: 'nissorgo',
      role: 'Executive Committee Member',
      organization: 'Nissorgo Foundation',
      period: 'Nov 2020 – Dec 2023',
      badge: 'Executive Leadership',
      badgeColor: '#f59e0b',
      image: asset('/images/community/winter-relief.jpg'),
      gallery: [
        asset('/images/community/winter-relief.jpg'),
        asset('/images/community/ramadan-iftar.jpg'),
      ],
      galleryCaptions: [
        '❄️ Winter Blanket Drive (200+ Blankets)',
        '🌙 Ramadan Daily Iftar (50+ Meals/Day)',
      ],
      facebookUrl:
        'https://www.facebook.com/nisorgo.foundation/posts/pfbid0tZ3HbuSrQAhHoGnZnUUP4pLCgyf2ZkMcp3Cxt2WwfhedQQB3U9PqtogTPPgeUAN2l',
      facebookPosts: [
        {
          label: 'Winter Blanket Drive Post',
          url: 'https://www.facebook.com/nisorgo.foundation/posts/pfbid0tZ3HbuSrQAhHoGnZnUUP4pLCgyf2ZkMcp3Cxt2WwfhedQQB3U9PqtogTPPgeUAN2l',
        },
        {
          label: 'Ramadan Iftar Meal Drive Post',
          url: 'https://www.facebook.com/nisorgo.foundation/posts/pfbid023AnYkYkeTZR1PS6549eNr6hG5A7whdPETEHmD3sWkr8CnQdrm4whw8hwCUgnTw9el',
        },
      ],
      bullets: [
        'Served on the core leadership team to plan humanitarian food drives, providing daily Iftar to 50+ underprivileged people every day during Ramadan.',
        'Managed supply chain logistics and fund allocation to distribute comprehensive Eid food packages to 80 disadvantaged families.',
        'Spearheaded annual winter relief campaigns, purchasing and distributing 200+ warm blankets per year to vulnerable populations facing harsh winters.',
      ],
      impactNumbers: [
        { label: 'Daily Ramadan Meals', value: '50+ / Day' },
        { label: 'Eid Packages', value: '80 Families' },
        { label: 'Winter Blankets', value: '200+ / Year' },
      ],
    },
    {
      id: 'srijon',
      role: 'Volunteer Instructor',
      organization: 'Project Srijon, BRAC University',
      period: 'Sep 2022 – Dec 2022',
      badge: 'Digital Literacy',
      badgeColor: '#00f5d4',
      image: asset('/images/community/srijon-certificate.jpg'),
      gallery: [
        asset('/images/community/srijon-certificate.jpg'),
        asset('/images/community/srijon-class.jpg'),
      ],
      galleryCaptions: [
        '📜 BRAC University Certificate of Completion',
        '🏫 Digital Literacy Classroom in Session',
      ],
      bullets: [
        'Taught fundamental computer literacy, Microsoft Office suite, and safe internet navigation to 60+ underprivileged children over an intensive 10-week curriculum.',
        'Mentored 30 students per classroom batch, creating an engaging and encouraging environment that achieved a stellar 90% course completion rate.',
        'Empowered first-generation young learners with essential digital tools for their ongoing schooling and future opportunities.',
      ],
      impactNumbers: [
        { label: 'Students Taught', value: '60+ Children' },
        { label: 'Program Length', value: '10 Weeks' },
        { label: 'Completion Rate', value: '90% Graduated' },
      ],
    },
  ],

  // ==========================================
  // SIDE QUESTS & SAFE HOUSE (LIFE OUTSIDE TECH)
  // ==========================================
  hobbies: [
    {
      id: 'bike-trips',
      title: 'On The Road',
      subtitle: 'Dhaka to Sreemangal Highway Expedition',
      tag: 'Motorcycle Touring',
      description:
        'Long highway ride from Dhaka to Sreemangal on my blue Honda motorcycle. Cruised through scenic tea estates and reached Baikka Beel Permanent Fish Sanctuary in Moulvibazar. Open asphalt and fresh air are the ultimate reset.',
      image: asset('/images/hobbies/bike-sreemangal-2.jpg'),
      gallery: [
        asset('/images/hobbies/bike-sreemangal-2.jpg'),
        asset('/images/hobbies/bike-sreemangal-1.jpg'),
      ],
      stats: [
        { label: 'Expedition', value: 'Dhaka ➔ Sreemangal' },
        { label: 'Steed', value: 'Blue Honda Bike' },
        { label: 'Key Stop', value: 'Baikka Beel Sanctuary' },
      ],
      quote: '"Always on the run — from city traffic to the tea garden highways of Sreemangal."',
    },
    {
      id: 'skating',
      title: 'Skate & Flow',
      subtitle: 'Board Life & Kinetic Balance',
      tag: 'Skateboarding',
      description:
        'Learning to skateboard has been an exercise in patience, balance, and falling until you land the trick. Finding smooth pavement and cruising around campus grounds is the ultimate flow state.',
      video: asset('/images/hobbies/skating.mp4'),
      videoRotation: 90,
      stats: [
        { label: 'Current Quest', value: 'Mastering Kickturns & Ollies' },
        { label: 'Style', value: 'Street Cruising' },
        { label: 'Mentality', value: 'Get back up every time' },
      ],
      quote: '"Progress in skating is like debugging: fail 50 times to get it right once."',
    },
    {
      id: 'fps-gaming',
      title: 'FPS Tactician (Peak Immortal)',
      subtitle: '1st Runners-Up @ Colosseum 1.0 (BRACU Valorant Championship)',
      tag: 'Competitive Esports',
      badge: 'Peak Immortal',
      image: asset('/images/hobbies/valorant.jpg'),
      facebookUrl:
        'https://www.facebook.com/photo?fbid=137226712779869&set=a.107579692411238',
      description:
        'Secured 1st Runners-Up with Team Arcane ES at Colosseum 1.0 — the premier Intra-University Valorant Championship at BRAC University (IGN: MSS NATHANDRAKEA). Reached Peak Rank of Immortal in Valorant. High-stakes clutch rounds, team utility coordination, and sub-200ms reflex decisions.',
      stats: [
        { label: 'Peak Rank', value: 'Immortal (Top 0.5%)' },
        { label: 'Tournament', value: '1st Runners-Up (BRACU)' },
        { label: 'Team & IGN', value: 'Arcane ES | MSS NATHANDRAKEA' },
      ],
      quote:
        '"A salute to Arcane ES — true competitors showcasing the heart and soul of esports at Colosseum 1.0."',
    },
    {
      id: 'tin-goyenda',
      title: 'The Mystery Detective',
      subtitle: 'Grew Up on Sheba Prokashoni',
      tag: 'Reading & Lore',
      description:
        'Avid reader since childhood. Devoured every single Tin Goyenda (3 Goyenda: Kishore, Musa, Robin) paperback by Rokib Hasan. That sense of curiosity, puzzle-solving, and sleuthing directly fuels how I debug code and reverse-engineer problems today!',
      image: '/images/hobbies/tin-goyenda.jpg',
      stats: [
        { label: 'Favorite Series', value: 'Tin Goyenda (তিন গোয়েন্দা)' },
        { label: 'Childhood Hero', value: 'Kishore Pasha' },
        { label: 'Genre', value: 'Mystery & Investigation' },
      ],
      quote: '"আমরা তিন গোয়েন্দা — যে কোনো রহস্যের সমাধান করি!"',
    },
    {
      id: 'food-photography',
      title: 'Food & Moments',
      subtitle: 'Street Eats & Visual Framing',
      tag: 'Photography',
      description:
        'Hunting down the best biryani spots, street cha, and hidden culinary gems around old Dhaka. Documenting spontaneous street moments, neon nightscapes, and road adventures through mobile photography.',
      image: '/images/hobbies/food-photography.jpg',
      stats: [
        { label: 'Focus', value: 'Street Life & Food' },
        { label: 'Must-Have', value: 'Kacchi Biryani & Matka Cha' },
        { label: 'Perspective', value: 'Raw & Unfiltered' },
      ],
      quote: '"Life happens in between the keyframes."',
    },
  ],
};

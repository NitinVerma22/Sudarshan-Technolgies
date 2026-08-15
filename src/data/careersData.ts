import { 
  Code2, 
  Palette, 
  BarChart2, 
  Smartphone, 
  CheckSquare, 
  FileSpreadsheet, 
  PenTool, 
  Cpu, 
  TrendingUp, 
  Briefcase,
  Video,
  Share2,
  Lightbulb
} from "lucide-react";

export interface InternshipRole {
  id: string;
  title: string;
  category: "Development" | "Design & Content" | "Data & Business" | "QA & AI";
  icon: any;
  department: string;
  location: "Lucknow (Hybrid)" | "Remote" | "On-site (Lucknow)";
  duration: string;
  type: "Full-Time Internship" | "Part-Time Internship";
  stipend: string;
  openings: number;
  featured?: boolean;
  status: "Open" | "Closed";
  goodFor?: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  perks: string[];
}

export const internshipRoles: InternshipRole[] = [
  {
    id: "app-testing-qa-intern",
    title: "App Testing & QA Intern",
    category: "QA & AI",
    icon: CheckSquare,
    department: "Quality Engineering",
    location: "Lucknow (Hybrid)",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend + Certificate",
    openings: 5,
    featured: true,
    status: "Open",
    goodFor: "BCA, MCA, B.Tech, IT/CS students (No prior experience required)",
    description: "Best option for students to get hands-on experience! Test SikkaPlay app & games, identify bugs, test wallet/withdrawal flows, and suggest improvements.",
    responsibilities: [
      "Test SikkaPlay app and games for bugs, errors, and performance glitches",
      "Thoroughly test login, gameplay, rewards, wallet balance, and withdrawal flows",
      "Record bugs with clear screenshots and screen recording videos",
      "Suggest UI/UX and game experience improvements",
      "Retest bugs after developer fixes to ensure complete resolution"
    ],
    skills: ["Android / Mobile Knowledge", "Bug Observation", "Google Sheets / Excel", "Quality Testing"],
    perks: ["Certificate of Completion", "Mentorship by Senior QA Lead", "PPO Opportunity", "Live App Testing"]
  },
  {
    id: "ai-content-reels-intern",
    title: "AI Content & Reels Intern",
    category: "Design & Content",
    icon: Video,
    department: "Media & AI Creative",
    location: "Remote / Hybrid",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend + Bonuses",
    openings: 4,
    featured: true,
    status: "Open",
    goodFor: "Anyone interested in content creation & AI, even beginners",
    description: "Create engaging Instagram Reels and YouTube Shorts for SikkaPlay promotions using cutting-edge AI video tools, CapCut, and Canva.",
    responsibilities: [
      "Create viral Instagram Reels and YouTube Shorts for SikkaPlay promotional campaigns",
      "Leverage AI video-generation tools to produce high-performing videos fast",
      "Edit videos, write engaging captions, and design eye-catching thumbnails",
      "Experiment with creative video concepts, trends, and audio hooks"
    ],
    skills: ["CapCut / Canva", "AI Video Tools", "Reels & Shorts Editing", "Creative Storytelling"],
    perks: ["Hands-on AI Video Experience", "Published Content", "Flexible Hours", "Performance Bonus"]
  },
  {
    id: "social-media-marketing-intern",
    title: "Social Media & Digital Marketing Intern",
    category: "Design & Content",
    icon: Share2,
    department: "Growth Marketing",
    location: "Remote / Hybrid",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend + Incentives",
    openings: 4,
    featured: true,
    status: "Open",
    goodFor: "Beginners & Marketing enthusiasts (No prior experience required)",
    description: "Manage Instagram & YouTube channels, upload Shorts/Reels, connect with relevant influencers for collaborations, and track engagement.",
    responsibilities: [
      "Manage Instagram & YouTube accounts and schedule daily Reels/Shorts",
      "Craft catchy captions, trending hashtags, and engagement hooks",
      "Find and reach out to relevant creators/influencers for page collaborations",
      "Track video views, reach, engagement metrics, and analyze competitors"
    ],
    skills: ["Instagram & YouTube Marketing", "Canva Basics", "Good Communication", "Google Sheets"],
    perks: ["Real Campaign Budget Handling", "Influencer Outreach Experience", "Certificate", "PPO Track"]
  },
  {
    id: "web-dev-intern",
    title: "Web Development Intern",
    category: "Development",
    icon: Code2,
    department: "Engineering",
    location: "Lucknow (Hybrid)",
    duration: "3 - 6 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend + PPO Opportunity",
    openings: 4,
    featured: true,
    status: "Open",
    goodFor: "BCA / MCA / B.Tech CS & IT students",
    description: "Fix frontend/backend bugs, enhance website UI, build approved features, test APIs, work with databases, and push code via GitHub.",
    responsibilities: [
      "Fix frontend and backend bugs across live web applications",
      "Improve website UI, loading speeds, and responsive design",
      "Develop new features, integrate REST APIs, and manage database operations",
      "Use Git & GitHub for collaborative version control and deployment"
    ],
    skills: ["HTML/CSS/JavaScript", "Python / Node.js Backend", "SQL Basics", "Git & GitHub"],
    perks: ["Certificate of Completion", "Mentorship by Senior Leads", "PPO for top performers", "Live Project Commit History"]
  },
  {
    id: "product-research-innovation-intern",
    title: "Product Research & Innovation Intern",
    category: "Data & Business",
    icon: Lightbulb,
    department: "Product & Strategy",
    location: "Remote / Hybrid",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend",
    openings: 3,
    featured: true,
    status: "Open",
    goodFor: "Analytical & Creative minds (No coding required)",
    description: "Use SikkaPlay, identify UX friction points, propose new game/reward concepts, research competing apps, and present weekly improvements.",
    responsibilities: [
      "Actively use SikkaPlay and document usability issues or friction points",
      "Propose creative new features, mini-games, and user reward ideas",
      "Research competing gaming & reward applications in the market",
      "Analyze user experience flows and prepare structured weekly suggestions"
    ],
    skills: ["Observation Skills", "Creativity", "Analytical Thinking", "Basic Documentation"],
    perks: ["Direct Impact on Product Roadmap", "Certificate of Merit", "Product Management Exposure", "PPO Track"]
  },
  {
    id: "prompt-engineer-intern",
    title: "Prompt Engineer & AI Ops Intern",
    category: "QA & AI",
    icon: Cpu,
    department: "AI & Innovation",
    location: "Remote / Hybrid",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend",
    openings: 0,
    featured: false,
    status: "Closed",
    goodFor: "AI Enthusiasts",
    description: "Craft and evaluate prompts for LLMs. Applications for this cycle are currently closed.",
    responsibilities: [
      "Design advanced system prompts for AI agents",
      "Evaluate LLM output accuracy and safety guidelines"
    ],
    skills: ["LLM Prompting", "ChatGPT APIs", "Python"],
    perks: ["Certificate", "PPO Potential"]
  },
  {
    id: "graphic-ui-intern",
    title: "Graphic & UI/UX Design Intern",
    category: "Design & Content",
    icon: Palette,
    department: "Design & Creative",
    location: "Lucknow (Hybrid)",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend",
    openings: 0,
    featured: false,
    status: "Closed",
    goodFor: "Designers",
    description: "Design UI graphics and marketing assets. Applications for this cycle are currently closed.",
    responsibilities: [
      "Create high-fidelity wireframes and social media graphics"
    ],
    skills: ["Figma", "Photoshop", "UI/UX Principles"],
    perks: ["Portfolio", "Certificate"]
  },
  {
    id: "data-analyst-intern",
    title: "Data Analyst Intern",
    category: "Data & Business",
    icon: BarChart2,
    department: "Analytics",
    location: "Remote / Hybrid",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend",
    openings: 0,
    featured: false,
    status: "Closed",
    goodFor: "Data Enthusiasts",
    description: "Extract, clean, and visualize business data. Applications for this cycle are currently closed.",
    responsibilities: [
      "Query SQL databases and build PowerBI dashboards"
    ],
    skills: ["SQL", "Python", "PowerBI", "Excel"],
    perks: ["Certificate", "PPO Potential"]
  },
  {
    id: "business-analyst-intern",
    title: "Business Analyst Intern",
    category: "Data & Business",
    icon: FileSpreadsheet,
    department: "Business Operations",
    location: "Lucknow (Hybrid)",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend",
    openings: 0,
    featured: false,
    status: "Closed",
    goodFor: "BBA / MBA / IT Students",
    description: "Gather business requirements and map workflows. Applications for this cycle are currently closed.",
    responsibilities: [
      "Gather business requirements and document BRDs"
    ],
    skills: ["Requirement Gathering", "BRD Documentation", "Agile"],
    perks: ["Certificate", "PPO Potential"]
  }
];

export const careerPerks = [
  {
    icon: "Rocket",
    title: "Live SikkaPlay & Client Projects",
    description: "Work directly on live app testing, real campaigns, and feature deployments — no dummy assignments."
  },
  {
    icon: "GraduationCap",
    title: "1-on-1 Senior Mentorship",
    description: "Learn best practices, bug tracking, and creative workflows directly from experienced leads."
  },
  {
    icon: "Award",
    title: "Verified Certificate & LOR",
    description: "Receive an official Certificate of Internship and Letter of Recommendation (LOR) upon successful completion."
  },
  {
    icon: "Briefcase",
    title: "Pre-Placement Offer (PPO)",
    description: "Top performing interns get direct conversion offers to full-time roles with competitive compensation."
  },
  {
    icon: "DollarSign",
    title: "Stipend & Performance Bonuses",
    description: "Monthly performance-based stipends and bonuses for exceptional contribution and bug reporting."
  },
  {
    icon: "Users",
    title: "No Prior Experience Needed",
    description: "We hire based on enthusiasm, observation skills, and willingness to learn. Guidance provided from day 1."
  }
];

export const hiringSteps = [
  {
    step: "01",
    title: "Apply Online",
    description: "Select your preferred internship role and fill out our 1-minute application form."
  },
  {
    step: "02",
    title: "Profile Review",
    description: "Our hiring team reviews your details and Google Sheets/sample work within 24-48 hours."
  },
  {
    step: "03",
    title: "Quick Chat / Task",
    description: "Participate in a friendly 15-minute discussion and a short 1-day evaluation task."
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description: "Receive your Internship Offer Letter and start testing/building with Sudarshan Technologies!"
  }
];

export const internFaqs = [
  {
    question: "Do I need prior work experience to apply?",
    answer: "No! Roles like App Testing & QA, AI Content & Reels, Social Media Marketing, and Product Research require NO prior experience. We welcome BCA, MCA, B.Tech, BBA, and all passionate students."
  },
  {
    question: "What is the primary project we will be working on?",
    answer: "Interns will work directly on testing, marketing, content, and feature research for SikkaPlay app & games as well as client web systems."
  },
  {
    question: "Is there a stipend provided during the internship?",
    answer: "Yes, all active internships include performance-based stipends and milestone bonuses based on bug reports, content reach, and project delivery."
  },
  {
    question: "Are remote internships available?",
    answer: "Yes! AI Content & Reels, Social Media Marketing, and Product Research offer Remote options. App Testing & Web Development are Hybrid/Remote."
  },
  {
    question: "Will I get a Pre-Placement Offer (PPO)?",
    answer: "Yes! High-performing interns who show dedication, consistency, and good observation skills are routinely offered full-time job roles at Sudarshan Technologies."
  }
];

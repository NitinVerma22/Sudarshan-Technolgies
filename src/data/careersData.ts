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
  Briefcase 
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
  description: string;
  responsibilities: string[];
  skills: string[];
  perks: string[];
}

export const internshipRoles: InternshipRole[] = [
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
    description: "Build responsive, modern web apps using React, TypeScript, Tailwind CSS, and Node.js for real client projects.",
    responsibilities: [
      "Develop responsive UI components using React and Tailwind CSS",
      "Integrate RESTful APIs and handle dynamic state management",
      "Optimize website performance, loading speed, and cross-browser responsiveness",
      "Collaborate with backend engineers and UI/UX designers"
    ],
    skills: ["HTML/CSS", "JavaScript", "React.js", "Tailwind CSS", "Git & GitHub"],
    perks: ["Certificate of Completion", "Mentorship by Senior Leads", "PPO for top performers", "Live Client Projects"]
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
    stipend: "Performance Stipend + Bonuses",
    openings: 3,
    featured: true,
    description: "Craft, evaluate, and fine-tune prompts for LLMs (OpenAI, Claude, Llama) to automate workflows and enhance AI applications.",
    responsibilities: [
      "Design advanced system prompts and multi-shot instructions for AI agents",
      "Evaluate LLM output accuracy, hallucination rates, and safety guidelines",
      "Integrate LLMs with Python automation scripts and workflow tools",
      "Document prompt engineering patterns and benchmark AI performance"
    ],
    skills: ["LLM Prompting", "ChatGPT / Claude APIs", "Python Basics", "NLP Concepts", "Critical Thinking"],
    perks: ["Hands-on AI Experience", "Certificate", "Flexible Hours", "Cutting-edge Tech Exposure"]
  },
  {
    id: "app-dev-intern",
    title: "App Development Intern",
    category: "Development",
    icon: Smartphone,
    department: "Mobile Engineering",
    location: "Lucknow (Hybrid)",
    duration: "3 - 6 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend + PPO",
    openings: 3,
    featured: true,
    description: "Develop native and cross-platform mobile apps for Android and iOS using Flutter or React Native.",
    responsibilities: [
      "Implement mobile screens based on Figma UI/UX designs",
      "Connect mobile apps with REST APIs and Firebase backend services",
      "Debug performance bottlenecks and handle push notifications",
      "Assist in publishing apps to Google Play Store & Apple App Store"
    ],
    skills: ["Flutter / Dart", "React Native", "REST APIs", "State Management", "Mobile UI"],
    perks: ["App Deployment Experience", "Direct Mentorship", "Certificate", "PPO Track"]
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
    openings: 2,
    featured: false,
    description: "Design stunning UI components, social media creatives, brand assets, and marketing banners using Figma & Adobe Suite.",
    responsibilities: [
      "Create high-fidelity wireframes, interactive prototypes, and UI kits",
      "Design engaging graphics for social media campaigns and digital ads",
      "Maintain brand consistency across website, pitch decks, and marketing collaterals",
      "Incorporate user feedback and design modern, aesthetic interfaces"
    ],
    skills: ["Figma", "Photoshop", "Illustrator", "UI/UX Principles", "Color Theory"],
    perks: ["Build strong Portfolio", "Certificate", "Creative Freedom", "PPO Potential"]
  },
  {
    id: "data-analyst-intern",
    title: "Data Analyst Intern",
    category: "Data & Business",
    icon: BarChart2,
    department: "Analytics & Insights",
    location: "Remote / Hybrid",
    duration: "3 - 6 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend",
    openings: 2,
    featured: false,
    description: "Extract, clean, analyze, and visualize data to generate actionable insights for business growth and optimization.",
    responsibilities: [
      "Query SQL databases and clean raw data using Python (Pandas/NumPy)",
      "Build interactive dashboards in PowerBI / Tableau / Excel",
      "Track marketing funnel metrics, website analytics, and sales trends",
      "Present data-driven reports and recommendations to management"
    ],
    skills: ["SQL", "Python", "PowerBI / Tableau", "Excel", "Data Visualization"],
    perks: ["Real Client Datasets", "Analytics Certification", "Mentorship", "PPO Track"]
  },
  {
    id: "qa-testing-intern",
    title: "Quality Assurance & Testing Intern",
    category: "QA & AI",
    icon: CheckSquare,
    department: "Quality Engineering",
    location: "Lucknow (Hybrid)",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend",
    openings: 3,
    featured: false,
    description: "Ensure software reliability and seamless user experience through rigorous manual testing, test case creation, and API testing.",
    responsibilities: [
      "Write comprehensive test plans, test cases, and test scenarios",
      "Perform manual functional, regression, usability, and cross-browser testing",
      "Log, track, and verify software bugs using Jira/GitHub Issues",
      "Execute basic API testing using Postman"
    ],
    skills: ["Manual Testing", "Test Case Writing", "Postman / API Testing", "Jira / Bug Tracking", "QA Methodologies"],
    perks: ["Industry QA Exposure", "Certificate of Merit", "Hands-on Automation Training", "PPO Track"]
  },
  {
    id: "business-analyst-intern",
    title: "Business Analyst Intern",
    category: "Data & Business",
    icon: FileSpreadsheet,
    department: "Business Operations",
    location: "Lucknow (On-site / Hybrid)",
    duration: "3 - 6 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend + Incentives",
    openings: 2,
    featured: false,
    description: "Bridge the gap between business needs and technical teams by gathering requirements, creating wireframes, and mapping workflows.",
    responsibilities: [
      "Gather business requirements from stakeholders and document BRDs/PRDs",
      "Map business processes, user flows, and system architecture diagrams",
      "Conduct market research and competitor analysis for tech solutions",
      "Assist in project management and sprint planning"
    ],
    skills: ["Requirement Gathering", "BRD/SRS Documentation", "Flowcharting / Visio", "Agile / Scrum", "Communication"],
    perks: ["Client Interaction Exposure", "Certificate", "Management Mentorship", "PPO Track"]
  },
  {
    id: "content-writer-intern",
    title: "Content Writer & Copywriter Intern",
    category: "Design & Content",
    icon: PenTool,
    department: "Marketing & Content",
    location: "Remote / Hybrid",
    duration: "3 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend",
    openings: 3,
    featured: false,
    description: "Craft compelling tech blogs, website copy, social media posts, and SEO-optimized content to engage audience.",
    responsibilities: [
      "Write engaging SEO articles, tech blogs, and case study overviews",
      "Develop catchy social media captions, email newsletters, and ad copy",
      "Research trending tech topics and keyword opportunities",
      "Proofread, edit, and maintain consistent brand voice across channels"
    ],
    skills: ["Content Writing", "Copywriting", "SEO Basics", "Grammar & Proofreading", "Research"],
    perks: ["Published Bylines", "Certificate", "Flexible Remote Work", "Performance Bonus"]
  },
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing & SEO Intern",
    category: "Design & Content",
    icon: TrendingUp,
    department: "Growth Marketing",
    location: "Lucknow (Hybrid)",
    duration: "3 - 6 Months",
    type: "Full-Time Internship",
    stipend: "Performance Stipend + Incentives",
    openings: 4,
    featured: true,
    description: "Execute Google Ads, Meta ad campaigns, SEO optimization, and social media growth strategies for client accounts.",
    responsibilities: [
      "Manage social media calendars across Instagram, LinkedIn, and Facebook",
      "Conduct keyword research, on-page SEO, and backlink outreach",
      "Assist in setting up Meta Ads and Google Search campaign experiments",
      "Analyze analytics metrics to refine campaign targeting and ROAS"
    ],
    skills: ["SEO Basics", "Social Media Management", "Google Analytics", "Canva Basics", "Campaign Strategy"],
    perks: ["Ad Budget Handling", "Google & Meta Certifications Help", "Stipend", "PPO Opportunity"]
  }
];

export const careerPerks = [
  {
    icon: "Rocket",
    title: "Live Industry Projects",
    description: "Work directly on client applications, SaaS platforms, and digital campaigns — no dummy tasks."
  },
  {
    icon: "GraduationCap",
    title: "1-on-1 Senior Mentorship",
    description: "Learn best practices, code reviews, and industry tools directly from senior engineers & leads."
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
    description: "Monthly performance-based stipends and bonuses for exceptional project delivery."
  },
  {
    icon: "Users",
    title: "Vibrant Work Culture",
    description: "Work in a supportive, collaborative, and fast-paced environment where your ideas are valued."
  }
];

export const hiringSteps = [
  {
    step: "01",
    title: "Apply Online",
    description: "Select your preferred internship role and fill out our quick application form with your resume and portfolio."
  },
  {
    step: "02",
    title: "Profile Review",
    description: "Our hiring team reviews your resume, portfolio, GitHub, or writing samples within 48 hours."
  },
  {
    step: "03",
    title: "Short Task / Interview",
    description: "Participate in a friendly 20-minute technical or creative discussion and a short skill assignment."
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description: "Receive your formal Internship Offer Letter and start your journey with Sudarshan Technologies!"
  }
];

export const internFaqs = [
  {
    question: "Who can apply for these internship programs?",
    answer: "Students currently pursuing BCA, B.Tech, MCA, M.Tech, BBA, MBA, Graphic Design, or any related field, as well as recent graduates looking to gain practical experience, are eligible to apply."
  },
  {
    question: "Is there a stipend provided during the internship?",
    answer: "Yes, all our internships include performance-based stipends and milestone bonuses based on project contribution and dedication."
  },
  {
    question: "Are remote internships available?",
    answer: "Selected roles like Prompt Engineering, Data Analysis, and Content Writing offer remote options. Roles like Web Development, App Development, and QA are hybrid/on-site at our Lucknow center in Hazratganj/Chinhat."
  },
  {
    question: "What is the duration of the internship?",
    answer: "Most internships run for 3 months to 6 months depending on the domain and student university requirements."
  },
  {
    question: "Will I get a Pre-Placement Offer (PPO)?",
    answer: "Yes! High-performing interns who demonstrate technical capability, leadership, and consistency are routinely offered full-time job roles at Sudarshan Technologies."
  }
];

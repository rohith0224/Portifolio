export type SuitTheme = "iron" | "captain" | "spider";

export type NavItem = {
  id: "home" | "about" | "experience" | "projects" | "skills" | "education" | "research" | "contact";
  label: string;
};

export type HeroData = {
  firstName: string;
  lastName: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  primaryCta: {
    label: string;
    target: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  tertiaryCta: {
    label: string;
    href: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
};

export type AboutData = {
  title: string;
  paragraphs: string[];
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  stack: string[];
  description: string;
  bullets: string[];
  github?: string;
  live?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  location?: string;
  coursework?: string[];
};

export type ResearchItem = {
  title: string;
  publisher: string;
  conference?: string;
  link: string;
  description: string;
  bullets: string[];
};

export type ContactData = {
  email: string;
  github: string;
  linkedin: string;
  formNote: string;
};

export const defaultSuit: SuitTheme = "iron";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export const heroData: HeroData = {
  firstName: "Rohith",
  lastName: "Sunkara",
  role: "AI Engineer",
  headline:
    "I build intelligent systems using machine learning, LLMs, and modern AI technologies, and leverage full-stack development to turn advanced AI models into scalable, real-world applications.",
  location: "Arlington, VA, USA",
  email: "rohithsunkara06@gmail.com",
  github: "https://github.com/rohith0224",
  linkedin: "https://www.linkedin.com/in/sunkara-rohith-817288219/",
  primaryCta: {
    label: "Launch Projects",
    target: "projects",
  },
  secondaryCta: {
    label: "GitHub",
    href: "https://github.com/rohith0224",
  },
  tertiaryCta: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sunkara-rohith-817288219/",
  },
  stats: [
    { label: "AI Systems", value: "LLMs • RAG • Agents" },
    { label: "Stack", value: "Python · FastAPI · React" },
    { label: "Frontend", value: "React • TypeScript" },
  ],
};

export const aboutData: AboutData = {
  title: "About",
  paragraphs: [
    "I am an AI Engineer focused on building intelligent systems that combine machine learning, LLMs, and scalable software engineering to solve real-world problems.",
    "My work spans AI-powered recommendation systems, generative AI applications, multi-agent workflows, and backend platforms for domain-specific intelligence systems.",
    "Alongside AI, I am also skilled in full-stack development, which helps me turn models into production-ready applications with clean user experiences and reliable backend systems.",
    "I am currently pursuing a Master’s in Computer Science at George Washington University and actively building projects aligned with AI Engineer and Machine Learning Engineer roles.",
  ],
  highlights: ["LLMs", "Machine Learning", "FastAPI", "React", "Generative AI", "AWS"],
};

export const experienceData: ExperienceItem[] = [
  {
    company: "GlobalLogic",
    role: "Software Engineer Trainee",
    location: "Noida, India",
    duration: "March 2024 – July 2024",
    bullets: [
      "Developed and maintained full-stack web applications using HTML, CSS, TypeScript, React.js, Node.js, and Express.js.",
      "Collaborated with senior engineers on API integration, debugging, and performance optimization to improve application performance and reliability.",
      "Applied Git version control and Agile development practices to support efficient team collaboration and timely feature delivery.",
    ],
  },
  {
    company: "Yoshops.com",
    role: "Data Science Intern",
    location: "India",
    duration: "May 2022 – July 2022",
    bullets: [
      "Collected and analyzed large-scale retail datasets to uncover customer behavior patterns and product demand trends.",
      "Built machine learning models to improve demand forecasting accuracy and support personalized product recommendations.",
      "Automated data workflows using Python, Pandas, Scikit-learn, and SQL to improve efficiency in data-driven decision-making.",
    ],
  },
  {
    company: "The Sparks Foundation",
    role: "Data Science Intern",
    location: "India",
    duration: "March 2022 – April 2022",
    bullets: [
      "Performed data cleaning, exploratory data analysis, and visualization using Python, Pandas, and Matplotlib to derive actionable insights.",
      "Developed and tested supervised machine learning models for predictive analytics tasks.",
      "Implemented data preprocessing, feature engineering, and model evaluation techniques with Scikit-learn to improve model performance.",
    ],
  },
];

export const projectData: ProjectItem[] = [
  {
    title: "AI Job Recommendation System",
    subtitle: "Multi-class recommendation engine with GPT-powered skill extraction",
    stack: ["Python", "Scikit-learn", "TF-IDF", "Logistic Regression", "LangChain", "GPT-4o", "Streamlit"],
    description:
      "An AI-powered job recommendation system that analyzes job postings and predicts suitable roles using machine learning and NLP techniques.",
    bullets: [
      "Trained a multi-class classification model on 32,000+ job postings using TF-IDF and Logistic Regression.",
      "Achieved 97% Top-5 accuracy across 13 job roles and around 70% Top-1 accuracy across 20+ roles.",
      "Integrated GPT-4o through LangChain for intelligent skill extraction from resumes and job descriptions.",
      "Built an interactive Streamlit interface for personalized job recommendations.",
    ],
    github: "https://github.com/rohith0224/Skill-Based-Job-Recommendation-System",
  },
  {
    title: "GenieVision – Text-to-Image Generation with Latent Diffusion Models",
    subtitle: "Photorealistic image generation from prompts using latent diffusion",
    stack: ["Python", "PyTorch", "Diffusers", "CLIP", "VAE", "LoRA", "Latent Diffusion Models"],
    description:
      "A deep learning project that generates photorealistic images from text prompts using Latent Diffusion Models trained in latent space for efficient image synthesis.",
    bullets: [
      "Implemented a custom Latent Diffusion Model pipeline for text-to-image generation.",
      "Used CLIP-ViT-L/14 embeddings for semantic alignment between text prompts and generated images.",
      "Leveraged Stable Diffusion VAE encoders and decoders to reduce compute cost while maintaining image quality.",
      "Supported LoRA fine-tuning and evaluated generation quality using CLIP Score.",
    ],
  },
  {
    title: "AGI-Inspired Desktop Intelligence Agent",
    subtitle: "Planner-executor multi-agent system for cross-tool automation",
    stack: ["Python", "LLMs", "Multi-Agent Systems", "Planner-Executor Architecture", "APIs"],
    description:
      "An AGI-inspired desktop intelligence system that understands natural language requests and coordinates multiple specialized AI agents across documents, email, calendar, and the web.",
    bullets: [
      "Implemented a planner-executor architecture to decompose complex user requests into executable subtasks.",
      "Built specialized agents for email summarization, document analysis, calendar workflows, and web research.",
      "Integrated LLM-based reasoning with tool execution to automate multi-step workflows.",
      "Designed the system with a privacy-first approach so that only minimal abstract queries leave local context.",
    ],
  },
  {
    title: "DAIL Backend – AI Litigation Database Platform",
    subtitle: "FastAPI backend for structured AI litigation data and legal analytics",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST APIs", "Docker", "Render"],
    description:
      "A scalable backend platform built to modernize the Database of AI Litigation by managing legal cases, jurisdictions, documents, and taxonomy data through REST APIs.",
    bullets: [
      "Built FastAPI REST endpoints for cases, jurisdictions, dockets, documents, secondary sources, and taxonomy entities.",
      "Designed a relational PostgreSQL schema with SQLAlchemy to model legal entities and their relationships.",
      "Implemented search, filtering, and CRUD operations for structured legal analytics workflows.",
      "Deployed the API with interactive Swagger documentation for testing and integration.",
    ],
    github: "https://github.com/sudharshanreddyt/schema_forge",
    live: "https://schema-forge.onrender.com/docs#/",
  },
  {
    title: "Personalized Workout Recommendation System",
    subtitle: "Hybrid recommendation engine using multi-output classification and KNN",
    stack: ["Python", "Scikit-learn", "MultiOutputClassifier", "KNN", "Pandas", "NumPy"],
    description:
      "A machine learning application that provides personalized workout plans using demographic and health information combined with collaborative filtering.",
    bullets: [
      "Built a multi-output Logistic Regression model to predict fitness goal, workout type, exercises, and equipment simultaneously.",
      "Implemented collaborative filtering with K-Nearest Neighbors to recommend exercises based on similar users.",
      "Applied one-hot encoding, label encoding, and feature scaling with StandardScaler during preprocessing.",
      "Used age, BMI, hypertension, diabetes, and related health metrics to improve personalized recommendations.",
    ],
  },
  {
    title: "Blockchain Ticket Booking System",
    subtitle: "Ethereum dApp with NFT-based event ticketing",
    stack: ["Solidity", "Ethereum", "React.js", "MetaMask", "Hardhat", "Web3"],
    description:
      "A decentralized ticket booking platform that uses Ethereum smart contracts and NFTs to support secure event ticket purchases.",
    bullets: [
      "Developed Solidity smart contracts for event creation, ticket purchases, and on-chain ownership management.",
      "Minted purchased tickets as NFTs to ensure transparent and verifiable digital ticket ownership.",
      "Built a React.js frontend integrated with MetaMask for blockchain interaction.",
      "Used Hardhat for smart contract development, testing, and local deployment workflows.",
    ],
  },
];

export const skillData: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Python", "SQL", "Java", "TypeScript"],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "CNNs",
      "Latent Diffusion Models",
      "Logistic Regression",
      "Multi-output Classification",
      "KNN",
    ],
  },
  {
    title: "Generative AI",
    items: ["LLMs", "LangChain", "RAG Systems", "GPT-4o Integration", "CLIP Embeddings", "LoRA Fine-tuning"],
  },
  {
    title: "Web Development",
    items: ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "HTML", "CSS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Streamlit", "Hardhat", "MetaMask"],
  },
];

export const educationData: EducationItem[] = [
  {
    institution: "George Washington University",
    degree: "Master of Science in Computer Science",
    duration: "2024 – 2026",
    location: "Washington, DC, USA",
    coursework: ["Machine Learning", "Neural Networks & Deep Learning", "Cloud Computing", "Data Mining", "Database Systems"],
  },
  {
    institution: "GITAM Deemed University",
    degree: "Bachelor of Technology (BTech) in Computer Science",
    duration: "2019 – 2023",
    location:"Visakhapatnam,India",
    coursework: ["Neural Networks & Deep Learning", "Information retrival systems", "Data Mining", "Database Systems"]
  },
];

export const researchData: ResearchItem = {
  title: "Assiduous Study of Hyper-parameters Influence on CNN",
  publisher: "Springer",
  conference: "ICISC",
  link: "https://link.springer.com/chapter/10.1007/978-981-99-1624-5_23",
  description:
    "Published research analyzing how hyperparameters such as learning rate, batch size, dropout rate, and filter size affect Convolutional Neural Network performance, convergence, and generalization.",
  bullets: [
    "Conducted extensive experiments evaluating different CNN hyperparameter configurations.",
    "Analyzed effects on model accuracy, training stability, and overfitting.",
    "Provided insights for improving CNN training efficiency and architecture design.",
  ],
};

export const contactData: ContactData = {
  email: "rohithsunkara06@gmail.com",
  github: "https://github.com/rohith0224",
  linkedin: "https://www.linkedin.com/in/sunkara-rohith-817288219/",
  formNote: "Wire this form to Formspree or Resend to receive messages.",
};

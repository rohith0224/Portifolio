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
  role: "Data Scientist & AI Engineer",
  headline:
    "I turn complex data into measurable outcomes—combining 5+ years in analytics and machine learning with the engineering needed to take models from prototype to production.",
  location: "Arlington, VA, USA",
  email: "rohithsunkara06@gmail.com",
  github: "https://github.com/rohith0224",
  linkedin: "https://www.linkedin.com/in/rohithsunkara",
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
    href: "https://www.linkedin.com/in/rohithsunkara",
  },
  stats: [
    { label: "Experience", value: "5+ years in data & ML" },
    { label: "Modeling", value: "Forecasting · NLP · XGBoost" },
    { label: "Delivery", value: "Production ML · Cloud · BI" },
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
  highlights: [],
};

export const experienceData: ExperienceItem[] = [
  {
    company: "Sound of Earth",
    role: "Data Science and Systems Intern",
    location: "United States · Remote",
    duration: "Aug 2026 – Present · Internship",
    bullets: [
      "Maintain and support digital infrastructure across Notion, Supabase, and Zite, helping ensure reliability for a 15+ member cross-functional organization.",
      "Assist with workflow automation across 5+ n8n pipelines and backend features including database builds, farmers’ market listings, and interactive map integrations.",
      "Support data annotation, cleaning, and model training for environmental audio datasets with 10K+ labeled samples, and explore model evaluation techniques.",
      "Develop 4+ data visualization dashboards and prototype AI-assisted analytics for unstructured environmental sensor data across 3 monitoring domains.",
      "Contribute to 6+ GitHub repositories and collaborate with 4 department heads to configure scalable team workflows.",
    ],
  },
  {
    company: "The George Washington University",
    role: "Technical Support Assistant",
    location: "Washington, District of Columbia, United States · On-site",
    duration: "Oct 2024 – May 2026 · Part-time",
    bullets: [
      "Developed a Python and scikit-learn NLP classifier to triage 1,800 annual IT support requests for a 28,000-student community, reducing manual categorization by 8 technician-hours per week.",
      "Trained a Python and pandas time-series model on 3 years of incident data to forecast monthly ticket volumes by service category, helping prevent 4 critical understaffing events each semester.",
      "Automated workstation provisioning with PowerShell and Active Directory for 220 faculty and staff, reducing onboarding time from 3 days to 4 hours per cohort.",
    ],
  },
  {
    company: "HTC Global Services",
    role: "Data Scientist",
    location: "India",
    duration: "Jan 2023 – Jul 2024 · Full-time",
    bullets: [
      "Designed and productionized XGBoost and LightGBM models on 14 million transaction records, engineering 47 domain-specific ERP and POS features to deliver $3.2M in quarterly inventory cost savings.",
      "Built interactive Tableau dashboards adopted by 4 cross-functional teams, consolidating 11 data products for 60 stakeholders and eliminating 3 recurring weekly reporting meetings.",
      "Analyzed customer behavior and ran statistical hypothesis tests across 180,000 customers, identifying 6 high-value cohorts that informed campaigns and contributed to 14 contract renewals.",
      "Deployed models through AWS SageMaker inference endpoints with S3 artifact versioning, cutting batch prediction turnaround from 48 hours to 4 hours across 3 business units.",
      "Optimized 23 PostgreSQL and Snowflake queries, reducing report generation from 4.5 hours to 22 minutes and reclaiming 16 analyst-hours each week.",
    ],
  },
  {
    company: "Optum",
    role: "Data Analyst",
    location: "India",
    duration: "Apr 2021 – Dec 2022 · Full-time",
    bullets: [
      "Analyzed healthcare claims, clinical encounter, and pharmacy data for 4.7 million members, supporting risk stratification and $8.5M in preventive-care investment decisions across 6 regional programs.",
      "Contributed to readmission-risk models using logistic regression and random forests to help care teams identify 3,400 high-risk members per quarter under CMS and HEDIS guidelines.",
      "Automated 5 monthly Python and SQL ETL workflows across 5 product lines, cutting KPI delivery from 11 days to 2 days and removing 3 manual Excel consolidation steps.",
      "Created Power BI dashboards for HEDIS quality and cost-per-member metrics across 12 health plan types, replacing 3 legacy workbooks used by 25 senior directors while maintaining HIPAA-compliant data governance.",
      "Supported claims ingestion with Azure Data Factory and Blob Storage, contributing to cloud migration that reduced nightly batch transfer time from 6 hours to 45 minutes.",
    ],
  },
];

export const projectData: ProjectItem[] = [
  {
    title: "FDA Drug Safety Intelligence Agent",
    subtitle: "Production MCP server giving Claude governed access to live FDA FAERS pharmacovigilance data",
    stack: ["Python", "FastAPI", "MCP", "openFDA REST API", "Gemini", "Docker", "GCP Cloud Run"],
    description:
      "A production-grade MCP server that gives AI assistants like Claude Desktop governed access to live FDA FAERS pharmacovigilance data through four specialized tools — drug safety profiling, adverse event retrieval, drug comparison, and signal detection — covering 57,000+ real adverse event reports.",
    bullets: [
      "Built an LLM-as-Judge evaluation layer where Gemini independently scores Claude's responses for accuracy, hallucination, completeness, and attribution before they reach users.",
      "Applied drug characterization filtering to isolate primary suspect drugs from concomitant medications, improving signal accuracy over naive report counting.",
      "Debugged a production httpx URL encoding issue corrupting FDA's +AND+ query syntax by bypassing the param dict and building URL strings manually.",
      "Replaced sentence-transformers (2GB) with fastembed (200MB), cutting Docker build time from 20 minutes to 28 seconds, and deployed serverless on GCP Cloud Run with dual stdio/HTTP transport for local and production use from a single codebase.",
    ],
    github: "https://github.com/rohith0224/fda-drug-safety-agent",
  },
  {
    title: "RAG Notes Search – MCP Server",
    subtitle: "Semantic search MCP tool letting Claude autonomously query a personal knowledge base",
    stack: ["Python", "MCP", "ChromaDB", "fastembed", "sentence-transformers", "Docker", "GCP"],
    description:
      "A semantic search engine over personal notes exposed as an MCP tool — Claude Desktop autonomously decides when to query the knowledge base mid-conversation without hardcoded routing logic.",
    bullets: [
      "Built a hallucination guard threshold that returns \"no match\" instead of low-confidence results when similarity scores fall short.",
      "Replaced sentence-transformers (PyTorch, 2GB) with fastembed (ONNX, 200MB), cutting Docker build time from 20 minutes to 28 seconds.",
      "Used 384-dimension vector embeddings (all-MiniLM-L6-v2) with cosine similarity scoring and a configurable confidence threshold.",
      "Debugged five production issues spanning subprocess path resolution, MCP stdout wire pollution corrupting the JSON protocol, NumPy 2.0 breaking changes, Chroma version mismatches, and conda environment conflicts.",
    ],
    github: "https://github.com/rohith0224/rag-mcp-server",
  },
  {
    title: "ClearLine – Tax Platform Case Study",
    subtitle: "Role-aware tax platform prototype with AI transparency and document intelligence",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "PDF Parsing", "LLM Integration"],
    description:
      "A full-stack tax platform prototype that reimagines the tax preparation experience with role-aware interfaces, real-time AI assistance, and document intelligence — designed to solve 10 specific UX challenges in existing tax software.",
    bullets: [
      "Designed 6 distinct user role interfaces (taxpayer, accountant, auditor, admin, reviewer, support), each with tailored views and permissions.",
      "Built real-time AI guidance patterns with transparency features showing users why the AI made specific suggestions.",
      "Implemented PDF document parsing for automatic data extraction from tax documents into form fields.",
      "Enabled live collaboration features so multiple stakeholders can work on a case simultaneously.",
    ],
  },
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
  linkedin: "https://www.linkedin.com/in/rohithsunkara",
  formNote: "Wire this form to Formspree or Resend to receive messages.",
};

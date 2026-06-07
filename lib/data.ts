export const profile = {
  name: "Ayesha Patel",
  tagline: "Software Engineer",
  location: "Vadodara, India",
  email: "ayeshapatel0713@gmail.com",
  github: "https://github.com/ayesha1209",
  githubHandle: "ayesha1209",
  linkedin: "https://linkedin.com/in/ayeshapatel07",
  linkedinHandle: "ayeshapatel07",
  bio: "Software Engineering intern at Jeavio building enterprise AI backends, ONGC Scholar (top 1% in Gujarat), and founder of booKi, an AI-powered reading platform. I specialise in backend systems, relational databases, and full-stack development.",
};

export const education = [
  {
    degree: "Bachelor of Engineering (B.E) in Computer Science",
    institution: "Maharaja Sayajirao University of Baroda",
    location: "Gujarat, India",
    period: "Sept 2022 – May 2026",
    gpa: "8.37 / 10",
    highlight: "ONGC Scholar, Top 1% academic achiever in Gujarat",
  },
];

// ── What I Do ──────────────────────────────────────────
export const services = [
  {
    icon: "⚛️",
    title: "Full-Stack Development",
    description:
      "End-to-end web apps with React / Next.js frontends backed by FastAPI or Node.js, wired to real databases. From landing page to production.",
    tags: ["React", "Next.js", "FastAPI", "Node.js"],
  },
  {
    icon: "🤖",
    title: "AI / ML Engineering",
    description:
      "Predictive models, LLM integrations, RAG pipelines, chatbots. I train, evaluate, and ship. Not just prototype.",
    tags: ["Python", "XGBoost", "LLMs", "RAG", "OpenCV"],
  },
  {
    icon: "🗄️",
    title: "Backend & Database Systems",
    description:
      "Scalable REST APIs, schema design, RBAC, query tuning, real-time pipelines. Built for high availability and multi-tenant environments.",
    tags: ["PostgreSQL", "MySQL", "Firebase", "AWS S3/SQS"],
  },
  {
    icon: "🌐",
    title: "Client Websites & Full Setup",
    description:
      "Clean, fast, SEO-ready websites built and fully deployed. Domain registration, DNS configuration, hosting setup, professional email (Microsoft 365 / Google Workspace), and SSL. Everything handled end to end so clients go live without touching a single setting.",
    tags: ["Next.js", "Tailwind CSS", "DNS", "Email Setup", "Hosting", "Domain Config"],
  },
];

// ── Experience ────────────────────────────────────────
export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Jeavio India Pvt Ltd",
    location: "Vadodara",
    period: "Dec 2025 – Present",
    description:
      "Built the backend for AvatarForge, a no-code multimodal RAG chatbot platform at a US-based product company. Owned the multimodal ingestion pipeline (Celery + SQS), SSE real-time updates using Valkey pub/sub, semantic chunking with MMR reranking, DeepEval evaluation module, Slack YAML manifest auto-generation, and an embeddable web widget with full CSS isolation.",
    stack: ["FastAPI", "Python", "PostgreSQL", "pgvector", "Amazon Bedrock", "AssemblyAI", "AWS SQS", "Celery"],
  },
  {
    role: "AI / ML Intern",
    company: "ONGC",
    location: "Vadodara",
    period: "May 2025 – June 2025",
    description:
      "Built a predictive maintenance model (R² = 0.98) on industrial sensor data using XGBoost. Also developed an AI-based interview tool that reads resumes and conducts contextual interviews automatically.",
    stack: ["Python", "SQL", "XGBoost", "Scikit-learn"],
  },
  {
    role: "Software Engineering Intern",
    company: "Legasis Services Pvt Ltd",
    location: "Mumbai",
    period: "June 2024 – July 2024",
    description:
      "Integrated a Gemini-powered chatbot over large legal PDF repositories using RAG architecture and FAISS vector search, with role-scoped access and data privacy enforcement.",
    stack: ["Gemini", "FAISS", "Python", "RAG"],
  },
];

// ── Projects ──────────────────────────────────────────
export const projects = [
  // ── WORK / INTERNSHIP ──
  {
    title: "AvatarForge",
    subtitle: "No-Code Multimodal RAG Chatbot Platform",
    tag: "Jeavio · Internship",
    description: "Build your own chatbot in minutes. No code needed.",
    bullets: [
      "Upload PDFs, videos, audio, images, or crawl a website: the bot learns from it all",
      "Give it a custom name, avatar, and personality to match your brand",
      "Embed on any website with a single script tag",
      "Multimodal RAG pipeline: routes by media type, semantic chunking, MMR reranking",
      "Real-time ingestion status via SSE + Valkey pub/sub",
      "Built-in Evals module: response relevance, completeness, and latency scoring",
      "Slack integration auto-generates a YAML manifest, setup reduced from 20 min to 2 min",
    ],
    stack: ["FastAPI", "Python", "PostgreSQL", "pgvector", "Amazon Bedrock", "AssemblyAI", "AWS S3", "AWS SQS", "React", "Celery"],
    link: null,
    images: [
      "/projects/avatarforge/A-1.png",
      "/projects/avatarforge/A-1-1.png",
      "/projects/avatarforge/A-2.png",
      "/projects/avatarforge/A-3.png",
      "/projects/avatarforge/A-4.png",
    ],
    featured: true,
    category: "work",
  },

  // ── CLIENT FREELANCE ──
  {
    title: "Vertex Quotation AI",
    subtitle: "AI Document Generation Platform",
    tag: "Freelance · Client",
    description:
      "Eliminates hours of manual document work for chemical sales teams. Upload an Excel enquiry and the platform instantly generates polished Quotations, Certificates of Analysis (COAs), Technical Data Sheets (TDS), and Material Safety Data Sheets (MSDS), each formatted to spec using OpenAI. A TipTap-powered inline editor lets teams tweak AI output before exporting to PDF or DOCX. A batch dashboard tracks all enquiries, document status, and revisions in one place.",
    stack: ["React", "FastAPI", "MongoDB", "OpenAI", "TypeScript", "Tailwind CSS"],
    link: null,
    images: ["/projects/vertex/VERTEX-AI.png"],
    category: "client",
  },
  {
    title: "Vertex Chemical",
    subtitle: "Corporate Website",
    tag: "Freelance · Client",
    description:
      "Full corporate website for Vertex Chemical, a chemical manufacturing company selling to B2B buyers. Built a structured product catalogue with detailed specs, a company profile, and a multi-channel enquiry system. Designed to build trust with industrial buyers: fast-loading, mobile-responsive, and professionally branded. Delivered with complete infra: DNS configuration, custom domain, business email setup, and production hosting.",
    stack: ["Next.js", "Tailwind CSS", "DNS", "Email Setup", "Hosting"],
    link: "https://vertexchemical.in/",
    previewUrls: ["https://vertexchemical.in/"],
    images: [] as string[],
    category: "client",
  },
  {
    title: "Vertex Engineering",
    subtitle: "Corporate Website",
    tag: "Freelance · Client",
    description:
      "Corporate website for Vertex Engineering Services covering their complete services breakdown, product portfolio with specifications, and a streamlined enquiry form. Built to convert B2B prospects browsing for industrial solutions. Delivered end-to-end: domain registration, DNS setup, business email forwarding, and production deployment, fully live with no client involvement in setup.",
    stack: ["Next.js", "Tailwind CSS", "DNS", "Email Setup", "Hosting"],
    link: "https://www.vertexengineerings.in/",
    previewUrls: ["https://www.vertexengineerings.in/"],
    images: [] as string[],
    category: "client",
  },

  // ── PERSONAL / ACADEMIC ──
  {
    title: "PLANit",
    subtitle: "AI-Driven Event Planning Platform",
    tag: "TinkerThon 2025 · 3rd Place",
    description:
      "We built PLANit as our answer to the mess of event planning: an AI-driven platform powered by Android Studio, Firebase, and RAG (Retrieval-Augmented Generation), built to simplify the complex. What started as a rough sketch turned into something that actually worked. RAG surfaces intelligent event templates, vendor suggestions, and scheduling logic in real time, all wrapped in a clean Android app backed by Firebase.",
    stack: ["Android Studio", "Firebase", "RAG", "Java"],
    link: null,
    images: ["/projects/planit/P-1.png", "/projects/planit/P-2.png"],
    category: "personal",
  },
  {
    title: "EarliSense",
    subtitle: "AI Call Intelligence Platform",
    tag: "AtliQ Hackathon · 1st Place · 2025",
    description:
      "Won 1st place at AtliQ Hackathon 2025 for building a live AI call intelligence platform in under 24 hours. The system monitors sales calls in real time: wav2vec2 handles tonal and prosodic sentiment while a fine-tuned BERT model runs textual analysis on the conversation. Each call gets scored: positive leads are automatically forwarded to the sales pipeline, unqualified ones are gracefully closed. Built with LSTM initially, pivoted mid-hackathon to fine-tuned BERT after benchmarking showed 3× faster inference and sharply higher precision on domain-specific sales language.",
    stack: ["Python", "wav2vec2", "BERT", "FastAPI", "NLP"],
    link: null,
    images: ["/projects/earlisense/earlisense.jpg"],
    category: "personal",
  },
  {
    title: "booKi",
    subtitle: "AI-Powered Book Reading App",
    tag: "Founder · 2024",
    description:
      "Founded and built a Gen Z reading app that serves AI-curated book snippets in an infinite feed with a daily streak system that keeps you coming back. Designed the entire product solo: UX, backend, and AI recommendation layer, and shipped it from idea to live app. The AI layer personalises snippet selection and reading length to each user's pace and taste over time. Mentored by a Stanford advisor during development.",
    stack: ["React Native", "Firebase", "AI/ML"],
    link: null,
    images: ["/projects/booki/1.png", "/projects/booki/2.png", "/projects/booki/3.png", "/projects/booki/4.png", "/projects/booki/5.png"],
    wide: true,
    category: "startup",
  },
  {
    title: "AirType Pro",
    subtitle: "Type Without Touching a Keyboard",
    tag: "Personal Project",
    description:
      "Real-time hand tracking that translates mid-air finger gestures into key presses through a standard webcam, no special hardware. Built in 48 hours. Practical use cases in healthcare, accessibility, and clean environments.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    link: null,
    images: [] as string[],
    video: "/video.mp4",
    wide: true,
    category: "personal",
  },
  {
    title: "FootPrints '25",
    subtitle: "Tech Festival: Main Website",
    tag: "Core Team · 2023–25",
    description:
      "Festival website for Gujarat's largest tech event with 25,000+ attendees. Zero downtime under peak traffic.",
    stack: ["React", "MySQL", "Node.js"],
    link: "https://footprints-25.vercel.app/",
    previewUrls: ["https://footprints-25.vercel.app/"],
    images: [] as string[],
    category: "personal",
  },
  {
    title: "FootPrints '25: Coming Soon",
    subtitle: "Pre-launch Teaser Site",
    tag: "Core Team · 2025",
    description:
      "Pre-launch teaser page built to build hype before the festival goes live.",
    stack: ["React", "Tailwind CSS"],
    link: "https://foot-prints-25.vercel.app/",
    previewUrls: ["https://foot-prints-25.vercel.app/"],
    images: [] as string[],
    category: "personal",
  },
];

// ── Achievements ──────────────────────────────────────
export const achievements = [
  {
    title: "booKi: Seed Funding",
    detail: "Raised ₹2.5L, Stanford mentor collaboration, early-stage investors",
    year: "2024",
  },
  {
    title: "PLANit: TinkerThon 2025",
    detail: "3rd place among 400+ teams at a national-level hackathon",
    year: "2025",
  },
  {
    title: "Core Member, FootPrints",
    detail: "Managed ₹3M sponsorships, led social impact campaigns, 25,000+ attendees",
    year: "2023–2025",
  },
  {
    title: "NCC Cadet: Alpha Grade, C & B Certificate",
    detail: "Led winning cultural and debate teams at state-level NCC camps",
    year: "",
  },
];

// ── Skills ────────────────────────────────────────────
export const skills = {
  Databases: ["PostgreSQL", "MySQL", "Firebase", "Oracle", "FAISS", "SQL Server"],
  "Database Skills": ["Schema Design", "RBAC", "Query Optimisation", "Indexing", "Stored Procedures"],
  Programming: ["Python", "Java", "JavaScript", "SQL", "React", "C++"],
  "Tools & Platforms": ["AWS S3", "AWS SQS", "FastAPI", "Git", "XGBoost", "Scikit-learn", "OpenCV"],
};

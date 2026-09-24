export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  narrative: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "magpie",
    company: "Talk to Magpie AI",
    role: "Product Manager Associate",
    location: "London / Remote",
    period: "Sep 2026 → Present",
    narrative:
      "I work with the product team to understand how customers use AI roleplay and training experiences, turn user feedback into product insights, and help shape product and roadmap decisions.",
  },
  {
    id: "harrods",
    company: "Harrods",
    role: "Student Consultant · London LAB",
    location: "London",
    period: "Mar 2026 → Jun 2026",
    narrative:
      "Harrods gave us a broad commercial challenge rather than a predefined product. I helped narrow the problem into an AI forecasting opportunity and worked with transaction data to understand demand, customer behaviour and where analytics could support commercial decisions.",
  },
  {
    id: "perficient",
    company: "Perficient",
    role: "Associate Technical Consultant",
    location: "Bangalore",
    period: "Jun 2023 → Oct 2024",
    narrative:
      "Sixteen months building AI, ML, automation and B2B digital products for enterprise clients. Sitting between business requirements and technical implementation across GenAI platforms, knowledge retrieval, document AI, and B2B eCommerce.",
  },
  {
    id: "code-facts",
    company: "Code Facts",
    role: "Software Development Intern",
    location: "Remote",
    period: "Jan 2023 → May 2023",
    narrative:
      "My first proper engineering team. I worked across the application stack and learned what it actually takes for code to become something other people depend on.",
  },
  {
    id: "vit",
    company: "VIT University",
    role: "Research Assistant",
    location: "India",
    period: "Sep 2021 → Aug 2022",
    narrative:
      "Applied deep convolutional neural networks to scientific imaging data using transfer learning and explainability techniques on small, noisy 3D volumes.",
  },
];

export type ClientProject = {
  id: string;
  client: string;
  kicker: string;
  line: string;
};

export const PERFICIENT_PROJECTS: ClientProject[] = [
  {
    id: "core-genai",
    client: "Core GenAI Platform",
    kicker: "Platform / LLM assistants",
    line: "Prototypes were easy. A platform that stayed fast and observable under real load was not.",
  },
  {
    id: "caterpillar",
    client: "Caterpillar",
    kicker: "Knowledge systems",
    line: "Operational knowledge existed. It was just scattered across documents and people.",
  },
  {
    id: "aristocrat",
    client: "Aristocrat",
    kicker: "Document & finance automation",
    line: "Finance was reading and re-keying documents by hand, every single month.",
  },
  {
    id: "northshore",
    client: "NorthShore Care Supply",
    kicker: "B2B eCommerce · Product & Technology",
    line: "Reengineering a B2B eCommerce experience across product discovery, checkout and payments.",
  },
];

export type Work = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  role: string;
  date: string;
  category: string;
  lede: string;
  points: string[];
  metrics?: { value: string; label: string }[];
};

export const WORKS: Work[] = [
  {
    id: "magpie",
    index: "01",
    title: "Talk to Magpie AI",
    subtitle: "AI Roleplay & Voice UX",
    role: "Product Manager Associate",
    date: "Sep 2026 → Present",
    category: "AI Product",
    lede: "At Magpie, I work with the product team to understand how customers use AI roleplay and training experiences, turn user feedback into product insights, and help shape product and roadmap decisions.",
    points: [
      "Speak with users to understand where the product helps and where experiences break down",
      "Identify friction across onboarding, conversation flow and product usage",
      "Analyse feedback to surface recurring product opportunities",
      "Help test and refine AI product experiences",
      "Contribute to product and roadmap decisions",
    ],
    metrics: [
      { value: "Customer insight", label: "surfaced from direct user interviews" },
      { value: "Roadmap impact", label: "guiding product & AI interaction quality" },
    ],
  },
  {
    id: "harrods",
    index: "02",
    title: "Harrods",
    subtitle: "AI Forecasting & Customer Analytics",
    role: "Student Consultant · London LAB",
    date: "Mar 2026 → Jun 2026",
    category: "AI × Analytics × Product",
    lede: "Harrods gave us a broad commercial challenge rather than a predefined product. I helped narrow the problem into an AI forecasting opportunity and worked with transaction data to understand demand, customer behaviour and where analytics could support commercial decisions.",
    points: [
      "Worked with 13M+ transactions across categories",
      "Explored category-level revenue forecasting",
      "Used customer segmentation and K-Means clustering to identify behavioural groups",
      "Analysed behavioural regimes to understand changes in purchasing patterns",
      "Helped translate the analysis into a forecasting MVP and commercial recommendations",
      "Presented findings and recommendations to senior stakeholders",
    ],
    metrics: [
      { value: "13M+", label: "transactions analysed" },
      { value: "£239M", label: "2026 revenue view" },
    ],
  },
  {
    id: "perficient",
    index: "03",
    title: "Enterprise AI & Automation",
    subtitle: "Perficient · AI, Data, Automation & B2B Technology",
    role: "Associate Technical Consultant",
    date: "Jun 2023 → Oct 2024",
    category: "Enterprise AI & Digital Products",
    lede: "I worked across AI, ML, automation and B2B commerce projects for enterprise clients, often sitting between business requirements and technical implementation.",
    points: [
      "Core GenAI Platform: LLM assistants, retrieval pipelines, 10K+ daily queries, <2s latency",
      "Caterpillar: Enterprise knowledge systems designed around response speed and reliability",
      "Aristocrat: Document AI automation removing 80%+ manual entry and 1,200+ staff hours/month",
      "NorthShore Care Supply: B2B eCommerce reengineering across discovery, checkout, and Stripe payments",
    ],
    metrics: [
      { value: "10K+", label: "daily queries" },
      { value: "<2s", label: "response latency" },
      { value: "99.9%", label: "uptime" },
    ],
  },
  {
    id: "forecasting",
    index: "04",
    title: "Demand Forecasting",
    subtitle: "XGBoost · 120K+ sales records",
    role: "Associate Technical Consultant",
    date: "2023 → 2024",
    category: "Machine Learning & Time-Series",
    lede: "Built demand forecasting models using historical sales data and time-series feature engineering.",
    points: [
      "Engineered time-series features across historical sales data",
      "Tuned XGBoost regression models for forward demand estimation",
      "Surfaced forecasts to operational teams to inform planning horizon",
    ],
    metrics: [
      { value: "120K+", label: "sales records" },
      { value: "XGBoost", label: "time-series model" },
    ],
  },
  {
    id: "vit",
    index: "05",
    title: "Cryo-Electron Tomography",
    subtitle: "VIT University · Research Assistant",
    role: "Research Assistant, VIT",
    date: "Sep 2021 → Aug 2022",
    category: "Machine Learning / Research",
    lede: "Applied deep convolutional neural networks to scientific imaging data using transfer learning and explainability techniques.",
    points: [
      "Trained 3D convolutional neural networks on noisy volumetric imaging data",
      "Applied Explainable AI (XAI) to verify model feature attribution for scientists",
      "Achieved 90% classification accuracy on 10K+ scientific images",
    ],
    metrics: [
      { value: "10K+", label: "images analysed" },
      { value: "90%", label: "classification accuracy" },
    ],
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  role: string;
  context: string;
  year: string;
  situation: string;
  what: string;
  approach: { step: string; body: string }[];
  outcome: { value: string; label: string }[];
  tools: string[];
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  magpie: {
    id: "magpie",
    title: "Talk to Magpie AI",
    role: "Product Manager Associate",
    context: "AI Product · Voice & AI Experiences",
    year: "Sep 2026 → Present",
    situation:
      "Understanding how users interact with AI voice and roleplay experiences, identifying where conversation flows break, and figuring out what needs to change to make the product more valuable.",
    what: "At Magpie, I work with the product team to understand how customers use AI roleplay and training experiences, turn user feedback into product insights, and help shape product and roadmap decisions. My work spans user feedback, voice UX, conversation flow, assessment experiences, and recovery from poor interactions.",
    approach: [
      { step: "Listen", body: "Speak with users to understand where the product helps and where experiences break down." },
      { step: "Test", body: "Identify friction across onboarding, conversation flow and product usage." },
      { step: "Learn", body: "Analyse feedback to surface recurring product opportunities and interaction patterns." },
      { step: "Shape", body: "Help test, refine, and contribute to product and roadmap decisions." },
    ],
    outcome: [
      { value: "Customer insight", label: "surfaced from user interviews" },
      { value: "Roadmap decisions", label: "guiding product quality" },
    ],
    tools: ["Product Analytics", "User Research", "Voice UX", "Figma", "Python"],
  },
  harrods: {
    id: "harrods",
    title: "Harrods",
    role: "Student Consultant · London LAB",
    context: "AI Forecasting & Customer Analytics",
    year: "Mar 2026 → Jun 2026",
    situation:
      "Harrods gave us a broad commercial challenge rather than a predefined product. I helped narrow the problem into an AI forecasting opportunity and worked with transaction data to understand demand, customer behaviour and where analytics could support commercial decisions.",
    what: "I helped translate an ambiguous commercial challenge into a defined forecasting opportunity. We worked through 13M+ transactions to evaluate revenue forecasting and customer segmentation, presenting findings and commercial recommendations to senior stakeholders.",
    approach: [
      { step: "Reframe", body: "Turned a broad commercial question into a clear analytics and forecasting opportunity." },
      { step: "Data", body: "Worked with 13M+ transactions across categories to analyse purchasing patterns." },
      { step: "Segmentation", body: "Applied K-Means clustering and behavioural regime analysis to group customer segments." },
      { step: "Deliver", body: "Helped translate outputs into a 2026 revenue view (£239M) and presented recommendations to leadership." },
    ],
    outcome: [
      { value: "13M+", label: "transactions analysed" },
      { value: "£239M", label: "2026 revenue view" },
    ],
    tools: ["Python", "SQL", "scikit-learn", "K-Means", "Power BI"],
  },
  perficient: {
    id: "perficient",
    title: "Enterprise AI & Automation",
    role: "Associate Technical Consultant",
    context: "Perficient · Enterprise Systems",
    year: "Jun 2023 → Oct 2024",
    situation:
      "Enterprise clients wanted AI, automation, and modern digital products in production. Each client had existing legacy systems, complex compliance requirements, and zero appetite for silent failure.",
    what: "I sat between business requirements and technical implementation across GenAI platforms, knowledge retrieval, Document AI automation, and B2B eCommerce reengineering. I focused on reliability, performance, payment workflows, and clear engineering handovers.",
    approach: [
      { step: "Scope", body: "Worked with client leadership to define technical and product requirements." },
      { step: "Build", body: "LLM assistants, hybrid retrieval, Document AI pipelines, and B2B eCommerce flows." },
      { step: "Harden", body: "Optimised latency, uptime, Stripe payment integration, and observability." },
      { step: "Enable", body: "Delivered documentation and developer enablement so client teams could own the systems." },
    ],
    outcome: [
      { value: "10K+", label: "daily LLM queries" },
      { value: "<2s", label: "response latency" },
      { value: "99.9%", label: "system uptime" },
    ],
    tools: ["Python", "Azure", "Google Cloud", "Docker", "LangChain", "SQL", "JavaScript", ".NET", "Stripe"],
  },
  "core-genai": {
    id: "core-genai",
    title: "Core GenAI Platform",
    role: "Associate Technical Consultant",
    context: "LLM Assistants & Hybrid Retrieval",
    year: "2024",
    situation:
      "The organisation needed an enterprise platform serving LLM assistants across multiple internal teams without compromising speed, accuracy, or data security.",
    what: "I worked on RAG-based LLM assistants, custom embedding pipelines, hybrid dense + sparse retrieval, chunking optimisation, and cloud deployment on Azure, ensuring fast and observable responses under production load.",
    approach: [
      { step: "Retrieval", body: "Designed hybrid dense + sparse retrieval with custom embedding pipelines and chunking." },
      { step: "Infrastructure", body: "Deployed on Azure with automated CI/CD and monitoring." },
      { step: "Observability", body: "Tracked latency, token usage, and retrieval quality in real time." },
      { step: "Scale", body: "Maintained <2s latency and 99.9% uptime across 10K+ daily queries." },
    ],
    outcome: [
      { value: "10K+", label: "daily queries" },
      { value: "<2s", label: "response latency" },
      { value: "99.9%", label: "uptime" },
    ],
    tools: ["Python", "Azure", "LangChain", "Docker", "Vector DB"],
  },
  caterpillar: {
    id: "caterpillar",
    title: "Caterpillar",
    role: "Associate Technical Consultant",
    context: "Enterprise Knowledge Systems",
    year: "2024",
    situation:
      "Decades of operational knowledge sat in documents and in people's heads. Finding answers meant knowing who to ask, creating delays when personnel were unavailable.",
    what: "I worked on the knowledge retrieval system that made operational documentation searchable and retrievable in the flow of work, focusing on response speed, retrieval quality, and grounded accuracy.",
    approach: [
      { step: "Source", body: "Mapped document repositories and structured operational knowledge sources." },
      { step: "Ground", body: "Configured retrieval pipelines to ensure responses cited verified documentation." },
      { step: "Workflow", body: "Designed the retrieval experience into existing team communication tools." },
    ],
    outcome: [
      { value: "Grounded", label: "answers cited from documentation" },
      { value: "Fast", label: "retrieval for enterprise workflows" },
    ],
    tools: ["Python", "LangChain", "Azure", "SQL"],
  },
  aristocrat: {
    id: "aristocrat",
    title: "Aristocrat",
    role: "Associate Technical Consultant",
    context: "AI-powered Document & Finance Automation",
    year: "2023 → 2024",
    situation:
      "Finance operations depended on staff manually reading invoice documents and re-keying data into enterprise systems every month.",
    what: "Automated manual invoice data processing using Google Document AI, building extraction workflows, validation pipelines, and downstream system integrations.",
    approach: [
      { step: "Extract", body: "Configured Google Document AI pipelines for structured and unstructured invoice processing." },
      { step: "Validate", body: "Built confidence thresholds and automated validation checks to flag anomalies." },
      { step: "Integrate", body: "Connected clean data outputs directly into finance systems." },
    ],
    outcome: [
      { value: "80%+", label: "manual data entry removed" },
      { value: "1,200+", label: "staff hours saved monthly" },
    ],
    tools: ["Python", "Google Cloud", "Document AI", "SQL", "Docker"],
  },
  northshore: {
    id: "northshore",
    title: "NorthShore Care Supply",
    role: "Associate Technical Consultant",
    context: "B2B eCommerce · Product & Technology",
    year: "2023 → 2024",
    situation:
      "The existing eCommerce experience needed to evolve into a smoother, modern purchasing journey for B2B customers.",
    what: "Reengineering a B2B eCommerce experience across product discovery, checkout and payments. I worked across product requirements and technical implementation, looking at how customers move from product discovery through checkout and payment, collaborating closely with engineering.",
    approach: [
      { step: "Discovery", body: "Mapped the existing purchasing journey, product listings, and user friction points." },
      { step: "Commerce", body: "Worked through product listing and checkout requirements with stakeholders." },
      { step: "Payments", body: "Integrated Stripe into the payment workflow for secure, seamless checkout." },
      { step: "Delivery", body: "Worked with engineering to turn requirements into a production-ready experience." },
    ],
    outcome: [
      { value: "Reengineered", label: "B2B purchasing journey" },
      { value: "Stripe", label: "integrated payment workflow" },
    ],
    tools: ["JavaScript", ".NET", "Stripe", "SQL", "Figma"],
  },
  forecasting: {
    id: "forecasting",
    title: "Demand Forecasting",
    role: "Associate Technical Consultant",
    context: "XGBoost · 120K+ sales records",
    year: "2023 → 2024",
    situation:
      "Operations required a clear forward view of demand across SKU categories to prevent stockouts and optimize inventory.",
    what: "Built demand forecasting models using historical sales data and time-series feature engineering with XGBoost regression.",
    approach: [
      { step: "Feature Eng", body: "Engineered lag, rolling window, and seasonal features across 120K+ sales records." },
      { step: "Model", body: "Tuned XGBoost regression models for category demand forecasting." },
      { step: "Deploy", body: "Built readable analytics outputs for operational decision-making." },
    ],
    outcome: [
      { value: "120K+", label: "sales records processed" },
      { value: "XGBoost", label: "time-series forecasting" },
    ],
    tools: ["Python", "SQL", "scikit-learn", "XGBoost", "Power BI"],
  },
  vit: {
    id: "vit",
    title: "Cryo-Electron Tomography",
    role: "Research Assistant, VIT",
    context: "Research · Deep Learning & XAI",
    year: "Sep 2021 → Aug 2022",
    situation:
      "Cryo-ET produces noisy 3D volumes with very few labels. A scientific model must be both accurate and explainable to be trusted by researchers.",
    what: "Applied deep convolutional neural networks to scientific imaging data using transfer learning and explainability techniques, achieving 90% classification accuracy across 10K+ scientific images.",
    approach: [
      { step: "Data", body: "Preprocessed noisy 3D scientific imaging volumes and small datasets." },
      { step: "Architecture", body: "Trained 3D CNN architectures using transfer learning." },
      { step: "Explain", body: "Applied Explainable AI (XAI) methods so feature attribution could be interrogated." },
    ],
    outcome: [
      { value: "10K+", label: "images analysed" },
      { value: "90%", label: "classification accuracy" },
    ],
    tools: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "XAI"],
  },
  "code-facts": {
    id: "code-facts",
    title: "Code Facts",
    role: "Software Development Intern",
    context: "Software Engineering",
    year: "Jan 2023 → May 2023",
    situation:
      "Joining my first professional engineering team required writing production code that was readable, maintainable, and dependable for others.",
    what: "I worked on features across the stack and spent significant time in code review, learning software design principles and collaborative version control.",
    approach: [
      { step: "Ship", body: "Built features across full-stack web application." },
      { step: "Review", body: "Participated in rigorous code reviews and quality checks." },
      { step: "Iterate", body: "Used Git version control for small, frequent production releases." },
    ],
    outcome: [{ value: "Full Stack", label: "production feature delivery" }],
    tools: ["JavaScript", ".NET", "Git", "SQL"],
  },
};

export const EDUCATION = [
  {
    school: "London Business School",
    degree: "Master's in Analytics and Management",
    period: "2025 → 2026",
    location: "London",
  },
  {
    school: "VIT University",
    degree: "B.Tech Computer Science & Engineering\u00a0\nSpec. in Networks & Security",
    period: "2019 → 2023",
    location: "India",
  },
];

export const TIMELINE_STAGES = [
  "ML Research",
  "Software Engineering",
  "AI & Data",
  "Product & Technology",
];

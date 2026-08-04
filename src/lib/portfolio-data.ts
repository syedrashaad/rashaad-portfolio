export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  narrative: string;
  details: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "nexus",
    company: "Nexus",
    role: "Co-Founder & Product Lead",
    location: "London",
    period: "2026 — Present",
    narrative:
      "Taking an ambiguous idea and shaping it into a real product — discovery, definition, matching logic, evaluation and the first shipped MVP.",
    details: [
      "Own the product end to end: problem framing, definition, scope and release sequencing.",
      "Designed the matching and personalisation model that sits at the centre of the experience.",
      "Built an evaluation loop so quality is measured, not assumed.",
      "Run experiments against a small set of metrics that actually move the product forward.",
    ],
  },
  {
    id: "harrods",
    company: "Harrods",
    role: "Student Consultant — London LAB",
    location: "London",
    period: "2026",
    narrative:
      "Turned a broad commercial question into a data and AI product opportunity, backed by 30M+ transactions of evidence.",
    details: [
      "Reframed a wide commercial brief into a decision the business could actually act on.",
      "Analysed 30M+ transactions to find where forecasting and segmentation create leverage.",
      "Built customer segmentation and demand forecasting to support commercial decisions.",
      "Communicated findings and recommendations to senior stakeholders.",
    ],
  },
  {
    id: "perficient",
    company: "Perficient",
    role: "Associate Technical Consultant",
    location: "Bangalore",
    period: "Jun 2023 — Oct 2024",
    narrative:
      "Enterprise AI, ML and data delivery across four client contexts — production LLM assistants, retrieval systems, cloud AI infrastructure and forecasting.",
    details: [
      "Delivered production GenAI and retrieval systems inside enterprise environments.",
      "Worked across cloud AI infrastructure, automation and observability.",
      "Partnered directly with client teams on scoping, delivery and handover.",
      "Moved between ML, data engineering and analytics depending on what the client needed.",
    ],
  },
  {
    id: "code-facts",
    company: "Code Facts",
    role: "Software Development Intern",
    location: "Remote",
    period: "2023",
    narrative:
      "First professional engineering context — shipping software in a team, learning how code becomes something people rely on.",
    details: [
      "Contributed to feature development across the application stack.",
      "Learned the discipline of code review, version control and iterative delivery.",
    ],
  },
  {
    id: "vit",
    company: "VIT University",
    role: "Research Assistant",
    location: "India",
    period: "2021 — 2022",
    narrative:
      "Deep convolutional networks applied to cryo-electron tomography, with explainability as a first-class requirement.",
    details: [
      "Built and trained deep CNN architectures for volumetric scientific imaging.",
      "Applied explainable AI methods so model behaviour could be inspected, not trusted blindly.",
      "Worked within the constraints of small, noisy, expensive-to-label scientific data.",
    ],
  },
];

export type ClientProject = {
  id: string;
  client: string;
  kicker: string;
  context: string;
  challenge: string;
  work: string;
  outcome: string;
};

export const PERFICIENT_PROJECTS: ClientProject[] = [
  {
    id: "core-genai",
    client: "Core GenAI Platform",
    kicker: "Platform / LLM Assistants",
    context:
      "An enterprise GenAI platform intended to serve assistants to teams across the organisation.",
    challenge:
      "Prototypes were easy. A platform that stayed fast, observable and trustworthy under real load was not.",
    work: "Production LLM assistants, retrieval systems, cloud AI infrastructure, automation and observability.",
    outcome:
      "A platform handling 10K+ daily queries with sub-2-second latency and 99.9% uptime.",
  },
  {
    id: "caterpillar",
    client: "Caterpillar",
    kicker: "Knowledge Systems",
    context:
      "Deep operational knowledge existed, but it was scattered across documents and people.",
    challenge:
      "Make that knowledge retrievable in the flow of work, without producing confident nonsense.",
    work: "Enterprise GenAI and intelligent knowledge systems, plus AI workflow design around them.",
    outcome:
      "Knowledge retrieval moved from manual searching to a guided, grounded workflow.",
  },
  {
    id: "aristocrat",
    client: "Aristocrat",
    kicker: "Document & Finance Automation",
    context:
      "Finance operations depended on manual reading and re-keying of documents.",
    challenge:
      "Automate extraction reliably enough that people would actually stop double-checking it.",
    work: "AI-driven document and finance automation built on Google Cloud technologies.",
    outcome:
      "80%+ of manual data entry removed and roughly 1,200 staff hours saved each month.",
  },
  {
    id: "northshore",
    client: "NorthShore Care",
    kicker: "Data / ML / Forecasting",
    context:
      "Planning decisions were being made without a reliable forward view of demand.",
    challenge:
      "Build forecasting the operational teams could read, question and act on.",
    work: "Data pipelines, ML forecasting models and the analytics layer around them.",
    outcome:
      "Forecasts and analytics became part of the planning conversation instead of a report nobody opened.",
  },
];

export type Work = {
  index: string;
  title: string;
  label: string;
  lede: string;
  points: string[];
  metrics?: { value: string; label: string }[];
};

export const WORKS: Work[] = [
  {
    index: "01",
    title: "Nexus",
    label: "AI Product / 0→1",
    lede: "From an ambiguous idea to a product with users, a metric and a reason to iterate.",
    points: [
      "Discovery — talking to people before writing a spec",
      "Definition — one sharp problem, deliberately scoped",
      "Matching & personalisation at the core of the experience",
      "Evaluation loops so quality is measurable",
      "MVP, experiments, metrics, iterate",
    ],
  },
  {
    index: "02",
    title: "Harrods",
    label: "AI × Analytics × Product",
    lede: "A broad commercial question, reframed as a data and AI product opportunity.",
    points: [
      "Problem framing with commercial stakeholders",
      "Forecasting and customer segmentation",
      "Decision support, not dashboards for their own sake",
      "Recommendations presented to senior leadership",
    ],
    metrics: [
      { value: "30M+", label: "transactions analysed" },
      { value: "2", label: "model families deployed" },
    ],
  },
  {
    index: "03",
    title: "Perficient",
    label: "AI Systems at Scale",
    lede: "Enterprise AI that had to survive production — latency, uptime, observability, trust.",
    points: [
      "Production LLM assistants and retrieval systems",
      "Cloud AI infrastructure and automation",
      "Four client contexts, one engineering standard",
    ],
    metrics: [
      { value: "10K+", label: "daily queries" },
      { value: "<2s", label: "latency" },
      { value: "99.9%", label: "uptime" },
    ],
  },
  {
    index: "04",
    title: "ML Research",
    label: "Deep Learning / Computer Vision",
    lede: "Deep convolutional networks for cryo-electron tomography, with explainability built in.",
    points: [
      "Volumetric scientific imaging, small and noisy datasets",
      "Deep CNN architectures trained from the ground up",
      "Explainable AI so results could be interrogated",
    ],
  },
];

export const STACK = [
  {
    title: "AI & Intelligent Systems",
    items: ["LLMs", "RAG", "AI Agents", "MCP", "LangChain", "TensorFlow", "PyTorch", "scikit-learn"],
  },
  {
    title: "Data",
    items: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Tableau"],
  },
  {
    title: "Cloud & Engineering",
    items: ["Azure", "AWS", "GCP", "Docker", "REST APIs", "CI/CD", "Git"],
  },
  {
    title: "Product",
    items: [
      "Product Strategy",
      "Discovery",
      "Roadmapping",
      "PRDs",
      "Experimentation",
      "Agile / Scrum",
      "Figma",
    ],
  },
];

export const MARQUEE_ROW_ONE = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Azure",
  "AWS",
  "Google Cloud",
  "Docker",
];

export const MARQUEE_ROW_TWO = [
  "Git",
  "LangChain",
  "JavaScript",
  ".NET",
  "SQL",
  "Power BI",
  "Figma",
];

export const EDUCATION = [
  {
    school: "London Business School",
    degree: "Master's in Analytics and Management",
    period: "2025 — 2026",
    location: "London",
  },
  {
    school: "VIT",
    degree: "B.Tech Computer Science & Engineering",
    period: "2019 — 2023",
    location: "India",
  },
];

export const TIMELINE_STAGES = [
  "ML Research",
  "Software Engineering",
  "AI & Data",
  "Product",
  "AI Product",
];

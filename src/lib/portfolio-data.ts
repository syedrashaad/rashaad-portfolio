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
      "Core GenAI Platform: LLM assistants, RAG pipelines, 10K+ daily queries, <2s latency",
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
    id: "northshore",
    index: "04",
    title: "NorthShore Care Supply",
    subtitle: "B2B eCommerce · Product & Technology",
    role: "Associate Technical Consultant",
    date: "2023 → 2024",
    category: "B2B eCommerce & Product",
    lede: "Reengineering a B2B eCommerce experience across product discovery, checkout and payments.",
    points: [
      "Mapped customer purchasing workflows and product discovery journeys",
      "Defined requirements for product listings, cart, and checkout user experience",
      "Integrated Stripe for secure payment workflows and seamless purchasing",
      "Collaborated directly with engineering to deliver production-ready B2B commerce experience",
    ],
    metrics: [
      { value: "Reengineered", label: "B2B purchasing journey" },
      { value: "Stripe", label: "integrated payment workflow" },
    ],
  },
  {
    id: "aristocrat",
    index: "05",
    title: "Aristocrat Automation",
    subtitle: "Document AI & Finance Workflows",
    role: "Associate Technical Consultant",
    date: "2023 → 2024",
    category: "Document AI & Automation",
    lede: "Automated manual invoice processing and finance workflows using Google Document AI.",
    points: [
      "Configured Google Document AI pipelines for structured invoice extraction",
      "Built automated validation checks and confidence threshold scoring",
      "Integrated extracted financial data directly into enterprise downstream systems",
    ],
    metrics: [
      { value: "80%+", label: "manual entry removed" },
      { value: "1,200+", label: "staff hours/month saved" },
    ],
  },
  {
    id: "forecasting",
    index: "06",
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
    index: "07",
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
  situation: string; // 01 THE PROBLEM
  whyItMattered: string; // 02 WHY IT MATTERED
  what: string; // 03 MY ROLE
  approach: { step: string; body: string }[]; // 04 THE APPROACH
  decision: { statement: string; why: string }; // 05 THE DECISION (Signature visual pattern)
  tradeoff?: string; // 06 THE TRADE-OFF
  outcome: { value: string; label: string }[]; // 07 THE OUTCOME
  lesson: string; // 08 WHAT I LEARNED
  nextId: string; // NEXT PROJECT link ID
  tools: string[];
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  magpie: {
    id: "magpie",
    title: "Talk to Magpie AI",
    role: "Product Manager Associate",
    context: "AI Product · Voice UX & Roleplay",
    year: "Sep 2026 → Present",
    situation:
      "The product is an AI roleplay and training experience, so product quality depends not just on whether the underlying AI model responds, but on whether the interaction feels useful, natural, and valuable to the person using it.",
    whyItMattered:
      "Users can explain where an AI voice experience feels confusing, unnatural or genuinely useful in ways that raw usage telemetry alone cannot capture.",
    what:
      "At Magpie, I work with the product team to understand how customers use AI roleplay and training experiences, turn user feedback into product insights, and help shape product and roadmap decisions.",
    approach: [
      { step: "Listen", body: "Speak directly with users to understand where the product delivers value and where conversation flows break down." },
      { step: "Test", body: "Identify friction across onboarding, conversation flow, roleplay scenarios, and response recovery." },
      { step: "Learn", body: "Analyse user feedback to surface recurring product opportunities and interaction friction patterns." },
      { step: "Shape", body: "Help test, refine, and contribute to product roadmap decisions." },
    ],
    decision: {
      statement: "Prioritised fixing conversation friction, onboarding clarity, and recovery from awkward AI responses over vanity model benchmarks.",
      why: "Users abandon AI roleplay experiences when conversation flows break, regardless of how fast the model generates tokens.",
    },
    tradeoff:
      "Deprioritised expanding scenario breadth in order to focus deeply on conversation flow recovery and user friction in core roles.",
    outcome: [
      { value: "Customer insight", label: "surfaced from user conversations" },
      { value: "Roadmap decisions", label: "guiding product & AI quality" },
    ],
    lesson: "Great AI products are built on understanding user friction and interaction quality, not just model latency.",
    nextId: "harrods",
    tools: ["Product Analytics", "User Research", "Voice UX", "Figma", "Python"],
  },
  harrods: {
    id: "harrods",
    title: "Harrods",
    role: "Student Consultant · London LAB",
    context: "AI Forecasting & Customer Analytics",
    year: "Mar 2026 → Jun 2026",
    situation:
      "Harrods gave us a broad commercial challenge rather than a predefined product problem.",
    whyItMattered:
      "The commercial challenge was to discover where demand forecasting and customer analytics could create actionable commercial direction for luxury retail categories.",
    what:
      "I helped narrow the broad commercial challenge into an AI forecasting and segmentation opportunity, working through 13M+ transaction records to understand demand and customer purchasing regimes.",
    approach: [
      { step: "Reframe", body: "Turned a broad commercial question into a defined analytics and forecasting opportunity." },
      { step: "Data", body: "Worked through 13M+ transaction records across luxury merchandise categories." },
      { step: "Segmentation", body: "Applied K-Means clustering and behavioural regime analysis to identify distinct purchasing segments." },
      { step: "Deliver", body: "Helped translate outputs into a 2026 revenue view (£239M) and presented commercial recommendations to leadership." },
    ],
    decision: {
      statement: "We narrowed the broad commercial problem into a forecasting opportunity and segmentation model that could actually be evaluated against 13M+ transactions.",
      why: "A broad strategy question cannot be evaluated until it is translated into specific hypotheses grounded in historical customer transaction data.",
    },
    tradeoff:
      "Focused on high-volume merchandise categories rather than tail items to deliver an evaluable forecasting MVP within project constraints.",
    outcome: [
      { value: "13M+", label: "transactions analysed" },
      { value: "£239M", label: "2026 revenue view" },
    ],
    lesson: "Product discovery in data analytics starts by framing the commercial decision before choosing the statistical model.",
    nextId: "perficient",
    tools: ["Python", "SQL", "scikit-learn", "K-Means", "Power BI"],
  },
  perficient: {
    id: "perficient",
    title: "Enterprise AI & Automation",
    role: "Associate Technical Consultant",
    context: "Perficient · Enterprise Systems",
    year: "Jun 2023 → Oct 2024",
    situation:
      "Enterprise AI assistants need to return grounded, accurate answers quickly and reliably when querying large internal knowledge bases across legacy systems.",
    whyItMattered:
      "A technically impressive LLM fails in an enterprise environment if retrieval quality is poor, responses are slow, or system uptime is unreliable.",
    what:
      "I sat between business requirements and technical implementation across GenAI platforms, Caterpillar knowledge retrieval, Aristocrat Document AI, and NorthShore B2B eCommerce reengineering.",
    approach: [
      { step: "Scope", body: "Worked with client leadership to define technical requirements and operational guardrails." },
      { step: "Build", body: "RAG pipelines, hybrid dense + sparse retrieval, Document AI extraction, and B2B eCommerce flows." },
      { step: "Harden", body: "Optimised response latency, uptime, Stripe payment integration, and cloud observability on Azure." },
      { step: "Enable", body: "Delivered engineering documentation and developer enablement so client teams could operate the platform independently." },
    ],
    decision: {
      statement: "Prioritised hybrid dense + sparse retrieval and custom chunking over simple dense vector search to guarantee observable, grounded accuracy.",
      why: "Enterprise users require exact keyword matching alongside semantic search when querying technical documentation.",
    },
    tradeoff:
      "Chose architectural retrieval observability and speed over complex multi-agent reasoning chains that added unpredictable latency.",
    outcome: [
      { value: "10K+", label: "daily RAG queries" },
      { value: "<2s", label: "response latency" },
      { value: "99.9%", label: "system uptime" },
    ],
    lesson: "Production GenAI systems succeed on retrieval observability and response speed, not prompt engineering alone.",
    nextId: "northshore",
    tools: ["Python", "Azure", "Google Cloud", "Docker", "LangChain", "SQL", "JavaScript", ".NET", "Stripe"],
  },
  northshore: {
    id: "northshore",
    title: "NorthShore Care Supply",
    role: "Associate Technical Consultant",
    context: "B2B eCommerce · Product & Technology",
    year: "2023 → 2024",
    situation:
      "The existing B2B eCommerce experience required reengineering across the entire customer purchasing journey.",
    whyItMattered:
      "For B2B commerce, product discovery, catalog browsing, checkout, and payment processing are connected parts of a single unified customer purchasing workflow.",
    what:
      "I worked across product requirements and technical implementation, mapping how commercial customers move from product discovery through checkout and Stripe payment integration in close collaboration with engineering.",
    approach: [
      { step: "Discovery", body: "Mapped customer purchasing workflows, product listings, and user friction points across catalog navigation." },
      { step: "Commerce", body: "Defined product listing, cart, and checkout user experience requirements with business stakeholders." },
      { step: "Payments", body: "Integrated Stripe into the payment workflow for secure, friction-free transaction processing." },
      { step: "Delivery", body: "Collaborated directly with engineering to translate product requirements into a production-ready experience." },
    ],
    decision: {
      statement: "Designed product listing and checkout flows directly around B2B purchasing workflows, integrating Stripe for secure payment processing.",
      why: "B2B buyers prioritize transaction speed, clear order validation, and reliable payment workflows over consumer-facing marketing clutter.",
    },
    tradeoff:
      "Prioritised seamless checkout UX and Stripe payment reliability over complex custom loyalty integrations.",
    outcome: [
      { value: "Reengineered", label: "B2B purchasing journey" },
      { value: "Stripe", label: "integrated payment workflow" },
    ],
    lesson: "B2B product design requires understanding the end-to-end purchasing workflow, not just consumer UI trends.",
    nextId: "aristocrat",
    tools: ["JavaScript", ".NET", "Stripe", "SQL", "Figma"],
  },
  aristocrat: {
    id: "aristocrat",
    title: "Aristocrat Automation",
    role: "Associate Technical Consultant",
    context: "Document AI & Finance Automation",
    year: "2023 → 2024",
    situation:
      "Finance operations depended on staff manually reading invoice documents and re-keying data into enterprise systems every single month.",
    whyItMattered:
      "Repetitive manual data entry created severe operational bottlenecks and diverted skilled finance personnel away from strategic analysis.",
    what:
      "Automated manual invoice processing using Google Document AI, building extraction workflows, confidence scoring validation pipelines, and enterprise downstream system integrations.",
    approach: [
      { step: "Extract", body: "Configured Google Document AI pipelines for structured and unstructured invoice processing." },
      { step: "Validate", body: "Built confidence thresholds and automated validation checks to flag low-confidence edge cases." },
      { step: "Integrate", body: "Connected verified structured data outputs directly into enterprise finance systems." },
    ],
    decision: {
      statement: "Set strict automated validation confidence thresholds so only low-confidence edge cases were routed to human review.",
      why: "Automating 80%+ of high-confidence invoices reliably delivers massive throughput while eliminating human error risks.",
    },
    tradeoff:
      "Chose human-in-the-loop verification for ambiguous edge cases rather than attempting 100% full automation at the expense of accuracy.",
    outcome: [
      { value: "80%+", label: "manual data entry removed" },
      { value: "1,200+", label: "staff hours saved monthly" },
    ],
    lesson: "Automation projects succeed when human-in-the-loop workflows handle exceptions while AI handles scale.",
    nextId: "forecasting",
    tools: ["Python", "Google Cloud", "Document AI", "SQL", "Docker"],
  },
  forecasting: {
    id: "forecasting",
    title: "Demand Forecasting",
    role: "Associate Technical Consultant",
    context: "XGBoost · 120K+ sales records",
    year: "2023 → 2024",
    situation:
      "Operations required a clear forward view of SKU demand from historical sales data to prevent stockouts and optimize inventory horizons.",
    whyItMattered:
      "Accurate demand forecasting enables operational teams to plan inventory allocation with confidence and minimize capital locked in excess stock.",
    what:
      "Engineered time-series lag and seasonal features across 120K+ historical sales records and tuned XGBoost regression models for forward demand estimation.",
    approach: [
      { step: "Feature Eng", body: "Engineered lag, rolling window, and seasonal features across 120K+ sales records." },
      { step: "Model", body: "Tuned XGBoost regression models for category-level demand forecasting." },
      { step: "Deploy", body: "Built readable analytics outputs for operational decision-making." },
    ],
    decision: {
      statement: "Engineered time-series lag and rolling window features specifically tuned for SKU seasonality rather than using generic regression.",
      why: "Demand patterns in retail sales are heavily driven by seasonal rolling windows and prior lag trends.",
    },
    tradeoff:
      "Prioritised interpretable gradient boosted decision trees (XGBoost) over black-box deep learning models to allow inventory planners to inspect feature importance.",
    outcome: [
      { value: "120K+", label: "sales records processed" },
      { value: "XGBoost", label: "time-series model" },
    ],
    lesson: "Feature engineering rooted in business domain knowledge beats algorithm selection alone.",
    nextId: "vit",
    tools: ["Python", "SQL", "scikit-learn", "XGBoost", "Power BI"],
  },
  vit: {
    id: "vit",
    title: "Cryo-Electron Tomography",
    role: "Research Assistant, VIT",
    context: "Research · Deep Learning & XAI",
    year: "Sep 2021 → Aug 2022",
    situation:
      "Cryo-ET produces noisy 3D volumetric images with minimal ground-truth labels.",
    whyItMattered:
      "Scientific deep learning models must be both accurate and explainable for researchers to trust AI predictions in biological structure analysis.",
    what:
      "Applied 3D deep convolutional neural networks to scientific imaging data using transfer learning and Explainable AI (XAI) feature attribution techniques.",
    approach: [
      { step: "Data", body: "Preprocessed noisy 3D scientific imaging volumes and small datasets." },
      { step: "Architecture", body: "Trained 3D CNN architectures using transfer learning." },
      { step: "Explain", body: "Applied Explainable AI (XAI) attribution methods so researchers could visually verify model features." },
    ],
    decision: {
      statement: "Integrated Explainable AI (XAI) feature attribution maps into model evaluation alongside accuracy metrics.",
      why: "Scientific domain experts will not adopt high-accuracy deep learning models unless they can inspect which volumetric features drove the classification.",
    },
    tradeoff:
      "Accepted additional computational overhead for XAI attribution maps to gain researcher trust and verification.",
    outcome: [
      { value: "10K+", label: "images analysed" },
      { value: "90%", label: "classification accuracy" },
    ],
    lesson: "Deep learning in specialized domains requires explainability to earn domain expert trust.",
    nextId: "magpie",
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
    whyItMattered:
      "Engineering foundation provides the technical depth required to communicate effectively with developers and evaluate architecture trade-offs.",
    what:
      "I worked on features across the stack and spent significant time in code review, learning software design principles and collaborative version control.",
    approach: [
      { step: "Ship", body: "Built features across full-stack web application." },
      { step: "Review", body: "Participated in rigorous code reviews and quality checks." },
      { step: "Iterate", body: "Used Git version control for small, frequent production releases." },
    ],
    decision: {
      statement: "Focus on clean engineering fundamentals and rigorous code reviews.",
      why: "Code quality and review feedback build maintainable production software.",
    },
    outcome: [{ value: "Full Stack", label: "production feature delivery" }],
    lesson: "Technical foundation enables clear engineering empathy and accurate scoping.",
    nextId: "magpie",
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
  "eCommerce & Product",
  "AI Product",
];

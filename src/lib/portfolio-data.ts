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
    period: "Sep 2026 to Present",
    narrative:
      "I work with the product team to understand how customers use the product, turn user feedback into product insights, and help shape the roadmap and experiences around those needs.",
  },
  {
    id: "nexus",
    company: "Nexus",
    role: "Co-Founder & Product Lead",
    location: "London",
    period: "Apr 2026 to Present",
    narrative:
      "Nexus started with a simple question: could we make it easier for students to meet the right people? I took it from early conversations through to a shipped MVP.",
  },
  {
    id: "harrods",
    company: "Harrods",
    role: "Student Consultant, London LAB",
    location: "London",
    period: "Mar 2026 to Jun 2026",
    narrative:
      "Harrods gave us a broad commercial problem rather than a defined solution. I helped narrow it into something we could actually test, using more than 13 million transactions.",
  },
  {
    id: "perficient",
    company: "Perficient",
    role: "Associate Technical Consultant",
    location: "Bangalore",
    period: "Jun 2023 to Oct 2024",
    narrative:
      "Sixteen months building AI, ML, data platforms, and B2B eCommerce systems for enterprise clients. Translating business needs into products and systems engineers could deliver.",
  },
  {
    id: "code-facts",
    company: "Code Facts",
    role: "Software Development Intern",
    location: "Remote",
    period: "Jan 2023 to May 2023",
    narrative:
      "My first proper engineering team. I learned what it actually takes for code to become something other people depend on.",
  },
  {
    id: "vit",
    company: "VIT University",
    role: "Research Assistant",
    location: "India",
    period: "Sep 2021 to Aug 2022",
    narrative:
      "Deep convolutional networks applied to cryo-electron tomography. Small datasets, noisy volumes, and a requirement that we could explain what the model was doing.",
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
    kicker: "B2B eCommerce / Product / Technology",
    line: "Reengineering a B2B eCommerce experience across product discovery, checkout and payments.",
  },
];

export type Work = {
  id: string;
  index: string;
  title: string;
  label: string;
  lede: string;
  points: string[];
  metrics?: { value: string; label: string }[];
};

export const WORKS: Work[] = [
  {
    id: "magpie",
    index: "01",
    title: "Talk to Magpie AI",
    label: "AI product, voice UX",
    lede: "Turning direct user feedback and AI interaction testing into product insights and roadmap recommendations.",
    points: [
      "Gathered direct feedback from active users",
      "Stress-tested voice UX and conversation flow",
      "Identified friction in AI response quality and recovery",
      "Influenced product roadmap and feature priorities",
    ],
  },
  {
    id: "nexus",
    index: "02",
    title: "Nexus",
    label: "AI product, 0 to 1",
    lede: "From a vague idea to a product with users, one metric that mattered, and a reason to keep iterating.",
    points: [
      "Talked to people before writing a spec",
      "Cut the scope down to one sharp problem",
      "Built the matching logic at the centre of it",
      "Set up evaluation so quality was measurable",
      "Shipped, measured, changed things",
    ],
  },
  {
    id: "harrods",
    index: "03",
    title: "Harrods",
    label: "AI, analytics, product",
    lede: "A broad commercial question, narrowed into something a team could test and act on.",
    points: [
      "Framed the problem with commercial stakeholders",
      "Forecasting and customer segmentation",
      "Decision support, not dashboards for their own sake",
      "Presented the recommendation to senior leadership",
    ],
    metrics: [
      { value: "13M+", label: "transactions analysed" },
      { value: "2", label: "model families deployed" },
    ],
  },
  {
    id: "perficient",
    index: "04",
    title: "Perficient",
    label: "AI, data & eCommerce systems",
    lede: "Enterprise AI, data infrastructure, and B2B eCommerce reengineering built for scale and reliability.",
    points: [
      "Production LLM assistants and retrieval systems",
      "B2B eCommerce checkout and Stripe payment integration",
      "Four client contexts, one engineering standard",
    ],
    metrics: [
      { value: "10K+", label: "daily queries" },
      { value: "<2s", label: "latency" },
      { value: "99.9%", label: "uptime" },
    ],
  },
  {
    id: "vit",
    index: "05",
    title: "ML Research",
    label: "Deep learning, computer vision",
    lede: "Deep convolutional networks for cryo-electron tomography, with explainability built in from the start.",
    points: [
      "Volumetric scientific imaging, small and noisy datasets",
      "Deep CNN architectures trained from scratch",
      "Explainable AI so results could be interrogated",
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
    context: "AI product / Voice & AI experiences",
    year: "Sep 2026 to Present",
    situation:
      "Understanding how users interact with AI voice and roleplay experiences, identifying where conversation flows break, and figuring out what needs to change to make the product more valuable.",
    what: "I work with the product team to understand how customers use the product, turn user feedback into product insights, and help shape the roadmap and experiences around those needs. My work spans user feedback, voice UX, conversation flow, assessment experiences, and recovery from poor interactions.",
    approach: [
      { step: "Listen", body: "Talk to users and gather direct feedback on their experiences." },
      { step: "Test", body: "Stress-test product experiences, voice UX, and AI interactions." },
      {
        step: "Learn",
        body: "Identify patterns across conversation flow, response quality, and user friction.",
      },
      {
        step: "Shape",
        body: "Turn those insights into concrete product and roadmap recommendations.",
      },
    ],
    outcome: [
      { value: "Insights", label: "user feedback into roadmap decisions" },
      { value: "Voice UX", label: "refined conversation & response quality" },
    ],
    tools: ["Product Analytics", "User Research", "Voice UX", "Figma", "Python"],
  },
  nexus: {
    id: "nexus",
    title: "Nexus",
    role: "Co-Founder & Product Lead",
    context: "Early stage product",
    year: "2026",
    situation:
      "Students meet a lot of people and almost none of the right ones. The signal is there, it is just buried in societies, group chats and coincidence. We wanted to know whether that could be made deliberate without it feeling like a dating app.",
    what: "I owned the product. I ran the early conversations, wrote the definition, designed the matching logic and built the evaluation loop that told us whether a match was any good. The interesting part was resisting features. Almost every idea we had made the product worse, and figuring out which two or three did not was most of the work.",
    approach: [
      {
        step: "Discovery",
        body: "Interviews first. No spec until we understood what people were actually trying to do.",
      },
      {
        step: "Definition",
        body: "One problem, scoped small enough that we could ship it and still learn something.",
      },
      {
        step: "Matching",
        body: "Personalisation logic built around signals people would genuinely act on.",
      },
      {
        step: "Evaluation",
        body: "A measurement loop, so match quality was a number rather than an opinion.",
      },
    ],
    outcome: [
      { value: "0 to 1", label: "shipped MVP" },
      { value: "1", label: "metric we optimised" },
    ],
    tools: ["Python", "LangChain", "JavaScript", "Figma"],
  },
  harrods: {
    id: "harrods",
    title: "Harrods",
    role: "Student Consultant, London LAB",
    context: "Luxury retail",
    year: "2026",
    situation:
      "Harrods came to us with a commercial question rather than a brief. There was no defined solution and no shortage of data. The risk was producing an impressive analysis that nobody could act on.",
    what: "I helped narrow the question into something testable. We worked through more than 13 million transactions to find where forecasting and segmentation would actually change a decision, then built both. My focus was making sure the output landed as a recommendation, not a dashboard.",
    approach: [
      {
        step: "Reframe",
        body: "Turned a wide brief into a specific decision the business could make.",
      },
      {
        step: "Evidence",
        body: "Worked through 13M+ transactions to find where the leverage was.",
      },
      {
        step: "Model",
        body: "Customer segmentation and demand forecasting, built to be questioned.",
      },
      { step: "Land it", body: "Presented findings and a recommendation to senior stakeholders." },
    ],
    outcome: [
      { value: "13M+", label: "transactions analysed" },
      { value: "2", label: "model families deployed" },
    ],
    tools: ["Python", "SQL", "scikit-learn", "Power BI"],
  },
  perficient: {
    id: "perficient",
    title: "Perficient",
    role: "Associate Technical Consultant",
    context: "Enterprise AI & digital product consulting",
    year: "2023 to 2024",
    situation:
      "Enterprise clients wanted AI and modern digital products in production, not in a slide deck. Each one had existing systems, existing processes and very little appetite for something that would break quietly.",
    what: "I moved between ML, data engineering, product requirements, and eCommerce platform reengineering depending on what the client needed. Most of my time went on the parts nobody demos: platform reliability, payment integration, latency, observability, and the handover that decides whether a system survives after you leave.",
    approach: [
      {
        step: "Scope",
        body: "Worked directly with client teams to define what was worth building.",
      },
      {
        step: "Build",
        body: "LLM assistants, retrieval systems, eCommerce workflows, and data pipelines underneath.",
      },
      {
        step: "Harden",
        body: "Cloud AI infrastructure, payment integration, automation and monitoring.",
      },
      { step: "Hand over", body: "Documentation and enablement so the team could own it." },
    ],
    outcome: [
      { value: "10K+", label: "daily queries" },
      { value: "<2s", label: "latency" },
      { value: "99.9%", label: "uptime" },
    ],
    tools: [
      "Python",
      "Azure",
      "Google Cloud",
      "Docker",
      "LangChain",
      "SQL",
      "JavaScript",
      ".NET",
      "Stripe",
    ],
  },
  "code-facts": {
    id: "code-facts",
    title: "Code Facts",
    role: "Software Development Intern",
    context: "Software team",
    year: "2023",
    situation:
      "My first professional engineering team. I could write code. I had no idea what it took for that code to become something other people relied on.",
    what: "I worked on features across the stack and spent a lot of time in code review, which taught me more than anything I built. It is where I learned to write for the next person rather than for the compiler.",
    approach: [
      { step: "Ship", body: "Feature work across the application stack." },
      { step: "Review", body: "Reading other people's code, and having mine read." },
      { step: "Iterate", body: "Version control and small, frequent releases." },
    ],
    outcome: [{ value: "First", label: "production codebase" }],
    tools: ["JavaScript", ".NET", "Git", "SQL"],
  },
  vit: {
    id: "vit",
    title: "ML Research",
    role: "Research Assistant, VIT",
    context: "Cryo-electron tomography",
    year: "2021 to 2022",
    situation:
      "Cryo-ET produces noisy three dimensional volumes and very few labels, because labelling them is slow and expensive. A model that scores well and cannot be explained is not useful to a scientist.",
    what: "I built and trained deep CNN architectures for volumetric data, then applied explainability methods so we could inspect what the network was responding to. The constraint I remember most is how little data we had, and how much that shapes every decision you make.",
    approach: [
      { step: "Data", body: "Small, noisy, expensive to label volumetric imaging." },
      { step: "Architecture", body: "Deep CNNs designed for 3D scientific data." },
      { step: "Explain", body: "Explainable AI so behaviour could be inspected, not assumed." },
    ],
    outcome: [
      { value: "3D", label: "volumetric imaging" },
      { value: "XAI", label: "built in, not added later" },
    ],
    tools: ["Python", "PyTorch", "TensorFlow", "scikit-learn"],
  },
  "core-genai": {
    id: "core-genai",
    title: "Core GenAI Platform",
    role: "Associate Technical Consultant",
    context: "Internal platform, Perficient",
    year: "2024",
    situation:
      "The organisation wanted one platform serving assistants to many teams. Individual prototypes already worked. Holding that up under real traffic, with real expectations about accuracy and speed, was a different problem.",
    what: "I worked on the production side of it: the retrieval layer, the infrastructure it ran on, and the observability that told us when it was degrading. We needed answers to be fast and traceable, so a team could see why a response looked the way it did.",
    approach: [
      { step: "Retrieval", body: "Grounding responses in the right documents, reliably." },
      { step: "Infrastructure", body: "Cloud AI services, automation, deployment." },
      { step: "Observability", body: "Latency, quality and failure visible before users noticed." },
      { step: "Scale", body: "Held performance as usage grew across teams." },
    ],
    outcome: [
      { value: "10K+", label: "daily queries" },
      { value: "<2s", label: "latency" },
      { value: "99.9%", label: "uptime" },
    ],
    tools: ["Python", "Azure", "LangChain", "Docker"],
  },
  caterpillar: {
    id: "caterpillar",
    title: "Caterpillar",
    role: "Associate Technical Consultant",
    context: "Industrial manufacturing",
    year: "2024",
    situation:
      "Decades of operational knowledge sat in documents and in people's heads. Finding an answer meant knowing who to ask, which is fine until that person is unavailable or has left.",
    what: "I worked on the knowledge system that made this retrievable in the flow of work. The hard requirement was that it either gave a grounded answer or said it did not know. Confident nonsense would have killed trust in a week.",
    approach: [
      { step: "Source", body: "Mapped where the knowledge actually lived." },
      { step: "Ground", body: "Retrieval designed so answers cite something real." },
      { step: "Workflow", body: "Designed the AI into existing ways of working, not beside them." },
    ],
    outcome: [
      { value: "Guided", label: "knowledge retrieval" },
      { value: "Grounded", label: "answers, or none" },
    ],
    tools: ["Python", "LangChain", "Azure", "SQL"],
  },
  aristocrat: {
    id: "aristocrat",
    title: "Aristocrat",
    role: "Associate Technical Consultant",
    context: "Finance operations",
    year: "2023 to 2024",
    situation:
      "Finance operations depended on people reading documents and typing the contents into systems. Slow, repetitive, and the sort of task where accuracy quietly drops.",
    what: "I built document and finance automation on Google Cloud. Extraction accuracy was the whole game. If people still double check every field, you have not saved them anything, so we tuned until the checking stopped.",
    approach: [
      { step: "Extract", body: "Document AI pipelines for the formats that mattered most." },
      { step: "Validate", body: "Confidence thresholds and review only where needed." },
      { step: "Integrate", body: "Pushed clean data into the finance systems in use." },
    ],
    outcome: [
      { value: "80%+", label: "manual entry removed" },
      { value: "1,200", label: "staff hours saved monthly" },
    ],
    tools: ["Python", "Google Cloud", "SQL", "Docker"],
  },
  northshore: {
    id: "northshore",
    title: "NorthShore Care Supply",
    role: "Associate Technical Consultant",
    context: "B2B eCommerce / Product / Technology",
    year: "2023 to 2024",
    situation:
      "The existing eCommerce experience needed to evolve into a smoother purchasing journey for customers.",
    what: "I worked across the product and technical side of the reengineering effort, looking at how customers moved from product discovery through checkout and payment. I also worked with the engineering team on the implementation details rather than treating the work as a purely UX exercise.",
    approach: [
      {
        step: "Discovery",
        body: "Mapped the existing purchasing journey and identified friction.",
      },
      { step: "Commerce", body: "Worked through product listing and checkout requirements." },
      { step: "Payments", body: "Integrated Stripe into the payment workflow." },
      {
        step: "Delivery",
        body: "Worked with engineering to turn requirements into a working experience.",
      },
    ],
    outcome: [
      { value: "Reengineered", label: "B2B purchasing journey" },
      { value: "Stripe", label: "integrated payment workflow" },
    ],
    tools: ["JavaScript", ".NET", "Stripe", "SQL", "Figma"],
  },
};

export const EDUCATION = [
  {
    school: "London Business School",
    degree: "Master's in Analytics and Management",
    period: "2025 to 2026",
    location: "London",
  },
  {
    school: "VIT University",
    degree: "B.Tech Computer Science & Engineering\u00a0\nSpec. in Networks & Security",
    period: "2019 to 2023",
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

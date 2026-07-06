// Centralized content for the entire site. Pages import from here rather than
// hardcoding copy, so text/timestamps/metrics stay in one place.

export const siteMeta = {
  name: "Shashwat Modi",
  role: "Data Scientist",
  resumeHref: "/shashwat_modi_resume.pdf",
};

export const navData = {
  brand: { label: "Shashwat Modi", to: "/" },
  links: [
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Journey", to: "/journey" },
  ],
  dropdowns: [
    {
      label: "My Notebook",
      items: [
        { label: "Data Ethics", to: "/compiling" },
        { label: "People Analytics", to: "/compiling" },
        { label: "Data Science in Sports", to: "/compiling" },
        { label: "Data Science in Strategy", to: "/compiling" },
      ],
    },
    {
      label: "My Scrapbook",
      items: [
        { label: "Music & Acapella Mashups", to: "/compiling" },
        { label: "Formula 1", to: "/compiling" },
        { label: "Martial Arts", to: "/compiling" },
        { label: "Basketball", to: "/compiling" },
        { label: "Coffee", to: "/compiling" },
        { label: "Travels", to: "/compiling" },
        { label: "Food", to: "/compiling" },
        { label: "Bughouse Chess", to: "/compiling" },
      ],
    },
  ],
  resume: { label: "Resume", href: siteMeta.resumeHref },
};

export const homeData = {
  heading: "Data without a narrative is just noise. Welcome to mine.",
  paragraphs: [
    "I am a data scientist who believes data tells a story, and I like to make sure it’s a good one. Having recently completed my Master’s in Data Science and Applied Statistics from Cornell University, I specialize in turning complex datasets into actionable, real-world strategies. I don’t just look for patterns in numbers; I look for the narrative that drives growth.",
    "Whether I’m tuning machine learning models, optimizing corporate workflows, or tinkering with my instruments and culinary experiments over the weekend, I am obsessed with finding the ‘why’ behind the what. I believe life—and data—is better when you find the perfect balance of sweet, sour, and spicy.",
  ],
  signOff: "Yours with 95% confidence, Shashwat",
};

export const experienceData = [
  {
    id: "cornell-ca",
    role: "Course Assistant",
    org: "Cornell University",
    timestamp: "2025 — 2026",
    description:
      "Served as primary academic resource for NBA 6215, translating complex technical concepts into business frameworks.",
  },
  {
    id: "emcure",
    role: "Market Research Intern",
    org: "Emcure Pharmaceuticals",
    timestamp: "2024",
    description:
      "Spearheaded a Six Sigma DMEDI framework. Built automated data workflows that slashed manual processing time by 80%. Engineered Python-based SARIMA models to forecast trends across 1,900+ subgroups.",
  },
  {
    id: "icici",
    role: "Project Intern",
    org: "ICICI Bank",
    timestamp: "2023",
    description:
      "Executed end-to-end opportunity estimation for NRI ecosystem growth via demographic data scraping. Engineered regression models (R² = 0.87) mapping affluence patterns to back geographic expansions with hard evidence.",
  },
  {
    id: "ey",
    role: "Summer Intern",
    org: "Ernst & Young",
    timestamp: "2022",
    description:
      "Executed insurance claims analytics through Python-driven exploratory data analysis and multivariate regression modeling.",
  },
];

export const projectsData = [
  {
    id: "fatigue-modeling",
    title: "Advanced Physiological Modeling",
    description:
      "Engineered a LightGBM regression model with strict GroupKFold cross-validation to forecast sailor fatigue 30 minutes in advance (0.34 RMSE). Built a 3.7 In_rmssd ‘Soft Margin’ dashboard early-warning buffer — the same logic as Popeye reaching for spinach before Bluto lands the blow: the model spots the dip before fatigue actually hits.",
    metric: "0.34 RMSE",
  },
  {
    id: "fraud-diamond",
    title: "Published Academic Research",
    description:
      "Authored a socio-technical analysis examining 3 major Indian financial frauds (1992–2018) employing the Fraud Diamond Model. Published in Springer Proceedings in Business and Economics.",
    metric: "Springer",
  },
  {
    id: "sarima-market",
    title: "SARIMA Market Forecasting",
    description:
      "Developed a Python-based SARIMA model to project sales performance across 1,900+ product subgroups, linking prescription patterns to revenue outcomes.",
    metric: "1,900+ subgroups",
  },
  {
    id: "nri-mapping",
    title: "NRI Predictive Mapping",
    description:
      "Built a robust regression model (R² = 0.87) utilizing multi-source demographic data scraping to map international banking expansion.",
    metric: "R² = 0.87",
  },
  {
    id: "tap-sustainability",
    title: "‘Tap’ into Sustainability",
    description:
      "Analyzed washroom tap data utilizing statistical sampling distributions. Uncovered an alarming 33% waste rate (120 kilolitres monthly) to drive conservation awareness.",
    metric: "33% waste",
  },
  {
    id: "aviation-forecasting",
    title: "Aviation Time Series Forecasting",
    description:
      "Employed ARIMA, SARIMA, and Prophet models to study post-Covid-19 aviation recovery. Double-shortlisted for the NMIMS REL Poster Symposium.",
    metric: "Double-shortlisted",
  },
  {
    id: "sql-architecture",
    title: "SQL Database Architecture",
    description:
      "Constructed a streamlined SQL database for college administration, successfully addressing and eliminating redundant Excel workflows.",
    metric: "0 spreadsheets",
  },
];

export const journeyData = [
  {
    id: "foundation",
    kind: "foundation",
    timestamp: "The Beginning",
    title: "Swati & Ashish Modi",
    description:
      "Before any of the data, degrees, or titles, there were two people who taught me how to ask questions in the first place. Every model I've ever built rests on a foundation my parents poured first — patience, curiosity, and the quiet insistence that the 'why' always matters more than the 'what'.",
  },
  {
    id: "cathedral",
    timestamp: "Feb 2008 — May 2019",
    title: "The Cathedral and John Connon School",
    description:
      "Eleven years of foundation — where curiosity was first encouraged to wander, and where the earliest habits of discipline and inquiry took root.",
  },
  {
    id: "navy-children",
    timestamp: "Jun 2019 — Jul 2021",
    title: "Navy Children School",
    description:
      "A formative chapter of structure and resilience, carrying lessons in discipline that would later show up in every rigorous cross-validation fold.",
  },
  {
    id: "nmims",
    timestamp: "Aug 2022 — Aug 2025",
    title: "NMIMS",
    description:
      "Three years that turned potential into leadership. As President of the Placement Cell, spearheaded the flagship 'Extempore' event from concept to execution. As a Founding Member of the Research Cell, led a 50-student team to deliver an inter-college symposium for 100+ participants — proof that the right process, applied with the right people, scales.",
  },
  {
    id: "aaft",
    timestamp: "Dec 2024 — Jun 2025",
    title: "AAFT",
    description:
      "A parallel pursuit — stepping outside the spreadsheet to explore craft and creativity on its own terms.",
  },
  {
    id: "rotaract",
    timestamp: "Oct 2024 — Jun 2025",
    title: "Rotaract Club of Bombay West",
    description:
      "Service alongside strategy — a reminder that impact worth measuring isn't always the kind you can put in a regression.",
  },
  {
    id: "cornell",
    timestamp: "Jul 2025 — May 2026",
    title: "Cornell University",
    description:
      "A Master's in Data Science and Applied Statistics, capped by the Capstone Leadership Award. Beyond the coursework, this chapter has been about mentorship — including the quiet satisfaction of watching a junior, 'M', grow more confident with every dataset handed her way.",
  },
];

export const compilingPageData = {
  heading: "Still Compiling…",
  message: "Pulling source data into the workspace. Check back soon.",
};

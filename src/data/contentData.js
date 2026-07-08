// Centralized content for the entire site. Pages import from here rather than
// hardcoding copy, so text/timestamps/metrics stay in one place.

export const siteMeta = {
  name: "Shashwat Modi",
  role: "Data Scientist",
  resumeHref: "/shashwat_modi_resume.pdf",
  linkedinHref: "https://www.linkedin.com/in/shashwatmodi/",
  email: "modishashwat13@gmail.com",
};

export const navData = {
  brand: { label: "Shashwat", to: "/" },
  links: [
    { label: "Journey", to: "/journey" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ],
  // Rendered after the dropdowns, immediately before the Resume CTA — the
  // last tab-style link in the header.
  trailingLinks: [{ label: "Your Canvas", to: "/canvas" }],
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
        { label: "Music & Mashups", to: "/compiling" },
        { label: "Formula 1", to: "/compiling" },
        { label: "Martial Arts", to: "/compiling" },
        { label: "Basketball", to: "/compiling" },
        { label: "Coffee", to: "/compiling" },
        { label: "Travel", to: "/compiling" },
        { label: "Food", to: "/compiling" },
        { label: "Bughouse Chess", to: "/compiling" },
      ].sort((a, b) => a.label.localeCompare(b.label)),
    },
    {
      label: "My Library",
      items: [
        { label: "Currently Reading", to: "/library" },
        { label: "Data & Statistics", to: "/library" },
        { label: "Strategy & Business", to: "/library" },
        { label: "Fiction Shelf", to: "/library" },
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
  signOffLine: "Yours with 95% confidence,",
  signatureName: "Shashwat Modi",
};

export const projectsData = [
  {
    id: "fatigue-modeling",
    title: "Advanced Physiological Modeling",
    description:
      "Engineered a LightGBM regression model with strict GroupKFold cross-validation to forecast sailor fatigue 30 minutes in advance (0.34 RMSE). Built a 3.7 In_rmssd ‘Soft Margin’ dashboard early-warning buffer — the same logic as Popeye reaching for spinach before Bluto lands the blow: the model spots the dip before fatigue actually hits.",
    metric: "0.34 RMSE",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "fraud-diamond",
    title: "Published Academic Research",
    description:
      "Authored a socio-technical analysis examining 3 major Indian financial frauds (1992–2018) employing the Fraud Diamond Model. Published in Springer Proceedings in Business and Economics.",
    metric: "Springer",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "sarima-market",
    title: "SARIMA Market Forecasting",
    description:
      "Developed a Python-based SARIMA model to project sales performance across 1,900+ product subgroups, linking prescription patterns to revenue outcomes.",
    metric: "1,900+ subgroups",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "nri-mapping",
    title: "NRI Predictive Mapping",
    description:
      "Built a robust regression model (R² = 0.87) utilizing multi-source demographic data scraping to map international banking expansion.",
    metric: "R² = 0.87",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "tap-sustainability",
    title: "‘Tap’ into Sustainability",
    description:
      "Analyzed washroom tap data utilizing statistical sampling distributions. Uncovered an alarming 33% waste rate (120 kilolitres monthly) to drive conservation awareness.",
    metric: "33% waste",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "aviation-forecasting",
    title: "Aviation Time Series Forecasting",
    description:
      "Employed ARIMA, SARIMA, and Prophet models to study post-Covid-19 aviation recovery. Double-shortlisted for the NMIMS REL Poster Symposium.",
    metric: "Double-shortlisted",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "sql-architecture",
    title: "SQL Database Architecture",
    description:
      "Constructed a streamlined SQL database for college administration, successfully addressing and eliminating redundant Excel workflows.",
    metric: "0 spreadsheets",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  },
];

export const journeyData = [
  { 
    date: "Aug 2025 — May 2026",
    title: "Cornell University",
    byline: "Master's in Data Science and Applied Statistics",
    achievements: [
      "Awarded the Capstone Leadership Award",
      "Served as a Course Assistant under Professor James Minas translating python concepts for business students",
    ],
    tier: "primary",
    logoFile: "cornell.png",
    description: "Honored with the Capstone Leadership Award. More importantly, this was a period of deep academic collaboration. Served as a Course Assistant for NBA 6215 under [Professor Name] and mentored junior researchers like 'M' in advanced data pipelines, learning as much from them as I taught."
  },
  {
    date: "Dec 2025",
    title: "Pitasana Hath Yoga",
    byline: "Yoga Certification",
    tier: "tertiary",
    description: "A continuation of my mind-body discipline. [Add heartfelt sentence about what this specific practice taught you or who guided you here]."
  },
  {
    date: "Dec 2025",
    title: "Northern Shaolin Kung-Fu",
    byline: "Yellow Sash (9 Stars)",
    tier: "tertiary",
    description: "Mastery of internal and external mechanics, balancing flexibility with striking power."
  },
  {
    date: "Aug 2022 — Aug 2025",
    title: "NMIMS (Narsee Monjee Institute of Management Studies)",
    byline: "B.Sc. Applied Statistics & Analytics",
    tier: "primary",
    logoFile: "nmims.jpg",
    description: "Three years that turned potential into leadership, heavily influenced by mentors like [Name]. As President of the Placement Cell, I spearheaded 'Extempore', and as a Founding Member of the Research Cell, led a 50-student team for an inter-college symposium."
  },
  {
    date: "Dec 2024 — Jun 2025",
    title: "Asian Academy of Film and Television (AAFT)",
    byline: "Music Production Diploma",
    tier: "tertiary",
    logoFile: "aaft.jpg",
    description: "A necessary step outside the spreadsheet. Exploring craft, rhythm, and creativity on its own terms under the guidance of [Instructor/Peer Name]."
  },
  {
    date: "Oct 2024 — Jun 2025",
    title: "Rotaract Club of Bombay West",
    byline: "Community Service & Strategy",
    tier: "tertiary",
    description: "Service alongside strategy. A grounding experience that reminded me that the impact most worth measuring isn't always the kind you can put in a regression model, thanks to the community built with [Name/Group]."
  },
  {
    date: "Mar 2025 — May 2025",
    title: "Emcure Pharmaceuticals",
    byline: "Market Research Intern",
    tier: "secondary",
    description: "Spearheaded a Six Sigma DMEDI framework and engineered Python-based SARIMA models to forecast trends. I also focused on operational efficiency by automating tedious manual tasks previously done by an employee on MS Excel."
  },
  {
    date: "Dec 2024",
    title: "Kyokoshinkai Karate-do",
    byline: "3rd Degree Black Belt (San-Dan)",
    tier: "tertiary",
    description: "Mastery of form, endurance, and absolute discipline. This resilience translates into every other arena of my life, a mindset instilled by my Sensei, [Name]."
  },
  {
    date: "May 2024 — Jun 2024",
    title: "ICICI Bank",
    byline: "Project Intern",
    tier: "secondary",
    description: "Executed end-to-end opportunity estimation for NRI ecosystem growth via demographic data scraping under the mentorship of [Manager Name]."
  },
  {
    date: "Jun 2023 — Jul 2023",
    title: "Ernst & Young (EY)",
    byline: "Summer Intern",
    tier: "secondary",
    description: "Executed insurance claims analytics through Python-driven exploratory data analysis. A foundational look into corporate data structures, guided by [Manager Name]."
  },
  {
    date: "Apr 2023",
    title: "Ai-do & Ko-bu-do",
    byline: "Black Belts",
    tier: "tertiary",
    description: "Dual mastery in unarmed and weapons-based martial disciplines, anchoring a long-term commitment to traditional arts and focus."
  },
  {
    date: "Dec 2022",
    title: "Tai-chi",
    byline: "Black Sash",
    tier: "tertiary",
    description: "Mastery of internal martial arts, emphasizing breath control, pacing, and fluid biomechanics under the guidance of [Name]."
  },
  {
    date: "Jun 2019 — Jul 2021",
    title: "Navy Children School",
    byline: "Higher Secondary Education",
    tier: "primary",
    logoFile: "ncs.jpg",
    description: "Crucial years of academic transition and adaptability, refining the analytical focus required for advanced statistical sciences, championed by teachers like [Name]."
  },
  {
    date: "Feb 2008 — May 2019",
    title: "The Cathedral and John Connon School",
    byline: "Primary & Secondary Education",
    tier: "primary",
    logoFile: "cajcs.png",
    description: "Eleven years of foundation — where curiosity was first encouraged to wander. Deeply grateful to educators like [Name] who shaped my earliest habits of inquiry."
  },
  {
    date: "Jun 2018",
    title: "Trinity College London",
    byline: "Grade 8 Piano",
    tier: "tertiary",
    description: "A testament to years of technical discipline and musicality. Deepest gratitude to my teachers, Leon DSouza and Charmis Braganza, for guiding this journey."
  },
  {
    date: "2011 — 2014",
    title: "The Cathedral and John Connon School",
    byline: "Best Student (Middle School)",
    tier: "tertiary",
    logoFile: "cajcs.png",
    description: "An early introduction to team leadership and responsibility, recognition for academic as well as holistic growth and excellence. This recognition set the stage for future leadership pursuits."
  },
  {
    date: "The Beginning",
    title: "Swati & Ashish Modi",
    byline: "Foundation",
    tier: "primary",
    description: "Before any of the data, degrees, or titles, there were two people who taught me how to ask questions in the first place. Every model I've ever built rests on a foundation my parents poured first — patience, curiosity, and the quiet insistence that the 'why' always matters more than the 'what'."
  }
];

export const compilingPageData = {
  heading: "Still Compiling…",
  message: "Pulling source data into the workspace. Check back soon.",
};

export const libraryPageData = {
  heading: "Currently editing…",
  message: "Under editorial review. This shelf is being annotated before it goes to print.",
  metrics: [
    { label: "Volumes catalogued", value: "12" },
    { label: "Pages annotated", value: "1,840" },
    { label: "Marginalia", value: "236 notes" },
  ],
};

export const contactPageData = {
  heading: "Get in Touch",
  message: "Questions, collaboration ideas, or just want to say hello — the message lands directly in my inbox.",
};

export const canvasPageData = {
  heading: "Your Canvas.",
  message: "An open ledger for collective expressions, stories, and marginalia. Leave your print.",
  maxAttachmentBytes: 500 * 1024,
};

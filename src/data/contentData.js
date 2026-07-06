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
  impactStats: [
    { value: "80%", label: "Workflow Optimization" },
    { value: "50+", label: "Researchers Led" },
    { value: "0.34 RMSE", label: "Predictive Fidelity" },
  ],
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
    date: "Aug 2025 — May 2026",
    title: "Cornell University",
    byline: "Master's in Data Science and Applied Statistics",
    tier: "primary",
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
    description: "Three years that turned potential into leadership, heavily influenced by mentors like [Name]. As President of the Placement Cell, I spearheaded 'Extempore', and as a Founding Member of the Research Cell, led a 50-student team for an inter-college symposium."
  },
  {
    date: "Dec 2024 — Jun 2025",
    title: "Asian Academy of Film and Television (AAFT)",
    byline: "Music Production Diploma",
    tier: "tertiary",
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
    description: "Crucial years of academic transition and adaptability, refining the analytical focus required for advanced statistical sciences, championed by teachers like [Name]."
  },
  {
    date: "Feb 2008 — May 2019",
    title: "The Cathedral and John Connon School",
    byline: "Primary & Secondary Education",
    tier: "primary",
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
    date: "2013 — 2014",
    title: "The Cathedral and John Connon School",
    byline: "House Captain (7th Grade)",
    tier: "tertiary",
    description: "An early introduction to team leadership and responsibility, setting the stage for future operational roles."
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

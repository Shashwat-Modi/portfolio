/**
 * WORKFLOW OPTIMIZATION PROMPT FOR EXTERNAL LLMs (Claude 3.5 Sonnet / Gemini 1.5 Pro):
 *
 * When you update sections of your website, open your browser AI, paste your raw new text, and use this exact prompt:
 * "Act as an expert data compression engine. I will provide you with a raw markdown file, project details, or blog post from my portfolio website. Compress the content into high-density, loss-less bullet points optimized for another LLM's system context window. You MUST preserve all precise names, technical tools, frameworks used, metrics, dates, and core outcomes. Completely strip out adjectives, marketing fluff, passive formatting, and filler text."
 */

export const dynamicSummaryContext = {

  homeSummary: `
    Profile: Shashwat Modi
    - Credentials: Master's in Data Science and Applied Statistics from Cornell University (May 2026 Alumnus)
    - Core Competency: Data science, machine learning algorithms tuning, cross-functional collaboration, data translation into growth strategies
    - Sign-off: Yours with 95% confidence,  
  `,

  journeySummary: `
    Cornell University (Aug 2025 - May 2026)
    - Degree: Master's in Data Science and Applied Statistics
    - Awards: Capstone Leadership Award
    - Roles: Course Assistant under Professor James Minas (Python instruction for business students)
    - Engagements: Deep learning research with Professor Kilian Weinberger; Global development metrics analysis at UN HDI office NYC with Dr. Kaushik Basu; Predictive modeling for competitive sailing under Professor Ahmed El Alaoui
    - Activities: Ultimate Frisbee university team, South Asian Music Society, climbing wall belay certification

    Hath Yoga (Dec 2025)
    - Certification: Pitasana - Yoga Trainer Certification

    Northern Shaolin Kung-Fu (Dec 2025)
    - Certification: Yellow Sash (9 Stars)
    - Specialization: Pa Kua Chang (internal/external mechanics, mind-body boxing)

    NMIMS (Aug 2022 - Aug 2025)
    - Degree: B.Sc. Applied Statistics & Analytics
    - Leadership Roles: President - Placement Cell (managed 65-student cohort, engineered weekly aptitude test series, designed turncoat/group discussion interview formats); Founding Member - Research Cell (coordinated inaugural undergraduate poster symposium); Founding Member & Head - Music Club (arranged/directed five-instrument, multi-vocal ensemble)
    - Mentors: Professor Sunil Shirvaiker, Professor Rushina Singhi, Dean Professor Sushil Kulkarni, Mrs. Yashashree Kokate, Mr. Akshat Kundalia, Professor Piyush Shah

    Academic Research Publication (Feb 2024)
    - Title: Evolutionary Metamorphosis of Money Management: Analysing Financial Frauds in India
    - Publication: Springer Proceedings in Business and Economics
    - Scope: Socio-technical analysis of 3 Indian financial frauds (1992-2018) using the Fraud Diamond Model across INR 50,000+ crore scam cases

    Asian Academy of Film and Television (AAFT) (Dec 2024 - Jun 2025)
    - Degree: Music Production Diploma
    - Scope: Sound engineering, multi-layer arrangement, multi-instrument/vocal tracking

    Teach For India (Dec 2024 - Jun 2025)
    - Role: Volunteer - Teaching Assistant
    - Scope: 8th-grade Math and Science instruction in Mumbai

    Rotaract Club of Bombay West (Oct 2024 - Jun 2025)
    - Role: Community Service & Strategy

    Emcure Pharmaceuticals (Mar 2025 - May 2025)
    - Role: Market Research Intern
    - Scope: Deployed Six Sigma DMEDI framework; engineered Python-based SARIMA models for market trend forecasting
    - Core Outcome: Built a Python script to automate a manual tracking task previously managed via MS Excel, eliminating the administrative workflow bottleneck

    Kyokoshinkai Karate-do (Dec 2024)
    - Certification: 3rd Degree Black Belt (San-Dan)
    - Timeline: 10 years of structured training

    ICICI Bank (May 2024 - Jun 2024)
    - Role: Project Intern
    - Scope: Evaluated growth vectors within the NRI banking ecosystem; scraped multi-source demographic data; built a regression model from scratch to estimate potential customer density/volume

    Ernst & Young (EY) (Jun 2023 - Jul 2023)
    - Role: Summer Intern
    - Scope: Conducted exploratory data analysis on insurance claims utilizing Python to clean and parse data structures

    Ai-do & Ko-bu-do (Apr 2023)
    - Certification: Black Belts (unarmed responses and weapons-based forms)

    Tai-chi (Dec 2022)
    - Certification: Black Sash

    Navy Children School (Jun 2019 - Jul 2021)
    - Education: Higher Secondary Education (CBSE/NCERT curriculum focus on micro and macroeconomics)

    The Cathedral and John Connon School (Feb 2008 - May 2019)
    - Education: Primary & Secondary Education
    - Activities: Basketball team, choir
    - Mentors: Headmistress Mrs. Susmita Ganguly, Principal Mrs. Meera Isaacs, Choirmaster Mr. Ravi Joshua

    Trinity College London (Jun 2018)
    - Certification: Grade 8 Piano (Classical training under Mr. Leon D'Souza and Mrs. Charmis Braganza)

    Parents
    - Foundation: Core principles of critical inquiry, personal accountability, and objective-driven effort
  `,

  projectsSummary: `
  
    Project: Advanced Physiological Modeling
    - ID: fatigue-modeling
    - Tooling: LightGBM regression model
    - Function: Early-warning biometrics tracking to predict sailor fatigue 30 minutes prior to onset
    - Metric: 0.34 RMSE

    Project: Published Academic Research
    - ID: fraud-diamond
    - Scope: Socio-technical analysis of three Indian financial scams via Fraud Diamond Model (systemic vulnerabilities, regulatory loopholes, behavioral psychology)
    - Outcome: Published in Springer Proceedings
    - Metric: Springer Pub

    Project: SARIMA Market Forecasting
    - ID: sarima-market
    - Organization: Emcure Pharmaceuticals
    - Tooling: SARIMA time-series framework
    - Function: Corporate revenue forecasting linking medical prescription patterns to 1,900+ product subgroups
    - Metric: 1,900+ Sectors

    Project: NRI Predictive Mapping
    - ID: nri-mapping
    - Organization: ICICI Bank
    - Tooling: Regression modeling / multi-source demographic web scraping
    - Function: International banking opportunity estimation and customer density mapping
    - Metric: R^2 = 0.87

    Project: 'Tap' into Sustainability
    - ID: tap-sustainability
    - Tooling: Statistical sampling
    - Function: Campus washroom water utilization analysis
    - Metric: Identified 33% water waste

    Project: Aviation Time Series Analysis
    - ID: aviation-forecasting
    - Tooling: ARIMA, SARIMA, Prophet frameworks
    - Function: Post-pandemic aviation recovery pattern evaluation
    - Outcome: Double-shortlisted at NMIMS Symposium
    - Metric: Symposium Medal

    Project: SQL Database Architecture
    - ID: sql-architecture
    - Tooling: Relational SQL Database
    - Function: College administration data pipeline centralization to replace manual processes
    - Metric: 0 Excel spreadsheets remaining
  `,

  notebookSummary: `
    <!-- MANUALLY PASTE COMPRESSED NOTEBOOK BULLET POINTS HERE -->
  `,
  scrapbookSummary: `
    <!-- MANUALLY PASTE COMPRESSED SCRAPBOOK BULLET POINTS HERE -->
  `,
  librarySummary: `
    <!-- MANUALLY PASTE COMPRESSED LIBRARY BULLET POINTS HERE -->
  `,
};

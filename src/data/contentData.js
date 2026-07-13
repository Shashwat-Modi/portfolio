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
    "I am a data scientist who believes numbers only matter when they connect with people. Having recently completed my Master’s in Data Science and Applied Statistics from Cornell University, I thrive at the intersection of rigorous analytics and collaborative leadership. I don't just build models in isolation; I partner with cross-functional teams to translate complex data into clear, high-impact strategies that drive actual growth.",
    "Whether I am tuning machine learning algorithms, navigating ambiguous corporate environments, or layering tracks for a new musical arrangement, I am driven by a constant hunger to learn and improve. I am obsessed with finding the ‘why’ behind the what, and I believe both projects and life are at their best when you bring people together to find the perfect balance of sweet, sour, and spicy."
  ],
  signOffLine: "Yours with 95% confidence,",
  signatureName: "Shashwat Modi"
};

export const projectsData = [
  {
    id: "fatigue-modeling",
    title: "Advanced Physiological Modeling",
    description:
      "Built a LightGBM regression model to predict sailor fatigue 30 minutes before it strikes. Using the analogy of Popeye reaching for spinach before Bluto lands a punch, the model establishes a 'soft margin' early-warning system. By tracking biometrics, it spots the precise physical dips where performance degrades, catching exhaustion before it actually sets in.",
    metric: "0.34 RMSE",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "fraud-diamond",
    title: "Published Academic Research",
    description:
      "Co-authored a socio-technical analysis breaking down three major Indian financial scams through the lens of the Fraud Diamond Model. The research focuses heavily on the intersection of systematic vulnerabilities, regulatory loopholes, and behavioral psychology. The paper was successfully published in the Springer Proceedings.",
    metric: "Springer Pub",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "sarima-market",
    title: "SARIMA Market Forecasting",
    description:
      "Developed a time-series framework at Emcure Pharmaceuticals to project commercial performance across over 1,900 distinct product subgroups. The model bridges the gap between raw medical prescription patterns and corporate revenue forecasting.",
    metric: "1,900+ Sectors",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "nri-mapping",
    title: "NRI Predictive Mapping",
    description:
      "Built an opportunity-estimation model during my time at ICICI Bank to track growth sectors within international banking. By scraping multi-source demographic data, the regression maps out potential customer density to back up corporate expansion with hard metrics.",
    metric: "R² = 0.87",
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "tap-sustainability",
    title: "‘Tap’ into Sustainability",
    description:
      "Ran a statistical sampling project analyzing campus washroom water usage data, exposing an unneeded 33% water waste rate to build a clear case for infrastructure conservation.",
    metric: "33% Waste Caught",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "aviation-forecasting",
    title: "Aviation Time Series Analysis",
    description:
      "Evaluated the volatile patterns of post-pandemic aviation recovery using ARIMA, SARIMA, and Prophet frameworks, earning a double-shortlist at the NMIMS Symposium.",
    metric: "Symposium Medal",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "sql-architecture",
    title: "SQL Database Architecture",
    description:
      "Designed and deployed a customized relational SQL database for college administration, centralizing fragmented data pipelines and completely eliminating manual Excel sheets.",
    metric: "0 Spreadsheets",
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
      "Recipient of the Capstone Leadership Award",
      "Served as a Course Assistant under Professor James Minas translating python concepts for business students",
    ],
    tier: "primary",
    logoFile: "cornell.png",
    description: [
      "More than the technical frameworks, this year was defined by a profound sense of academic community and the opportunity to learn alongside a truly international collective of minds. It was a space where rigorous methodology met genuine curiosity—whether diving into deep learning research with Professor Kilian Weinberger, debating puzzles and paradoxes in philosophy seminars, or looking at global development metrics at the UN HDI office in New York City with Dr. Kaushik Basu. Each of these educators left an indelible mark on my journey, completely reframing how I approach data. I still think back to the brilliant intuition of Professor Melissa Smith using a blind chocolate tasting to ground Fisher’s Exact Test, and the guidance of Professor Ahmed El Alaoui, who connected with me deeply as a mentor while navigating the complexities of building our predictive models for competitive sailing. That intellectual curiosity frequently pulled me outside the classroom, even extending to a brief trip to San Francisco, where the windy streets and billboards advertising AI models over fashion felt like a glimpse into a changing world.",
      "Living in Ithaca also meant embracing a completely new physical rhythm. It meant learning how to trudge up steep, snow-covered hills while navigating the quiet hazard of black ice to make an early lecture, balanced by the pure joy of sledding down Libe Slope or driving through the sweeping landscapes of upstate New York with friends. I found myself constantly stepping outside my comfort zone—getting belay certified at the climbing wall, picking up Ultimate Frisbee to represent the university at tournaments, performing with the South Asian Music Society, and even testing my nerves with a stand-up comedy set for the first time in front of a small audience. It was a period of deep collaboration and personal growth, shaped by mentors and peers who taught me that the truest value of data lies in the human perspectives it helps us understand."
    ]
  },
  {
    date: "Dec 2025",
    title: "Hath Yoga",
    byline: "Pitasana - Yoga Trainer Certification",
    tier: "tertiary",
    logoFile: "yoga.png",
    description: "As simple and calm as it looks from the outside, yoga is a definitive test of physical and mental endurance. Earning my certification taught me that holding a posture or controlling a breath requires a level of focus and absolute determination that rival any intense, high-impact workout. Far more than just flexibility, it is an exercise in physical alignment and mental discipline, demanding that you quiet the mind while forcing the body to find balance under pressure."
  },
  {
    date: "Dec 2025",
    title: "Northern Shaolin Kung-Fu",
    byline: "Yellow Sash (9 Stars)",
    tier: "tertiary",
    logoFile: "kungfu.png",
    description: "While other styles taught me endurance, Pa Kua Chang (Northern Shaolin Kung Fu) is my primary foundation, the space where I truly feel at home. It is a demanding study of internal and external mechanics—a form of mind-body boxing that requires balancing explosive striking power with fluid flexibility and grace. Under the guidance of my Sifu, this discipline has never been about learning to attack others, but about learning how to defend yourself, protect those in need, and instil a complete alignment of the mind and body. Moving through these traditional forms requires an acute self-awareness, making one fit and strong enough to withstand whatever life throws at you. It remains the ultimate space where I step away entirely to practice deliberate, intentional focus and meditate."
  },
  {
    date: "Aug 2022 — Aug 2025",
    title: "NMIMS (Narsee Monjee Institute of Management Studies)",
    byline: "B.Sc. Applied Statistics & Analytics",
    achievements: [
      "President - Placement Cell",
      "Founding Member - Research Cell",
      "Founding Member & Head - Music Club"
    ],
    tier: "primary",
    logoFile: "nmims.png",
    description: [
      "This was my first step into a less protected world—a sudden transition into a high-paced academic life defined by continuous project loops, expansive syllabi, and relentless assignment deadlines. Coming closely after the quiet of the COVID-19 years, the sheer velocity of this environment was a welcome shift. It became a lesson in daily optimization, from calculating the absolute best permutations and combinations of local public transport routes between home and campus, to budgeting personal expenditures and balancing a rigorous daily practice of martial arts alongside my statistics coursework. Over those three foundational years, managing competing deadlines taught me a fundamental lesson: the time-value of money will always be overshadowed by the actual money-value of time.",
      "That time was grounded by an exceptional community of peers and mentors who consistently pushed me to step outside the spreadsheet. As a founding member of the Research Cell, I helped coordinate our first undergraduate poster symposium—managing everything from early sponsorship pitches and deck building to the complex layout logistics required to host entries spanning machine learning in oncology to quantitative finance. Simultaneously, as President of the Placement Cell, our team looked after a cohort of 65 students, where we built a weekly aptitude test series to refresh core concepts from earlier semesters and introduced an entirely new event format merging turncoat and group discussion mechanics to sharpen interview confidence. Beyond the data, directing and arranging music for a five-instrument, multi-vocal ensemble for inter-college competitions provided a beautiful space to collaborate, listen closely to peer ideas, and make tough, collective creative decisions.",
      "None of this would have been possible without the immense trust of educators who allowed me to function independently and grow. I owe a massive debt of gratitude to the guidance of Professor Sunil Shirvaiker for his practical industry insights, Professor Rushina Singhi for patient research mentorship that ultimately led to a paper publication, and our dean, Professor Sushil Kulkarni, alongside our placement coordinator, Mrs. Yashashree Kokate. I am equally thankful to Mr. Akshat Kundalia, whose realistic, industry-specific feedback made financial economics approachable—transforming a subject I once feared into something I genuinely enjoy—and to Professor Piyush Shah for his early trust in pushing me toward ambitious, impactful projects. There are so many more faculty members, administrators, and peers who guided me through research, events, and daily queries; while it is impossible to name them all individually, every conversation left an imprint on how I live, learn, and look back on this journey."
    ]
  },
  {
    date: "Feb 2024",
    title: "Evolutionary Metamorphosis of Money Management: Analysing Financial Frauds in India",
    byline: "Academic research published in SPRINGER Proceedings in Business and Economics",
    tier: "secondary",
    logoFile: "springer.png",
    description: "Authored a socio-technical analysis examining 3 major Indian financial frauds (1992-2018), employing the Fraud Diamond Model to understand behavioural drivers across INR 50,000+ crore scam cases."
  },
  {
    date: "Dec 2024 — Jun 2025",
    title: "Asian Academy of Film and Television (AAFT)",
    byline: "Music Production Diploma",
    tier: "tertiary",
    logoFile: "aaft.png",
    description: "This was a deeply creative space that stripped away the guesswork and gave me the actual mechanics of sound engineering and arrangement. For a long time, I had been brainstorming multi-layered mashups entirely in my head; this training finally gave me the canvas to bring them to life. It gave me the technical fluency to record myself playing multiple instruments and singing different vocal layers, stacking harmonies and rhythms piece by piece. Ultimately, it bridged the gap between raw musical passion and studio execution, turning my ideas into fully realized productions."
  },
  {
    date: "Dec 2024 — Jun 2025",
    title: "Teach For India",
    byline: "Volunteer - Teaching Assistant",
    tier: "secondary",
    logoFile: "tfi.png",
    description: [
      "My journey began in the vibrant chaos of a Mumbai classroom, assisting a Fellow with eighth-grade Math and Science. I still vividly remember a field trip with those students to the Museum of Solutions; watching their curiosity ignite face-to-face with complex exhibits sparked a critical realization. True educational equity is not a metric of basic literacy; it is the active, deliberate construction of pathways that allow a child’s unique talent to breathe.",
      "Witnessing the sheer, unfiltered joy of those children and seeing the profound impact of structured mentorship firsthand left an indelible mark on me. It was a grounding reminder of the raw potential within the next generation. That experience turned into a lifelong personal vow: to always find a way to teach, to mentor, and to stay actively connected to the energy of the generation coming up behind me, ensuring I give back the same clarity and guidance that helped shape my own path."
    ]
  },
  {
    date: "Oct 2024 — Jun 2025",
    title: "Rotaract Club of Bombay West",
    byline: "Community Service & Strategy",
    tier: "tertiary",
    logoFile: "rcbw.png",
    description: "This was a grounding experience centered around the raw energy of community. It provided a space to interact with an entirely new circle of people, forging bonds and navigating high-stakes, competitive games and events. It served as a constant reminder that the most meaningful shared efforts are driven by mutual respect and camaraderie rather than quantifiable metrics."
  },
  {
    date: "Mar 2025 — May 2025",
    title: "Emcure Pharmaceuticals",
    byline: "Market Research Intern",
    tier: "secondary",
    logoFile: "emcure.png",
    description: [
      "This role was a deep dive into the fast-moving intersection of healthcare logistics and data, where the primary objective was to breathe efficiency into traditional systems. Tasked with deploying a Six Sigma DMEDI framework and engineering Python-based SARIMA models to forecast market trends, I got a firsthand look at how predictive statistics can directly impact corporate operational strategy.",
      "Yet, the most rewarding part of the internship came from identifying a glaring operational bottleneck outside the scope of the project. I noticed an employee spending hours manually managing tracking tasks entirely within MS Excel—a tedious process ripe for human error and fatigue. By stepping in to automate that entire workflow via Python, I managed to eliminate a massive daily administrative burden. It was a pivotal experience that taught me a lasting lesson: as a data scientist, sometimes the highest-impact solution isn’t the most complex neural network, but a clean, automated script that gives a human being their time back."
    ]
  },
  {
    date: "Dec 2024",
    title: "Kyokoshinkai Karate-do",
    byline: "3rd Degree Black Belt (San-Dan)",
    tier: "tertiary",
    logoFile: "karate.png",
    description: "This milestone marked ten years of structured testing, conditioning, and traditional forms. Training in this style meant confronting the core philosophy of Mas Oyama—that martial arts begin and end with courtesy, and that true strength is forged only through ultimate, unyielding physical endurance. The long, grueling hours in the dojo under my Sensei instilled a quiet resilience and an absolute respect for consistency, teaching me a level of discipline that carries directly into my academic and daily habits."
  },
  {
    date: "May 2024 — Jun 2024",
    title: "ICICI Bank",
    byline: "Project Intern",
    tier: "secondary",
    logoFile: "icici.png",
    description: [
      "This role was a sudden plunge into the unvarnished reality of corporate life, where everyone is busy, desks are crowded, and no one has the time to hold your hand. Assigned to explore growth vectors within the NRI banking ecosystem, I was given a defined end goal but absolutely no roadmap or starting inputs. It forced me to figure things out independently—ultimately scraping demographic data and building a regression model from scratch to estimate potential customer volume for specific sectors.",
      "However, the real education happened outside the code. With no clear path forward, I had to develop the sheer confidence to walk into the offices of incredibly busy senior managers, interrupt their day, and clearly articulate my questions to secure their insights. It taught me that executing a model is only half the battle; the real work is learning how to navigate a fast-moving corporate environment and advocate for your own project when you're the only one driving it."
    ]
  },
  {
    date: "Jun 2023 — Jul 2023",
    title: "Ernst & Young (EY)",
    byline: "Summer Intern",
    tier: "secondary",
    logoFile: "ey.png",
    description: "This was my very first step into the corporate world, serving as a welcoming introduction to large-scale data systems and professional analytics frameworks. Working on insurance claims, I utilized Python to run exploratory data analysis, learning how to clean and parse messy, real-world data structures to find meaningful patterns."
  },
  {
    date: "Apr 2023",
    title: "Ai-do & Ko-bu-do",
    byline: "Black Belts",
    tier: "tertiary",
    logoFile: "aido.png",
    description: "This training was a sobering lesson in the weight of traditional martial arts, balancing unarmed responses with weapons-based forms. I quickly learned that studying the way of the samurai is not about simply wielding a katana; it is about first cultivating the maturity and discipline to be worthy of drawing it from its sheath. There is an immense responsibility in handling tools built with the inherent power to take a life in an instant—it forces you to respect their capability without ever letting fear dictate your movements. Ultimately, a weapon, no matter how sharp or heavy, is only as capable as the mind and body behind it, reinforcing a deep personal commitment to absolute focus, harmony, and self-control."
  },
  {
    date: "Dec 2022",
    title: "Tai-chi",
    byline: "Black Sash",
    tier: "tertiary",
    logoFile: "taichi.png",
    description: "Tai Chi became an exercise in intentional deceleration. In an environment that constantly prompts us to speed up, learning to move at a slow, deliberate tempo was a profound challenge. I quickly realized that executing an action with absolute precision, calmness, and control is often far more demanding than throwing a high-impact punch. It requires an intense focus on posture and pacing, forcing a complete alignment of the self that serves as a quiet, essential counterweight to the noise of daily routines."
  },
  {
    date: "Jun 2019 — Jul 2021",
    title: "Navy Children School",
    byline: "Higher Secondary Education",
    tier: "primary",
    logoFile: "ncs.png",
    description: [
      "These two years were a brief but profound lesson in adaptability and rapid transition. Stepping into the Navy Children School community meant experiencing a completely new culture, surrounded by peers from defense backgrounds who possessed a remarkable openness and a natural ability to build warm friendships instantly. Academically, it was a year of sharp pivots—navigating the dense, often cryptic language of CBSE and NCERT textbooks, and developing a sudden, deep fascination with micro and macroeconomics.",
      "Then came the total disruption of COVID-19 in our final year, which completely altered how we learned and connected. Overnight, school shifted to a screen, plunging our entire batch into absolute uncertainty regarding our final board exams. Yet, that period of isolated studying was balanced by a unique silver lining: being stuck in lockdown with my two cousins, all three of us attending different online classes during the day, and then having an absolute blast playing together every single evening.",
      "Ultimately, this global pause forced our generation to grow up quickly. It taught us to find routine in chaos, to self-discipline our studying without the structure of a physical classroom, and to value resilience over certainty. When we finally returned to school—wearing masks and having only a single day of practice to run through a year's worth of laboratory experiments before our final practical board exams—we didn't panic. We simply adapted, realizing that the most critical lesson COVID left us with was the ability to face an unpredictable environment with a calm, flexible mind.",
    ]
  },
  {
    date: "Feb 2008 — May 2019",
    title: "The Cathedral and John Connon School",
    byline: "Primary & Secondary Education",
    tier: "primary",
    logoFile: "cajcs.png",
    description: [
      "Eleven years is a profound window of time, and spending them during my most formative years means the impact of this place is woven directly into how I think, write, and see the world. Looking back, listing individual project titles, elocution trophies, or MUN awards feels entirely inconsequential. What matters infinitely more is the quiet, daily architecture of curiosity that was built here—the transition from learning basic words and sentences to drafting complex prose and poetry, and the freedom to explore mathematics, track-and-field, art, and computer science with the exact same level of intensity and intrigue. Whether it was pouring a year of effort into a school project on the 2012 London Olympics or competing in the high-stakes adrenaline of an inter-house basketball final, it was an environment that taught me to throw myself completely into everything I touched.",
      "That expressive clarity and eloquence of thought was first gently prodded in junior school by our headmistress, Mrs. Susmita Ganguly, who graciously spent her time annotating and correcting a notebook overflowing with essays I had written over a summer break. That standard of care stayed with me through the years, reinforced by the silent, steady observation and unwavering belief of our principal, Mrs. Meera Isaacs, and the precise corrections of our choirmaster, Mr. Ravi Joshua, ringing through the hall during after-school choir practices. To list every educator who shaped this journey—from grade 1 all the way till 10—would require a volume of its own. Alongside them were the friends who teased me in the corridors and immediately stood beside me on the basketball court during recess. While it is impossible to map every memory onto a single page, I look back with immense gratitude for a foundation that quietly shaped my earliest habits of inquiry and taught me how to grow.",
    ]
  },
  {
    date: "Jun 2018",
    title: "Trinity College London",
    byline: "Grade 8 Piano",
    tier: "tertiary",
    logoFile: "trinity.png",
    description: [
      "The culmination of years of classical training, technical scales, and dynamic interpretation. I remain incredibly thankful to my teachers, Mr Leon D'Souza and Mrs Charmis Braganza, for teaching me how to listen closely and appreciate the underlying structure of a composition.",
      "Alongside them, I owe a beautiful debt to all the music teachers who have guided me across different instruments over the years, building my musicality step by step, piece by piece. Together, they taught me to find the intersection of rhythm and rhyme, of ebony and ivory."
    ]
  },
  {
    date: "The Beginning",
    title: "Swati & Ashish Modi",
    byline: "Foundation",
    tier: "primary",
    logoFile: "family.png",
    description: [
      "Before any of the data, degrees, or titles, there were two people who taught me how to ask questions in the first place. Every model I've ever built rests on a foundation my parents poured first—patience, curiosity, and the quiet insistence that the 'why' always matters more than the 'what.'",
      "Growing up, their satisfaction was never dictated by an award, a rank, or a specific outcome. Instead, it always came down to a single, recurring question: 'Did you give your best?' This constant invitation to self-introspect, rather than chase external validation, is what instilled the quiet determination and accountability that drives me today. There is no formulation of words or titles that can fully capture or repay that debt. They didn't set out to raise a collection of accolades; they set out to build a good human being.",
      "For the sacrifices, the unwavering support, and the values that anchor everything I do: Thank you!"
    ]
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

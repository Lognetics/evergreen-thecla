// All structured site content lives here so pages stay clean.

export const brand = {
  name: "Thecla Amarachukwu Orakwe",
  alias: "Evergreen Thecla",
  tagline: "Find Your Voice. Build Confidence. Become, unapologetically.",
  roles: [
    "Public Speaker",
    "Spoken Word Artist",
    "Confidence Coach",
    "Host",
    "Voiceover Artist",
    "Brand Influencer",
    "Project Manager",
    "Youth & Education Development Advocate",
  ],
  email: "evergreenthecla24@gmail.com",
  phones: ["+234 916 905 1383", "+234 906 003 7295"],
  socials: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/evergreen.thecla?utm_source=qr",
      handle: "@evergreen.thecla",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thecla-orakwe-6b2aba204",
      handle: "Thecla Orakwe",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/18rrRqwHR7/?mibextid=wwXIfr",
      handle: "Evergreen Thecla",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@evergreen.thecla",
      handle: "@evergreen.thecla",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@evergreenthecla",
      handle: "Evergreen Thecla",
    },
    { name: "X", url: "https://x.com/evergreenthecla", handle: "@evergreenthecla" },
  ],
};

// `short` is used in the desktop top bar so all items fit on one line;
// `label` (full) is used in the mobile menu and footer.
export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work With Me", short: "Work With Me", to: "/work-with-me" },
  { label: "Unbox Your Aura", short: "Unbox Aura", to: "/unbox-your-aura" },
  { label: "30-Day Challenge", short: "Challenge", to: "/challenge" },
  { label: "Books & Products", short: "Books", to: "/books" },
  { label: "Blogs / Confidence Nuggets", to: "/blog" },
  { label: "Podcast", to: "/podcast" },
  { label: "Advocacy & Leadership Career", to: "/advocacy" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: 100, suffix: "+", label: "Speaking Engagements" },
  { value: null, label: "Youth Development Advocate" },
  { value: null, label: "Community Builder" },
  { value: null, label: "Confidence Coach" },
];

// Icon keys map to lucide-react icons in the component layer.
export const services = [
  {
    icon: "Mic",
    title: "Public Speaking",
    summary:
      "Keynotes and talks that move audiences to find their voice, build confidence and take bold action.",
  },
  {
    icon: "Sparkles",
    title: "Event & Red-Carpet Hosting",
    summary:
      "Polished, engaging hosting that keeps energy high and every moment flowing with elegance.",
  },
  {
    icon: "Feather",
    title: "Spoken Word Poetry",
    summary:
      "Original, emotive performances that turn words into experiences audiences never forget.",
  },
  {
    icon: "Compass",
    title: "Confidence & Public Speaking Coaching",
    summary:
      "One-on-one and group coaching that transforms nervous speakers into confident communicators.",
  },
  {
    icon: "AudioLines",
    title: "Voiceover & Script Writing",
    summary:
      "Warm, professional voiceovers and scripts crafted to carry your brand's message clearly.",
  },
  {
    icon: "Megaphone",
    title: "Brand Influencing & UGC",
    summary:
      "Authentic content and brand partnerships that connect with audiences and drive engagement.",
  },
  {
    icon: "ClipboardList",
    title: "Project Management & Consulting",
    summary:
      "Development consulting and project leadership that turns vision into measurable impact.",
  },
  {
    icon: "GraduationCap",
    title: "Youth & Education Advocacy",
    summary:
      "Advocacy and programs that empower young people through education and leadership.",
  },
  {
    icon: "ShoppingBag",
    title: "Digital Products",
    summary:
      "Books, workbooks and resources designed to help you grow in confidence and clarity.",
  },
  {
    icon: "Headphones",
    title: "Podcast Hosting",
    summary:
      "Honest conversations on confidence, purpose and becoming — coming soon to your feed.",
  },
];

export const workServices = [
  {
    icon: "Mic",
    title: "Public Speaking",
    description:
      "From conferences and corporate stages to schools and faith gatherings, I deliver keynotes that inform, inspire and ignite action. Every talk is tailored to your audience and built around a single transformation: helping people believe in their voice.",
    features: [
      "Keynotes & conference talks",
      "Corporate & leadership sessions",
      "Schools, campuses & youth events",
      "Faith & community gatherings",
    ],
  },
  {
    icon: "Sparkles",
    title: "Event Hosting",
    description:
      "As a host and MC, I bring presence, warmth and structure to weddings, corporate events, award nights, conferences and red-carpet experiences — keeping your audience engaged from welcome to wrap.",
    features: [
      "Conferences & summits",
      "Corporate & award events",
      "Red-carpet & lifestyle events",
      "Panels & moderated sessions",
    ],
  },
  {
    icon: "Feather",
    title: "Spoken Word Poetry",
    description:
      "Original spoken word performances written for your theme — confidence, faith, womanhood, purpose or social impact. A powerful way to open, close or anchor an event with emotion and meaning.",
    features: [
      "Custom-written pieces",
      "Live event performances",
      "Brand & campaign features",
      "Faith & advocacy themes",
    ],
  },
  {
    icon: "AudioLines",
    title: "Voiceover & Script Writing",
    description:
      "Professional voiceover work and script writing for ads, explainers, documentaries, e-learning and brand stories — delivered with clarity, warmth and the right tone for your message.",
    features: [
      "Commercial & brand voiceovers",
      "Documentary & narration",
      "E-learning & explainers",
      "Script writing & editing",
    ],
  },
  {
    icon: "Megaphone",
    title: "Brand Influencing & UGC",
    description:
      "Authentic brand partnerships and user-generated content that feel real and resonate. I help purpose-led brands reach and move their audiences with content that converts.",
    features: [
      "Brand ambassadorships",
      "UGC content creation",
      "Campaign storytelling",
      "Social media features",
    ],
  },
  {
    icon: "Compass",
    title: "Coaching & Mentorship",
    description:
      "Personalised coaching for individuals and teams who want to speak with confidence, communicate clearly and show up as their fullest selves — on stage, online and in life.",
    features: [
      "Confidence coaching",
      "Public speaking training",
      "Communication & presence",
      "Group & corporate programs",
    ],
  },
  {
    icon: "ClipboardList",
    title: "Project Management & Consulting",
    description:
      "Development consulting and project leadership for organisations and initiatives — from concept and planning to delivery and impact measurement.",
    features: [
      "Programme design & delivery",
      "Development consulting",
      "Stakeholder coordination",
      "Impact & reporting",
    ],
  },
];

export const auraFeatures = [
  {
    icon: "Video",
    title: "Webinars",
    text: "Live and on-demand sessions on confidence, communication and growth.",
  },
  {
    icon: "Lightbulb",
    title: "Confidence Tips",
    text: "Practical, bite-sized guidance you can apply to your life today.",
  },
  {
    icon: "Users",
    title: "Community",
    text: "A supportive space of people becoming the best version of themselves.",
  },
  {
    icon: "BookOpen",
    title: "Resources",
    text: "Guides, workbooks and tools to support your personal development.",
  },
  {
    icon: "GraduationCap",
    title: "Training Programs",
    text: "Structured programs that build real public speaking and confidence skills.",
  },
];

export const auraHelps = [
  "Build confidence",
  "Discover who they are",
  "Find their voice",
  "Improve public speaking skills",
  "Develop personally and professionally",
  "Become the best version of themselves",
];

export const testimonials = [
  {
    quote:
      "Thecla has a rare gift — she makes you believe in your own voice. After her coaching I finally stopped shrinking and started speaking up.",
    name: "Adaeze N.",
    role: "Coaching Client",
  },
  {
    quote:
      "She hosted our conference flawlessly. The energy, the elegance, the presence — our audience was engaged from the very first minute.",
    name: "Dr. Emeka O.",
    role: "Event Organiser",
  },
  {
    quote:
      "Her spoken word performance moved the entire room to tears. Words became a true experience. Unforgettable.",
    name: "Chiamaka E.",
    role: "Festival Director",
  },
  {
    quote:
      "Unbox Your Aura changed how I see myself. I walked in nervous and walked out confident, clear and ready to lead.",
    name: "Blessing U.",
    role: "Community Member",
  },
  {
    quote:
      "Working with Thecla on our youth program brought structure, passion and real impact. She truly cares about the next generation.",
    name: "Samuel A.",
    role: "Programme Partner",
  },
];

export const blogCategories = [
  "Confidence",
  "Public Speaking",
  "Growth",
  "Leadership",
  "Faith",
  "Women Development",
  "Youth Development",
];

export const blogPosts = [
  {
    title: "Africa’s Next Generation of Diplomats Convenes in Accra",
    headline:
      "Africa’s Next Generation of Diplomats Convenes in Accra, and Amb. Thecla Amarachukwu Orakwe’s Voice Is Set to Leave a Lasting Mark on the Continent’s Diplomatic Future",
    category: "Leadership",
    excerpt:
      "Amb. Thecla Amarachukwu Orakwe joins a distinguished panel at the International Diplomatic Leadership Conference in Accra — where young African voices are shaping the continent’s diplomatic future.",
    read: "5 min read",
    featured: true,
    pinned: true,
    cover: "/images/blog-diplomacy-thecla.jpg",
    blocks: [
      {
        t: "p",
        x: "Africa's diplomatic landscape is undergoing a remarkable transformation. Across the continent, a new generation of leaders is emerging — young professionals, advocates, and changemakers who are redefining diplomacy and shaping conversations that will influence Africa's future for decades to come.",
      },
      {
        t: "p",
        x: "On Thursday, June 18, 2026, Accra, Ghana, will serve as a hub for these emerging voices as the International Diplomatic Leadership Conference for Emerging Leaders in African and Global Affairs convenes at the School of Public Health Auditorium, University of Ghana, Legon.",
      },
      {
        t: "p",
        x: "Organized by the Africa Young Diplomats Forum CIC, the conference will bring together diplomats, policymakers, development practitioners, business leaders, and aspiring diplomats to engage in meaningful discussions on Africa's role within the evolving global landscape.",
      },
      { t: "h2", x: "Exploring the Power of Soft Diplomacy" },
      { t: "p", x: "This year's conference will be held under the theme:" },
      {
        t: "quote",
        x: "Soft Diplomacy as a Strategic Tool for Regional Economic Integration, Cooperative Partnerships, and Sustainable Development within the Framework of Agenda 2063.",
      },
      {
        t: "p",
        x: "The theme underscores the growing importance of diplomacy beyond traditional statecraft. In today's interconnected world, diplomacy increasingly relies on collaboration, cultural engagement, strategic partnerships, youth participation, and people-centered solutions that foster sustainable development and regional integration.",
      },
      {
        t: "p",
        x: "As Africa continues its journey toward realizing the aspirations of Agenda 2063, soft diplomacy has become a vital instrument for strengthening relationships, promoting economic cooperation, and addressing shared continental challenges.",
      },
      { t: "h2", x: "Amb. Thecla Amarachukwu Orakwe Joins Distinguished Panel" },
      {
        t: "p",
        x: "Among the distinguished voices selected to contribute to this important dialogue is Amb. Thecla Amarachukwu Orakwe, who has been invited by the Africa Young Diplomats Forum CIC to serve as a panelist at the conference.",
      },
      {
        t: "p",
        x: "As the National Vice President of the African Union Youth Council (Clubs), Nigeria Chapter, Amb. Orakwe represents a generation of young African leaders dedicated to advancing diplomacy, youth engagement, leadership development, and sustainable progress across the continent.",
      },
      {
        t: "p",
        x: "Her participation reflects the growing influence of young Africans in diplomatic spaces and highlights the importance of ensuring that youth perspectives remain central to conversations about Africa's future.",
      },
      {
        t: "img",
        src: "/images/blog-diplomacy-lineup.jpg",
        alt: "International Diplomatic Leadership Conference — speakers and panelists",
      },
      { t: "h2", x: "A Gathering of Global and Continental Leaders" },
      {
        t: "p",
        x: "The conference will feature an impressive lineup of speakers and thought leaders from across Africa and beyond.",
      },
      {
        t: "p",
        x: "The event will be chaired by H.E. Amb. Prof. Tunji Asaolu, Secretary General of the United World Congress of Diplomats, who will also deliver the keynote address.",
      },
      { t: "p", x: "Other notable speakers include:" },
      {
        t: "ul",
        items: [
          "Ms. Mariama Jalloh — National Director, Young Women in Governance Network, Sierra Leone",
          "Mr. Caleb Darkwa — Managing Director, MOHBILITY Ghana Limited",
          "Mrs. Olufunke Aderogba — Global Head of Program, AYDF Global",
          "Amb. Councillor Stacey Murphy — Trinidad and Tobago",
          "Alongside other respected diplomats, development professionals, and emerging leaders from across the globe.",
        ],
      },
      {
        t: "p",
        x: "Together, these speakers will explore how diplomacy can serve as a catalyst for stronger partnerships, regional integration, economic growth, and sustainable development.",
      },
      { t: "h2", x: "More Than a Conference" },
      {
        t: "p",
        x: "Beyond the presentations and panel discussions, the International Diplomatic Leadership Conference represents a broader movement — one that empowers young leaders to actively shape diplomatic narratives, foster international cooperation, and contribute meaningfully to Africa's development agenda.",
      },
      {
        t: "p",
        x: "It is a platform where ideas are exchanged, networks are built, and future collaborations are born. Most importantly, it demonstrates that the future of diplomacy is increasingly being influenced by young, innovative, and globally minded Africans.",
      },
      { t: "h2", x: "Looking Ahead" },
      {
        t: "p",
        x: "As Accra welcomes emerging diplomatic leaders from across the continent and beyond, Amb. Thecla Amarachukwu Orakwe's participation stands as a testament to the growing presence of young African voices in spaces where critical decisions, transformative ideas, and strategic partnerships are taking shape.",
      },
      {
        t: "p",
        x: "Her contribution to the conference reflects the potential of Africa's youth to drive meaningful change and reinforces the importance of inclusive leadership in building a prosperous and globally connected Africa.",
      },
      { t: "h3", x: "Conference Details" },
      {
        t: "details",
        items: [
          { label: "Event", value: "International Diplomatic Leadership Conference for Emerging Leaders in African and Global Affairs" },
          { label: "Date", value: "Thursday, June 18, 2026" },
          { label: "Time", value: "10:00 AM GMT" },
          { label: "Venue", value: "School of Public Health Auditorium, University of Ghana, Legon, Accra, Ghana" },
          { label: "Theme", value: "Soft Diplomacy as a Strategic Tool for Regional Economic Integration, Cooperative Partnerships, and Sustainable Development within the Framework of Agenda 2063." },
        ],
      },
      {
        t: "p",
        x: "To follow highlights and live updates from the conference, connect with the Africa Young Diplomats Forum on Instagram, LinkedIn, and Facebook: @africayoungdiplomatsforum",
      },
    ],
  },
  {
    title: "You Don't Have to Shrink to Fit In",
    category: "Confidence",
    excerpt:
      "Why playing small never serves you — and three mindset shifts to help you take up the space you were created for.",
    read: "5 min read",
    body: [
      "Somewhere along the way, many of us learned that being smaller — quieter, less visible, less ourselves — was the safest way to belong. We dimmed our light so others wouldn't feel uncomfortable. But shrinking has never made anyone whole. It only makes the world a little dimmer.",
      "You were not created to fit in. You were created to stand out — to carry a voice, a story and a presence that no one else can. The moment you stop apologising for taking up space is the moment you begin to truly live.",
      "Here are three shifts that change everything. First, stop asking 'will they like me?' and start asking 'am I being honest?'. Second, treat confidence as a muscle, not a mood — you build it by doing the brave thing before you feel ready. Third, surround yourself with people who clap when you rise instead of those who are comfortable when you fall.",
      "You don't have to shrink to fit into the world. Stand tall. Speak up. Become, unapologetically.",
    ],
  },
  {
    title: "Owning the Room Without Losing Yourself",
    category: "Confidence",
    excerpt:
      "Real confidence isn't about being the loudest — it's about being fully, calmly yourself.",
    read: "4 min read",
    body: [
      "We often confuse confidence with volume. But the most powerful people in any room aren't the loudest — they're the most grounded. Confidence is calm. It's the quiet certainty that you belong, even when you're nervous.",
      "Start with your body. Stand tall, breathe slowly, make eye contact. Your physiology speaks before your words do. Then, anchor yourself in why you're there — not to impress, but to contribute.",
      "When you stop performing and start connecting, you own the room without ever losing yourself.",
    ],
  },
  {
    title: "The First 30 Seconds On Stage",
    category: "Public Speaking",
    excerpt:
      "How to open any talk with presence, calm your nerves and earn your audience's attention from the start.",
    read: "6 min read",
    body: [
      "The first thirty seconds of any talk decide everything. It's where your audience quietly answers one question: 'Is this worth my attention?' Win those seconds, and the rest becomes far easier.",
      "Resist the urge to open with 'thank you for having me' or a list of housekeeping notes. Instead, open with a hook — a question, a bold statement, a short story, or a moment of silence. Make them lean in.",
      "Before you walk on, take three slow breaths. Plant your feet. Find one friendly face. Then deliver your first line like it's the only thing that matters — because in that moment, it is.",
      "Presence isn't the absence of nerves. It's choosing to show up fully in spite of them.",
    ],
  },
  {
    title: "What To Do When Your Mind Goes Blank",
    category: "Public Speaking",
    excerpt:
      "Every speaker freezes sometimes. Here's how to recover with grace and keep going.",
    read: "4 min read",
    body: [
      "It happens to everyone — mid-sentence, the next word vanishes. The secret isn't never forgetting; it's recovering gracefully when you do.",
      "Pause. A confident pause looks intentional, not panicked. Take a breath, glance at your notes, or simply repeat your last point in different words to find your footing.",
      "Audiences are far kinder than we imagine. They're rooting for you. A calm recovery often earns more trust than a flawless delivery ever could.",
    ],
  },
  {
    title: "Confidence Is a Skill, Not a Personality",
    category: "Growth",
    excerpt:
      "Confidence isn't something you're born with — it's built. Here's how to practise it on purpose.",
    read: "4 min read",
    body: [
      "We talk about confident people as if they were born that way — as if confidence were a fixed trait handed out at birth. It isn't. Confidence is a skill, and like any skill, it's built through practice.",
      "Every time you do the thing that scares you, you deposit evidence into your self-belief. Speak up in the meeting. Send the message. Take the stage. Each rep makes the next one easier.",
      "Don't wait to feel confident before you act. Act, and let the confidence catch up.",
    ],
  },
  {
    title: "Growth Lives Just Outside Your Comfort Zone",
    category: "Growth",
    excerpt:
      "The discomfort you're avoiding might be the exact doorway to your next level.",
    read: "5 min read",
    body: [
      "Comfort is lovely, but nothing grows there. Every meaningful expansion in your life will ask you to be a little uncomfortable first.",
      "The trick is to reframe the discomfort. That flutter of fear before something new isn't a stop sign — it's a signal that you're at the edge of growth.",
      "Lean in. Choose the challenge. On the other side of discomfort is the version of you you've been waiting to become.",
    ],
  },
  {
    title: "Leading Before You Feel Ready",
    category: "Leadership",
    excerpt:
      "The leaders who make impact rarely feel fully ready. Here's how to lead while you grow.",
    read: "5 min read",
    body: [
      "If you wait until you feel completely ready to lead, you'll wait forever. The truth is, most leaders step up before they feel qualified — and grow into the role along the way.",
      "Leadership isn't about having all the answers. It's about taking responsibility, serving people and making decisions with the information you have.",
      "Start where you are, with what you have. Lead a project, a team, a conversation. Readiness is built in motion, not in waiting.",
    ],
  },
  {
    title: "The Leader as a Listener",
    category: "Leadership",
    excerpt:
      "The most influential leaders speak less and listen more. Here's why it matters.",
    read: "4 min read",
    body: [
      "We tend to imagine leaders as those who command and direct. But the most trusted leaders are often the best listeners.",
      "When people feel truly heard, they give you their best. Listening builds loyalty, surfaces better ideas and helps you lead with empathy instead of ego.",
      "Before your next big decision, ask more questions than you answer. Leadership begins with listening.",
    ],
  },
  {
    title: "Faith, Voice and Purpose",
    category: "Faith",
    excerpt:
      "How my faith shapes the way I use my voice — and how purpose gives your message its power.",
    read: "6 min read",
    body: [
      "For me, faith isn't separate from my work — it's the foundation of it. I believe each of us was given a voice for a reason, and that using it well is part of living out our purpose.",
      "Purpose is what turns talent into impact. When you know why you speak, your message carries a weight that skill alone can never give it.",
      "Ask yourself: what am I here to say, and who am I here to serve? When your voice and your purpose align, you become unstoppable.",
    ],
  },
  {
    title: "Purpose Over Pressure",
    category: "Faith",
    excerpt:
      "When you anchor in purpose, comparison and pressure lose their grip on you.",
    read: "4 min read",
    body: [
      "So much of our anxiety comes from comparison — measuring our journey against someone else's highlight reel. But purpose quiets the noise.",
      "When you're clear on what you're called to, you stop competing and start contributing. Other people's success becomes inspiration, not threat.",
      "Run your own race, at your own pace, toward your own purpose. That's where peace lives.",
    ],
  },
  {
    title: "Raising Confident Young Women",
    category: "Women Development",
    excerpt:
      "Practical ways to help girls and young women find their voice early and own their worth.",
    read: "5 min read",
    body: [
      "Confidence in young women is rarely accidental — it's nurtured. The earlier a girl learns that her voice matters, the more freely she'll use it for the rest of her life.",
      "Praise effort over appearance. Encourage opinions, even when they differ from yours. Give her chances to lead, to speak, to fail safely and try again.",
      "When we raise girls who know their worth, we raise women who change the world.",
    ],
  },
  {
    title: "Call Me Woman: Owning Your Story",
    category: "Women Development",
    excerpt:
      "Every woman carries a story worth telling. Here's why your voice is your power.",
    read: "5 min read",
    body: [
      "There is power in a woman who knows her story and refuses to apologise for it. Our experiences — the beautiful and the broken — are not weaknesses to hide but strengths to share.",
      "When you own your story, you give other women permission to own theirs. Vulnerability becomes a bridge, and your voice becomes a light.",
      "Call me woman — and call it strength.",
    ],
  },
  {
    title: "Why Youth Voices Matter in Development",
    category: "Youth Development",
    excerpt:
      "Young people aren't just the future — they're the present. Why their voices belong at the table now.",
    read: "7 min read",
    body: [
      "We love to call young people 'the leaders of tomorrow'. But that phrase, however well-meaning, can quietly push them out of today's conversations. Young people are not just the future — they're the present.",
      "They bring energy, fresh perspective and a deep stake in the decisions being made about their world. Development that excludes youth voices is development that misses the point.",
      "Give young people a seat at the table — and a real say once they're there. The communities that listen to their youth are the ones that thrive.",
    ],
  },
  {
    title: "From Potential to Purpose: Mentoring the Next Generation",
    category: "Youth Development",
    excerpt:
      "Potential is everywhere. Mentorship is what turns it into purpose and impact.",
    read: "5 min read",
    body: [
      "Every young person is brimming with potential — but potential alone doesn't change lives. It needs direction, encouragement and someone willing to invest.",
      "That's the power of mentorship. A single person who believes in a young person can alter the entire trajectory of their life.",
      "If you've walked a path, reach back and light the way for someone behind you. Mentorship is how potential becomes purpose.",
    ],
  },
];

export const podcastTopics = [
  "Confidence",
  "Purpose",
  "Public Speaking",
  "Growth",
  "Faith",
  "Becoming",
  "Career Development",
];

// Episodes with a `video` key are playable now (real YouTube content).
export const podcastEpisodes = [
  {
    number: "01",
    title: "This Is For Anyone Who Is Afraid To Start",
    note: "Now Playing",
    duration: "Short",
    video: "auraEp1",
    desc: "The intro episode — a word of courage for anyone standing at the edge of a new beginning.",
  },
  {
    number: "02",
    title: "Everyone Has a Gift 🎁",
    note: "Now Playing",
    duration: "Short",
    video: "auraEp2",
    desc: "You were created with something the world needs. Here's how to recognise and own your gift.",
  },
  {
    number: "03",
    title: "Why People Shy Away From Public Speaking",
    note: "Now Playing",
    duration: "Short",
    video: "auraEp3",
    desc: "The real reasons fear of speaking holds us back — and the first steps to moving past it.",
  },
  {
    number: "04",
    title: "Comfort Zone Is a Beautiful Prison",
    note: "Now Playing",
    duration: "Short",
    video: "auraEp4",
    desc: "Why staying comfortable quietly costs you growth — and how to break free of the prison.",
  },
  {
    number: "05",
    title: "CALL ME WOMAN — A Spoken Word Premiere",
    note: "Now Playing",
    duration: "4 min",
    video: "callMeWoman",
    desc: "The full spoken word performance — a celebration of womanhood, voice and courage.",
  },
  {
    number: "06",
    title: "Behind the Scenes of CALL ME WOMAN",
    note: "Now Playing",
    duration: "2 min",
    video: "behindScenes",
    desc: "Go behind the production of the spoken word piece — the heart, the process and the message.",
  },
];

export const advocacyAreas = [
  {
    icon: "Users",
    title: "Youth Development",
    text: "Equipping young people with confidence, leadership and communication skills to thrive.",
  },
  {
    icon: "GraduationCap",
    title: "Education Advocacy",
    text: "Championing access to quality education and learning opportunities for all.",
  },
  {
    icon: "Heart",
    title: "Girl Child Empowerment",
    text: "Empowering girls to find their voice, own their worth and lead with courage.",
  },
  {
    icon: "Compass",
    title: "Leadership Development",
    text: "Building the next generation of bold, purpose-driven and ethical leaders.",
  },
  {
    icon: "Building2",
    title: "Community Development",
    text: "Driving grassroots initiatives that create meaningful, lasting change.",
  },
  {
    icon: "Globe2",
    title: "African Development",
    text: "Contributing to a stronger, more confident and self-determined Africa.",
  },
];

export const leadership = [
  {
    role: "Co-Founder / Executive Director",
    org: "AESDI",
    full: "African Education & Social Development Initiative",
    text: "Co-founding and leading an initiative focused on education and social development across the continent.",
  },
  {
    role: "National Vice President",
    org: "AUYC",
    full: "African Union Youth Club (AUYC), Nigeria Chapter",
    text: "Representing and advancing youth voices in continental leadership and development as National Vice President of the Nigeria Chapter.",
  },
];

export const impactStats = [
  { value: 100, suffix: "+", label: "Speaking Engagements" },
  { value: 5000, suffix: "+", label: "Lives Touched" },
  { value: 20, suffix: "+", label: "Programs & Events" },
  { value: 2, suffix: "", label: "Organisations Led" },
];

export const faqs = [
  {
    q: "How do I book Thecla to speak or host my event?",
    a: "Use the contact form on this page and select “Speaking Request”. Share your event details, date and audience, and her team will respond within 1–2 business days with availability and next steps.",
  },
  {
    q: "What kinds of events does Thecla work with?",
    a: "Conferences, corporate and award events, schools and campuses, faith and community gatherings, red-carpet and lifestyle events, panels and workshops — locally and internationally.",
  },
  {
    q: "Does Thecla offer one-on-one coaching?",
    a: "Yes. She offers personalised confidence and public speaking coaching for individuals, as well as group and corporate training programs. Choose “Service Inquiry” on the form to get started.",
  },
  {
    q: "Can I join the Unbox Your Aura community?",
    a: "Absolutely — it's open to anyone ready to build confidence and grow. Visit the Unbox Your Aura page or send a message to join webinars, trainings and the community.",
  },
  {
    q: "How quickly will I get a response?",
    a: "Most inquiries receive a reply within 1–2 business days. For urgent speaking requests, mention your event date and it will be prioritised.",
  },
];

export const products = [
  {
    type: "Book",
    title: "Become, Unapologetically",
    text: "A confidence manifesto for anyone ready to stop shrinking and start standing out.",
    price: "$14.99",
    tag: "Featured",
  },
  {
    type: "E-book",
    title: "Find Your Voice",
    text: "A practical guide to building confidence and speaking up — on stage, online and in life.",
    price: "$9.99",
  },
  {
    type: "Workbook",
    title: "The Confidence Workbook",
    text: "Guided exercises and prompts to build unshakeable self-belief, one page at a time.",
    price: "$12.99",
  },
  {
    type: "Journal",
    title: "The Becoming Journal",
    text: "A daily journal designed to help you reflect, grow and become your fullest self.",
    price: "$11.99",
  },
  {
    type: "Resource",
    title: "Public Speaking Starter Kit",
    text: "Templates, checklists and frameworks to prepare and deliver any talk with confidence.",
    price: "$7.99",
  },
  {
    type: "Resource",
    title: "Confidence Affirmation Cards",
    text: "Beautifully designed affirmation cards to ground you before you speak or show up.",
    price: "$8.99",
  },
];

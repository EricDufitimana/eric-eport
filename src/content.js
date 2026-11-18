// Public portfolio copy. Keep titles, links, project status, and honors editable here.
export const profile = {
  name: 'Eric Dufitimana',
  school: 'Agahozo-Shalom Youth Village',
  introduction: 'I build software for my school in Rwanda. If you spend a week here, you might also hear me arguing a debate motion, singing with the school band, or reading a poem I wrote.',
  contact: null, // Add a confirmed public https: profile or mailto: address to show contact.
};

export const projects = [
  {
    id: 'career', number: '01', title: 'A little direction.\nA lot of possibility.', name: 'ASYV Career Resources Center', category: 'OPPORTUNITIES & CONNECTION',
    description: 'Finding your next step should be a little easier. I built a place where students can find opportunities and connect with counselors, while counselors can organize workshops, track attendance, and share announcements.',
    detail: 'My project record includes a revamp to accommodate changes at the center. It taught me that useful software needs to grow with the people using it.',
    impact: '500 users at peak', technology: 'Built with Next.js & Supabase', image: '/images/career.png', url: 'https://asyvcrc.vercel.app/', linkLabel: 'Open the CRC platform',
    alt: 'Screenshot of the ASYV Career Resources Center platform',
    fallback: ['Find an opportunity', 'Connect with a counselor', 'Make your next move'],
  },
  {
    id: 'clubs', number: '02', title: 'Less paperwork.\nMore club time.', name: 'ASYV Clubs Management System', category: 'MADE FOR SCHOOL LIFE',
    description: 'Club presidents used to keep attendance and meeting notes on paper. I built a system where they can record both in one place, so the next meeting starts with less catching up.',
    detail: 'One place for the people who show up and the ideas they bring.',
    impact: 'Used by 20+ school clubs', image: '/images/clubs.png', url: 'https://asyvcms.vercel.app/', linkLabel: 'Open the clubs platform',
    alt: 'Screenshot of the ASYV Clubs Management System', fallback: ['Keep attendance', 'Save meeting notes', 'Get back to your club'],
  },
  {
    id: 'champions', number: '03', title: 'For the love\nof the game.', name: 'Champions League Tracker', category: 'FROM THE PITCH TO THE SCREEN',
    description: 'I started by recording player statistics for our school’s friendly games. That small idea grew into a tracker for matchups and results, with a random wheel for drawing pairings.',
    detail: 'The wheel makes the draw part of the game, too.', impact: 'Built for our school’s friendly games',
    image: '/images/champions.png', alt: 'Champions League Tracker matchday page with football fixtures and results',
    fallback: ['Record player statistics', 'Draw the next matchup', 'Follow the results'],
    url: 'https://asyvleague.vercel.app/', linkLabel: 'Open the tracker',
  },
  {
    id: 'mova', number: '04', title: 'A ride starts\nwith a question.', name: 'MOVA', category: 'A STUDENT ENTREPRENEURSHIP PROTOTYPE',
    description: 'In Rwanda, getting a moto can mean walking to a commercial stand first. Could a basic phone bring the driver to you? Our proposed USSD flow connects a passenger with a driver by phone number.',
    detail: 'I explored the smartphone experience through a React map prototype. MOVA is a prototype and business pitch, with more to learn before it becomes a service.',
    impact: 'Prototype & business pitch', technology: 'React map prototype',
    url: 'https://mova-rw.vercel.app/', linkLabel: 'Explore the MOVA prototype',
  },
];

export const activities = [
  {
    "name": "Raspberry Pi Foundation Code Club @ ASYV",
    "role": "Co-founder & president · Grades 11–12",
    "text": "I co-founded the club to open programming to more students. What began with 15 selected students grew to more than 70. I taught web development, and one member used those lessons to build an education platform of their own."
  },
  {
    "name": "ASYV Debate Club",
    "role": "Secretary · Grade 10 / Vice president · Grade 11",
    "text": "I led 20-minute daily practices where first-year debaters learned to spot the weakest part of an argument and respond on the spot. Students I coached went on to reach the semifinals of a national debate competition."
  },
  {
    "name": "Robotics & Innovation Club",
    "role": "Co-founder & former vice president · Grades 9–11",
    "text": "I co-founded ASYV’s first robotics club and mentored more than 20 students in robotics. In 2025, our team earned third place nationally in the Innovation Project category at FIRST LEGO League Rwanda.",
    "honor": "first-lego"
  },
  {
    "name": "ASYV Live Band",
    "role": "Rapper & lyricist · Grades 10–12",
    "text": "I write lyrics and rap for more than 500 people each week. I’ve performed at the international Ubumuntu Arts Festival, played to a concert audience of more than 1,000, and shared the stage with Juno Kizigenza and Ariel Wayz at Agahozo & Friends at Zaria Court. I’m also featured on two released songs."
  },
  {
    "name": "Isano Isangiwe — ASYV poetry & theatre group",
    "role": "Poet & theatre director · Grades 10–12",
    "text": "I write original poems and perform them for audiences of more than 500. For our adaptation of Romeo and Juliet, I organized the production, directed the cast, and took the stage as an actor."
  },


  {
    "name": "Student government",
    "role": "Former junior minister",
    "text": "As junior minister, I helped 128 first-year students settle into village life, practice public speaking, and connect with older students."
  }
];

export const learning = [
  ['Yale Young African Scholars', '2025 residential participant'],
  ['Isomo Circles', 'Learning beyond the classroom'],
  ['Dreamers Academy Camp', 'Grade 9 participant'],
  ['Kaggle', 'Intro to Machine Learning'],
  ['CMU CS Academy', 'Self-directed learning'],
  ['CS50x', 'Coursework through week four'],
];

export const honors = [
  { id: 'yyas', name: 'Yale Young African Scholars', grade: '10', context: 'International program selection · 2025 residential participant' },
  { id: 'yale-delegate', name: 'Yale Model African Union V, Best Delegate', grade: '11', context: 'International' },
  { id: 'yale-pitch', name: 'Yale Model African Union V, Mandate-2-Market Pitch Contest finalist', grade: '11', context: 'International · Green Charcoal pitch' },
  { id: 'green-hills', name: 'Green Hills Model United Nations, Best Delegate', grade: '11', context: 'National' },
  { id: 'idebate', name: 'iDebate Tournament Champions', grade: '10', context: 'National team championship · 2024 ' },
  { id: 'first-lego', name: 'FIRST LEGO League Rwanda, third place in Innovation Project', grade: '10', context: 'National team recognition · 2025' },
  { id: 'isomo-english', name: 'Isomo Circles, Best Duolingo English Test Score', grade: '10', context: 'National-level program recognition' },
  { id: 'isomo-typing', name: 'Isomo Circles Typing Competition, winner', grade: '10', context: 'National-level program recognition' },
  { id: 'asyv-mun', name: 'ASYV Model United Nations, Best Opening Speech', grade: '11', context: 'School' },
  { id: 'debate-speaker', name: 'ASYV Debate League, Best Speaker', grade: '9', context: 'School' },
  { id: 'academic', name: 'ASYV Best Annual Academic Performer', grade: '9 & 10', context: 'Earned twice' },
  { id: 'steam', name: 'ASYV STEAM Fair, Best Innovative Project', grade: '10', context: 'School' },
  { id: 'poetry', name: 'ASYV Grade Art Competition, poetry category winner', grade: '9 & 10', context: 'Won twice' },
  { id: 'science', name: 'ASYV Science Experiment Competition, first runner-up', grade: '9', context: 'School' },
  { id: 'language', name: 'ASYV Language Day, Best Speech', grade: '9', context: 'School' },
];


export const scores = [
  { name: 'SAT', score: '1520', outOf: '1600' },
  { name: 'Duolingo English Test', score: '145', outOf: '160' },
];

export const creativeActivities = [
  {
    "type": "mic",
    "title": "ASYV Live Band",
    "place": "Rapper & lyricist · Grades 10–12",
    "text": "Most weeks, the people I rap for are the same people I sit next to in class. I like looking up from the mic and seeing familiar faces. Writing lyrics is something I can do on my own, but the band gets a say in how they sound. A drumbeat can change where I take a breath or which word I lean on. That’s one of my favorite parts of playing live.",
    "note": "Weekly performances · Two released songs",
    "color": "pink",
    "image": "/images/zaria-group.jpg",
    "alt": "A moment from the Agahozo & Friends concert at Zaria Court"
  },
  {
    "type": "theatre",
    "title": "Isano Isangiwe",
    "place": "Poet & theatre director · Grades 10–12",
    "text": "With poetry, I get to decide how long to hold a pause and which words I want people to remember. Directing our adaptation of Romeo and Juliet asked something different of me. I might hear a line one way in my head, then hear another actor say it and like their version better. Acting in the play myself helped me understand how much room a performer needs to make a part their own.",
    "note": "Poetry · Directing · Acting",
    "color": "yellow",
    "image": "/images/theatre.jpg",
    "alt": "A school theatre production at ASYV"
  },
  {
    "type": "pen",
    "title": "Original poetry",
    "place": "Writing, reciting & performing at ASYV",
    "text": "I write about things like growing up and love because I’m still figuring them out myself. Sometimes a thought comes out more honestly in a poem than it would in conversation. I like sharing those poems at ASYV. There’s something personal about standing in front of people I see every day and letting them hear what’s been on my mind.",
    "note": "Poetry category winner · Twice",
    "color": "mint"
  }
];

export const recognitionPhotos = [
  { image: '/images/yale-mau.jpg', caption: 'Yale Model African Union V · Best Delegate', href: '#yale-delegate', alt: 'At Yale Model African Union V, holding the Best Delegate award' },
  { image: '/images/fll.jpg', caption: 'FIRST LEGO League Rwanda · Our team’s competition', href: '#first-lego', alt: 'At the FIRST LEGO League competition, wearing the ASYV team shirt' },
  { image: '/images/ghamun.jpg', caption: 'Green Hills MUN · Best Delegate', href: '#green-hills', alt: 'At Green Hills Model United Nations with a certificate and award' },
  { image: '/images/yyas.jpg', caption: 'Yale Young African Scholars · 2025 participant', href: '#yyas', alt: 'Group photograph with fellow Yale Young African Scholars participants' },
];

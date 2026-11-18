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
    impact: '500 users at peak', technology: 'Built with Next.js & Supabase', image: '/images/career.png',
    alt: 'Screenshot of the ASYV Career Resources Center platform',
    fallback: ['Find an opportunity', 'Connect with a counselor', 'Make your next move'],
  },
  {
    id: 'clubs', number: '02', title: 'Less paperwork.\nMore club time.', name: 'ASYV Clubs Management System', category: 'MADE FOR SCHOOL LIFE',
    description: 'Club presidents used to keep attendance and meeting notes on paper. I built a system where they can record both in one place, so the next meeting starts with less catching up.',
    detail: 'One place for the people who show up and the ideas they bring.',
    impact: 'Used by 20+ school clubs', image: '/images/clubs.png',
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
  },
];

export const activities = [
  { name: 'Code Club', role: 'Co-founder & president', text: 'I organized weekly sessions teaching programming fundamentals to 70+ students.' },
  { name: 'Robotics & Innovation Club', role: 'Co-founder & former vice president · Grades 9–11', text: 'I helped start ASYV’s first robotics club, mentored 20+ students, and contributed to our team’s national FIRST LEGO League result.', honor: 'first-lego' },
  { name: 'Debate Club', role: 'Debate Club leadership', text: 'I helped coordinate speaking sessions for 50+ members, many of them first-year students.' },
  { name: 'Jackal Tech at ASYV', role: 'Student software team', text: 'I helped organize a selective group of 15 students building software for real problems.' },
  { name: 'Student government', role: 'Former junior minister & former vice president', text: 'As junior minister, I helped 128 first-year students settle into village life, practice public speaking, and connect with older students. I later served as student government vice president.' },
  { name: 'Growthwave Ltd.', role: 'Selected trainee', text: 'I was selected as one of eight students for training in building market-ready software products.' },
  { name: 'Model UN & Model African Union', role: 'Delegate', text: 'I represented the United Kingdom in UNHCR at Green Hills MUN and Ethiopia at Yale Model African Union.', honors: [{ id: 'green-hills', label: 'Green Hills recognition' }, { id: 'yale-delegate', label: 'Yale MAU recognition' }] },
  { name: 'ASYV Spelling Bee', role: 'Organizer · Grade 9', text: 'I organized the school spelling competition.' },
];

export const learning = [
  ['Yale Young African Scholars', '2025 residential participant'],
  ['Isomo Circles', 'Learning beyond the classroom'],
  ['Dreamers Academy Camp', 'Grade 9 participant'],
  ['International Physics Competition', 'Participant representing Rwanda'],
  ['Kaggle', 'Intro to Machine Learning'],
  ['CMU CS Academy', 'Self-directed learning'],
  ['CS50x', 'Coursework through week four'],
];

export const honors = [
  { id: 'yyas', name: 'Yale Young African Scholars', grade: '10', context: 'International program selection · 2025 residential participant' },
  { id: 'yale-delegate', name: 'Yale Model African Union V, Best Delegate', grade: '11', context: 'International' },
  { id: 'yale-pitch', name: 'Yale Model African Union V, Mandate-2-Market Pitch Contest finalist', grade: '11', context: 'International · Green Charcoal pitch' },
  { id: 'green-hills', name: 'Green Hills Model United Nations, Best Delegate', grade: '11', context: 'National' },
  { id: 'idebate', name: 'iDebate Tournament Champions', grade: '10', context: 'National team championship · 2024 · First among 54 teams' },
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

export const tracks = ['Nikes', 'Self Control', 'Solo', 'White Ferrari'];

export const scores = [
  { name: 'SAT', score: '1520', outOf: '1600' },
  { name: 'Duolingo English Test', score: '145', outOf: '160' },
];

export const creativeActivities = [
  { type: 'mic', title: 'Singing with the school band', place: 'At Agahozo-Shalom Youth Village', text: 'I sang with the school band for audiences of 550+. Performing is another way I get to be part of village life.', note: 'Live music · School performances', color: 'pink' },
  { type: 'theatre', title: 'Theatre & Village Time', place: 'School productions at ASYV', text: 'I acted in school productions. Through Village Time theatre, I reflected on removing the MCs and leaving more room for the people performing.', note: 'Acting · Making room for others', color: 'yellow' },
  { type: 'pen', title: 'Writing & performing poetry', place: 'School performances & the ASYV Grade Art Competition', text: 'I wrote and performed poems about growth and love. I won the poetry category of the ASYV Grade Art Competition in both Grade 9 and Grade 10.', note: 'Poetry category winner · Twice', color: 'mint' },
];

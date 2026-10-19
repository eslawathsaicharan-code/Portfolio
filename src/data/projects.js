/**
 * Projects Data for E. Charan
 * Centralized configuration for easy editing of repository URLs and live demos.
 * Includes genuine descriptions without fabricated claims or production exaggerations.
 */

export const PROJECTS_DATA = [
  {
    id: '01',
    num: '01',
    title: 'Hospital Management System',
    category: 'Full-Stack Web Application',
    description: 'A hospital management application focused on managing patient information and hospital workflows.',
    detailedSummary: 'Designed to streamline clinical and administrative operations, organizing patient records, appointment schedules, and staff workflows through a unified relational database schema and clean REST endpoints.',
    technologies: ['React', 'FastAPI', 'PostgreSQL'],
    tags: ['Healthcare IT', 'CRUD Workflows', 'Relational DB'],
    type: 'hospital',
    accentColor: '#38BDF8',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    metrics: [
      { label: 'Architecture', value: 'Decoupled Client & API' },
      { label: 'Database', value: 'PostgreSQL Relational' },
      { label: 'API Type', value: 'FastAPI REST' }
    ],
    links: {
      github: 'https://github.com/eslawathsaicharan-code', // Charan can point to exact repo
      liveDemo: null // Set URL when deployed, null renders clean "Coming Soon / Local" status
    }
  },
  {
    id: '02',
    num: '02',
    title: 'AI SOC Copilot — Security Event Response',
    category: 'Cybersecurity & AI Exploration',
    description: 'An AI-assisted cybersecurity project exploring security event analysis and retrieval-augmented generation to support security event response.',
    detailedSummary: 'Investigates how modern language models and retrieval mechanisms can accelerate log correlation and incident triage by synthesizing Wazuh security alerts into actionable analytical summaries for defensive responders.',
    technologies: ['Python', 'Wazuh', 'RAG', 'LLMs'],
    tags: ['Security Operations', 'Log Analysis', 'RAG Pipeline'],
    type: 'security',
    accentColor: '#8B5CF6',
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    metrics: [
      { label: 'Focus', value: 'Event Triage & RAG' },
      { label: 'Log Source', value: 'Wazuh Alerts' },
      { label: 'Backend', value: 'Python RAG Core' }
    ],
    links: {
      github: 'https://github.com/eslawathsaicharan-code',
      liveDemo: null
    }
  },
  {
    id: '03',
    num: '03',
    title: 'Interactive Dice Game',
    category: 'Interactive Web Application',
    description: 'A small interactive dice game project demonstrating programming logic and user interaction.',
    detailedSummary: 'Built to sharpen core JavaScript concepts, state handling, DOM events, and conditional game rule logic with dynamic feedback, roll animations, and score tracking.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Logic'],
    tags: ['Game Logic', 'UI State', 'Event Listeners'],
    type: 'dice',
    accentColor: '#F59E0B',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    metrics: [
      { label: 'Logic', value: 'Pure JavaScript Engine' },
      { label: 'Rendering', value: 'CSS Dynamic Transforms' },
      { label: 'Focus', value: 'State & Event Loops' }
    ],
    links: {
      github: 'https://github.com/eslawathsaicharan-code',
      liveDemo: null
    }
  },
  {
    id: '04',
    num: '04',
    title: 'Study Chat Bot',
    category: 'AI & Learning Assistant',
    description: 'A study-oriented chatbot project designed to support learning and interaction with study-related questions.',
    detailedSummary: 'Explores conversational interface design and automated question answering to assist students in breaking down complex study concepts, generating quizzes, and clarifying technical topics.',
    technologies: ['Python', 'FastAPI', 'React', 'NLP'],
    tags: ['EdTech', 'Conversational AI', 'Prompt Workflows'],
    type: 'studybot',
    accentColor: '#10B981',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    metrics: [
      { label: 'Purpose', value: 'Academic Query Support' },
      { label: 'Interface', value: 'Interactive Chat Stream' },
      { label: 'Stack', value: 'React + Python API' }
    ],
    links: {
      github: 'https://github.com/eslawathsaicharan-code',
      liveDemo: null
    }
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/eslawathsaicharan-code',
  linkedin: 'https://www.linkedin.com/in/eslawath-charan-66ab08383/',
  email: null // Intentionally null as no email was provided; can be set in contact section
};

export const FOCUS_AREAS = [
  {
    num: '01',
    title: 'Frontend Development',
    summary: 'Building responsive interfaces with React, JavaScript, HTML, and CSS.',
    details: 'Focusing on clean component composition, accessible design systems, fluid motion, and responsive layouts across all device form factors.',
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    num: '02',
    title: 'Backend Development',
    summary: 'Developing APIs and application logic with Python and FastAPI.',
    details: 'Constructing performant asynchronous backend services, handling data validation with Pydantic, and writing clean, scalable route handlers.',
    technologies: ['Python', 'FastAPI', 'RESTful APIs', 'Asynchronous I/O']
  },
  {
    num: '03',
    title: 'Data & AI Applications',
    summary: 'Working with PostgreSQL and exploring AI-assisted applications and cybersecurity workflows.',
    details: 'Modeling relational datasets, running structured queries, and investigating modern AI techniques like Retrieval-Augmented Generation (RAG) and security event analysis.',
    technologies: ['PostgreSQL', 'RAG Pipelines', 'Wazuh Concepts', 'LLM Integration']
  }
];

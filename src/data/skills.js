/**
 * Tech Stack & Skills Data for E. Charan
 * Honest presentation of technologies learned and worked with.
 * Categorized strictly according to specification without fabricated ratings.
 */

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with modern web standards.',
    skills: [
      {
        name: 'HTML5',
        iconName: 'FileCode2',
        color: '#E34F26',
        description: 'Semantic markup, accessible structure, SEO fundamentals'
      },
      {
        name: 'CSS3',
        iconName: 'Palette',
        color: '#1572B6',
        description: 'Modern flexbox, grid, animations, responsive design'
      },
      {
        name: 'JavaScript',
        iconName: 'Code2',
        color: '#F7DF1E',
        description: 'ES6+ syntax, asynchronous programming, DOM manipulation'
      },
      {
        name: 'React',
        iconName: 'Atom',
        color: '#61DAFB',
        description: 'Component architecture, state management, hooks & lifecycle'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Constructing robust REST APIs, server logic, and service integrations.',
    skills: [
      {
        name: 'Python',
        iconName: 'Terminal',
        color: '#3776AB',
        description: 'Object-oriented programming, data scripts, backend services'
      },
      {
        name: 'FastAPI',
        iconName: 'Zap',
        color: '#009688',
        description: 'High-performance asynchronous APIs, Pydantic validation, OpenAPI'
      }
    ]
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Relational data modeling, schema design, and query management.',
    skills: [
      {
        name: 'PostgreSQL',
        iconName: 'Database',
        color: '#4169E1',
        description: 'Relational schema design, SQL queries, table relations & indexing'
      }
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core computer science fundamentals, data structures, and algorithmic logic.',
    skills: [
      {
        name: 'C',
        iconName: 'Cpu',
        color: '#A8B9CC',
        description: 'Low-level memory management, pointers, systems fundamentals'
      },
      {
        name: 'Java',
        iconName: 'Coffee',
        color: '#ED8B00',
        description: 'Object-oriented principles, classes, abstraction & algorithms'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    description: 'Containerization, version control, and development workflows.',
    skills: [
      {
        name: 'Docker',
        iconName: 'Boxes',
        color: '#2496ED',
        description: 'Containerizing environments, Dockerfiles, isolated app runtimes'
      }
    ]
  }
];

// Marquee tech rows (Row 1 and Row 2 for opposite direction infinite scrolling)
export const MARQUEE_ROW_1 = [
  { name: 'HTML', category: 'Frontend', color: '#E34F26' },
  { name: 'CSS', category: 'Frontend', color: '#38BDF8' },
  { name: 'JavaScript', category: 'Language', color: '#F7DF1E' },
  { name: 'React', category: 'Framework', color: '#61DAFB' },
  { name: 'FastAPI', category: 'Backend', color: '#2DD4BF' },
];

export const MARQUEE_ROW_2 = [
  { name: 'Python', category: 'Language', color: '#38BDF8' },
  { name: 'PostgreSQL', category: 'Database', color: '#818CF8' },
  { name: 'Docker', category: 'DevOps', color: '#38BDF8' },
  { name: 'C', category: 'Systems', color: '#94A3B8' },
  { name: 'Java', category: 'Language', color: '#FB923C' },
];

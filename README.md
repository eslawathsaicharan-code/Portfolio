# E. Charan — Premium Developer Portfolio

A modern, dark-themed, animated developer portfolio for **E. Charan**, Full-Stack Developer and Problem Solver. Designed with visual inspiration from Motion Sites 3D aesthetics, featuring oversized gradient typography, sticky stacking project cards, smooth dual-direction technology marquees, and an interactive 3D developer character in a dark hoodie with real-time lighting and cursor tracking.

---

## 🚀 Tech Stack

- **Framework**: React 18 with Vite
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS with custom dark palette (`#0C0C0C`, `#D7E2EA`, violet/blue accents)
- **Animations**: Framer Motion (staggered entrances, scroll progress, card stacking)
- **3D Graphics**: Three.js (procedural animated developer rig with hoodie, lighting, and GLB loader support)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Kanit & JetBrains Mono)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx            # Responsive navigation with active section indicator & mobile drawer
│   ├── Hero.jsx              # Oversized gradient headline, CTAs, and 3D character integration
│   ├── Hero3DCharacter.jsx   # Three.js 3D developer character with idle breathing & cursor tracking
│   ├── TechMarquee.jsx       # Continuous dual-direction infinite technology marquee
│   ├── About.jsx             # Genuine student developer introduction and learning philosophy
│   ├── Skills.jsx            # Categorized tech stack (Frontend, Backend, DB, Languages, Tools)
│   ├── FocusAreas.jsx        # What I Focus On (01 Frontend, 02 Backend, 03 Data & AI)
│   ├── ProjectCard.jsx       # Motion Sites-style sticky stacking project card
│   ├── ProjectMockups.jsx    # Custom high-fidelity mockups for projects (HMS, SOC Copilot, Dice, Chatbot)
│   ├── Projects.jsx          # Featured Projects section container with repository links
│   ├── Contact.jsx           # Direct channels (LinkedIn, GitHub) and validated message composer
│   └── Footer.jsx            # Minimal footer with dynamic current year and back-to-top button
├── data/
│   ├── projects.js           # Centralized configuration for projects, links, and focus areas
│   └── skills.js             # Categorized skills list and marquee items
├── App.jsx                   # Main layout container with top scroll progress indicator
├── index.css                 # Tailwind directives, animations, and dark utility classes
└── main.jsx                  # Application entry point
public/
├── favicon.svg               # Custom dark "EC" vector icon
└── models/
    └── README.md             # Guide for dropping in custom GLB 3D models
```

---

## 🛠️ Local Development & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port Vite outputs).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory with code splitting.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize & Extend

### 1. Update Project Links & Descriptions
Edit `src/data/projects.js`:
- To point to specific GitHub repositories, update `links.github`.
- To enable a live demo button, set `links.liveDemo` to your URL (e.g. `'https://hospital-demo.vercel.app'`).
- If `links.liveDemo` is `null`, the card displays a clean "Local / Repo Build" status indicator.

### 2. Add Real Project Screenshots
If you have real screenshots for your projects:
1. Place image files into `public/projects/` (e.g. `public/projects/hospital.png`).
2. In `src/components/ProjectMockups.jsx`, you can render `<img src="/projects/hospital.png" alt="Hospital Management System" className="w-full h-full object-cover rounded-xl" />` or toggle between mockup and screenshot.

### 3. Add Resume Download
To add a downloadable resume:
1. Save your PDF in the `public/` directory (e.g., `public/E_Charan_Resume.pdf`).
2. Add a Resume CTA button in `src/components/Hero.jsx` or `src/components/Navbar.jsx`:
   ```jsx
   <a
     href="/E_Charan_Resume.pdf"
     download
     className="..."
   >
     Download Resume
   </a>
   ```

### 4. Swap 3D Developer Character with a Custom GLB Model
The portfolio includes a built-in procedural stylized 3D developer wearing a dark hoodie. If you want to use a custom 3D model:
1. Export your 3D model as `developer.glb` (with an idle animation clip).
2. Place it in `public/models/developer.glb`.
3. `Hero3DCharacter.jsx` will detect the file and render your custom 3D model with cinematic lighting and cursor tilt.

---

## 🔗 Official Social Links
- **GitHub**: [https://github.com/eslawathsaicharan-code](https://github.com/eslawathsaicharan-code)
- **LinkedIn**: [https://www.linkedin.com/in/eslawath-charan-66ab08383/](https://www.linkedin.com/in/eslawath-charan-66ab08383/)

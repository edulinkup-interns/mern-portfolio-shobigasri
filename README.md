<div align="center">

# ✨ Shobigasri Saravanakumar — Portfolio

### A premium, full-stack developer portfolio crafted with the **MERN Stack**

<br/>

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<br/>

> 🎓 **Internship Assignment** — This project was developed as part of a **MERN Stack Developer Internship** under **[EduLinkUp](https://github.com/EduLinkUp)** (Feb 2026 – Mar 2026).

</div>

---

## 📌 About the Project

This is a **modern, responsive personal portfolio website** built for **Shobigasri Saravanakumar** — a Computer Science student at **Kumaraguru College of Technology, Coimbatore**. The portfolio showcases her academic journey, technical skills, internship experience, and provides a professional contact interface.

The application follows a **decoupled architecture** with an independent React frontend and an Express.js/MongoDB backend, allowing it to run in **frontend-only mode** (static portfolio with mailto-based contact) or in **full-stack mode** with live database connectivity and API-driven data.

### 🌟 Key Highlights

- 🎨 **Premium Dark UI** — Glassmorphism design with animated orbs, gradient accents, and smooth scroll-reveal transitions
- ⌨️ **Typing Animation** — Dynamic hero section with animated role titles (*Full Stack Developer*, *MERN Enthusiast*, *Problem Solver*, *Creative Leader*)
- 📱 **Fully Responsive** — Mobile-first layout with a hamburger menu and touch-optimized interactions
- ⚡ **Dual Mode** — Works as a standalone static site or connects to a full Express + MongoDB backend
- 🔤 **Premium Typography** — Google Fonts (*Playfair Display*, *Plus Jakarta Sans*, *Fira Code*) for a polished, editorial look
- 🎭 **Scroll Animations** — IntersectionObserver-powered reveal effects for engaging content discovery
- 🧭 **Smart Navigation** — Active section highlighting, scroll-based navbar shrink, and smooth anchor scrolling

---

## 🗂 Project Structure

```
mern-portfolio-shobigasri/
│
├── frontend/                    # React + Vite Client Application
│   ├── assets/                  # Static assets (avatar, logos)
│   │   ├── Avatar.png
│   │   ├── EduLinkUpLogo.jpg
│   │   └── kct_logo.png
│   ├── src/
│   │   ├── App.jsx              # Main application component
│   │   ├── main.jsx             # React entry point
│   │   └── styles.css           # Complete design system (~1360 lines)
│   ├── index.html               # HTML entry with SEO meta tags
│   ├── .env.example             # Environment variable template
│   ├── vite.config.js           # Vite bundler configuration
│   └── package.json
│
├── backend/                     # Express.js + MongoDB Server
│   ├── config/                  # Database & service configuration
│   ├── controllers/             # Route handler logic
│   ├── middleware/               # Custom middleware (auth, validation)
│   ├── models/                  # Mongoose schemas
│   │   ├── About.js
│   │   ├── Blog.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   ├── Testimonial.js
│   │   ├── User.js
│   │   └── contact.js
│   ├── routes/                  # RESTful API route definitions
│   │   ├── aboutRoutes.js
│   │   ├── authRoutes.js
│   │   ├── blogRoutes.js
│   │   ├── contactRoutes.js
│   │   ├── educationRoutes.js
│   │   ├── experienceRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   └── testimonialRoutes.js
│   ├── server.js                # Express app entry point
│   └── .env                     # Environment variables
│
└── README.md
```

---

## 🧩 Portfolio Sections

| Section | Description |
|---|---|
| **🦸 Hero** | Animated introduction with typing effect, floating badges, and portrait card with spinning gradient ring |
| **👤 About** | Info cards highlighting academic background, aspirations, achievements, and personality |
| **📊 Stats** | Glass-card statistics strip — CSE journey start year, 96.5% HSC score, 9+ technologies |
| **🛠 Skills** | Two-panel layout — soft/leadership skill pills + tech stack grid with emoji icons |
| **💼 Experience** | Timeline card for the EduLinkUp MERN internship with key contributions and tech chips |
| **🎓 Education** | Cards for KCT (B.E. CSE, ongoing) and Kongu School (96.5% Bio Mathematics) |
| **📬 Contact** | Dual-column section with details + a working contact form (mail fallback or API-powered) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and **npm**
- **MongoDB** (local or Atlas) — *only required for full-stack mode*

### 1️⃣ Frontend Only (Static Portfolio)

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**. In this mode, the contact form opens the user's default email client via `mailto`.

### 2️⃣ Full-Stack Mode (with Backend API)

```bash
# ── Backend Setup ──
cd backend

# Install dependencies
npm install

# Configure environment variables in .env
# PORT=5000
# MONGO_URI=mongodb://127.0.0.1:27017/portfolioDB
# JWT_SECRET=your_secret_key
# EMAIL_USER=yourgmail@gmail.com
# EMAIL_PASS=your_app_password

# Start the backend server
node server.js
```

```bash
# ── Frontend Setup ──
cd frontend

# Copy and configure environment variables
cp .env.example .env

# Edit .env to enable backend
# VITE_ENABLE_BACKEND=true
# VITE_API_BASE_URL=http://localhost:5000
# VITE_CONTACT_EMAIL=your_email@example.com

# Start the frontend
npm run dev
```

### 3️⃣ Build for Production

```bash
cd frontend
npm run build    # Outputs to frontend/dist/
npm run preview  # Preview the production build locally
```

---

## 🔌 API Endpoints

The backend exposes the following RESTful API routes:

| Method | Endpoint | Description |
|---|---|---|
| `GET/POST` | `/api/skills` | Manage skills data |
| `GET/POST` | `/api/experience` | Manage work experience |
| `GET/POST` | `/api/education` | Manage education records |
| `GET/POST` | `/api/projects` | Manage project showcases |
| `GET/POST` | `/api/blogs` | Manage blog entries |
| `GET/POST` | `/api/testimonials` | Manage testimonials |
| `POST` | `/api/contact` | Submit contact form messages |
| `POST` | `/api/auth` | Authentication routes |

---

## 🛠 Tech Stack

<table>
  <tr>
    <th>Layer</th>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>React 18, Vite 5</td>
    <td>Component-based UI with fast HMR dev server</td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>Vanilla CSS (1360+ lines)</td>
    <td>Custom design system with CSS variables, glassmorphism, animations</td>
  </tr>
  <tr>
    <td><strong>Backend</strong></td>
    <td>Express.js, Node.js</td>
    <td>RESTful API server with CORS and JSON parsing</td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>MongoDB, Mongoose</td>
    <td>NoSQL document storage with schema validation</td>
  </tr>
  <tr>
    <td><strong>Auth</strong></td>
    <td>JWT</td>
    <td>Token-based authentication for protected routes</td>
  </tr>
  <tr>
    <td><strong>Fonts</strong></td>
    <td>Google Fonts</td>
    <td>Playfair Display, Plus Jakarta Sans, Fira Code</td>
  </tr>
  <tr>
    <td><strong>Build Tool</strong></td>
    <td>Vite</td>
    <td>Lightning-fast bundling and hot module replacement</td>
  </tr>
</table>

---

## 🎨 Design Philosophy

This portfolio embraces a **premium dark aesthetic** inspired by modern design trends:

- **Glassmorphism** — Frosted-glass cards with `backdrop-filter: blur()` and semi-transparent borders
- **Ambient Orbs** — Four floating, color-shifting orb particles as an animated background layer
- **Gradient Accents** — Gold (`#f4c26a`), Cyan (`#6ee7e7`), and Violet (`#a78bfa`) create a warm-meets-cool palette
- **Grid Overlay** — Subtle gridline texture adds visual depth without distraction
- **Noise Texture** — Ultra-subtle SVG noise overlay for a textured, non-flat feel
- **Micro-animations** — Spring-eased hover effects, scroll-reveal, badge floating, and typing cursor blink

---

## 🏢 Internship — EduLinkUp

<div align="center">

> This project was completed as an **internship assignment** under **[EduLinkUp](https://github.com/EduLinkUp)**, a platform dedicated to bridging academia and industry through real-world project-based learning.

</div>

| Detail | Info |
|---|---|
| **Role** | MERN Stack Developer Intern |
| **Organization** | EduLinkUp |
| **Duration** | February 2026 – March 2026 |
| **Mode** | Remote |
| **Deliverable** | Full-stack MERN portfolio with React UI, Express API, and MongoDB connectivity |

### Internship Contributions

- ✅ Built a full-stack MERN portfolio with React UI, Express API, and MongoDB connectivity
- ✅ Implemented RESTful APIs using Express.js and Node.js for seamless data handling
- ✅ Designed responsive, component-based frontend UIs using React and modern JavaScript
- ✅ Leveraged Git & GitHub effectively for version control and collaborative workflow
- ✅ Communicated core MERN architecture concepts clearly through structured technical write-ups
- ✅ Delivered a complete capstone project repository under the EduLinkUp GitHub organisation

---

## 👩‍💻 Author

<div align="center">

**Shobigasri Saravanakumar**

*B.E. Computer Science & Engineering*
*Kumaraguru College of Technology, Coimbatore*

[![GitHub](https://img.shields.io/badge/GitHub-EduLinkUp-181717?style=for-the-badge&logo=github)](https://github.com/EduLinkUp/mern-portfolio-shobigasri)

</div>

---

<div align="center">

Crafted with ♥ by Shobigasri · 2026

</div>

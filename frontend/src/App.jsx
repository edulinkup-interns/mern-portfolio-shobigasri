import { useState, useEffect, useRef } from "react";
import avatar from "../assets/Avatar.png";
import eduLinkUpLogo from "../assets/EduLinkUpLogo.jpg";
import kctLogo from "../assets/kct_logo.png";
import "./styles.css";

/* ─────────── DATA ─────────── */
const skillsData = [
  { label: "Leadership Training", style: "a" },
  { label: "Business Process Improvement", style: "b" },
  { label: "Team Leadership", style: "c" },
  { label: "Cross-functional Leadership", style: "a" },
  { label: "Educational Leadership", style: "b" },
  { label: "Communication", style: "c" },
  { label: "Full Stack Development", style: "a" },
  { label: "Problem Solving", style: "b" },
  { label: "Collaborative Mindset", style: "c" },
  { label: "Agile Thinking", style: "a" },
];

const techStackData = [
  { icon: "🍃", label: "MongoDB" },
  { icon: "⚡", label: "Express.js" },
  { icon: "⚛️", label: "React" },
  { icon: "🟢", label: "Node.js" },
  { icon: "🧡", label: "JavaScript" },
  { icon: "🌐", label: "HTML5" },
  { icon: "🎨", label: "CSS3" },
  { icon: "🐙", label: "Git" },
];

const educationData = [
  {
    institution: "Kumaraguru College of Technology",
    degree: "B.E. - Computer Science & Engineering",
    period: "Sep 2023 – May 2027",
    details:
      "Focused on software engineering, business process improvement, and collaborative problem-solving through project-based learning.",
    logo: kctLogo,
    badgeStyle: "edu-badge-cyan",
    badgeText: "📚 Ongoing",
  },
  {
    institution: "Kongu School",
    degree: "Higher Secondary — Bio Mathematics",
    period: "May 2020 – May 2022",
    details:
      "Scored 96.5% with active participation in debate, oratorical, essay writing, story writing, and poetry competitions.",
    logo: null,
    badgeStyle: "edu-badge-gold",
    badgeText: "🏆 96.5%",
  },
];

const contributionsData = [
  "Built a full-stack MERN portfolio with React UI, Express API, and MongoDB connectivity.",
  "Implemented RESTful APIs using Express.js and Node.js for seamless data handling.",
  "Designed responsive, component-based frontend UIs using React and modern JavaScript.",
  "Leveraged Git & GitHub effectively for version control and collaborative workflow.",
  "Communicated core MERN architecture concepts clearly through structured technical write-ups.",
  "Delivered a complete capstone project repository under the EduLinkUp GitHub organisation.",
];

const aboutCards = [
  { icon: "🎓", title: "Computer Science Student", text: "Pursuing B.E. at Kumaraguru College of Technology, Tamil Nadu — blending academic rigour with real-world project experience." },
  { icon: "🎓", title: "Aspiring Full Stack Developer", text: "Driven by curiosity and a passion for building products end-to-end using the MERN stack and modern web technologies." },
  { icon: "🎓", title: "Academic Achiever", text: "Scored 96.5% in Higher Secondary, demonstrating strong analytical and problem-solving ability from early on." },
  { icon: "🎓", title: "Creative & Expressive", text: "Active in debate, essay writing, and poetry - blending technical thinking with creative communication." },
];

/* ─────────── HOOKS ─────────── */

/** Simple IntersectionObserver scroll-reveal hook */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/** Active nav link highlight on scroll */
function useActiveNav() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a, .mobile-nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            const active = [...links].find((l) => l.getAttribute("href") === `#${e.target.id}`);
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}

/** Navbar scroll shrink */
function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector(".top-nav");
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

/** Typing animation */
function useTyping(phrases, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const delay = deleting
      ? speed / 2.5
      : charIdx === current.length
        ? pause
        : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      } else {
        const next = deleting ? charIdx - 1 : charIdx + 1;
        setCharIdx(next);
        setDisplayed(current.slice(0, next));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return displayed;
}

/* ─────────── MAIN COMPONENT ─────────── */
function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [mobileOpen, setMobileOpen] = useState(false);

  const backendEnabled = import.meta.env.VITE_ENABLE_BACKEND === "true";
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "shobigasri@example.com";

  const labels = useTyping(["Full Stack Developer", "MERN Enthusiast", "Problem Solver", "Creative Leader"]);

  useReveal();
  useActiveNav();
  useNavScroll();

  /* Close mobile nav on route click */
  const closeMobile = () => setMobileOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!backendEnabled) {
      const url = `mailto:${contactEmail}?subject=${encodeURIComponent(
        `Portfolio message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = url;
      setStatus({ type: "success", message: "✨ Opening your mail app…" });
      return;
    }
    setStatus({ type: "loading", message: "Sending…" });
    try {
      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus({ type: "success", message: "✅ Message sent — thank you for reaching out!" });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", message: "❌ Could not send. Try disabling backend mode." });
    }
  };

  return (
    <div className="page-shell">
      {/* Background layers */}
      <div className="orb-field">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      <div className="grid-bg" />
      <div className="noise-overlay" />

      {/* ── NAVBAR ── */}
      <header>
        <nav className="top-nav glass">
          <a className="brand-wrap" href="#hero">
            <span className="brand-mark">SS</span>
            <span className="brand-name">Shobigasri Saravanakumar</span>
          </a>

          <ul className="nav-links">
            {["about", "skills", "experience", "education", "contact"].map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
              </li>
            ))}
          </ul>

          <button
            className={`nav-toggle${mobileOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((p) => !p)}
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* Mobile nav */}
        <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
          {["about", "skills", "experience", "education", "contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={closeMobile}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section id="hero" className="hero">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span>Portfolio 2026</span>
            </div>

            <h1>
              Aspiring{" "}
              <span className="highlight">
                {labels}
              </span>
              <span className="typed-cursor" />
              <br />
              with passion &amp; purpose.
            </h1>

            <p className="hero-description">
              Shobigasri is a Computer Science student at Kumaraguru College of
              Technology, Coimbatore, crafting real-world MERN projects as a
              developer intern at EduLinkUp.
            </p>

            <div className="hero-pills">
              <span className="hero-pill hero-pill-cyan">
                <span className="hero-pill-icon">🏢</span> Intern @ EduLinkUp
              </span>
              <span className="hero-pill hero-pill-gold">
                <span className="hero-pill-icon">🎓</span> B.E. CSE 2023–2027
              </span>
              <span className="hero-pill hero-pill-violet">
                <span className="hero-pill-icon">📍</span> Coimbatore, India
              </span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#experience">
                <span className="btn-icon">✦</span> Explore Work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-outer">
              <div className="portrait-ring" />
              <div className="portrait-card glass">
                <img src={avatar} alt="Shobigasri Saravanakumar" />
                <div className="portrait-caption">
                  <h3>Shobigasri Saravanakumar</h3>
                  <p>Student · Intern · Builder</p>
                </div>
              </div>

              {/* Floating badges */}
              <span className="float-badge float-badge-intern">
                ⚡ EduLinkUp Intern
              </span>
              <span className="float-badge float-badge-cse">
                💻 CSE 2027
              </span>
              <span className="float-badge float-badge-grade">
                🌟 96.5%
              </span>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <span className="section-divider" />
        <section id="about" className="section-wrap">
          <div className="reveal">
            <p className="section-label">Who She Is</p>
            <h2 className="section-title">About Shobigasri</h2>
            <p className="section-subtitle">
              "A student with little curiousness and lots of passion towards a wide range of
              opportunities to enhance and enbuild new skillsets."
            </p>
          </div>

          <div className="stats-strip reveal reveal-delay-1">
            <article className="stat-item glass-card">
              <span className="stat-number">2023</span>
              <span className="stat-label">B.E. CSE Journey Began</span>
            </article>
            <article className="stat-item glass-card">
              <span className="stat-number">96.5%</span>
              <span className="stat-label">Higher Secondary Score</span>
            </article>
            <article className="stat-item glass-card">
              <span className="stat-number">9+</span>
              <span className="stat-label">MERN Stack Technologies</span>
            </article>
          </div>

          <div className="about-grid reveal reveal-delay-2">
            {aboutCards.map((c, i) => (
              <article className="about-card glass-card" key={i}>
                <span className="about-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <span className="section-divider" />
        <section id="skills" className="section-wrap">
          <div className="reveal">
            <p className="section-label">Capabilities</p>
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <p className="section-subtitle">
              A growing toolkit spanning soft skills, leadership competencies, and full-stack
              development technologies.
            </p>
          </div>

          <div className="skills-layout">
            <div className="reveal-left reveal-delay-1">
              <h4 style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
                Professional & Soft Skills
              </h4>
              <div className="skill-cloud">
                {skillsData.map((s) => (
                  <span key={s.label} className={`skill-pill skill-pill-${s.style}`}>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal-right reveal-delay-2">
              <h4 style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
                Tech Stack
              </h4>
              <div className="tech-grid">
                {techStackData.map((t) => (
                  <div className="tech-item" key={t.label}>
                    <span className="tech-icon">{t.icon}</span>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <span className="section-divider" />
        <section id="experience" className="section-wrap">
          <div className="reveal">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-subtitle">
              Hands-on internship work building production-ready MERN applications and
              learning real-world software development practices.
            </p>
          </div>

          <div className="exp-timeline">
            <div className="exp-dot" />
            <article className="exp-card glass-card reveal reveal-delay-1">
              <div className="exp-header">
                <div className="exp-logo-wrap">
                  <img src={eduLinkUpLogo} alt="EduLinkUp" />
                </div>
                <div className="exp-meta">
                  <h3>MERN Stack Developer Intern</h3>
                  <p className="exp-company">EduLinkUp · Remote</p>
                  <span className="exp-period">
                    <span className="exp-period-dot" />
                    Feb 2026 – Mar 2026
                  </span>
                </div>
                <a
                  className="btn btn-outline-cyan view-project-link"
                  href="https://github.com/EduLinkUp/mern-portfolio-shobigasri"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>View Project</span>
                  <span className="btn-icon">↗</span>
                </a>
              </div>

              <p className="exp-summary">
                Worked on full-stack web development using the MERN stack, building and
                explaining practical concepts through guided modules while delivering a
                complete portfolio capstone project.
              </p>

              <p className="exp-section-title">Key Contributions</p>
              <ul className="contributions-list">
                {contributionsData.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="exp-section-title">Technologies Used</p>
              <div className="tech-chip-row">
                {["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"].map(
                  (t) => (
                    <span className="tech-chip" key={t}>{t}</span>
                  )
                )}
              </div>
            </article>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <span className="section-divider" />
        <section id="education" className="section-wrap">
          <div className="reveal">
            <p className="section-label">Academic Background</p>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">
              A strong academic foundation paired with diverse extracurricular
              achievements across the arts and sciences.
            </p>
          </div>

          <div className="education-grid">
            {educationData.map((item, i) => (
              <article className="edu-card glass-card reveal" key={item.institution}
                style={{ transitionDelay: `${0.1 + i * 0.15}s` }}>
                <div className="edu-head">
                  {item.logo ? (
                    <img className="edu-logo" src={item.logo} alt={item.institution} />
                  ) : (
                    <div className="fallback-logo">KS</div>
                  )}
                  <div className="edu-head-text">
                    <h3>{item.institution}</h3>
                    <p>{item.degree}</p>
                  </div>
                </div>
                <span className={`edu-badge ${item.badgeStyle}`}>{item.badgeText} · {item.period}</span>
                <p className="edu-details">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <span className="section-divider" />
        <section id="contact" className="section-wrap">
          <div className="reveal">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Want to collaborate, mentor, or just say hello? Shobigasri is always open to
              new opportunities and conversations.
            </p>
          </div>

          <div className="contact-layout">
            {/* Left col */}
            <div className="contact-info reveal-left reveal-delay-1">
              <p className="contact-blurb">
                Whether you're a recruiter, mentor, or fellow developer — feel free to drop
                a message. Shobigasri will get back to you soon! 💌
              </p>

              <div className="contact-detail-item">
                <span className="contact-detail-icon">📍</span>
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">🎓</span>
                <span>KCT · B.E. Computer Science 2023-2027</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">💼</span>
                <span>MERN Stack Developer Intern · EduLinkUp</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-icon">🌐</span>
                <a
                  href="https://github.com/EduLinkUp/mern-portfolio-shobigasri"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--cyan-light)" }}
                >
                  github.com/EduLinkUp · mern-portfolio-shobigasri
                </a>
              </div>

              {!backendEnabled && (
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                  ℹ️ Frontend-only mode — form will open your default mail app.
                </p>
              )}
            </div>

            {/* Right col — form */}
            <div className="reveal-right reveal-delay-2">
              <form className="contact-form-card glass-card" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name</label>
                      <input
                        className="form-input"
                        id="name" name="name" type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input
                        className="form-input"
                        id="email" name="email" type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      className="form-textarea"
                      id="message" name="message"
                      placeholder="Write your message here…"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={status.type === "loading"}
                    style={{ width: "100%", justifyContent: "center", padding: "0.9rem" }}
                  >
                    {status.type === "loading"
                      ? "Sending…"
                      : backendEnabled
                        ? "✦ Send Message"
                        : "✉️ Open Mail App"}
                  </button>

                  {status.type !== "idle" && (
                    <p className={`status-msg ${status.type}`}>{status.message}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-content">
          <span className="footer-brand">Shobigasri Saravanakumar</span>
          <span className="footer-tagline">Student · Developer · Leader</span>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">
            Crafted with <span>♥</span> by Shobigasri
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

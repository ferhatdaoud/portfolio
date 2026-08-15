import {
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Design tokens for this page — spec-sheet / inspection-report aesthetic.
// Swap these if you want a different palette later; everything below reads from them.
const ink = "#16181A";
const inkMuted = "#5B5F58";
const paper = "#EDEFEB";
const paperLine = "#D7D9D2";
const pass = "#1F6F4A"; // "shipped / verified" stamp color
const pending = "#B7791F"; // "in progress" stamp color

function StampTag({ label, status, tone = "pass" }) {
  const color = tone === "pass" ? pass : pending;
  return (
    <div
      className="inline-flex items-center gap-2 border px-3 py-1.5 select-none"
      style={{
        borderColor: color,
        color,
        fontFamily: "'IBM Plex Mono', monospace",
        transform: "rotate(-1.5deg)",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-[11px] tracking-widest uppercase">{label}</span>
      <span className="text-[11px] tracking-widest uppercase font-bold">
        {status}
      </span>
    </div>
  );
}

function SkillGroup({ title, items, mode = "pass" }) {
  return (
    <div>
      <p
        className="text-[11px] tracking-[0.2em] uppercase mb-3"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: inkMuted }}
      >
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm"
            style={{ color: ink }}
          >
            {mode === "pass" ? (
              <CheckCircle2 size={15} style={{ color: pass }} />
            ) : (
              <CircleDashed size={15} style={{ color: pending }} />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectReport({
  number,
  title,
  status,
  tone,
  summary,
  features,
  tags,
  repoUrl,
  liveUrl,
}) {
  const statusColor = tone === "pass" ? pass : pending;
  return (
    <div className="border-t-2 pt-8" style={{ borderColor: ink }}>
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
        <p
          className="text-[11px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: inkMuted }}
        >
          Report No. {number}
        </p>
        <StampTag label="Status" status={status} tone={tone} />
      </div>

      <h4
        className="text-2xl md:text-3xl font-bold mb-3"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: ink }}
      >
        {title}
      </h4>
      <p
        className="text-[15px] leading-relaxed mb-6 max-w-2xl"
        style={{ color: inkMuted }}
      >
        {summary}
      </p>

      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm"
            style={{ color: ink }}
          >
            <CheckCircle2
              size={15}
              style={{ color: statusColor, marginTop: 2, flexShrink: 0 }}
            />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 border"
            style={{
              borderColor: paperLine,
              color: inkMuted,
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-5 text-sm font-medium">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
            style={{ color: ink }}
          >
            <FaGithub size={16} /> View code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
            style={{ color: ink }}
          >
            <ExternalLink size={16} /> Live demo
          </a>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        backgroundColor: paper,
        color: ink,
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
      className="min-h-screen"
    >
      {/* NAV */}
      <nav
        className="fixed w-full top-0 z-50 backdrop-blur-sm"
        style={{
          backgroundColor: `${paper}E6`,
          borderBottom: `1px solid ${paperLine}`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span
            className="text-lg font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            F.Daoud{" "}
            <span style={{ color: inkMuted, fontWeight: 400 }}>/ dev</span>
          </span>
          <div
            className="hidden md:flex items-center gap-6 text-[13px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <a href="#about" className="hover:underline">
              about
            </a>
            <a href="#projects" className="hover:underline">
              projects
            </a>
            <a href="#cv" className="hover:underline">
              cv
            </a>
            <a href="#contact" className="hover:underline">
              contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <p
          className="text-[12px] tracking-[0.25em] uppercase mb-6"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: inkMuted }}
        >
          Portfolio — Spec Sheet
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-[0.95]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ferhat Daoud
        </h1>
        <h2 className="text-xl md:text-2xl mb-8" style={{ color: inkMuted }}>
          Full-stack developer — MERN &amp; PERN
        </h2>
        <p
          className="text-[15px] leading-relaxed max-w-xl mb-8"
          style={{ color: inkMuted }}
        >
          Self-taught, coming from a background in agrifood quality control — a
          job built on checking things carefully, catching what's broken, and
          not shipping until it passes spec. I apply the same standard to code
          now: React and Node builds that are tested, documented, and honest
          about what's finished and what isn't.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium"
            style={{ backgroundColor: ink, color: paper }}
          >
            View projects <ArrowRight size={15} />
          </a>
          {/* File lives at public/Ferhat_Daoud_CV.pdf */}
          <a
            href="/Ferhat_Daoud_CV.pdf"
            download="Ferhat_Daoud_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium border"
            style={{ borderColor: ink, color: ink }}
          >
            Download CV <Download size={15} />
          </a>
        </div>

        <StampTag
          label="Experience"
          status="< 2 years, self-taught"
          tone="pending"
        />
      </section>

      {/* ABOUT / SKILLS */}
      <section
        id="about"
        className="max-w-4xl mx-auto px-6 py-20"
        style={{ borderTop: `1px solid ${paperLine}` }}
      >
        <p
          className="text-[11px] tracking-[0.2em] uppercase mb-10"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: inkMuted }}
        >
          01 — Skills manifest
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <SkillGroup
            title="Frontend"
            mode="pass"
            items={[
              "HTML5",
              "CSS",
              "React",
              "TanStack Query",
              "React Hook Form + Zod",
              "Tailwind CSS",
              "Responsive design",
            ]}
          />
          <SkillGroup
            title="Backend"
            mode="pass"
            items={[
              "Node.js + Express",
              "REST APIs",
              "MongoDB + Mongoose",
              "PostgreSQL",
              "TypeORM",
              "JWT authentication",
              "bcrypt",
            ]}
          />
          <SkillGroup
            title="Tools"
            mode="pass"
            items={["Git + GitHub", "Axios", "shadcn/ui", "Vite", "ESLint"]}
          />
          <SkillGroup
            title="Currently learning"
            mode="learning"
            items={[
              "System design fundamentals",
              "Data modeling",
            ]}
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-4xl mx-auto px-6 py-20"
        style={{ borderTop: `1px solid ${paperLine}` }}
      >
        <p
          className="text-[11px] tracking-[0.2em] uppercase mb-10"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: inkMuted }}
        >
          02 — Inspection reports
        </p>
        <div className="space-y-16">
          <ProjectReport
            number="001"
            title="TaskFlow — collaborative kanban app"
            status="Shipped"
            tone="pass"
            summary="A full-stack MERN task manager: boards, drag-free reordering, comments, and archiving, with JWT auth over httpOnly cookies and optimistic UI backed by TanStack Query."
            features={[
              "JWT auth with httpOnly cookies + bcrypt hashing",
              "Optimistic UI updates via TanStack Query",
              "Task reordering, assignment, and archiving",
              "Comment threads with live counts",
            ]}
            tags={["React", "TanStack Query", "Express", "MongoDB", "JWT"]}
            repoUrl="https://github.com/ferhatdaoud/Kanban-Task-Management"
            liveUrl="https://kanban-task-management-sys.vercel.app/"
          />
          <ProjectReport
            number="002"
            title="Craftsman booking marketplace"
            status="In progress"
            tone="pending"
            summary="A PERN marketplace connecting artisans with clients for bookings — the project I'm using to learn PostgreSQL, TypeORM, and raw SQL beyond the Mongo-first stack above."
            features={[
              "React + React Router frontend",
              "TanStack Query + Zod for data and validation",
              "PostgreSQL + TypeORM backend (in development)",
            ]}
            tags={["React", "React Router", "PostgreSQL", "TypeORM"]}
            repoUrl="https://github.com/ferhatdaoud"
          />
        </div>
      </section>

      {/* CV */}
      <section
        id="cv"
        className="max-w-4xl mx-auto px-6 py-20"
        style={{ borderTop: `1px solid ${paperLine}` }}
      >
        <p
          className="text-[11px] tracking-[0.2em] uppercase mb-6"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: inkMuted }}
        >
          03 — Full report
        </p>
        <div className="border p-8" style={{ borderColor: paperLine }}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CV / résumé
              </h4>
              <p className="text-sm" style={{ color: inkMuted }}>
                Full-stack developer resume — covering React, Node.js, Express,
                and MongoDB projects.
              </p>
            </div>
            <StampTag label="Status" status="Ready" tone="pass" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-20"
        style={{ borderTop: `1px solid ${paperLine}` }}
      >
        <p
          className="text-[11px] tracking-[0.2em] uppercase mb-6"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: inkMuted }}
        >
          04 — Contact
        </p>
        <h3
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Open to junior full-stack roles.
        </h3>
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <a
            href="mailto:dunosixen@gmail.com"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Mail size={17} /> dunosixen@gmail.com
          </a>
          <a
            href="https://github.com/ferhatdaoud"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <FaGithub size={17} /> github.com/ferhatdaoud
          </a>
          {/* TODO: replace with your real LinkedIn URL, or delete this line if you don't have one yet */}
          <a
            href="https://www.linkedin.com/in/ferhat-daoud-721ab738a/"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <FaLinkedin size={17} /> LinkedIn
          </a>
        </div>
      </section>

      <footer
        className="text-center py-8 text-[12px]"
        style={{ color: inkMuted, fontFamily: "'IBM Plex Mono', monospace" }}
      >
        Built by Ferhat Daoud — React, Tailwind CSS
      </footer>
    </div>
  );
}

export default App;

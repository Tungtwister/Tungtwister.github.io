import React, { useState } from "react";
import myImg from "../../../Assets/pictures/profile.jpeg";

/* ============================================================
 * Shared styles
 * ============================================================ */
const tahoma = "Tahoma, sans-serif";

const xpLabel = { color: "#555", fontSize: "11px", fontFamily: tahoma };
const xpValue = { color: "#000", fontSize: "12px", fontFamily: tahoma, fontWeight: 700 };
const xpBody  = { fontSize: "12px", fontFamily: tahoma, color: "#222", lineHeight: 1.6 };

const sectionHeading = {
  fontSize: "12px",
  fontFamily: tahoma,
  fontWeight: 700,
  color: "#0a4aaa",
  marginTop: "16px",
  marginBottom: "8px",
  paddingBottom: "3px",
  borderBottom: "1px solid #d4d0c8",
};
const firstSectionHeading = { ...sectionHeading, marginTop: 0 };

const actionButton = {
  padding: "5px 12px",
  background: "linear-gradient(180deg, #f8f8f8, #d0d0d0)",
  border: "1px solid #aaa",
  borderRadius: "3px",
  cursor: "pointer",
  fontSize: "11px",
  fontFamily: tahoma,
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  color: "#000",
  textDecoration: "none",
};

/* ============================================================
 * Tab 1 — General
 * ============================================================ */
function GeneralTab({ onOpenApp }) {
  const subHeader = { ...xpLabel, marginBottom: "5px", fontWeight: 700, color: "#0a4aaa" };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      {/* Identity block */}
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <img
          src={myImg}
          alt="Austin"
          style={{
            width: "88px",
            height: "88px",
            objectFit: "cover",
            borderRadius: "4px",
            border: "1px solid #ccc",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ ...xpValue, fontSize: "17px", marginBottom: "2px" }}>Austin Tung</div>
          <div style={{ ...xpLabel, marginBottom: "10px" }}>
            AI/ML Engineer · San Diego, CA
          </div>
          <div style={xpBody}>
            I build AI systems for a living and get curious about how
            things work for fun. Currently at QuidelOrtho, finishing
            a Master's at Georgia Tech.
          </div>
        </div>
      </div>

      {/* Currently building */}
      <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #e6e2d8" }}>
        <div style={subHeader}>Currently building</div>
        <div style={xpBody}>
          AI systems on Databricks — multi-agent LLM workflows with
          LangGraph and MCP for supply chain and manufacturing decisions.
        </div>
      </div>

      {/* Currently learning */}
      <div style={{ marginTop: "12px" }}>
        <div style={subHeader}>Currently learning</div>
        <div style={xpBody}>
          Quantum computing — Superposition, Entanglement, and Quantum Physics.
        </div>
        <div style={{ ...xpBody, marginTop: "6px" }}>
          Machine learning — NLP, Computer Vision, and
          classical ML fundamentals.
        </div>
      </div>

      {/* Outside of work */}
      <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #e6e2d8" }}>
        <div style={subHeader}>Outside of work</div>
        <div style={xpBody}>
          Traveling ✈️ · Video games 🎮 · Kickboxing 🥊 · Tennis 🎾 ·
          Raising Croissant the Corgi 🐕
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ marginTop: "auto", paddingTop: "20px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {onOpenApp && (
          <>
            <button onClick={() => onOpenApp("resume")} style={actionButton} title="Open My Resume">
              📄 View Resume
            </button>
            <button onClick={() => onOpenApp("contact")} style={actionButton} title="Send a message">
              📧 Send Email
            </button>
          </>
        )}
        <a
          href="https://github.com/Tungtwister"
          target="_blank"
          rel="noreferrer"
          style={actionButton}
          title="Open GitHub in a new tab"
        >
          🐙 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/atung1/"
          target="_blank"
          rel="noreferrer"
          style={actionButton}
          title="Open LinkedIn in a new tab"
        >
          💼 LinkedIn
        </a>
      </div>
    </div>
  );
}

/* ============================================================
 * Tab 2 — Specs (XP System Properties played for laughs)
 * ============================================================ */
const SPEC_ROWS = [
  { section: "Identification" },
  { label: "Manufactured by",  value: "Standard issue" },
  { label: "Made in",          value: "California, USA" },
  { label: "System",           value: "Austin Tung v5.1" },
  { label: "Build",            value: "2026.05 SP1" },
  { label: "Status",           value: "Online · Caffeinated" },

  { section: "Registration" },
  { label: "Registered to",    value: "QuidelOrtho" },
  { label: "Role",             value: "AI/ML Engineer, Supply Chain" },
  { label: "License",          value: "Open to collaboration" },

  { section: "Computer" },
  { label: "Processor",        value: "Curiosity Core™ 3.0GHz" },
  { label: "Memory",           value: "8GB (most reserved for snack thoughts)" },
  { label: "Storage",          value: "~80 TB (mostly photos of corgis)" },
  { label: "Graphics",         value: "Eyeballs v2.0 — dual monitor capable" },
  { label: "Network",          value: "San Diego · Wi-Fi only" },
  { label: "Audio",            value: "Lo-fi beats compatible" },

  { section: "Performance" },
  { label: "Tea dependency",    value: "high 🍵" },
  { label: "Sleep mode",        value: "optional, technically" },
  { label: "Bug tolerance",     value: "medium" },
  { label: "Refactor joy",      value: "unexpectedly high" },
  { label: "System type",       value: "Builder · Learner · Engineer" },
];

function SpecsTab() {
  return (
    <div style={{ fontFamily: tahoma }}>
      {SPEC_ROWS.map((row, i) => {
        if (row.section) {
          return (
            <div
              key={i}
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#0a4aaa",
                marginTop: i === 0 ? 0 : "14px",
                marginBottom: "6px",
                paddingBottom: "2px",
                borderBottom: "1px solid #d4d0c8",
              }}
            >
              {row.section}
            </div>
          );
        }
        return (
          <div key={i} style={{ display: "flex", padding: "3px 0", fontSize: "11px" }}>
            <div style={{ width: "140px", color: "#555", flexShrink: 0 }}>{row.label}:</div>
            <div style={{ color: "#000", flex: 1, fontWeight: 600 }}>{row.value}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ============================================================
 * Tab 3 — Background
 * ============================================================ */
const EDUCATION = [
  {
    date: "Jan 2024 – Dec 2026 (Expected)",
    school: "Georgia Institute of Technology",
    detail: "M.S. Computer Science — AI specialization",
  },
  {
    date: "Sep 2015 – Dec 2019",
    school: "UC Riverside",
    detail: "B.S. Computer Engineering",
  },
];

const EXPERIENCE = [
  { date: "2026 – present", title: "AI/ML Engineer",            company: "QuidelOrtho" },
  { date: "2023 – 2025",    title: "Data Scientist",            company: "Caltrol" },
  { date: "2023",           title: "Associate ML Developer",    company: "Caltrol" },
  { date: "2020 – 2023",    title: "Systems Engineer, MES",     company: "Caltrol" },
  { date: "2020 – 2021",    title: "Curriculum Developer",      company: "Intellibricks" },
  { date: "2020",           title: "Coding Instructor",         company: "CodeREV Kids" },
  { date: "2018",           title: "Software Engineer Intern",  company: "UCR Brain Game Center" },
];

function BackgroundTab() {
  return (
    <div style={{ fontFamily: tahoma, color: "#222" }}>
      <div style={firstSectionHeading}>Career path</div>
      <p style={{ ...xpBody, margin: 0 }}>
        My path here wasn't linear. I started as a Systems Engineer working on
        manufacturing execution systems, then drifted into data science and
        machine learning, and somewhere in there started pursuing a Master's.
        Now I'm shipping agentic workflows with LangGraph and MCP.
      </p>

      <div style={sectionHeading}>Education</div>
      {EDUCATION.map((edu, i) => (
        <div key={i} style={{ marginBottom: i === EDUCATION.length - 1 ? 0 : "10px" }}>
          <div style={{ fontSize: "10px", color: "#888", marginBottom: "1px" }}>{edu.date}</div>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#000" }}>{edu.school}</div>
          <div style={{ fontSize: "11px", color: "#444" }}>{edu.detail}</div>
        </div>
      ))}

      <div style={sectionHeading}>Experience</div>
      <div>
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              padding: "5px 0",
              borderBottom: i === EXPERIENCE.length - 1 ? "none" : "1px dotted #e0e0e0",
              fontSize: "11px",
            }}
          >
            <div style={{ width: "110px", color: "#888", flexShrink: 0 }}>{exp.date}</div>
            <div style={{ flex: 1, color: "#000" }}>
              <span style={{ fontWeight: 700 }}>{exp.title}</span>
              <span style={{ color: "#666" }}> · {exp.company}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
 * Main — tabbed System Properties dialog
 * ============================================================ */
const TABS = ["General", "Specs", "Background"];

function AboutApp({ onOpenApp }) {
  const [active, setActive] = useState("General");

  const tabStyle = (isActive) => ({
    padding: "5px 14px 6px",
    marginRight: "2px",
    marginBottom: isActive ? "-1px" : "0",
    background: isActive ? "#fff" : "#d4d0c8",
    border: "1px solid #aca899",
    borderBottom: isActive ? "1px solid #fff" : "1px solid #aca899",
    borderRadius: "3px 3px 0 0",
    fontSize: "11px",
    fontFamily: tahoma,
    fontWeight: isActive ? 700 : 400,
    color: "#000",
    cursor: "pointer",
    position: "relative",
    zIndex: isActive ? 2 : 1,
  });

  return (
    <div
      style={{
        padding: "10px 10px 0",
        background: "#ece9d8",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Tab strip */}
      <div style={{ display: "flex", paddingLeft: "8px" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setActive(t)} style={tabStyle(t === active)}>
            {t}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #aca899",
          padding: "16px",
          flex: 1,
          overflow: "auto",
          position: "relative",
          zIndex: 1,
          marginBottom: "10px",
        }}
      >
        {active === "General"    && <GeneralTab onOpenApp={onOpenApp} />}
        {active === "Specs"      && <SpecsTab />}
        {active === "Background" && <BackgroundTab />}
      </div>
    </div>
  );
}

export default AboutApp;

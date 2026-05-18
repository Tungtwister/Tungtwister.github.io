import React, { useState } from "react";
import txtIcon from "../../../Assets/icons/Generic Text Document.png";
import useIsMobile from "../../../hooks/useIsMobile";

const projects = [
  {
    id: "portfolio",
    name: "This Portfolio Site.txt",
    icon: txtIcon,
    content: `PROJECT: Portfolio Website (Windows XP Edition)
STATUS: You're looking at it!

OVERVIEW
========
A Windows XP-themed portfolio website built from scratch
in React. Features a working window manager, boot screen,
login, taskbar, Start menu, and multiple app windows.

TECH STACK
==========
React, react-rnd, CSS, Create React App
Deployed via GitHub Pages

BUILT WITH
==========
Designed and developed with Claude Code — Anthropic's
agentic coding tool — which handled component scaffolding,
icon wiring, and iterative UI refinements throughout.

INSPIRATION
===========
Concept and aesthetic inspired by the excellent OS-style
portfolio by Paul Jaguin:
https://pauljaguin.com/office

NOTE
====
Yes, I know it's 2026. No, I don't care.
The contrast between "cutting-edge AI systems" and
"Windows XP UI" is entirely intentional.
`,
  },
  {
    id: "mltrader",
    name: "MLtrader.txt",
    icon: txtIcon,
    link: "https://github.com/Tungtwister/MLtrader",
    content: `PROJECT: MLtrader — Hybrid ML + LLM Trading Bot
STATUS: Active

OVERVIEW
========
A hybrid ML + LLM paper trading bot built as a
continuation of Georgia Tech's CS 7646: Machine Learning
for Trading.

The system combines a Bagged Random Tree technical model
with a Gemini-powered research agent to generate trade
signals, then executes them via the Alpaca paper trading
API.

TECH STACK
==========
Python, scikit-learn, pandas
Gemini (LLM research agent)
Alpaca API (paper trading execution)

ARCHITECTURE
============
- Bagged Random Tree model trained on historical price
  and technical indicator data → quantitative signal
- Gemini-powered research agent doing news / market
  synthesis → qualitative signal
- Hybrid signal combination drives trade decisions
- Trades executed via Alpaca's paper trading API for
  live evaluation without real capital

ORIGIN
======
Extends coursework from Georgia Tech's CS 7646
(Machine Learning for Trading) by adding LLM-driven
qualitative reasoning on top of the classical ML stack.

REPO
====
github.com/Tungtwister/MLtrader
`,
  },
];

function ProjectsApp() {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(null);

  if (open) {
    const proj = projects.find((p) => p.id === open);
    return (
      <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{
          background: "#ece9d8", borderBottom: "1px solid #aaa",
          padding: "4px 8px", display: "flex", gap: "8px", alignItems: "center",
        }}>
          <button
            onClick={() => setOpen(null)}
            style={{
              fontSize: "11px", fontFamily: "Tahoma, sans-serif",
              background: "#ece9d8", border: "1px solid #aaa",
              borderRadius: "2px", padding: "2px 8px", cursor: "pointer",
            }}
          >
            ← Back
          </button>
          <span style={{ fontSize: "11px", fontFamily: "Tahoma, sans-serif", color: "#555" }}>
            My Documents › {proj.name}
          </span>
          {proj.link && (
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              style={{
                marginLeft: "auto",
                fontSize: "11px", fontFamily: "Tahoma, sans-serif",
                background: "#ece9d8", border: "1px solid #aaa",
                borderRadius: "2px", padding: "2px 8px",
                textDecoration: "none", color: "#000",
              }}
            >
              🐙 View on GitHub
            </a>
          )}
        </div>
        <pre style={{
          flex: 1, padding: "16px", margin: 0,
          fontFamily: "Courier New, monospace",
          fontSize: "12px", color: "#222",
          whiteSpace: "pre-wrap", wordBreak: "break-word",
          overflow: "auto",
          background: "#fff",
        }}>
          {proj.content}
        </pre>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{
        background: "#ece9d8", borderBottom: "1px solid #ccc",
        padding: "4px 8px",
        fontSize: "11px", fontFamily: "Tahoma, sans-serif", color: "#555",
      }}>
        My Documents
      </div>
      <div style={{
        flex: 1, padding: "12px",
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "8px", alignContent: "start",
        overflow: "auto",
      }}>
        {projects.map((proj) => (
          <button
            key={proj.id}
            onDoubleClick={() => setOpen(proj.id)}
            onClick={() => (isMobile ? setOpen(proj.id) : setSelected(proj.id))}
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: "4px",
              padding: "8px 4px",
              background: selected === proj.id ? "#316ac5" : "transparent",
              border: selected === proj.id ? "1px dotted #fff" : "1px solid transparent",
              borderRadius: "2px",
              cursor: "pointer",
              fontFamily: "Tahoma, sans-serif",
            }}
          >
            <img src={proj.icon} alt={proj.name} style={{ width: "32px", height: "32px", objectFit: "contain", imageRendering: "pixelated" }} />
            <span style={{
              fontSize: "11px",
              color: selected === proj.id ? "#fff" : "#000",
              textAlign: "center",
              wordBreak: "break-word",
              lineHeight: "1.3",
            }}>
              {proj.name}
            </span>
          </button>
        ))}
      </div>
      <div style={{
        background: "#ece9d8", borderTop: "1px solid #ccc",
        padding: "3px 8px",
        fontSize: "11px", fontFamily: "Tahoma, sans-serif", color: "#555",
      }}>
        {projects.length} object(s) · {isMobile ? "Tap to open" : "Double-click to open"}
      </div>
    </div>
  );
}

export default ProjectsApp;

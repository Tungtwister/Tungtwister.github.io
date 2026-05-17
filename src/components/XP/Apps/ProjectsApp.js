import React, { useState } from "react";
import txtIcon from "../../../Assets/icons/Generic Text Document.png";

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
"Windows XP UI" is entirely intentional and deeply personal.
`,
  },
];

function ProjectsApp() {
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
            onClick={() => setSelected(proj.id)}
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
        {projects.length} object(s) · Double-click to open
      </div>
    </div>
  );
}

export default ProjectsApp;

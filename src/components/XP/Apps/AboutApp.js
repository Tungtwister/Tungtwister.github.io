import React from "react";
import myImg from "../../../Assets/headshot.jpg";

const xpLabel = { color: "#555", fontSize: "11px", fontFamily: "Tahoma, sans-serif" };
const xpValue = { color: "#000", fontSize: "12px", fontFamily: "Tahoma, sans-serif", fontWeight: "700" };
const xpBody = { fontSize: "12px", fontFamily: "Tahoma, sans-serif", color: "#222", lineHeight: "1.6" };

function AboutApp() {
  return (
    <div style={{ padding: "16px", background: "#ece9d8", height: "100%" }}>
      <div style={{
        background: "#fff",
        border: "1px solid #aaa",
        borderRadius: "2px",
        padding: "16px",
        display: "flex", gap: "16px",
        marginBottom: "12px",
      }}>
        <img
          src={myImg}
          alt="Austin"
          style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "4px", border: "1px solid #ccc", flexShrink: 0 }}
        />
        <div>
          <div style={{ ...xpValue, fontSize: "16px", marginBottom: "4px" }}>Austin Tung</div>
          <div style={{ ...xpLabel, marginBottom: "8px" }}>AI/ML Engineer · San Diego, CA</div>
          <div style={xpBody}>
            AI/ML Engineer with 5+ years building production ML systems across supply chain and manufacturing.
            Specializing in LLM orchestration, multi-agent systems, and agentic workflows using LangGraph,
            LangChain, and MCP.
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        {[
          { label: "Current Role", value: "AI/ML Engineer, Supply Chain" },
          { label: "Company", value: "QuidelOrtho" },
          { label: "Education", value: "MS CS — AI (Georgia Tech)" },
          { label: "Undergrad", value: "BS Computer Engineering (UCR)" },
          { label: "Specialization", value: "LLMs, Multi-Agent Systems, MCP" },
          { label: "Interests", value: "Quantum Computing, Tennis 🎾" },
        ].map(({ label, value }) => (
          <div key={label} style={{
            background: "#fff", border: "1px solid #ccc",
            borderRadius: "2px", padding: "8px 10px",
          }}>
            <div style={xpLabel}>{label}</div>
            <div style={xpValue}>{value}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "12px",
        background: "#fff",
        border: "1px solid #ccc",
        borderRadius: "2px",
        padding: "10px",
      }}>
        <div style={{ ...xpLabel, marginBottom: "6px" }}>Outside of work</div>
        <div style={xpBody}>
          Traveling ✈️ · Kickboxing 🥊 · Video games 🎮 · Raising Croissant the Corgi 🐕 · Quantum Computing 🔬
        </div>
      </div>
    </div>
  );
}

export default AboutApp;

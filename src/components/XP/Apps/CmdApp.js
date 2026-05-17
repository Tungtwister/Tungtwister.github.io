import React, { useState, useEffect, useRef } from "react";

const lines = [
  { delay: 0,    text: "Microsoft Windows XP [Version 5.1.2600]" },
  { delay: 100,  text: "(C) Copyright 1985-2001 Microsoft Corp." },
  { delay: 200,  text: "" },
  { delay: 400,  text: "C:\\Users\\Austin> whoami" },
  { delay: 900,  text: "Austin Tung — AI/ML Engineer" },
  { delay: 1000, text: "" },
  { delay: 1100, text: "C:\\Users\\Austin> cat skills.txt" },
  { delay: 1600, text: "" },
  { delay: 1700, text: "  [LANGUAGES]" },
  { delay: 1800, text: "  Python  SQL  C++" },
  { delay: 1900, text: "" },
  { delay: 2000, text: "  [GenAI & LLM]" },
  { delay: 2100, text: "  LangGraph  LangChain  RAG  MCP" },
  { delay: 2200, text: "  Multi-Agent Systems  LLMs/LMMs" },
  { delay: 2300, text: "  Agentic Workflows" },
  { delay: 2400, text: "" },
  { delay: 2500, text: "  [INFRASTRUCTURE]" },
  { delay: 2600, text: "  Docker  Kubernetes  AWS  Azure" },
  { delay: 2700, text: "  Databricks  MLflow  Git" },
  { delay: 2800, text: "" },
  { delay: 2900, text: "  [ML & DATA]" },
  { delay: 3000, text: "  PyTorch  scikit-learn  PySpark" },
  { delay: 3100, text: "  Time-Series  Anomaly Detection  NLP" },
  { delay: 3200, text: "  Transformer Architectures" },
  { delay: 3300, text: "  Matplotlib  Seaborn" },
  { delay: 3400, text: "" },
  { delay: 3500, text: "  [TOOLS]" },
  { delay: 3600, text: "  Claude Code  Power BI  Tableau" },
  { delay: 3700, text: "" },
  { delay: 3900, text: "C:\\Users\\Austin> cat experience.txt" },
  { delay: 4400, text: "" },
  { delay: 4500, text: "  2026-present  AI/ML Engineer @ QuidelOrtho" },
  { delay: 4700, text: "  2023-2025     Data Scientist @ Caltrol" },
  { delay: 4900, text: "  2023          Associate ML Dev @ Caltrol" },
  { delay: 5100, text: "  2020-2023     Systems Engineer @ Caltrol" },
  { delay: 5300, text: "" },
  { delay: 5500, text: "C:\\Users\\Austin> _" },
];

function CmdApp() {
  const [visible, setVisible] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    lines.forEach(({ delay, text }) => {
      setTimeout(() => {
        setVisible((v) => [...v, text]);
      }, delay);
    });
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visible]);

  return (
    <div style={{
      background: "#000",
      height: "100%",
      padding: "8px 12px",
      overflow: "auto",
      fontFamily: "Lucida Console, Courier New, monospace",
      fontSize: "13px",
      color: "#c0c0c0",
    }}>
      {visible.map((line, i) => (
        <div key={i} style={{ whiteSpace: "pre-wrap", lineHeight: "1.5", minHeight: "1.5em" }}>
          {line}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export default CmdApp;

import React from "react";
import resumePdf from "../../../Assets/Austin_Tung_Resume.pdf";

function ResumeApp() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#ece9d8" }}>
      <div style={{
        background: "#ece9d8", borderBottom: "1px solid #ccc",
        padding: "4px 8px", display: "flex", gap: "8px", alignItems: "center",
      }}>
        <span style={{ fontSize: "11px", fontFamily: "Tahoma, sans-serif", color: "#555" }}>
          My Resume › Austin_Tung_Resume.pdf
        </span>
        <a
          href={resumePdf}
          download="Austin_Tung_Resume.pdf"
          style={{
            marginLeft: "auto",
            fontSize: "11px", fontFamily: "Tahoma, sans-serif",
            background: "#ece9d8", border: "1px solid #aaa",
            borderRadius: "2px", padding: "2px 8px",
            textDecoration: "none", color: "#000",
          }}
        >
          💾 Save
        </a>
      </div>
      <div style={{ flex: 1, overflow: "hidden" }}>
        <iframe
          src={`${resumePdf}#zoom=100`}
          title="Resume"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
}

export default ResumeApp;

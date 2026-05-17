import React, { useEffect, useState } from "react";

function Boot({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + Math.random() * 18 + 4;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      width: "100vw", height: "100vh",
      background: "#000",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      fontFamily: "Trebuchet MS, sans-serif",
      color: "#fff",
      userSelect: "none",
    }}>
      <div style={{ marginBottom: "48px", textAlign: "center" }}>
        <div style={{
          fontSize: "28px", fontWeight: "300",
          color: "#fff", letterSpacing: "2px",
          marginBottom: "4px",
        }}>
          <span style={{ color: "#fff", fontWeight: "700" }}>Portfolio</span>
          <span style={{ fontSize: "18px", marginLeft: "6px", fontStyle: "italic", color: "#e8a400", fontWeight: "700" }}>xp</span>
        </div>
        <div style={{ fontSize: "11px", color: "#aaa", letterSpacing: "1px" }}>
          Austin Tung
        </div>
      </div>

      <div style={{
        width: "200px",
        height: "14px",
        background: "#111",
        border: "1px solid #444",
        borderRadius: "2px",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0,
          height: "100%",
          background: "linear-gradient(to bottom, #3a6fd8, #1b4ab0)",
          width: `${Math.min(progress, 100)}%`,
          transition: "width 0.15s ease",
          borderRadius: "2px",
        }} />
        <div style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          background: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 10px)",
        }} />
      </div>

      <div style={{ marginTop: "16px", fontSize: "11px", color: "#555" }}>
        {progress < 100 ? "Starting up…" : "Ready"}
      </div>
    </div>
  );
}

export default Boot;

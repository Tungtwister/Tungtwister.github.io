import React from "react";
import blissImg from "../../Assets/bliss.jpg";

function DesktopIcon({ app, onOpen }) {
  return (
    <button
      onDoubleClick={() => onOpen(app.id)}
      style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "4px",
        background: "none", border: "none", cursor: "pointer",
        padding: "6px",
        borderRadius: "4px",
        color: "#fff",
        width: "80px",
        textAlign: "center",
        fontFamily: "Tahoma, sans-serif",
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = "rgba(49,106,197,0.5)"}
      onMouseLeave={(e) => e.currentTarget.style.background = "none"}
      title={`Double-click to open ${app.label}`}
    >
      <img src={app.icon} alt={app.label} style={{ width: "40px", height: "40px", objectFit: "contain", imageRendering: "pixelated" }} />
      <span style={{
        fontSize: "11px", color: "#fff",
        textShadow: "1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8)",
        wordBreak: "break-word",
        lineHeight: "1.3",
      }}>
        {app.label}
      </span>
    </button>
  );
}

function Desktop({ apps, onOpen, children }) {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${blissImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: "16px", left: "12px",
        display: "flex", flexDirection: "column", gap: "8px",
        paddingBottom: "48px",
      }}>
        {apps.filter((a) => a.desktop !== false).map((app) => (
          <DesktopIcon key={app.id} app={app} onOpen={onOpen} />
        ))}
      </div>

      {children}
    </div>
  );
}

export default Desktop;

import React from "react";
import myImg from "../../Assets/pictures/profile.jpeg";

function StartMenu({ apps, onOpen, onClose }) {
  const leftApps = apps.filter((a) => a.startMenu === "left");
  const rightApps = apps.filter((a) => a.startMenu === "right");

  return (
    <>
      <div
        style={{ position: "fixed", inset: 0, zIndex: 998 }}
        onClick={onClose}
      />
      <div style={{
        position: "fixed", bottom: "40px", left: "0",
        width: "380px",
        background: "#fff",
        border: "1px solid #0a4aaa",
        borderRadius: "6px 6px 0 0",
        boxShadow: "3px -2px 10px rgba(0,0,0,0.4)",
        zIndex: 999,
        fontFamily: "Tahoma, sans-serif",
        overflow: "hidden",
      }}>
        <div style={{
          background: "linear-gradient(90deg, #1a5fc0 0%, #3a8ad8 100%)",
          padding: "10px 12px",
          display: "flex", alignItems: "center", gap: "12px",
          borderRadius: "6px 6px 0 0",
        }}>
          <div style={{
            width: "48px", height: "48px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.5)",
            flexShrink: 0,
          }}>
            <img src={myImg} alt="Austin" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: "700", fontSize: "14px", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
              Austin Tung
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px" }}>AI/ML Engineer</div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "6px 0", borderRight: "1px solid #ccc" }}>
            {leftApps.map((app) => (
              <button
                key={app.id}
                onClick={() => { onOpen(app.id); onClose(); }}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  width: "100%", padding: "8px 12px",
                  background: "none", border: "none", cursor: "pointer",
                  textAlign: "left", fontSize: "12px",
                  fontFamily: "Tahoma, sans-serif",
                  borderRadius: "3px",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#316ac5"}
                onMouseLeave={(e) => e.currentTarget.style.background = "none"}
              >
                <img src={app.icon} alt={app.label} style={{ width: "28px", height: "28px", objectFit: "contain", imageRendering: "pixelated", flexShrink: 0 }} />
                <span style={{ fontWeight: "700", fontSize: "12px" }}>{app.label}</span>
              </button>
            ))}
          </div>

          <div style={{ width: "160px", background: "#d3e5f7", padding: "6px 0" }}>
            {rightApps.map((app) => (
              <button
                key={app.id}
                onClick={() => { onOpen(app.id); onClose(); }}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  width: "100%", padding: "6px 10px",
                  background: "none", border: "none", cursor: "pointer",
                  textAlign: "left", fontSize: "12px",
                  fontFamily: "Tahoma, sans-serif",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#316ac5"}
                onMouseLeave={(e) => e.currentTarget.style.background = "none"}
              >
                <img src={app.icon} alt={app.label} style={{ width: "20px", height: "20px", objectFit: "contain", imageRendering: "pixelated" }} />
                <span>{app.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{
          background: "linear-gradient(90deg, #1a5fc0 0%, #3a8ad8 100%)",
          padding: "6px 12px",
          display: "flex", justifyContent: "flex-end", gap: "8px",
        }}>
          <button
            style={{
              display: "flex", alignItems: "center", gap: "4px",
              background: "none", border: "none", cursor: "pointer",
              color: "#fff", fontSize: "11px",
              fontFamily: "Tahoma, sans-serif",
            }}
          >
            🔴 Turn Off Computer
          </button>
        </div>
      </div>
    </>
  );
}

export default StartMenu;

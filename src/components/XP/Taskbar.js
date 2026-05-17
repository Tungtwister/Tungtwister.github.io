import React, { useState, useEffect } from "react";
import StartMenu from "./StartMenu";
import winIcon from "../../Assets/icons/windowXP.png";

function Taskbar({ apps, windows, onOpen, onToggleMinimize, onFocus }) {
  const [showStart, setShowStart] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatTime = (d) => {
    let h = d.getHours(), m = d.getMinutes();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${m.toString().padStart(2, "0")} ${ampm}`;
  };

  const openApps = apps.filter((a) => windows[a.id]?.open);

  return (
    <>
      {showStart && (
        <StartMenu
          apps={apps}
          onOpen={onOpen}
          onClose={() => setShowStart(false)}
        />
      )}

      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        height: "40px",
        background: "linear-gradient(180deg, #245cdb 0%, #1e54d0 4%, #2060d8 6%, #1a54c8 10%, #1650c0 88%, #1040a8 100%)",
        display: "flex", alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 -1px 0 rgba(255,255,255,0.3), 0 -2px 4px rgba(0,0,0,0.3)",
        userSelect: "none",
      }}>
        <button
          onClick={() => setShowStart((s) => !s)}
          style={{
            height: "36px",
            background: showStart
              ? "linear-gradient(180deg, #1e8a2e 0%, #3ab84e 50%, #1e8a2e 100%)"
              : "linear-gradient(180deg, #5acc6a 0%, #3ab84e 30%, #28a83c 70%, #1e8a2e 100%)",
            border: "1px solid #155a20",
            borderRadius: "0 12px 12px 0",
            cursor: "pointer",
            padding: "0 14px 0 10px",
            display: "flex", alignItems: "center", gap: "6px",
            boxShadow: showStart ? "inset 1px 1px 3px rgba(0,0,0,0.3)" : "1px 1px 3px rgba(0,0,0,0.3)",
            marginLeft: "2px",
            flexShrink: 0,
          }}
        >
          <img src={winIcon} alt="start" style={{ width: "20px", height: "20px", objectFit: "contain", imageRendering: "pixelated", flexShrink: 0 }} />
          <span style={{
            color: "#fff", fontWeight: "700", fontSize: "14px",
            fontFamily: "Trebuchet MS, sans-serif",
            fontStyle: "italic",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}>
            start
          </span>
        </button>

        <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />

        <div style={{
          flex: 1,
          display: "flex", alignItems: "center",
          gap: "2px", padding: "0 4px",
          overflow: "hidden",
        }}>
          {openApps.map((app) => {
            const win = windows[app.id];
            const isActive = !win.minimized;
            return (
              <button
                key={app.id}
                onClick={() => {
                  if (!win.minimized) {
                    onFocus(app.id);
                  }
                  onToggleMinimize(app.id);
                }}
                style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  height: "28px", padding: "0 8px",
                  background: isActive
                    ? "linear-gradient(180deg, #3d7bcc 0%, #2a5fb8 100%)"
                    : "linear-gradient(180deg, #1e54d0 0%, #1648b8 100%)",
                  border: isActive ? "1px solid #8ab0e0" : "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "3px",
                  cursor: "pointer",
                  color: "#fff",
                  fontFamily: "Tahoma, sans-serif",
                  fontSize: "11px",
                  whiteSpace: "nowrap",
                  maxWidth: "160px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  boxShadow: isActive ? "inset 1px 1px 2px rgba(0,0,0,0.2)" : "none",
                }}
              >
                <img src={app.icon} alt={app.label} style={{ width: "16px", height: "16px", objectFit: "contain", imageRendering: "pixelated", flexShrink: 0 }} />
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{app.label}</span>
              </button>
            );
          })}
        </div>

        <div style={{
          background: "linear-gradient(180deg, #1248b0 0%, #1650c0 50%, #1040a8 100%)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "3px",
          height: "28px",
          display: "flex", alignItems: "center",
          padding: "0 10px",
          gap: "8px",
          marginRight: "4px",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: "14px" }}>🔊</span>
          <span style={{
            color: "#fff", fontSize: "11px",
            fontFamily: "Tahoma, sans-serif",
          }}>
            {formatTime(time)}
          </span>
        </div>
      </div>
    </>
  );
}

export default Taskbar;

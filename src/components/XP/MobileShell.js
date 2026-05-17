import React, { useState } from "react";
import blissImg from "../../Assets/bliss.jpg";

/**
 * Mobile shell: bliss wallpaper + icon grid as "home", tap to open a fullscreen
 * app with an XP-style title bar (icon + title + close button).
 *
 * No drag, no resize, no taskbar — one app at a time.
 */
function MobileShell({ apps }) {
  const [activeId, setActiveId] = useState(null);
  const active = apps.find((a) => a.id === activeId);
  const ActiveComponent = active?.component;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${blissImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Home: icon grid */}
      {!activeId && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingTop: "24px",
            paddingBottom: "24px",
            boxSizing: "border-box",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px 8px",
              padding: "8px 12px",
              alignContent: "start",
            }}
          >
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => setActiveId(app.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 4px",
                  borderRadius: "6px",
                  color: "#fff",
                  fontFamily: "Tahoma, sans-serif",
                  WebkitTapHighlightColor: "rgba(49,106,197,0.4)",
                }}
                aria-label={`Open ${app.label}`}
              >
                <img
                  src={app.icon}
                  alt=""
                  style={{
                    width: "52px",
                    height: "52px",
                    objectFit: "contain",
                    imageRendering: "pixelated",
                    pointerEvents: "none",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#fff",
                    textShadow:
                      "1px 1px 2px rgba(0,0,0,0.85), -1px -1px 2px rgba(0,0,0,0.85)",
                    wordBreak: "break-word",
                    lineHeight: "1.3",
                    textAlign: "center",
                    pointerEvents: "none",
                  }}
                >
                  {app.label}
                </span>
              </button>
            ))}
          </div>

          {/* Footer hint */}
          <div
            style={{
              marginTop: "auto",
              textAlign: "center",
              color: "#fff",
              fontSize: "11px",
              fontFamily: "Tahoma, sans-serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
              padding: "12px",
              opacity: 0.85,
            }}
          >
            Tap an icon to open
          </div>
        </div>
      )}

      {/* Active app: fullscreen with title bar */}
      {active && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            background: "#ece9d8",
            zIndex: 10,
          }}
        >
          {/* XP-style title bar */}
          <div
            style={{
              background:
                "linear-gradient(180deg, #0f5fc0 0%, #0a4aaa 8%, #1565c0 35%, #1a6fd8 50%, #1565c0 85%, #0a4aaa 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "6px 6px 6px 10px",
              flexShrink: 0,
              borderBottom: "2px solid #0a4aaa",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flex: 1,
                minWidth: 0,
              }}
            >
              <img
                src={active.icon}
                alt=""
                style={{
                  width: "18px",
                  height: "18px",
                  objectFit: "contain",
                  imageRendering: "pixelated",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: "700",
                  fontFamily: "Trebuchet MS, sans-serif",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textShadow: "1px 1px 1px rgba(0,0,0,0.4)",
                }}
              >
                {active.label}
              </span>
            </div>
            <button
              onClick={() => setActiveId(null)}
              aria-label="Close"
              style={{
                width: "32px",
                height: "28px",
                border: "1px solid rgba(0,0,0,0.5)",
                borderRadius: "3px",
                cursor: "pointer",
                background:
                  "linear-gradient(180deg, #e8696e 0%, #c0282d 50%, #a01820 100%)",
                color: "#fff",
                fontWeight: "700",
                fontSize: "14px",
                flexShrink: 0,
              }}
            >
              ✕
            </button>
          </div>

          {/* App content */}
          <div
            style={{
              flex: 1,
              overflow: "auto",
              background: "#fff",
              fontFamily: "Tahoma, sans-serif",
              fontSize: "13px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <ActiveComponent onOpenApp={setActiveId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileShell;

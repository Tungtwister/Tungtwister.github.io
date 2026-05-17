import React, { useState } from "react";
import myImg from "../../Assets/pictures/profile.jpeg";
import winIcon from "../../Assets/icons/windowXP.png";

function Login({ onLogin }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleLogin = () => {
    setClicked(true);
    setTimeout(onLogin, 800);
  };

  return (
    <div style={{
      width: "100vw", height: "100vh",
      background: "linear-gradient(180deg, #2a5bd7 0%, #3a6fe0 50%, #2a5bd7 100%)",
      display: "flex", flexDirection: "column",
      fontFamily: "Trebuchet MS, sans-serif",
      userSelect: "none",
    }}>
      {/* Top bar */}
      <div style={{
        borderTop: "2px solid rgba(255,255,255,0.4)",
        borderBottom: "2px solid rgba(0,0,0,0.2)",
        background: "linear-gradient(180deg, #1a4aaa 0%, #2255c0 100%)",
        padding: "8px 32px",
        display: "flex", alignItems: "center", gap: "12px",
      }}>
        <img src={winIcon} alt="Windows" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ color: "#fff", fontSize: "20px", fontWeight: "300", letterSpacing: "1px" }}>Windows</span>
          <span style={{ color: "#e8a400", fontSize: "13px", fontStyle: "italic", fontWeight: "700" }}>XP</span>
        </div>
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          display: "flex",
          width: "min(860px, 90vw)",
          gap: "0",
          alignItems: "center",
        }}>
          {/* Left panel */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingRight: "48px",
          }}>
            <img src={winIcon} alt="Windows" style={{ width: "72px", height: "72px", objectFit: "contain", marginBottom: "12px" }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "0", marginBottom: "4px" }}>
              <span style={{
                color: "#fff",
                fontSize: "42px",
                fontWeight: "700",
                letterSpacing: "-1px",
                lineHeight: 1,
              }}>Portfolio</span>
              <span style={{
                color: "#e8a400",
                fontSize: "20px",
                fontWeight: "700",
                fontStyle: "italic",
                alignSelf: "flex-start",
                marginTop: "6px",
                marginLeft: "4px",
              }}>xp</span>
            </div>
            <div style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "13px",
              marginTop: "16px",
              fontStyle: "italic",
            }}>
              To begin, click my user name
            </div>
          </div>

          {/* Divider */}
          <div style={{
            width: "1px",
            height: "220px",
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.4) 80%, transparent)",
            flexShrink: 0,
          }} />

          {/* Right panel */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "48px",
            gap: "12px",
          }}>
            <button
              onClick={handleLogin}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                background: hovered || clicked ? "rgba(255,255,255,0.15)" : "transparent",
                border: hovered || clicked ? "1px solid rgba(255,255,255,0.3)" : "1px solid transparent",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "10px 14px",
                transition: "all 0.15s",
                width: "100%",
              }}
            >
              <div style={{
                width: "56px", height: "56px",
                borderRadius: "6px",
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.5)",
                flexShrink: 0,
              }}>
                <img src={myImg} alt="Austin" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ color: "#fff", fontSize: "16px", fontWeight: "600" }}>Austin Tung</div>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", marginTop: "2px" }}>AI/ML Engineer</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "2px solid rgba(255,255,255,0.3)",
        borderBottom: "2px solid rgba(0,0,0,0.2)",
        background: "linear-gradient(180deg, #1a4aaa 0%, #2255c0 100%)",
        padding: "8px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={winIcon} alt="Windows" style={{ width: "18px", height: "18px", objectFit: "contain" }} />
          <span style={{ color: "#fff", fontSize: "11px", fontWeight: "300", letterSpacing: "1px" }}>Windows</span>
          <span style={{ color: "#e8a400", fontSize: "10px", fontStyle: "italic", fontWeight: "700" }}>XP</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "10px" }}>
          Copyright © Austin Tung Portfolio 2026
        </div>
      </div>
    </div>
  );
}

export default Login;

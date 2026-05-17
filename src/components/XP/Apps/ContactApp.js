import React, { useState } from "react";

function ContactApp() {
  const [sent, setSent] = useState(false);

  const links = [
    { label: "📧  Email",    href: "mailto:austin.tung56@gmail.com", value: "austin.tung56@gmail.com" },
    { label: "💼  LinkedIn", href: "https://www.linkedin.com/in/atung1/", value: "linkedin.com/in/atung1" },
    { label: "🐙  GitHub",   href: "https://github.com/Tungtwister", value: "github.com/Tungtwister" },
    { label: "📸  Instagram",href: "https://www.instagram.com/austintungg/", value: "@austintungg" },
  ];

  return (
    <div style={{ background: "#ece9d8", height: "100%", padding: "16px", fontFamily: "Tahoma, sans-serif" }}>
      {sent ? (
        <div style={{
          background: "#fff", border: "1px solid #aaa", borderRadius: "2px",
          padding: "24px", textAlign: "center",
        }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>✅</div>
          <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "4px" }}>Message sent!</div>
          <div style={{ fontSize: "11px", color: "#555" }}>Austin will get back to you soon.</div>
          <button
            onClick={() => setSent(false)}
            style={{
              marginTop: "12px",
              background: "#ece9d8", border: "1px solid #aaa",
              borderRadius: "2px", padding: "4px 12px",
              cursor: "pointer", fontSize: "11px",
            }}
          >
            OK
          </button>
        </div>
      ) : (
        <>
          <div style={{
            background: "#fff", border: "1px solid #aaa", borderRadius: "2px",
            padding: "12px", marginBottom: "12px",
          }}>
            <div style={{ fontSize: "12px", fontWeight: "700", marginBottom: "10px", color: "#000" }}>
              📬 Contact Austin
            </div>
            {links.map(({ label, href, value }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "6px 0", borderBottom: "1px solid #eee",
              }}>
                <span style={{ fontSize: "11px", color: "#555", width: "80px", flexShrink: 0 }}>{label}</span>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "11px", color: "#0000cc", textDecoration: "underline" }}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          <div style={{
            background: "#fff", border: "1px solid #aaa", borderRadius: "2px",
            padding: "12px",
          }}>
            <div style={{ fontSize: "12px", fontWeight: "700", marginBottom: "8px" }}>📝 Send a message</div>
            <div style={{ marginBottom: "6px" }}>
              <label style={{ fontSize: "11px", color: "#555", display: "block", marginBottom: "2px" }}>Name:</label>
              <input
                type="text"
                style={{
                  width: "100%", padding: "3px 5px",
                  border: "1px solid #aaa", borderRadius: "2px",
                  fontFamily: "Tahoma, sans-serif", fontSize: "11px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ marginBottom: "6px" }}>
              <label style={{ fontSize: "11px", color: "#555", display: "block", marginBottom: "2px" }}>Message:</label>
              <textarea
                rows={4}
                style={{
                  width: "100%", padding: "3px 5px",
                  border: "1px solid #aaa", borderRadius: "2px",
                  fontFamily: "Tahoma, sans-serif", fontSize: "11px",
                  resize: "vertical", boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
              <button
                onClick={() => setSent(true)}
                style={{
                  background: "#ece9d8", border: "1px solid #aaa",
                  borderRadius: "2px", padding: "4px 16px",
                  cursor: "pointer", fontSize: "11px", fontFamily: "Tahoma, sans-serif",
                }}
              >
                Send →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ContactApp;

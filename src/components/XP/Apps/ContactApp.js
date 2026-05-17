import React, { useState } from "react";

const TO_EMAIL = "austin.tung56@gmail.com";

function ContactApp() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const links = [
    { label: "📧  Email",     href: `mailto:${TO_EMAIL}`,                       value: TO_EMAIL },
    { label: "💼  LinkedIn",  href: "https://www.linkedin.com/in/atung1/",      value: "linkedin.com/in/atung1" },
    { label: "🐙  GitHub",    href: "https://github.com/Tungtwister",           value: "github.com/Tungtwister" },
    { label: "📸  Instagram", href: "https://www.instagram.com/austintungg/",   value: "@austintungg" },
  ];

  const isValid =
    name.trim().length > 0 &&
    /\S+@\S+\.\S+/.test(email.trim()) &&
    message.trim().length > 0;

  const partiallyFilled = (name || email || message) && !isValid;

  const handleSend = () => {
    if (!isValid) return;
    const subject = `Portfolio contact from ${name.trim()}`;
    const body =
      `From: ${name.trim()} <${email.trim()}>\n\n` +
      `${message.trim()}\n\n` +
      `---\nSent via austintung's portfolio site`;
    const url =
      `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    // Triggers the OS mail client without navigating away from the portfolio
    window.location.href = url;
    setSent(true);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSent(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "3px 5px",
    border: "1px solid #aaa",
    borderRadius: "2px",
    fontFamily: "Tahoma, sans-serif",
    fontSize: "11px",
    boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#ece9d8", height: "100%", padding: "16px", fontFamily: "Tahoma, sans-serif" }}>
      {sent ? (
        <div style={{
          background: "#fff", border: "1px solid #aaa", borderRadius: "2px",
          padding: "24px", textAlign: "center",
        }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>📬</div>
          <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "6px" }}>
            Your mail client should be open
          </div>
          <div style={{ fontSize: "11px", color: "#555", marginBottom: "12px", lineHeight: "1.5" }}>
            Review the message, then hit send. If nothing opened, you can email
            me directly at <a href={`mailto:${TO_EMAIL}`} style={{ color: "#0000cc" }}>{TO_EMAIL}</a>.
          </div>
          <button
            onClick={reset}
            style={{
              background: "#ece9d8", border: "1px solid #aaa",
              borderRadius: "2px", padding: "4px 14px",
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
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "6px" }}>
              <label style={{ fontSize: "11px", color: "#555", display: "block", marginBottom: "2px" }}>Your email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "8px" }}>
              <label style={{ fontSize: "11px", color: "#555", display: "block", marginBottom: "2px" }}>Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "10px", color: "#999" }}>
                {partiallyFilled ? "Fill all fields to send" : ""}
              </span>
              <button
                onClick={handleSend}
                disabled={!isValid}
                style={{
                  background: isValid
                    ? "linear-gradient(180deg, #f8f8f8, #d0d0d0)"
                    : "#ece9d8",
                  border: "1px solid #aaa",
                  borderRadius: "2px",
                  padding: "4px 16px",
                  cursor: isValid ? "pointer" : "not-allowed",
                  fontSize: "11px",
                  fontFamily: "Tahoma, sans-serif",
                  opacity: isValid ? 1 : 0.5,
                }}
              >
                Send →
              </button>
            </div>
          </div>

          <p style={{ fontSize: "10px", color: "#888", marginTop: "8px", textAlign: "center", lineHeight: "1.4" }}>
            "Send" opens your default mail client with the message pre-filled.
          </p>
        </>
      )}
    </div>
  );
}

export default ContactApp;

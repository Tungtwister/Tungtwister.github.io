import React, { useState } from "react";
import banffImg from "../../../Assets/BanffAustin.jpg";
import croiImg from "../../../Assets/CroiClip.jpg";
import headshotImg from "../../../Assets/headshot.jpg";

const photos = [
  { id: "banff", label: "Banff_Canada.jpg", src: banffImg, caption: "Banff, Canada 🏔️" },
  { id: "croi",  label: "Croissant.jpg",    src: croiImg,  caption: "Croissant the Corgi 🐕" },
  { id: "head",  label: "Headshot.jpg",     src: headshotImg, caption: "Professional headshot" },
];

function PicturesApp() {
  const [selected, setSelected] = useState(null);

  const viewing = photos.find((p) => p.id === selected);

  if (viewing) {
    return (
      <div style={{ background: "#000", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{
          background: "#ece9d8", borderBottom: "1px solid #aaa",
          padding: "4px 8px", display: "flex", gap: "8px", alignItems: "center",
        }}>
          <button
            onClick={() => setSelected(null)}
            style={{
              fontSize: "11px", fontFamily: "Tahoma, sans-serif",
              background: "#ece9d8", border: "1px solid #aaa",
              borderRadius: "2px", padding: "2px 8px", cursor: "pointer",
            }}
          >
            ← Back
          </button>
          <span style={{ fontSize: "11px", fontFamily: "Tahoma, sans-serif", color: "#555" }}>
            My Pictures › {viewing.label}
          </span>
        </div>
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          background: "#1a1a1a", padding: "16px",
        }}>
          <img
            src={viewing.src}
            alt={viewing.caption}
            style={{ maxWidth: "100%", maxHeight: "calc(100% - 32px)", objectFit: "contain", borderRadius: "2px" }}
          />
          <div style={{ color: "#ccc", fontSize: "12px", fontFamily: "Tahoma, sans-serif", marginTop: "8px" }}>
            {viewing.caption}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{
        background: "#ece9d8", borderBottom: "1px solid #ccc",
        padding: "4px 8px",
        fontSize: "11px", fontFamily: "Tahoma, sans-serif", color: "#555",
      }}>
        My Pictures
      </div>
      <div style={{
        flex: 1, padding: "12px",
        display: "flex", flexWrap: "wrap",
        gap: "16px", alignContent: "start",
        overflow: "auto",
      }}>
        {photos.map((photo) => (
          <button
            key={photo.id}
            onDoubleClick={() => setSelected(photo.id)}
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: "6px",
              background: "transparent",
              border: "1px solid transparent",
              borderRadius: "2px", cursor: "pointer",
              padding: "6px",
              fontFamily: "Tahoma, sans-serif",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#ddeeff"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <img
              src={photo.src}
              alt={photo.label}
              style={{ width: "100px", height: "80px", objectFit: "cover", border: "1px solid #ccc" }}
            />
            <span style={{ fontSize: "11px", color: "#000", maxWidth: "100px", textAlign: "center", wordBreak: "break-word" }}>
              {photo.label}
            </span>
          </button>
        ))}
      </div>
      <div style={{
        background: "#ece9d8", borderTop: "1px solid #ccc",
        padding: "3px 8px",
        fontSize: "11px", fontFamily: "Tahoma, sans-serif", color: "#555",
      }}>
        {photos.length} item(s) · Double-click to view
      </div>
    </div>
  );
}

export default PicturesApp;

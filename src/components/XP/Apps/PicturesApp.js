import React, { useState } from "react";
import banffImg from "../../../Assets/pictures/BanffAustin.jpg";
import croiImg from "../../../Assets/pictures/CroiClip.jpg";
import profileImg from "../../../Assets/pictures/profile.jpeg";
import bbqDogImg from "../../../Assets/pictures/bbq_dog.jpeg";
import coolDogImg from "../../../Assets/pictures/cool_dog.jpeg";
import familyPlaygroundImg from "../../../Assets/pictures/family_playground.jpeg";
import peekingDogImg from "../../../Assets/pictures/peeking_dog.jpeg";
import winkingFamilyImg from "../../../Assets/pictures/winking_family.jpeg";
import useIsMobile from "../../../hooks/useIsMobile";

const photos = [
  { id: "profile",  label: "Profile.jpg",           src: profileImg,          caption: "Profile picture" },
  { id: "banff",    label: "Banff_Canada.jpg",      src: banffImg,            caption: "Banff, Canada 🏔️" },
  { id: "family",   label: "Family_Playground.jpg", src: familyPlaygroundImg, caption: "Family day at the playground 🎢" },
  { id: "wink",     label: "Winking_Family.jpg",    src: winkingFamilyImg,    caption: "Family wink 😉" },
  { id: "croi",     label: "Croissant.jpg",         src: croiImg,             caption: "Croissant the Corgi 🐕" },
  { id: "bbq",      label: "BBQ_Dog.jpg",           src: bbqDogImg,           caption: "Croissant at the BBQ 🍖" },
  { id: "cool",     label: "Cool_Dog.jpg",          src: coolDogImg,          caption: "Cool corgi vibes 😎" },
  { id: "peeking",  label: "Peeking_Dog.jpg",       src: peekingDogImg,       caption: "Just peeking 👀" },
];

function PicturesApp() {
  const isMobile = useIsMobile();
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
            onClick={() => isMobile && setSelected(photo.id)}
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
        {photos.length} item(s) · {isMobile ? "Tap to view" : "Double-click to view"}
      </div>
    </div>
  );
}

export default PicturesApp;

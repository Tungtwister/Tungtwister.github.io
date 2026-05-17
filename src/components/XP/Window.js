import React, { useState } from "react";
import { Rnd } from "react-rnd";

function Window({
  id, title, icon, children,
  defaultSize = { width: 600, height: 420 },
  defaultPosition,
  isMinimized,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
}) {
  const [maximized, setMaximized] = useState(false);
  const [preMaxSize, setPreMaxSize] = useState(null);
  const [preMaxPos, setPreMaxPos] = useState(null);
  const [size, setSize] = useState(defaultSize);
  const [position, setPosition] = useState(
    defaultPosition || {
      x: 80 + Math.random() * 160,
      y: 40 + Math.random() * 80,
    }
  );

  if (isMinimized) return null;

  const handleMaximize = () => {
    if (maximized) {
      setSize(preMaxSize);
      setPosition(preMaxPos);
      setMaximized(false);
    } else {
      setPreMaxSize(size);
      setPreMaxPos(position);
      setSize({ width: window.innerWidth, height: window.innerHeight - 40 });
      setPosition({ x: 0, y: 0 });
      setMaximized(true);
    }
  };

  const titleBarStyle = {
    background: "linear-gradient(180deg, #0f5fc0 0%, #0a4aaa 8%, #1565c0 35%, #1a6fd8 50%, #1565c0 85%, #0a4aaa 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3px 4px 3px 6px",
    borderRadius: "6px 6px 0 0",
    cursor: maximized ? "default" : "move",
    userSelect: "none",
    flexShrink: 0,
  };

  const btnBase = {
    width: "21px", height: "21px",
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: "3px",
    cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "11px", fontWeight: "700",
    color: "#000",
    flexShrink: 0,
  };

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, dir, ref, delta, pos) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(pos);
      }}
      dragHandleClassName="xp-title-bar"
      disableDragging={maximized}
      enableResizing={!maximized}
      minWidth={300}
      minHeight={200}
      style={{ zIndex, position: "absolute" }}
      onMouseDown={onFocus}
    >
      <div
        style={{
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          border: "2px solid #0a4aaa",
          borderRadius: "6px",
          boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          overflow: "hidden",
          background: "#ece9d8",
        }}
      >
        <div className="xp-title-bar" style={titleBarStyle} onDoubleClick={handleMaximize}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: 1, minWidth: 0 }}>
            {icon && <img src={icon} alt="" style={{ width: "16px", height: "16px", objectFit: "contain", imageRendering: "pixelated", flexShrink: 0 }} />}
            <span style={{
              color: "#fff", fontSize: "12px", fontWeight: "700",
              fontFamily: "Trebuchet MS, sans-serif",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              textShadow: "1px 1px 1px rgba(0,0,0,0.4)",
            }}>
              {title}
            </span>
          </div>
          <div style={{ display: "flex", gap: "2px", flexShrink: 0 }}>
            <button
              onClick={onMinimize}
              style={{ ...btnBase, background: "linear-gradient(180deg, #f0f0e8 0%, #d4ccb0 100%)" }}
              title="Minimize"
            >
              <span style={{ marginTop: "6px", display: "block", width: "8px", height: "2px", background: "#000" }} />
            </button>
            <button
              onClick={handleMaximize}
              style={{ ...btnBase, background: "linear-gradient(180deg, #f0f0e8 0%, #d4ccb0 100%)" }}
              title={maximized ? "Restore" : "Maximize"}
            >
              {maximized ? (
                <span style={{ fontSize: "9px" }}>❐</span>
              ) : (
                <span style={{
                  display: "block", width: "9px", height: "8px",
                  border: "1.5px solid #000",
                  borderTop: "2.5px solid #000",
                }} />
              )}
            </button>
            <button
              onClick={onClose}
              style={{
                ...btnBase,
                background: "linear-gradient(180deg, #e8696e 0%, #c0282d 50%, #a01820 100%)",
                color: "#fff",
                fontWeight: "700",
                fontSize: "12px",
              }}
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div style={{
          flex: 1,
          overflow: "auto",
          background: "#fff",
          fontFamily: "Tahoma, sans-serif",
          fontSize: "12px",
        }}>
          {children}
        </div>
      </div>
    </Rnd>
  );
}

export default Window;

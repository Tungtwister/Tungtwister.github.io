import React, { useState, useCallback, useEffect, useRef } from "react";
import Boot from "./components/XP/Boot";
import Login from "./components/XP/Login";
import Desktop from "./components/XP/Desktop";
import Taskbar from "./components/XP/Taskbar";
import Window from "./components/XP/Window";
import MobileShell from "./components/XP/MobileShell";
import AboutApp from "./components/XP/Apps/AboutApp";
import ProjectsApp from "./components/XP/Apps/ProjectsApp";
import ResumeApp from "./components/XP/Apps/ResumeApp";
import CmdApp from "./components/XP/Apps/CmdApp";
import PicturesApp from "./components/XP/Apps/PicturesApp";
import ContactApp from "./components/XP/Apps/ContactApp";
import iconMyComputer from "./Assets/icons/My Computer.png";
import iconFolder from "./Assets/icons/My Documents.png";
import iconFile from "./Assets/icons/Wordpad.png";
import iconServer from "./Assets/icons/Command Prompt.png";
import iconCamera from "./Assets/icons/My Pictures.png";
import iconPhone from "./Assets/icons/Email.png";
import useIsMobile from "./hooks/useIsMobile";
import "./App.css";

const APP_DEFS = [
  {
    id: "about",
    label: "My Computer",
    icon: iconMyComputer,
    component: AboutApp,
    defaultSize: { width: 520, height: 500 },
    defaultPosition: { x: 120, y: 40 },
    startMenu: "left",
    desktop: true,
  },
  {
    id: "projects",
    label: "My Documents",
    icon: iconFolder,
    component: ProjectsApp,
    defaultSize: { width: 560, height: 400 },
    startMenu: "left",
    desktop: true,
  },
  {
    id: "resume",
    label: "My Resume",
    icon: iconFile,
    component: ResumeApp,
    defaultSize: { width: 880, height: 1120 },
    defaultPosition: { x: 100, y: 0 },
    startMenu: "left",
    desktop: true,
  },
  {
    id: "cmd",
    label: "Command Prompt",
    icon: iconServer,
    component: CmdApp,
    defaultSize: { width: 560, height: 540 },
    defaultPosition: { x: 670, y: 60 },
    startMenu: "left",
    desktop: true,
  },
  {
    id: "pictures",
    label: "My Pictures",
    icon: iconCamera,
    component: PicturesApp,
    defaultSize: { width: 500, height: 360 },
    startMenu: "right",
    desktop: true,
  },
  {
    id: "contact",
    label: "Contact",
    icon: iconPhone,
    component: ContactApp,
    defaultSize: { width: 420, height: 420 },
    startMenu: "right",
    desktop: true,
  },
];

const initWindows = () => {
  const state = {};
  APP_DEFS.forEach((app) => {
    state[app.id] = { open: false, minimized: false, z: 0 };
  });
  return state;
};

function App() {
  const isMobile = useIsMobile();
  // Mobile users skip boot/login and land on the home screen directly.
  const [phase, setPhase] = useState(isMobile ? "desktop" : "boot");
  const [windows, setWindows] = useState(initWindows);
  const [zCounter, setZCounter] = useState(10);

  // If a viewer shrinks to mobile mid-boot or mid-login, skip them to desktop.
  // (Inverse not handled: widening back to desktop keeps you past the intro.)
  useEffect(() => {
    if (isMobile && phase !== "desktop") {
      setPhase("desktop");
    }
  }, [isMobile, phase]);

  // Auto-open My Computer + Command Prompt the first time a desktop user
  // lands on the desktop. Mobile uses MobileShell and is unaffected.
  const autoOpenedRef = useRef(false);
  useEffect(() => {
    if (phase === "desktop" && !isMobile && !autoOpenedRef.current) {
      autoOpenedRef.current = true;
      setZCounter((z) => {
        const aboutZ = z + 1;
        const cmdZ = z + 2;
        setWindows((w) => ({
          ...w,
          about: { open: true, minimized: false, z: aboutZ },
          cmd:   { open: true, minimized: false, z: cmdZ },
        }));
        return cmdZ;
      });
    }
  }, [phase, isMobile]);

  const bringToFront = useCallback((id) => {
    setZCounter((z) => {
      const next = z + 1;
      setWindows((w) => ({ ...w, [id]: { ...w[id], z: next } }));
      return next;
    });
  }, []);

  const openApp = useCallback((id) => {
    setZCounter((z) => {
      const next = z + 1;
      setWindows((w) => ({ ...w, [id]: { open: true, minimized: false, z: next } }));
      return next;
    });
  }, []);

  const closeApp = useCallback((id) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], open: false } }));
  }, []);

  const toggleMinimize = useCallback((id) => {
    setWindows((w) => ({
      ...w,
      [id]: { ...w[id], minimized: !w[id].minimized },
    }));
  }, []);

  if (phase === "boot") {
    return <Boot onComplete={() => setPhase("login")} />;
  }

  if (phase === "login") {
    return <Login onLogin={() => setPhase("desktop")} />;
  }

  if (isMobile) {
    return <MobileShell apps={APP_DEFS} />;
  }

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      <Desktop apps={APP_DEFS} onOpen={openApp}>
        {APP_DEFS.map((app) => {
          const win = windows[app.id];
          if (!win.open) return null;
          const AppComponent = app.component;
          return (
            <Window
              key={app.id}
              id={app.id}
              title={app.label}
              icon={app.icon}
              defaultSize={app.defaultSize}
              defaultPosition={app.defaultPosition}
              isMinimized={win.minimized}
              zIndex={win.z}
              onClose={() => closeApp(app.id)}
              onMinimize={() => toggleMinimize(app.id)}
              onFocus={() => bringToFront(app.id)}
            >
              <AppComponent onOpenApp={openApp} />
            </Window>
          );
        })}
      </Desktop>

      <Taskbar
        apps={APP_DEFS}
        windows={windows}
        onOpen={openApp}
        onToggleMinimize={toggleMinimize}
        onFocus={bringToFront}
      />
    </div>
  );
}

export default App;

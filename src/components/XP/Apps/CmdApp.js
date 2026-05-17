import React, { useState, useEffect, useRef, useCallback } from "react";

/* ============================================================
 * Virtual "filesystem" — content you can `cat`
 * ============================================================ */
const FILES = {
  "about.txt": `Austin Tung — AI/ML Engineer
Based in San Diego, CA

AI/ML Engineer with 5+ years building production ML systems
across supply chain and manufacturing. Specializing in LLM
orchestration, multi-agent systems, and agentic workflows
using LangGraph, LangChain, and MCP.

Currently @ QuidelOrtho. MS in Computer Science (AI) @ Georgia Tech.
BS Computer Engineering @ UC Riverside.`,

  "skills.txt": `[LANGUAGES]
  Python  SQL  C++

[GenAI & LLM]
  LangGraph  LangChain  RAG  MCP
  Multi-Agent Systems  LLMs/LMMs  Agentic Workflows

[INFRASTRUCTURE]
  Docker  Kubernetes  AWS  Azure
  Databricks  MLflow  Git

[ML & DATA]
  PyTorch  scikit-learn  PySpark
  Time-Series  Anomaly Detection  NLP
  Transformer Architectures  Matplotlib  Seaborn

[TOOLS]
  Claude Code  Power BI  Tableau`,

  "experience.txt": `  2026-present  AI/ML Engineer @ QuidelOrtho
  2023-2025     Data Scientist @ Caltrol
  2023          Associate ML Dev @ Caltrol
  2020-2023     Systems Engineer @ Caltrol

Type 'cat about.txt' for the full bio.`,

  "education.txt": `  Georgia Institute of Technology
    M.S. Computer Science — AI specialization
    Jan 2024 – Dec 2026 (Expected)

  UC Riverside
    B.S. Computer Engineering
    Sep 2015 – Dec 2019`,

  "projects.txt": `  portfolio_xp/   This site you're using right now.
                  React + react-rnd + Claude Code.
                  Inspired by pauljaguin.com/office

  more coming soon...`,

  "contact.txt": `  email     austin.tung56@gmail.com
  github    github.com/Tungtwister
  linkedin  linkedin.com/in/atung1
  instagram @austintungg`,

  "secret.txt": `  Congrats, you found a secret file.

  ...there's no secret. I just thought you'd try cat-ing it.
  But hey, I respect the curiosity. That's the kind of engineer
  I'd want to work with.`,
};

/* ============================================================
 * Whimsy
 * ============================================================ */
const FORTUNES = [
  "You will write a regex you can't read tomorrow.",
  "A merge conflict is in your future. Resolve carefully.",
  "Your code will compile on the first try. (lol jk)",
  "The bug you're looking for is in the file you haven't checked.",
  "It's always DNS.",
  "Trust the linter. The linter knows.",
  "Stack Overflow is closed for maintenance.",
  "Today is a good day to git push --force. (no it isn't)",
];

const JOKES = [
  "I would tell you a UDP joke, but you might not get it.",
  "There are 10 kinds of people in the world: those who understand binary and those who don't.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "How many software engineers does it take to change a lightbulb? None — that's a hardware problem.",
  "I told my computer I needed a break. It said 'no problem, I'll go to sleep.'",
];

const TEA_ART = `
       (  (
        )  )
      ........
      |      |]
      \\      /
       \`----'
   Steeped & ready. 🍵`;

const SYSTEM_INFO = `
    ████ ████   AUSTIN @ portfolio-xp
    ████ ████   ---------------------
                OS:         Windows XP (vibe)
    ████ ████   Host:       austintung.dev
    ████ ████   Kernel:     React 18.x
                Shell:      cmd.exe (kinda)
                Uptime:     too long
                Resolution: depends on your screen
                Theme:      Luna (Blue)
                CPU:        caffeine
                Memory:     leaky
                Mood:       🍵`;

const HELP = `Available commands:
  help              Show this help
  ls                List files in current directory
  cat <file>        Display file contents
  whoami            Quick intro
  clear / cls       Clear the screen
  echo <text>       Print text back
  date              Show current date and time
  pwd               Print working directory
  history           Show command history
  github            Open GitHub
  linkedin          Open LinkedIn
  resume            Open the resume window (psst — try it)
  exit              "Close" the terminal

Just for fun:
  system            System info, sort of
  fortune           Random fortune
  joke              A programmer joke
  tea               Brew a cup of tea
  sudo <anything>   Try it. I dare you.
  matrix            Wake up, Neo
  rm -rf /          Don't.`;

/* ============================================================
 * Intro autoplay
 * ============================================================ */
const INTRO = [
  { delay: 0,    text: "Microsoft Windows XP [Version 5.1.2600]" },
  { delay: 80,   text: "(C) Copyright 1985-2001 Microsoft Corp." },
  { delay: 180,  text: "" },
  { delay: 280,  text: "Loading user profile...", muted: true },
  { delay: 520,  text: "" },

  { delay: 660,  text: "C:\\Users\\Austin> whoami", cmd: true },
  { delay: 940,  text: "Austin Tung — AI/ML Engineer · San Diego, CA" },
  { delay: 1060, text: "" },

  { delay: 1200, text: "C:\\Users\\Austin> cat intro.txt", cmd: true },
  { delay: 1440, text: "" },
  { delay: 1500, text: "  Hey, I'm Austin." },
  { delay: 1600, text: "" },
  { delay: 1680, text: "  I'm an AI/ML Engineer based in San Diego, where I spend" },
  { delay: 1750, text: "  my days building multi-agent systems and LLM orchestration" },
  { delay: 1820, text: "  pipelines for supply chain and manufacturing." },
  { delay: 1900, text: "" },
  { delay: 1980, text: "  My path here wasn't linear. I started as a Systems Engineer" },
  { delay: 2050, text: "  working on manufacturing execution systems, then drifted" },
  { delay: 2120, text: "  into data science and machine learning, and somewhere in" },
  { delay: 2190, text: "  there started pursuing a Masters. Now I'm shipping agentic" },
  { delay: 2260, text: "  workflows @ QuidelOrtho with LangGraph and MCP." },
  { delay: 2350, text: "" },
  { delay: 2430, text: "  I have a BS Computer Engineering @ UC Riverside and" },
  { delay: 2500, text: "  finishing up a MS in Computer Science (AI focus) @ Georgia" },
  { delay: 2570, text: "  Tech (Dec 2026)." },
  { delay: 2670, text: "" },
  { delay: 2770, text: "  Outside of work and school: I enjoy traveling, video games," },
  { delay: 2840, text: "  kickboxing, tennis, learning about quantum computing," },
  { delay: 2910, text: "  and raising Croissant — a corgi with strong opinions and " },
  { delay: 2980, text: "  zero respect for personal space." },
  { delay: 3080, text: "" },

  { delay: 3190, text: "Type 'help' to see what you can do.", muted: true },
  { delay: 3270, text: "Tip: 'ls' lists the files you can 'cat'.", muted: true },
  { delay: 3350, text: "" },
];

/* ============================================================
 * Component
 * ============================================================ */
function CmdApp() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [introDone, setIntroDone] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const introTimersRef = useRef([]);
  const shownCountRef = useRef(0);

  /* Autoplay the intro */
  useEffect(() => {
    shownCountRef.current = 0;
    const lastDelay = INTRO[INTRO.length - 1].delay;

    introTimersRef.current = INTRO.map(({ delay, text, cmd, muted }) =>
      setTimeout(() => {
        shownCountRef.current += 1;
        setLines((prev) => [...prev, { text, cmd, muted }]);
      }, delay)
    );
    const doneTimer = setTimeout(() => setIntroDone(true), lastDelay + 100);
    introTimersRef.current.push(doneTimer);

    return () => {
      introTimersRef.current.forEach(clearTimeout);
      introTimersRef.current = [];
    };
  }, []);

  /* Skip intro: dump remaining lines instantly and unlock the prompt */
  const skipIntro = useCallback(() => {
    if (introDone) return;
    introTimersRef.current.forEach(clearTimeout);
    introTimersRef.current = [];
    setLines((prev) => {
      const remaining = INTRO.slice(prev.length).map(({ text, cmd, muted }) => ({
        text,
        cmd,
        muted,
      }));
      return [...prev, ...remaining];
    });
    setIntroDone(true);
  }, [introDone]);

  /* Listen for any key/click during intro to skip */
  useEffect(() => {
    if (introDone) return;
    const onKey = (e) => {
      // Don't trip on system shortcuts (Ctrl+R, Cmd+T, etc.)
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      skipIntro();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [introDone, skipIntro]);

  /* Autoscroll on new lines */
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [lines]);

  /* Autofocus input once intro finishes (and on container clicks) */
  useEffect(() => {
    if (introDone && inputRef.current) {
      inputRef.current.focus();
    }
  }, [introDone]);

  const focusInput = useCallback(() => {
    // If clicked during intro, skip ahead so the user lands at the prompt
    if (!introDone) {
      skipIntro();
      return;
    }
    if (inputRef.current) inputRef.current.focus();
  }, [introDone, skipIntro]);

  /* ============================================================
   * Command execution
   * ============================================================ */
  const push = (text, opts = {}) => {
    setLines((prev) => [...prev, { text, ...opts }]);
  };

  const pushMulti = (block, opts = {}) => {
    block.split("\n").forEach((line) => push(line, opts));
  };

  const runCommand = (raw) => {
    const trimmed = raw.trim();

    // Echo the command back into output
    push(`C:\\Users\\Austin> ${raw}`, { cmd: true });

    if (!trimmed) return;

    const [cmd, ...rest] = trimmed.split(/\s+/);
    const args = rest.join(" ");
    const c = cmd.toLowerCase();

    switch (c) {
      case "help":
        pushMulti(HELP);
        break;

      case "ls":
      case "dir": {
        const names = Object.keys(FILES);
        push(names.join("   "));
        push(`${names.length} file(s)`, { muted: true });
        break;
      }

      case "cat":
      case "type": {
        const name = rest[0];
        if (!name) {
          push("cat: missing file operand", { err: true });
          push("Try: cat skills.txt   (or 'ls' to see files)", { muted: true });
          break;
        }
        const file = FILES[name] || FILES[name.toLowerCase()];
        if (file) {
          pushMulti(file);
        } else {
          push(`cat: ${name}: No such file or directory`, { err: true });
        }
        break;
      }

      case "whoami":
        push("Austin Tung — AI/ML Engineer");
        break;

      case "clear":
      case "cls":
        setLines([]);
        break;

      case "echo":
        push(args);
        break;

      case "date": {
        const now = new Date();
        push(now.toString());
        break;
      }

      case "pwd":
        push("C:\\Users\\Austin");
        break;

      case "history":
        if (history.length === 0) {
          push("(no history yet)");
        } else {
          history.forEach((h, i) => push(`  ${i + 1}  ${h}`));
        }
        break;

      case "github":
        push("Opening github.com/Tungtwister ...");
        window.open("https://github.com/Tungtwister", "_blank", "noreferrer");
        break;

      case "linkedin":
        push("Opening linkedin.com/in/atung1 ...");
        window.open("https://www.linkedin.com/in/atung1/", "_blank", "noreferrer");
        break;

      case "resume":
        push("(Try opening 'My Resume' from the desktop — it's a real PDF viewer.)");
        break;

      case "exit":
        push("Just close the window. I can't actually exit myself.");
        push("(Or can I?)", { muted: true });
        break;

      case "system":
      case "fetch":
      case "neofetch":
        pushMulti(SYSTEM_INFO);
        break;

      case "fortune":
        push("🥠  " + FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
        break;

      case "joke":
        push("😄  " + JOKES[Math.floor(Math.random() * JOKES.length)]);
        break;

      case "tea":
        pushMulti(TEA_ART);
        break;

      case "sudo":
        push(`[sudo] password for austin: ****`);
        push("austin is not in the sudoers file. This incident will be reported.", { err: true });
        break;

      case "matrix":
        push("Wake up, Neo...");
        setMatrixMode(true);
        setTimeout(() => setMatrixMode(false), 4000);
        break;

      case "rm": {
        const flat = trimmed.toLowerCase();
        if (flat.includes("-rf") && flat.includes("/")) {
          push("🔥 nice try");
          break;
        }
        push(`rm: cannot remove '${rest.join(" ") || "?"}': Permission denied`, { err: true });
        break;
      }

      case "hello":
      case "hi":
      case "hey":
        push(`Hey 👋  Type 'help' to see what's around.`);
        break;

      case "ping": {
        const target = rest[0] || "localhost";
        push(`Pinging ${target} with 32 bytes of data:`);
        push(`Reply from ${target}: bytes=32 time=42ms TTL=64`);
        push(`Reply from ${target}: bytes=32 time=39ms TTL=64`);
        break;
      }

      default:
        push(`'${cmd}' is not recognized as an internal or external command.`, { err: true });
        push("Type 'help' for a list of commands.", { muted: true });
    }
  };

  /* ============================================================
   * Input handling
   * ============================================================ */
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = input;
      setInput("");
      if (value.trim()) {
        setHistory((h) => [...h, value]);
      }
      setHistoryIdx(-1);
      runCommand(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIdx < 0 ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx < 0) return;
      const next = historyIdx + 1;
      if (next >= history.length) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  /* ============================================================
   * Render
   * ============================================================ */
  return (
    <div
      ref={containerRef}
      onClick={focusInput}
      style={{
        background: matrixMode ? "#001a00" : "#000",
        height: "100%",
        padding: "8px 12px 12px",
        overflow: "auto",
        fontFamily: "Lucida Console, Courier New, monospace",
        fontSize: "13px",
        color: matrixMode ? "#00ff41" : "#c0c0c0",
        cursor: "text",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.5",
            minHeight: "1.5em",
            color: line.err
              ? "#ff6e6e"
              : line.muted
              ? "#888"
              : line.cmd
              ? "#e0e0e0"
              : matrixMode
              ? "#00ff41"
              : "#c0c0c0",
          }}
        >
          {line.text}
        </div>
      ))}

      {introDone && (
        <div style={{ display: "flex", alignItems: "center", lineHeight: "1.5" }}>
          <span style={{ color: "#e0e0e0", whiteSpace: "pre" }}>C:\Users\Austin&gt; </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "inherit",
              fontFamily: "inherit",
              fontSize: "inherit",
              padding: 0,
              caretColor: matrixMode ? "#00ff41" : "#c0c0c0",
            }}
          />
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}

export default CmdApp;

// src/components/Terminal.jsx

import { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { compileCode } from "../services/compile";

export default function TerminalComponent() {
  const terminalRef = useRef(null);
  const term = useRef(null);
  const [language, setLanguage] = useState("python");
  let userCode = "";

  useEffect(() => {
    term.current = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      theme: {
        background: "#1e1e1e",
        foreground: "#ffffff",
      },
    });

    term.current.open(terminalRef.current);
    term.current.writeln("Codonn Terminal v1.0");
    term.current.write("> ");

    term.current.onKey(async ({ key, domEvent }) => {
      if (domEvent.key === "Enter") {
        term.current.writeln("");

        if (userCode.trim() !== "") {
          if (userCode.trim() === "clear") {
            term.current.clear();
          } else {
            term.current.writeln("Running...");
            const result = await compileCode(userCode, language);
            term.current.writeln(result);
          }
        }

        userCode = "";
        term.current.write("> ");
      } else if (domEvent.key === "Backspace") {
        userCode = userCode.slice(0, -1);
        term.current.write("\b \b");
      } else {
        userCode += key;
        term.current.write(key);
      }
    });

    return () => term.current.dispose();
  }, [language]);

  return (
    <div>
      <label style={{ color: "#fff" }}>Select Language: </label>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginBottom: "1rem" }}
      >
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
      </select>

      <div ref={terminalRef} style={{ height: "300px", width: "100%" }} />
    </div>
  );
}

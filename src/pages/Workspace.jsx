import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import LanguageSelector from "../components/LanguageSelector";
import RunButton from "../components/RunButton";
import { compileCode } from "../services/compile";

export default function Workspace() {
  const location = useLocation();
  const defaultLang = location.state?.language || "python";

  const [language, setLanguage] = useState(defaultLang);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    const result = await compileCode(code, language);
    setOutput(result);
  };

  useEffect(() => {
    // Reset code when language changes
    setCode("");
  }, [language]);

  return (
    <div style={{ padding: "2rem", background: "#121212", minHeight: "100vh", color: "#fff",width:'50vw' }}>
      <h1>🧪 Codonn Workspace</h1>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <CodeEditor code={code} setCode={setCode} language={language} />
      <RunButton onClick={runCode} />
      <h3>Output:</h3>
      <pre style={{ background: "#1e1e1e", padding: "1rem", borderRadius: "5px" }}>{output}</pre>
    </div>
  );
}

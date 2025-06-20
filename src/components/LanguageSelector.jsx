// src/components/LanguageSelector.jsx

export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ marginRight: "1rem", color: "#fff" }}>Select Language:</label>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{
          padding: "0.3rem",
          borderRadius: "5px",
          outline: "none",
        }}
      >
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
      </select>
    </div>
  );
}

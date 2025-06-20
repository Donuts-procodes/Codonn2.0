// src/services/compile.js

const langMap = {
  c: 50,
  cpp: 54,
  python: 71,
  java: 62,
  javascript: 63,
};

export async function compileCode(code, language) {
  const res = await fetch(
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "<YOUR_RAPIDAPI_KEY>",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      body: JSON.stringify({
        language_id: langMap[language],
        source_code: code,
      }),
    }
  );

  const data = await res.json();
  return data.stdout || data.stderr || "No output";
}

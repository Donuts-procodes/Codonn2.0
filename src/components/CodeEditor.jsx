// src/components/CodeEditor.jsx
// import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import Editor from "@monaco-editor/react";
const defaultSnippets = {
  python: 'print("Hello World")',
  c: '#include <stdio.h>\nint main() {\n  printf("Hello World");\n  return 0;\n}',
  cpp: '#include <iostream>\nint main() {\n  std::cout << "Hello World";\n  return 0;\n}',
  java: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}',
  javascript: 'console.log("Hello World");',
};

export default function CodeEditor({ code, setCode, language }) {
  const handleEditorChange = (value) => setCode(value);

  return (

      
      <Editor
        height="90vh"
        theme="vs-dark"
        language={language}
        value={code || defaultSnippets[language]}
        onChange={handleEditorChange}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      /> 
  );
}

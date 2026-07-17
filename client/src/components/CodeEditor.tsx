import { useState } from "react";

interface Props {
  onReview: (language: string, code: string) => void;
}

const CodeEditor = ({ onReview }: Props) => {
  const [language, setLanguage] = useState("Java");
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    if (code.trim() === "") {
      alert("Please enter some code.");
      return;
    }

    onReview(language, code);
  };

  return (
    <div className="card">
      <h2>AI Code Review</h2>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option>Java</option>
        <option>Python</option>
        <option>C</option>
        <option>C++</option>
        <option>JavaScript</option>
        <option>TypeScript</option>
      </select>

      <textarea
        rows={15}
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Review Code
      </button>
    </div>
  );
};

export default CodeEditor;

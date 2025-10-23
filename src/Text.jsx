import { useState, useEffect } from "react";
import Tab from "./Tab";

export default function Text() {
  const [text, setText] = useState(() => {
    const saved = localStorage.getItem("text");
    return saved ? String(saved) : "Нажмите, чтобы изменить тему";
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark"; // true если 'dark', false если 'light'
  });

  const [emoji, setEmoji] = useState(() => {
    const saved = localStorage.getItem("emoji");
    return saved ? String(saved) : "🌑";
  });

  useEffect(() => {
    localStorage.setItem("text", text);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    localStorage.setItem("emoji", emoji);
  }, [text, isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark); // Переключаем тему

    if (emoji === "🌑") setEmoji("☀️");
    else setEmoji("🌑");
  };

  const toggleText = () => {
    if (text === "Нажмите, чтобы изменить тему") {
      setText("Тема изменена");
    } else {
      setText("Нажмите, чтобы изменить тему");
    }
  };

  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      <h1>{text}</h1>
      <button onClick={toggleText}>Поменять текст</button>
      <button onClick={toggleTheme} className="btnGalax">
        {emoji}
      </button>
      <br />
      <br />
      <Tab />
    </div>
  );
}

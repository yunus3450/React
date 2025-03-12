import { useState } from "react";

function Settings() {
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding: "20px" }}>
      <h1>⚙️ Ayarlar</h1>
      <p>Buradan tema renginizi değiştirebilirsiniz.</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Karanlık Moda Geç" : "☀️ Açık Moda Geç"}
      </button>
    </div>
  );
}

export default Settings;

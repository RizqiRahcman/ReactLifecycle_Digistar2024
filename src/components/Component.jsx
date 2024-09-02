import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Component() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.body; // Menggunakan elemen body untuk menerapkan tema
    if (theme === "light") {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    toggleTheme();
  };

  return (
    <div className="card">
      <h1>Hands-on Digistar Day-3</h1>
      <p>
        Current Theme:{" "}
        <strong>{theme.charAt(0).toUpperCase() + theme.slice(1)}</strong>
      </p>
      <button onClick={handleChangeTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}

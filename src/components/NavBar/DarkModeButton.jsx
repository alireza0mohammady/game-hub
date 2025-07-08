import { useEffect, useState } from "react";
import { GiEvilMoon } from "react-icons/gi";
import { FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const [themeMode, setThemeMode] = useState(localStorage.themeMode || "dark");

  if (!localStorage.themeMode) {
    localStorage.themeMode = "dark";
  }

  function toggleThemeMode() {
    if (themeMode === "dark") {
      localStorage.themeMode = "light";
      setThemeMode("light");
    } else {
      localStorage.themeMode = "dark";
      setThemeMode("dark");
    }
  }
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.themeMode === "dark",
    );
  }, [themeMode]);

  return (
    <button
      onClick={toggleThemeMode}
      className={`${themeMode === "light" ? "bg-gray-700 text-gray-300 " : "bg-gray-300 text-gray-700 "}rounded-full flex items-center justify-center text-2xl p-1`}
    >
      {themeMode === "dark" ? (
        <FaSun className="animate-pulse animate-once" />
      ) : (
        <GiEvilMoon className="animate-pulse animate-once" />
      )}
    </button>
  );
};

export default DarkModeButton;

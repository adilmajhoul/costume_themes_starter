import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function getTheme() {
  const theme = localStorage.getItem("theme") || "theme-green";
  return theme;
}

function getColor() {
  const color = localStorage.getItem("color") || "theme-green";
  return color;
}

export const ThemeProvider = ({ children }) => {
  if (typeof window !== "undefined") {
    const [theme, setTheme] = useState(getTheme());
    const [color, setColor] = useState(getColor());

    useEffect(() => {
      console.log("🚀 ~ ThemeProvider ~ theme:", theme);

      localStorage.setItem("theme", theme);
      localStorage.setItem("color", color);

      updateDocumentElementClasses(theme, color);
    }, [theme, color]);

    const updateDocumentElementClasses = (theme, color) => {
      document.documentElement.className = "";
      document.documentElement.classList.add(theme);
      document.documentElement.classList.add(color);
    };

    return <ThemeContext.Provider value={{ theme, setTheme, color, setColor }}>{children}</ThemeContext.Provider>;
  }
  return null;
};

export default ThemeContext;

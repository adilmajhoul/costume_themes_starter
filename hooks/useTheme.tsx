// export function useTheme() {

//   function setTheme(theme) {
//     // set theme to localStorage
//     localStorage.setItem("theme", theme);
//     currentTheme = theme;

//     // and set the global state curentTheme usecontext
//   }

//   return [currentTheme, setTheme];
// }

// useTheme.js
import { useContext } from "react";
import ThemeContext from "../providers/ThemeProvider";

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return [theme, setTheme];
}

export function useColor() {
  const { color, setColor } = useContext(ThemeContext);

  return [color, setColor];
}

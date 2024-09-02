import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const lightModeMediaQuery = window.matchMedia(
    "(prefers-color-scheme: light)"
  );
  const [theme, setTheme] = useState(
    lightModeMediaQuery.matches ? "light" : "dark"
  );

  useEffect(() => {
    const handleChange = (e) => {
      setTheme(e.matches ? "light" : "dark");
    };

    lightModeMediaQuery.addEventListener("change", handleChange);
    return () => {
      lightModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, [lightModeMediaQuery]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

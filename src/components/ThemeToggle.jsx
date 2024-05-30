import React, { useState, useEffect } from "react";
import { Switch } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'; // Import Stack from Material-UI

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Stack direction="row">
        <Switch colorScheme="red" size="md" />hello
      </Stack>

      <button
        style={{ background: "" }}
        className="theme-toggle-button"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
      </button>
    </>
  );
};

export default ThemeToggle;

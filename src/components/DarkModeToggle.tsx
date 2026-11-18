"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Icon } from "./Icon";

const THEME_KEY = "studypal-theme";
const THEME_CHANGE_EVENT = "studypal-theme-change";
let darkModeSnapshot = false;

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getThemeSnapshot() {
  return darkModeSnapshot;
}

function getServerThemeSnapshot() {
  return false;
}

export function DarkModeToggle({ className = "" }: { className?: string }) {
  const darkMode = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = savedTheme ? savedTheme === "dark" : prefersDark;
    darkModeSnapshot = enabled;
    document.documentElement.dataset.theme = enabled ? "dark" : "light";
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  function toggleTheme() {
    const enabled = !darkMode;
    darkModeSnapshot = enabled;
    document.documentElement.dataset.theme = enabled ? "dark" : "light";
    window.localStorage.setItem(THEME_KEY, enabled ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return <button type="button" className={`icon-button theme-toggle ${className}`} onClick={toggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`} aria-pressed={darkMode} title={`Switch to ${darkMode ? "light" : "dark"} mode`}>
    <Icon name={darkMode ? "sun" : "moon"} size={19} />
  </button>;
}

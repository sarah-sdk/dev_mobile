import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ColorSchemePreference = "light" | "dark" | "system";

type ThemeContextValue = {
  preference: ColorSchemePreference;
  setPreference: (scheme: ColorSchemePreference) => void;
  isDark: boolean;
};

const STORAGE_KEY = "@tablemates/color-scheme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [preference, setPreferenceState] =
    useState<ColorSchemePreference>("dark");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored === "light" || stored === "dark" || stored === "system") {
        setPreferenceState(stored);
      }
    });
  }, []);

  const setPreference = useCallback((scheme: ColorSchemePreference) => {
    setPreferenceState(scheme);
    AsyncStorage.setItem(STORAGE_KEY, scheme);
  }, []);

  const isDark =
    preference === "system"
      ? systemScheme !== "light"
      : preference === "dark";

  return (
    <ThemeContext.Provider value={{ preference, setPreference, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppTheme must be used within AppThemeProvider");
  }
  return context;
}
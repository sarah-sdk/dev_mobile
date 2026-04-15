import { createTheme } from "@shopify/restyle";

export const FONT_DISPLAY_BOLD = "PlayfairDisplay_700Bold";

const darkPalette = {
  black: "#010101",
  cardDark: "#121212",
  surfaceElevated: "#1E1E1E",
  borderDark: "#272729",
  borderSubtle: "#2C2C2E",
  textLight: "#E5E5E7",
  textSecondary: "#A0A0A0",
  textTertiary: "#6C6C70",
  iconTintWarm: "rgba(255, 149, 0, 0.22)",
  iconTintCool: "rgba(175, 82, 222, 0.22)",
  iconGlyphWarm: "#FFB340",
  iconGlyphCool: "#C77DFF",
  badgeBg: "rgba(255, 255, 255, 0.06)",
  badgeBorder: "rgba(255, 149, 0, 0.55)",
  ctaCircle: "#FFFFFF",
  ctaGlyph: "#010101",
  red: "rgb(255, 45, 85)",
  notification: "rgb(255, 69, 58)",
  white: "#FFFFFF",
  transparent: "transparent",
};

const darkTheme = createTheme({
  colors: {
    mainBackground: darkPalette.black,
    cardBackground: darkPalette.cardDark,
    surfaceElevated: darkPalette.surfaceElevated,
    border: darkPalette.borderDark,
    borderSubtle: darkPalette.borderSubtle,
    textPrimary: darkPalette.textLight,
    textSecondary: darkPalette.textSecondary,
    textTertiary: darkPalette.textTertiary,
    primary: darkPalette.red,
    notification: darkPalette.notification,
    white: darkPalette.white,
    transparent: darkPalette.transparent,
    iconTintWarm: darkPalette.iconTintWarm,
    iconTintCool: darkPalette.iconTintCool,
    iconGlyphWarm: darkPalette.iconGlyphWarm,
    iconGlyphCool: darkPalette.iconGlyphCool,
    badgeBg: darkPalette.badgeBg,
    badgeBorder: darkPalette.badgeBorder,
    ctaCircle: darkPalette.ctaCircle,
    ctaGlyph: darkPalette.ctaGlyph,
  },
  spacing: {}
});

export type Theme = typeof darkTheme;

export const lightTheme: Theme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    mainBackground: "#F2F2F7",
    cardBackground: "#FFFFFF",
    surfaceElevated: "#FFFFFF",
    border: "#C6C6C8",
    borderSubtle: "#E5E5EA",
    textPrimary: "#1C1C1E",
    textSecondary: "#636366",
    textTertiary: "#AEAEB2",
    iconTintWarm: "rgba(255, 149, 0, 0.12)",
    iconTintCool: "rgba(175, 82, 222, 0.12)",
    iconGlyphWarm: "#E5950A",
    iconGlyphCool: "#A64BD4",
    badgeBg: "rgba(0, 0, 0, 0.04)",
    ctaCircle: "#1C1C1E",
    ctaGlyph: "#FFFFFF",
  },
};

export { darkTheme };
export default darkTheme;
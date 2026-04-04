export type CustomThemeName =
  | "default"
  | "dark"
  | "ocean"
  | "shadow"
  | "moonlight"
  | "catppuccin";

const themeOrder: CustomThemeName[] = [
  "default",
  "dark",
  "ocean",
  "shadow",
  "moonlight",
  "catppuccin",
];

let currentThemeIndex = 0;
let currentTheme: CustomThemeName = "default";

// Initialize theme from localStorage
function initialize(): void {
  const savedTheme = localStorage.getItem(
    "customThemeStyle",
  ) as CustomThemeName | null;
  if (savedTheme && themeOrder.includes(savedTheme)) {
    currentTheme = savedTheme;
    currentThemeIndex = themeOrder.indexOf(savedTheme);
    applyTheme(currentTheme);
  } else {
    applyTheme("default");
  }
}

// Apply theme by updating body class
function applyTheme(themeName: CustomThemeName): void {
  const body = document.body;
  // Remove all theme classes
  body.classList.remove(
    "theme-default",
    "theme-dark",
    "theme-ocean",
    "theme-shadow",
    "theme-moonlight",
    "theme-catppuccin",
  );

  // Add new theme class
  body.classList.add(`theme-${themeName}`);

  currentTheme = themeName;
  localStorage.setItem("customThemeStyle", themeName);

  console.debug(`Theme applied: ${themeName}`);
}

// Cycle to next theme
export function cycleTheme(): CustomThemeName {
  currentThemeIndex = (currentThemeIndex + 1) % themeOrder.length;
  const nextTheme = themeOrder[currentThemeIndex];
  applyTheme(nextTheme);
  return nextTheme;
}

// Get current theme name
export function getCurrentTheme(): CustomThemeName {
  return currentTheme;
}

// Get theme display name
export function getThemeDisplayName(themeName: CustomThemeName): string {
  const displayNames: Record<CustomThemeName, string> = {
    default: "White",
    dark: "Dark",
    ocean: "Ocean",
    shadow: "Shadow",
    moonlight: "Moonlight",
    catppuccin: "Catppuccin",
  };
  return displayNames[themeName] || themeName;
}

// Get all available themes
export function getAllThemes(): CustomThemeName[] {
  return [...themeOrder];
}

// Set specific theme
export function setTheme(themeName: CustomThemeName): void {
  if (themeOrder.includes(themeName)) {
    currentThemeIndex = themeOrder.indexOf(themeName);
    applyTheme(themeName);
  }
}

// Initialize on load
if (typeof window !== "undefined") {
  initialize();
}

export default {
  cycleTheme,
  getCurrentTheme,
  getThemeDisplayName,
  getAllThemes,
  setTheme,
};

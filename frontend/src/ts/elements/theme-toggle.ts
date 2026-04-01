import * as ThemeCycler from "../controllers/theme-cycler";

let themeToggleButton: HTMLButtonElement | null = null;

export function init(): void {
  themeToggleButton = document.querySelector("#themeToggleButton");

  if (themeToggleButton === null) {
    console.warn("Theme toggle button not found");
    return;
  }

  themeToggleButton.addEventListener("click", handleThemeToggle);

  // Add keyboard support
  themeToggleButton.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleThemeToggle();
    }
  });

  // Set initial theme indicator
  updateThemeIndicator();

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("customThemeStyle");
  if (savedTheme) {
    ThemeCycler.setTheme(savedTheme as ThemeCycler.CustomThemeName);
    updateThemeIndicator();
  }
}

function handleThemeToggle(): void {
  const newTheme = ThemeCycler.cycleTheme();
  updateThemeIndicator();
  showThemeToast(newTheme);
}

function updateThemeIndicator(): void {
  if (themeToggleButton === null) return;

  const currentTheme = ThemeCycler.getCurrentTheme();
  const displayName = ThemeCycler.getThemeDisplayName(currentTheme);

  // Update button title
  themeToggleButton.setAttribute("data-theme-name", displayName);
  themeToggleButton.setAttribute("title", `Theme: ${displayName} (click to cycle)`);

  // Update or create theme indicator dot
  let indicator = themeToggleButton.querySelector(".theme-indicator");
  if (indicator === null) {
    indicator = document.createElement("div");
    indicator.className = "theme-indicator";
    themeToggleButton.appendChild(indicator);
  }

  // Set indicator color based on theme
  const themeColors: Record<ThemeCycler.CustomThemeName, string> = {
    default: "#8c3230",
    dark: "#4a9eff",
    ocean: "#0077b6",
  };

  (indicator as HTMLElement).style.backgroundColor = themeColors[currentTheme];
}

function showThemeToast(themeName: ThemeCycler.CustomThemeName): void {
  // Remove any existing toast
  const existingToast = document.querySelector(".theme-toast");
  if (existingToast !== null) {
    existingToast.remove();
  }

  // Create toast notification
  const toast = document.createElement("div");
  toast.className = "theme-toast";
  toast.textContent = `Theme: ${ThemeCycler.getThemeDisplayName(themeName)}`;

  document.body.appendChild(toast);

  // Remove toast after animation
  setTimeout(() => {
    toast.remove();
  }, 2000);
}

// Auto-initialize when DOM is ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}

export default {
  init,
};

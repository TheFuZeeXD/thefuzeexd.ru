const dark_theme_system = window.matchMedia('(prefers-color-scheme: dark)').matches;
const light_theme_system = window.matchMedia('(prefers-color-scheme: light)').matches;
const not_theme_system = window.matchMedia('(prefers-color-scheme: no-preference)').matches;

let defaultTheme;
if (dark_theme_system == true) {
    if (!localStorage.getItem("Theme-color")) { localStorage.setItem("Theme-color", "Hight"); }
    defaultTheme = "Dark";
} else if (light_theme_system == true) {
    if (!localStorage.getItem("Theme-color")) { localStorage.setItem("Theme-color", "Light"); }
    defaultTheme = "Light";
} else {
    if (!localStorage.getItem("Theme-color")) { localStorage.setItem("Theme-color", "Light"); }
    defaultTheme = "Light";
}


export const theme = defaultTheme; 

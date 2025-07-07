const dark_theme_system = window.matchMedia('(prefers-color-scheme: dark)').matches;
const light_theme_system = window.matchMedia('(prefers-color-scheme: light)').matches;
const not_theme_system = window.matchMedia('(prefers-color-scheme: no-preference)').matches;

let defaultTheme;
if (dark_theme_system == true) {
    defaultTheme = "Dark";
} else if (light_theme_system == true) {
    defaultTheme = "Light";
} else {
    defaultTheme = "Light";
}

export const theme = defaultTheme; 

export const bgSettings = $state({
    visible: true
});

export const themeSettings = $state({
    isDark: false
});

if (typeof window !== 'undefined') {
    const savedBg = localStorage.getItem("bg-visible");
    if (savedBg !== null) bgSettings.visible = savedBg === "true";

    const savedTheme = localStorage.getItem("color-theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    themeSettings.isDark = isDark;
    applyTheme(isDark);
}

function applyTheme(dark: boolean) {
    if (typeof document === 'undefined') return;
    if (dark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export function toggleBg() {
    bgSettings.visible = !bgSettings.visible;
    localStorage.setItem("bg-visible", String(bgSettings.visible));
}

export function toggleTheme() {
    themeSettings.isDark = !themeSettings.isDark;
    localStorage.setItem("color-theme", themeSettings.isDark ? "dark" : "light");
    applyTheme(themeSettings.isDark);
}
export const bgSettings = $state({
    visible: false
});

export const themeSettings = $state({
    isDark: typeof document !== 'undefined' 
        ? document.documentElement.classList.contains('dark') 
        : false
});

if (typeof window !== 'undefined') {
    const savedBg = localStorage.getItem("bg-visible");
    
    if (savedBg !== null) {
        bgSettings.visible = savedBg === "true";
    } else {
        bgSettings.visible = window.innerWidth >= 768;
    }
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
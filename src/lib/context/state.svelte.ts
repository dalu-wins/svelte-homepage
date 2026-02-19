export const bgSettings = $state({
    visible: true
});

if (typeof window !== 'undefined') {
    const saved = localStorage.getItem("bg-visible");
    if (saved !== null) {
        bgSettings.visible = saved === "true";
    }
}

export function toggleBg() {
    bgSettings.visible = !bgSettings.visible;
    localStorage.setItem("bg-visible", String(bgSettings.visible));
}
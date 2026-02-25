<script>
    import { bgSettings, toggleBg } from "$lib/context/state.svelte";
    import { EyeOutline, EyeSlashOutline } from "flowbite-svelte-icons";
</script>

<button
    onclick={toggleBg}
    class="glass-button inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full border border-gray-200 bg-white/50 hover:bg-gray-100 dark:bg-gray-800/50 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
>
    {#if bgSettings.visible}
        <EyeSlashOutline class="w-4 h-4 me-2" /> Hide FX
    {:else}
        <EyeOutline class="w-4 h-4 me-2" /> Show FX
    {/if}
</button>

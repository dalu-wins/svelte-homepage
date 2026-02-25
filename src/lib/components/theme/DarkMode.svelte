<script lang="ts">
    import { themeSettings, toggleTheme } from "$lib/context/state.svelte";
    import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
</script>

<button
    onclick={toggleTheme}
    class="glass-button p-2 rounded-2xl"
    aria-label="Toggle theme"
>
    {#if themeSettings.isDark}
        <SunSolid class="p-0.2" />
    {:else}
        <MoonSolid class="p-0.5" />
    {/if}
</button>
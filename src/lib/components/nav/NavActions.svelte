<script>
    import DarkMode from "../theme/DarkMode.svelte";

    let { toggleMenu } = $props();
</script>

<div class="flex items-center gap-4 md:order-2">
    <DarkMode />
    <button 
        onclick={toggleMenu} 
        class="md:hidden glass-button p-2 rounded-2xl"
        aria-label="Menü öffnen"
    >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>
</div>
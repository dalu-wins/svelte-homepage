<script lang="ts">
    import { Spinner } from "flowbite-svelte";
    let { src, alt } = $props();
    let imageLoaded = $state(false);

    function checkCache(node: HTMLImageElement) {
        if (node.complete) imageLoaded = true;
    }
</script>

<div class="shrink-0 relative w-48 md:w-64 aspect-square">
    {#if !imageLoaded}
        <div class="absolute inset-0 z-20 flex items-center justify-center bg-(--bg-card) dark:bg-(--bg-card-dark) rounded-2xl drop-shadow-xl">
            <Spinner size="10" color="blue" />
        </div>
    {/if}

    <img
        {src}
        {alt}
        use:checkCache
        onload={() => (imageLoaded = true)}
        class="rounded-2xl object-cover w-full h-full drop-shadow-xl
                ring-6 ring-(--image-ring) dark:ring-(--image-ring-dark)
                transition-opacity duration-500 {imageLoaded ? 'opacity-100' : 'opacity-0'}"
    />
</div>
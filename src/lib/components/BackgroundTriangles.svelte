<script lang="ts">
    import { bgSettings } from "$lib/context/state.svelte";

    export let count = 8;

    function random(seed: number) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    const triangles = Array.from({ length: count }).map((_, i) => {
        const s = i + 42;
        const left = i * (100 / count) + random(s) * (100 / count) * 0.6;
        const dur = 25 + random(s + 1) * 100;
        return {
            left,
            duration: dur,
            delay:
                -(((i * 3) % count) / count + (random(s + 2) - 0.5) * 0.2) *
                dur,
            size: 50 + (left / 100) * 180,
            color: `hsl(${random(s + 3) * 360}, 45%, 60%)`,
            rotation:
                (random(s + 4) > 0.5 ? 1 : -1) * (180 + random(s + 2) * 90),
        };
    });
</script>

{#if bgSettings.visible}
    <div
        class="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
        <div class="absolute right-0 w-1/3 h-full">
            {#each triangles as t}
                <div
                    class="triangle"
                    style="left:{t.left}%; 
                            animation-delay:{t.delay}s; 
                            animation-duration:{t.duration}s; 
                            border-left-width:{t.size}px; 
                            border-right-width:{t.size}px; 
                            border-bottom-width:{t.size * 1.5}px; 
                            border-bottom-color:{t.color}; 
                            filter: drop-shadow(0 0 10px {t.color});
                            --rot:{t.rotation}deg;"
                ></div>
            {/each}
        </div>
    </div>
{/if}

<style>
    .triangle {
        position: absolute;
        bottom: -250px;
        width: 0;
        height: 0;
        border-left: solid transparent;
        border-right: solid transparent;
        border-bottom-style: solid;
        animation: rise linear infinite;
        opacity: 0;
    }
    @keyframes rise {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10%,
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-130vh) rotate(var(--rot));
            opacity: 0;
        }
    }
</style>

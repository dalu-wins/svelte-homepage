<script lang="ts">
    import { curriculum } from "$lib/display/curriculum";
    import CurriculumEntry from "./CurriculumEntry.svelte";
</script>

<div class="rounded-4xl glass drop-shadow-md z-10">
    <div class="rounded-4xl p-8 md:p-12 z-10">
        <ul class="relative border-l-2 border-(--timeline-line) dark:border-(--timeline-line-dark) ml-24 sm:ml-32">
            {#each curriculum as item}
                <CurriculumEntry 
                    title={item.title} 
                    date={item.date}
                    badge={item.type}
                    description={item.description}
                />
            {/each}
        </ul>
    </div>
</div>

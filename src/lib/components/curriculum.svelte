<script>
    import { curriculum } from "$lib/display/curriculum";
    import { Timeline, TimelineItem } from "flowbite-svelte";
</script>

<div
    class="rounded-4xl
        backdrop-blur-md dark:backdrop-blur-2xl
        bg-white/20 dark:bg-black/20
        p-12
        shadow-2xl
        border border-white/20 dark:border-white/3
        ring-1 ring-white/10 dark:ring-white/2"
>
    <Timeline class="custom-timeline">
        {#each curriculum as item}
            <TimelineItem
                title={item.title}
                date={item.date}
                class="custom-timeline-item"
            >
                <p
                    class="text-base font-normal text-(--timeline-description) dark:text-(--timeline-description-dark)"
                >
                    {item.description}
                </p>
            </TimelineItem>
        {/each}
    </Timeline>
</div>

<style>
    :global(.custom-timeline-item time) {
        color: var(--timeline-date) !important;
    }

    :global(.dark .custom-timeline-item time) {
        color: var(--timeline-date-dark) !important;
    }

    :global(.custom-timeline-item h3) {
        color: var(--timeline-title) !important;
    }

    :global(.dark .custom-timeline-item h3) {
        color: var(--timeline-title-dark) !important;
    }

    :global(.custom-timeline) {
        border-color: var(--timeline-line) !important;
    }

    :global(.dark .custom-timeline) {
        border-color: var(--timeline-line-dark) !important;
    }

    :global(.custom-timeline-item .absolute.rounded-full) {
        background-color: var(--timeline-circle) !important;
        border-color: var(--timeline-circle-border) !important;
    }

    :global(.dark .custom-timeline-item .absolute.rounded-full) {
        background-color: var(--timeline-circle-dark) !important;
        border-color: var(--timeline-circle-border-dark) !important;
    }
</style>

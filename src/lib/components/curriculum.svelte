<script>
    import { curriculum } from "$lib/display/curriculum";
    import { Timeline, TimelineItem } from "flowbite-svelte";
</script>

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

    /* Den Kreis (Marker) ansprechen */
    :global(.custom-timeline-item .absolute.rounded-full) {
        background-color: var(--timeline-circle) !important;
        border-color: var(--timeline-circle-border) !important;
    }

    /* Dark Mode */
    :global(.dark .custom-timeline-item .absolute.rounded-full) {
        background-color: var(--timeline-circle-dark) !important;
        border-color: var(--timeline-circle-border-dark) !important;
    }
</style>

<script>
    import { curriculum } from "$lib/display/curriculum";
    import { Timeline, TimelineItem } from "flowbite-svelte";
</script>

<Timeline>
    {#each curriculum as item}
        <TimelineItem title={item.title} date={item.date}>
            <p
                class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            >
                {item.description}
            </p>
        </TimelineItem>
    {/each}
</Timeline>

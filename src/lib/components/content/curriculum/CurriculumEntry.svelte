<script lang="ts">
    let { title, date, badge, description } = $props();

    const badgeStyles: Record<string, string> = {
        education:
            "bg-blue-500/20 text-blue-700 border-blue-500/30 dark:text-blue-300",
        work: "bg-emerald-500/20 text-emerald-700 border-emerald-500/30 dark:text-emerald-300",
        project:
            "bg-purple-500/20 text-purple-700 border-purple-500/30 dark:text-purple-300",
        default: "bg-white/20 text-gray-700 border-white/20 dark:text-gray-300",
    };

    const currentStyle = $derived(
        badge ? badgeStyles[badge.toLowerCase()] || badgeStyles.default : "",
    );
</script>

<li class="relative ml-6 mb-10 last:mb-0">
    <span class="absolute -left-7.75 mt-1.5 h-3 w-3 rounded-full
                 bg-(--timeline-circle) border-(--timeline-circle-border)
                 dark:bg-(--timeline-circle-dark) dark:border-(--timeline-circle-border-dark)
                 z-10">
    </span>

    <h3 class="text-lg font-semibold text-(--timeline-title) dark:text-(--timeline-title-dark)">
        {title}
    </h3>

    <p class="glass-text-secondary">{description}</p>

    <div class="absolute -left-12 top-1.5 -translate-x-full flex flex-col items-end gap-2">
         <time class="text-xs font-mono text-(--timeline-date) dark:text-(--timeline-date-dark)">{date}</time>
         {#if badge}
            <span class="px-2 py-0.5 text-2xs font-bold rounded-full border {currentStyle}">{badge.toUpperCase()}</span>
         {/if}
    </div>
</li>

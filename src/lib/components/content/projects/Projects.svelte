<script>
    import { projects } from "$lib/display/projects";
    import ProjectCard from "./ProjectCard.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 w-full justify-items-center z-10">
    {#each projects as project}
        <ProjectCard {project} />
    {/each}
</div>
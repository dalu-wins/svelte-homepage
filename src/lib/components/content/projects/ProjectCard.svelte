<script lang="ts">
    import MainButton from "./MainButton.svelte";
    import ExtraButton from "./ExtraButton.svelte";

    interface Project {
        name: string;
        description: string;
        icon: string;
        url: string;
        extraButton?: { label: string; url: string; external: boolean };
    }

    let { project }: { project: Project } = $props();
</script>

<div class="relative p-8 flex flex-col items-center text-center md:items-start md:text-left z-20
            glass drop-shadow-md max-w-none rounded-4xl w-full gap-3">

    <div class="text-4xl">{project.icon}</div>

    <h3 class="text-xl font-bold glass-text">{project.name}</h3>
    
    <p class="glass-text-secondary grow mb-4">{project.description}</p>

    <div class="w-full flex flex-col gap-3">
        {#if project.extraButton}
            <ExtraButton 
                href={project.extraButton.url} 
                label={project.extraButton.label} 
                external={project.extraButton.external} 
            />
        {/if}

        <MainButton href={project.url} />
    </div>
</div>
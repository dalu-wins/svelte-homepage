<script>
    import { projects } from "$lib/display/projects";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full justify-items-center z-10">
    {#each projects as project}
        <div class="relative p-8 flex flex-col items-center text-center md:items-start md:text-left z-20
                    glass drop-shadow-md max-w-none rounded-4xl w-full gap-3">

            <div class="text-4xl">{project.icon}</div>

            <h3 class="text-xl font-bold glass-text">
                {project.name}
            </h3>
            
            <p class="glass-text-secondary grow">
                {project.description}
            </p>

            {#if project.extraButton}
                <a
                    href={project.extraButton.url}
                    target={project.extraButton.external ? "_blank" : undefined}
                    rel={project.extraButton.external ? "noopener noreferrer" : undefined}
                    class="w-full glass-button inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg"
                >
                    {project.extraButton.label}
                </a>
            {/if}

            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                class="w-full glass-button-gh inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg"

            >
                GitHub <ArrowRightOutline class="ms-2 h-5 w-5" />
            </a>
        </div>
    {/each}
</div>
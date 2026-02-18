<script>
    import { projects } from "$lib/display/projects";
    import { Card, Badge, Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 w-full justify-items-center mb-6"
>
    {#each projects as project}
        <Card
            class="relative bg-(--bg-card) dark:bg-(--bg-card-dark) p-6 flex flex-col items-center text-center md:items-start md:text-left w-full max-w-sm md:max-w-full border-(--border) dark:border-(--border-dark)"
        >
            {#if project.badge}
                <Badge class="absolute top-3 right-3 bg-(--bg-badge) dark:bg-(--bg-badge-dark) text-(--badge) dark:text-(--badge-dark)">
                    {project.badge}
                </Badge>
            {/if}

            <div class="text-4xl mb-4">{project.icon}</div>

            <h3 class="text-xl font-bold mb-2 text-(--card-title) dark:text-(--card-title-dark)">
                {project.name}
            </h3>
            <p class="text-(--card-text) dark:text-(--card-text-dark) mb-6 grow">
                {project.description}
            </p>

            {#if project.extraButton}
                <Button
                    href={project.extraButton.url}
                    target={project.extraButton.external ? "_blank" : undefined}
                    rel={project.extraButton.external ? "noopener noreferrer" : undefined}
                    color="alternative"
                    class="w-full
                    bg-(--bg-extra-button) dark:bg-(--bg-extra-button-dark
                     text-(--extra-button) dark:text-(--extra-button-dark)
                     border-(--button-border) dark:border-(--button-border-dark)
                     hover:bg-(--extra-button-hover) dark:hover:bg-(--extra-button-hover-dark)
                     focus:ring-0"
                >
                    {project.extraButton.label}
                </Button>
            {/if}

            <Button
                href={project.url}
                class="bg-(--bg-github-button) dark:bg-(--bg-github-button-dark) dark:text-white w-full mt-3"
            >
                GitHub <ArrowRightOutline class="ms-2 h-5 w-5" />
            </Button>
        </Card>
    {/each}
</div>

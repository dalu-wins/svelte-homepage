<script>
    import { projects } from "$lib/display/projects";
    import { Card, Badge, Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 w-full justify-items-center z-10"
>
    {#each projects as project}
        <Card
            class="relative p-8 flex flex-col items-center text-center md:items-start md:text-left z-20
                glass drop-shadow-md max-w-none rounded-4xl"
        >

            <div class="text-4xl mb-2">{project.icon}</div>

            <h3
                class="text-xl font-bold mb-2 text-(--card-title) dark:text-(--card-title-dark) pt-4"
            >
                {project.name}
            </h3>
            <p
                class="text-(--card-text) dark:text-(--card-text-dark) mb-6 grow"
            >
                {project.description}
            </p>

            {#if project.extraButton}
                <Button
                    href={project.extraButton.url}
                    target={project.extraButton.external ? "_blank" : undefined}
                    rel={project.extraButton.external
                        ? "noopener noreferrer"
                        : undefined}
                    class="w-full
                    glass-button"
                >
                    {project.extraButton.label}
                </Button>
            {/if}

            <Button
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                class="bg-(--bg-github-button) dark:bg-(--bg-github-button-dark) dark:text-white w-full mt-3"
            >
                GitHub <ArrowRightOutline class="ms-2 h-5 w-5" />
            </Button>
        </Card>
    {/each}
</div>

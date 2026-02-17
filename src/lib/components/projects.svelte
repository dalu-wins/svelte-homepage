<script>
    import { projects } from "$lib/display/projects";
    import { Card, Badge, Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center"
>
    {#each projects as project}
        <Card
            class="relative p-6 mb-6 flex flex-col items-center text-center md:items-start md:text-left w-full max-w-sm md:max-w-full"
        >
            {#if project.badge}
                <Badge color="purple" class="absolute top-3 right-3">
                    {project.badge}
                </Badge>
            {/if}

            <div class="text-4xl mb-4">{project.icon}</div>

            <h3 class="text-xl font-bold mb-2 dark:text-white">
                {project.name}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6 grow">
                {project.description}
            </p>

            {#if project.extraButton}
                <Button
                    href={project.extraButton.url}
                    color="alternative"
                    class="w-full"
                >
                    {project.extraButton.label}
                </Button>
            {/if}

            <Button
                href={project.url}
                class="bg-(--github-button) dark:bg-(--github-button-dark) dark:text-white w-full mt-3"
            >
                GitHub <ArrowRightOutline class="ms-2 h-5 w-5" />
            </Button>
        </Card>
    {/each}
</div>

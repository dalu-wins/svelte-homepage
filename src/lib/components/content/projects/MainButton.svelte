<script lang="ts">
    import { ArrowRightOutline, GithubSolid } from "flowbite-svelte-icons";
    let { href }: { href: string } = $props();
</script>

<a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class="w-full glass-button-gh inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg"
>
    GitHub <GithubSolid class="ml-2" />
</a>
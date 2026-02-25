<script lang="ts">
    import { ArrowRightOutline } from "flowbite-svelte-icons";
    let { href }: { href: string } = $props();
</script>

<a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class="w-full glass-button-gh inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg"
>
    GitHub <ArrowRightOutline class="ms-2 h-5 w-5" />
</a>
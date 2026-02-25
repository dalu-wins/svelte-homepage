<script lang="ts">
    let { href, label, external = false }: { href: string; label: string; external?: boolean } = $props();
</script>

<a
    {href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    class="w-full glass-button inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg"
>
    {label}
</a>
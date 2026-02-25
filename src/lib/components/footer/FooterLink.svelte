<script>
    let { href, children } = $props();
</script>

<li>
    <a 
        {href} 
        target="_blank" 
        rel="noopener noreferrer"
        class="hover:underline glass-text-secondary"
    >
        {@render children()}
    </a>
</li>
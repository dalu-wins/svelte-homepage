<script>
    import { page } from '$app/state'; // Svelte 5 Syntax
    let { menuOpen = false } = $props();

    const links = [
        { name: 'Portfolio', href: '/' },
        { name: 'Curriculum', href: '/curriculum' }
    ];
</script>

<div class="{menuOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:mr-3">
    <ul class="flex flex-col font-medium md:flex-row md:space-x-8 md:m-0 md:p-0 md:items-center md:h-full">
        {#each links as link}
            {@const isActive = page.url.pathname === link.href}
            <li class="flex items-center">
                <a
                    href={link.href}
                    class="block py-2 rounded md:p-0 
                           {isActive 
                             ? 'text-black dark:text-white' 
                             : 'text-(--secondary-text) dark:text-(--secondary-text-dark)'}
                             hover:underline"
                    aria-current={isActive ? 'page' : undefined}
                >
                    {link.name}
                </a>
            </li>
        {/each}
    </ul>
</div>
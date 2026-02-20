<script>
    import { page } from '$app/state'; // Svelte 5 Syntax
    let { menuOpen = false } = $props();

    const links = [
        { name: 'Portfolio', href: '/' },
        { name: 'Curriculum', href: '/curriculum/' }
    ];
</script>

<div class="{menuOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:h-full md:w-auto md:order-1 md:ml-auto md:mr-8">
    <ul class="flex flex-col p-4 font-medium md:flex-row md:space-x-8 md:m-0 md:p-0 md:items-center md:h-full">
        {#each links as link}
            {@const isActive = page.url.pathname === link.href}
            <li class="flex items-center">
                <a
                    href={link.href}
                    class="block py-2 px-3 rounded md:p-0 transition-colors 
                           {isActive 
                             ? 'text-black dark:text-white' 
                             : 'text-(--secondary-text) dark:text-(--secondary-text-dark)'}
                           hover:text-black hover:dark:text-white 
                           hover:bg-(--bg-nav-hover) md:hover:bg-transparent"
                    aria-current={isActive ? 'page' : undefined}
                >
                    {link.name}
                </a>
            </li>
        {/each}
    </ul>
</div>
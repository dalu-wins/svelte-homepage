<script>
    import NavBrand from './NavBrand.svelte';
    import NavActions from './NavActions.svelte';
    import NavLinks from './NavLinks.svelte';

    let menuOpen = $state(false);
    const toggleMenu = () => (menuOpen = !menuOpen);
</script>

<nav class="w-full z-20 glass drop-shadow-md rounded-4xl px-6 py-4">
    <div class="flex flex-wrap items-center justify-between gap-6">
        
        <NavBrand />

        <div class="flex-1"></div>

        <NavActions {toggleMenu} />

        <div class="{menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1">
            <NavLinks {menuOpen} />
        </div>
        
    </div>
</nav>
<script>
	import { Navbar, NavBrand, DarkMode } from 'flowbite-svelte';
    import NavLinks from './navLinks.svelte';
    import Hamburger from './Hamburger.svelte';

	let menuOpen = $state(false);
	const toggleMenu = () => (menuOpen = !menuOpen);
</script>

<Navbar
	class="w-full z-20 glass rounded-4xl"
>
	<NavBrand href="/">
		<span class="self-center text-xl font-semibold whitespace-nowrap m-4 text-(--navbar) dark:text-(--navbar-dark)">
			homepage
		</span>
	</NavBrand>

	<div class="flex items-center gap-2 md:order-2">
		<DarkMode
			class="glass-button mr-0 md:mr-6"
		/>
		<Hamburger onclick={toggleMenu} />
	</div>

	<NavLinks {menuOpen} />
</Navbar>
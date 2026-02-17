<script>
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, DarkMode } from "flowbite-svelte";

</script>

<Navbar class="px-6">
    <NavBrand href="/">
        <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >homepage</span
        >
    </NavBrand>
    <div class="flex items-center gap-2 md:order-2">
        <NavHamburger />
        <NavUl class="md:flex-row md:gap-6 px-2">
            <NavLi href="#profile">Profile</NavLi>
            <NavLi href="#projects">Projects</NavLi>
            <NavLi href="#curriculum">Curriculum</NavLi>
        </NavUl>
        <DarkMode />
    </div>
</Navbar>
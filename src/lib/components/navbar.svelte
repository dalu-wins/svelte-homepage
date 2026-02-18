<script>
    import {
        Navbar,
        NavBrand,
        NavHamburger,
        NavUl,
        NavLi,
        DarkMode,
    } from "flowbite-svelte";
</script>

<Navbar
    class="p-6 text-(--navbar) dark:text-(--navbar-dark) bg-(--bg-navbar) dark:bg-(--bg-navbar-dark)"
>
    <NavBrand href="/">
        <span class="self-center text-xl font-semibold whitespace-nowrap"
            >homepage</span
        >
    </NavBrand>
    <div class="flex items-center gap-2 md:order-2">
        <NavHamburger
            class="hover:bg-(--bg-nav-hover) dark:hover:bg-(--bg-nav-hover-dark)"
        />
        <NavUl
            class="md:flex-row md:gap-6 px-2"
            ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium 
                    bg-(--bg-hamburger) dark:bg-(--bg-hamburger-dark) 
                    md:bg-transparent md:dark:bg-transparent
                    border-(--hamburger-border) dark:border-(--hamburger-border-dark) md:border-0"
        >
            <NavLi
                href="#profile"
                nonActiveClass="block py-2 pr-4 pl-3 text-gray-700 hover:bg-(--bg-nav-hover) md:hover:bg-transparent dark:text-gray-400 dark:hover:bg-(--bg-nav-hover-dark) md:dark:hover:bg-transparent"
                >Profile</NavLi
            >
            <NavLi
                href="#projects"
                nonActiveClass="block py-2 pr-4 pl-3 text-gray-700 hover:bg-(--bg-nav-hover) md:hover:bg-transparent dark:text-gray-400 dark:hover:bg-(--bg-nav-hover-dark) md:dark:hover:bg-transparent"
                >Projects</NavLi
            >
            <NavLi
                href="#curriculum"
                nonActiveClass="block py-2 pr-4 pl-3 text-gray-700 hover:bg-(--bg-nav-hover) md:hover:bg-transparent dark:text-gray-400 dark:hover:bg-(--bg-nav-hover-dark) md:dark:hover:bg-transparent"
                >Curriculum</NavLi
            >
        </NavUl>
        <DarkMode
            class="hover:bg-(--bg-nav-hover) dark:hover:bg-(--bg-nav-hover-dark)"
        />
    </div>
</Navbar>

<style>
    :global(.custom-nav-ul div) {
        background-color: var(--bg-hamburger-div) !important;
    }

    :global(.dark .custom-nav-ul div) {
        background-color: var(--bg-hamburger-div-dark) !important;
    }
</style>

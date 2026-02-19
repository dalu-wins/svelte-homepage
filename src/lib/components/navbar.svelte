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

<div class="p-2">
    <Navbar
        class="text-(--navbar) dark:text-(--navbar-dark)
        backdrop-blur-md dark:backdrop-blur-2xl
        border border-white/20 dark:border-white/3
        ring-1 ring-white/10 dark:ring-white/2
        bg-white/20 dark:bg-black/20
        shadow-md
        z-20
        max-md:backdrop-blur-none dark:max-md:backdrop-blur-none
        backdrop-saturate-150 dark:backdrop-saturate-150
        rounded-2xl"
    >
        <NavBrand href="/">
            <span
                class="self-center text-xl font-semibold whitespace-nowrap m-4"
                >homepage</span
            >
        </NavBrand>
        <div class="flex items-center gap-2 md:order-2">
            <NavHamburger
                class="hover:bg-(--bg-nav-hover) dark:hover:bg-(--bg-nav-hover-dark)"
            />
            <NavUl
                class="md:flex-row px-2 custom-nav-ul"
                transition={() => ({})}
                ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium 
            max-md:backdrop-blur-2xl max-md:dark:backdrop-blur-2xl
            max-md:border max-md:border-white/5 max-md:dark:border-white/10
            max-md:backdrop-saturate-150 dark:max-md:backdrop-saturate-150 
            max-md:bg-white/70 max-md:dark:bg-black/60"
            >
                <NavLi
                    href="/"
                    nonActiveClass="block
                py-2 pr-4 pl-3
                hover:bg-(--bg-nav-hover) md:hover:bg-transparent
                dark:hover:bg-(--bg-nav-hover-dark) md:dark:hover:bg-transparent
                hover:text-black hover:dark:text-white
                text-(--secondary-text) dark:text-(--secondary-text-dark)"
                    >Portfolio</NavLi
                >
                <NavLi
                    href="/curriculum"
                    nonActiveClass="block
                py-2 pr-4 pl-3
                text-(--secondary-text) dark:text-(--secondary-text-dark)
                hover:bg-(--bg-nav-hover) md:hover:bg-transparent
                dark:hover:bg-(--bg-nav-hover-dark) md:dark:hover:bg-transparent
                hover:text-black hover:dark:text-white">Curriculum</NavLi
                >
            </NavUl>
            <DarkMode
                class="hover:bg-(--bg-nav-hover) dark:hover:bg-(--bg-nav-hover-dark) hover:text-black dark:hover:text-white text-(--secondary-text) dark:text-(--secondary-text-dark)"
            />
        </div>
    </Navbar>
</div>

 <script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode, ImagePlaceholder, Skeleton, TextPlaceholder } from "flowbite-svelte";
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
</script>

<Navbar>
    <NavBrand href="/">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Daniil Wins</span>
    </NavBrand>
    <div class="flex items-center gap-2 md:order-2">
        <NavHamburger />
        <NavUl class="md:flex-row md:gap-6 px-2">
            <NavLi href="/">Profile</NavLi>
            <NavLi href="/projects/">Projects</NavLi>
            <NavLi href="/curriculum/">Curriculum</NavLi>
            <NavLi href="/contact/">Contact</NavLi>
        </NavUl>
        <DarkMode />
    </div>
</Navbar>

<Footer class="absolute start-0 bottom-0 z-20 w-full border-t border-gray-300 bg-gray-200 p-4 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 dark:bg-gray-800 rounded-b-0">
    <FooterCopyright href="/" by="Daniil Wins" year={2026} />
    <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
        <FooterLink href="/">Profile</FooterLink>
        <FooterLink href="/projects/" class="ms-4 md:ms-6">Projects</FooterLink>
        <FooterLink href="/curriculum/" class="ms-4 md:ms-6">Curriculum</FooterLink>
        <FooterLink href="/contact/" class="ms-4 md:ms-6">Contact</FooterLink>
    </FooterLinkGroup>
</Footer>
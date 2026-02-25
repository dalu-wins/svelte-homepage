<script>
    import FooterLink from "./FooterLink.svelte";
    import BackgroundToggle from "../background/BackgroundToggle.svelte";
</script>

<footer class="relative z-20 mt-auto glass drop-shadow-md rounded-4xl p-4 md:flex md:items-center md:justify-between px-6 py-4">
    <span class="text-sm sm:text-center glass-text-secondary">
        © 2026 <a href="/" class="hover:underline">Daniil Wins</a>
    </span>

    <ul class="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0 space-x-4 md:space-x-6">
        <FooterLink href="https://github.com/dalu-wins/svelte-homepage">
            sourcecode
        </FooterLink>
        
        <FooterLink href="https://github.com/dalu-wins/svelte-homepage/blob/main/LICENSE">
            licensing
        </FooterLink>

        <li><BackgroundToggle /></li>
    </ul>
</footer>
<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
</script>

<Footer class="m-3 mt-20 bg-gray-100">
    <FooterCopyright href="/" by="Daniil Wins" year={2026} />
    <FooterLinkGroup
        class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400"
    >
        <FooterLink href="https://github.com/dalu-wins/svelte-homepage">
            sourcecode
        </FooterLink>
        <FooterLink
            href="https://github.com/dalu-wins/svelte-homepage/blob/main/LICENSE"
        >
            licensing
        </FooterLink>
        <FooterLink href="#profile">contact</FooterLink>
    </FooterLinkGroup>
</Footer>
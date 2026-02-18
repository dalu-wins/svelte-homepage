<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
</script>

<Footer class="m-3 mt-20 bg-(--bg-footer) dark:bg-(--bg-footer-dark) custom-footer">
    <FooterCopyright href="/" by="Daniil Wins" year={2026}/>
    <FooterLinkGroup
        class="mt-3 flex flex-wrap items-center text-sm sm:mt-0"
    >
        <FooterLink
            href="https://github.com/dalu-wins/svelte-homepage"
            target="_blank"
            rel="noopener noreferrer"
        >
            sourcecode
        </FooterLink>
        <FooterLink
            href="https://github.com/dalu-wins/svelte-homepage/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
        >
            licensing
        </FooterLink>
        <FooterLink href="#profile">contact</FooterLink>
    </FooterLinkGroup>
</Footer>

<style>
    :global(.custom-footer span) {
        color: var(--footer) !important;
    }

    :global(.custom-footer a) {
        color: var(--footer-links) !important;
    }

    :global(.dark .custom-footer span) {
        color: var(--footer-dark) !important;
    }

    :global(.dark .custom-footer a) {
        color: var(--footer-links-dark) !important;
    }
</style>
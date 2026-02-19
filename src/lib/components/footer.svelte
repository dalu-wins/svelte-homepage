<script>
    import { bgSettings, toggleBg } from "$lib/context/state.svelte";
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterLink,
        Button,
    } from "flowbite-svelte";
    import { EyeOutline, EyeSlashOutline } from "flowbite-svelte-icons";
</script>

<Footer
    class="relative
        z-20
        mt-auto
        glass
        drop-shadow-md
        rounded-4xl"
>
    <FooterCopyright href="/" by="Daniil Wins" year={2026} />
    <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm sm:mt-0">
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
        <Button
            pill
            color="alternative"
            size="xs"
            onclick={toggleBg}
            class="
            focus:ring-0 dark:focus:ring-0
            text-(--secondary-text) dark:text-(--secondary-text-dark)
            hover:text-(--primary-text) dark:hover:text-(--primary-text-dark)
            glass
            drop-shadow-md"
        >
            {#if bgSettings.visible}
                <EyeSlashOutline class="w-4 h-4 me-2" /> Hide FX
            {:else}
                <EyeOutline class="w-4 h-4 me-2" /> Show FX
            {/if}
        </Button>
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

    :global(.dark .custom-footer a:hover) {
        color: var(--footer-links-hover-dark) !important;
    }
</style>

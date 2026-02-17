<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode, ImagePlaceholder, Skeleton, TextPlaceholder, Button, Timeline, TimelineItem, Card } from "flowbite-svelte";
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Navbar>
    <NavBrand href="/">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Daniil Wins</span>
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

<div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold dark:text-white pt-10 mb-10" id="profile">Profile</h1>
    <div>
        <TextPlaceholder class="mb-6" />
        <Button color="alternative">Learn more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
    </div>

    <h1 class="text-4xl font-bold dark:text-white pt-10 mb-10" id="projects">Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card class="p-6 mb-6">
            <ImagePlaceholder size="sm" class="mb-4" />
            <TextPlaceholder class="mb-2" />
            <Button class="bg-[var(--github-button)] mt-4">GitHub<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
        </Card>
        <Card class="p-6 mb-6">
            <ImagePlaceholder size="sm" class="mb-4" />
            <TextPlaceholder class="mb-2" />
            <Button class="bg-[var(--github-button)] mt-4">GitHub<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
        </Card>
        <Card class="p-6 mb-6">
            <ImagePlaceholder size="sm" class="mb-4" />
            <TextPlaceholder class="mb-2" />
            <Button class="bg-[var(--github-button)] mt-4">GitHub<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
        </Card>
                <Card class="p-6 mb-6">
            <ImagePlaceholder size="sm" class="mb-4" />
            <TextPlaceholder class="mb-2" />
            <Button class="bg-[var(--github-button)] mt-4">GitHub<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
        </Card>
    </div>

    <h1 class="text-4xl font-bold pt-10 mb-10 dark:text-white" id="curriculum">Curriculum</h1>
    <Timeline>
        <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
            </p>
            <Button color="alternative">Learn more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
        </TimelineItem>
        <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
            </p>
        </TimelineItem>
        <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </TimelineItem>
    </Timeline>
</div>

<Footer class="m-5 mt-16 bg-gray-100">
<FooterCopyright href="/" by="Daniil Wins" year={2026} />
<FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
    <FooterLink href="https://github.com/dalu-wins/svelte-homepage">Sourcecode</FooterLink>
    <FooterLink href="https://github.com/dalu-wins/svelte-homepage/blob/main/LICENSE">Licensing</FooterLink>
    <FooterLink href="#profile">Contact</FooterLink>
</FooterLinkGroup>
</Footer>
<script lang="ts">
    import { curriculum } from "$lib/display/curriculum";
    import { profile } from "$lib/display/profile";
    import { projects } from "$lib/display/projects";
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        DarkMode,
        Button,
        Timeline,
        TimelineItem,
        Card,
        Badge,
        Avatar,
        List,
        Li,
    } from "flowbite-svelte";
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterLink,
    } from "flowbite-svelte";
    import { ArrowRightOutline, MailBoxOutline, MessagesOutline } from "flowbite-svelte-icons";
</script>

<Navbar>
    <NavBrand href="/">
        <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">homepage</span>
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
    <div class="flex flex-col md:flex-row justify-center items-stretch gap-12 pt-10 mb-12 w-full" id="profile">
        <div class="flex-shrink-0 flex items-center justify-center">
            <img 
                src={profile.avatarUrl} 
                alt={profile.username}
                class="rounded-2xl object-cover w-48 md:w-auto md:h-full max-h-[300px] ring-4 ring-gray-100 dark:ring-gray-700 shadow-xl"
            />
        </div>

        <div class="max-w-2xl flex flex-col justify-between py-2 space-y-6 text-center md:text-left">
            <div>
                <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">{profile.username}</h2>
                <p class="text-lg font-light text-gray-500 dark:text-gray-400 leading-relaxed">
                    {profile.description}
                </p>
            </div>

            <div class="flex justify-center md:justify-start">
                <List tag="ul" class="space-y-3 text-left">
                    {#each profile.contacts as contact}
                        <Li class="flex items-center text-gray-600 dark:text-gray-300">
                            {#if contact.type === 'mail'}
                                <MailBoxOutline class="w-5 h-5 me-3 text-primary-600" />
                            {:else if contact.type === 'discord'}
                                <MessagesOutline class="w-5 h-5 me-3 text-primary-600" />
                            {/if}
                            
                            <span class="w-20 text-primary-600 font-medium">{contact.label}</span>
                            <a href={contact.href} class="hover:underline text-blue-600 dark:text-blue-500">
                                {contact.value}
                            </a>
                        </Li>
                    {/each}
                </List>
            </div>
        </div>
    </div>

    <h1 class="text-4xl font-bold dark:text-white pt-10 mb-10" id="projects">
        Projects
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each projects as project}
            <Card class="relative p-6 mb-6">
                {#if project.badge}
                    <Badge color="purple" class="absolute top-3 right-3">
                        {project.badge}
                    </Badge>
                {/if}
                <div class="text-4xl mb-4">{project.icon}</div>
                <h3 class="text-xl font-bold mb-2 dark:text-white">
                    {project.name}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                </p>
                {#if project.extraButton}
                    <Button
                        href={project.extraButton.url}
                        color="alternative"
                        class="mb-4"
                    >
                        {project.extraButton.label}
                    </Button>
                {/if}
                <Button href={project.url} class="bg-[var(--github-button)] dark:bg-[var(--github-button-dark)] dark:text-white mt-auto">
                    GitHub <ArrowRightOutline class="ms-2 h-5 w-5" />
                </Button>
            </Card>
        {/each}
    </div>

    <h1 class="text-4xl font-bold pt-10 mb-10 dark:text-white" id="curriculum">
        Curriculum
    </h1>
    <Timeline>
        {#each curriculum as item}
            <TimelineItem title={item.title} date={item.date}>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {item.description}
                </p>
            </TimelineItem>
        {/each}
    </Timeline>
</div>

<Footer class="m-3 mt-16 bg-gray-100">
    <FooterCopyright href="/" by="Daniil Wins" year={2026} />
    <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
        <FooterLink href="https://github.com/dalu-wins/svelte-homepage">
            sourcecode
        </FooterLink>
        <FooterLink href="https://github.com/dalu-wins/svelte-homepage/blob/main/LICENSE">
            licensing
        </FooterLink>
        <FooterLink href="#profile">
            contact
        </FooterLink>
    </FooterLinkGroup>
</Footer>

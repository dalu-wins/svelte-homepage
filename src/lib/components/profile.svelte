<script lang="ts">
    import { profile } from "$lib/display/profile";
    import { Spinner, List, Li } from "flowbite-svelte";
    import {
        MailBoxOutline,
        MessagesOutline,
        CodeOutline,
    } from "flowbite-svelte-icons";

    let imageLoaded = false;
    function checkCache(node: HTMLImageElement) {
        if (node.complete) {
            imageLoaded = true;
        }
    }
</script>

<div
    class="flex flex-col md:flex-row justify-center gap-12 pt-20 pb-20 w-full items-center"
    id="profile"
>
    <div class="shrink-0 relative w-48 md:w-64 aspect-square">
        {#if !imageLoaded}
            <div
                class="absolute inset-0 z-20 flex items-center justify-center bg-(--bg-card) dark:bg-(--bg-card-dark) rounded-2xl ring-4 ring-(--ring) dark:ring-(--ring-dark) shadow-xl"
            >
                <Spinner size="10" color="blue" />
            </div>
        {/if}

        <img
            src={profile.avatarUrl}
            alt={profile.username}
            use:checkCache
            on:load={() => (imageLoaded = true)}
            class="rounded-2xl object-cover w-full h-full ring-4 bg-(--bg-card) dark:bg-(--bg-card-dark) ring-(--ring) dark:ring-(--ring-dark) shadow-xl transition-opacity duration-500 {imageLoaded
                ? 'opacity-100'
                : 'opacity-0'}"
        />
    </div>

    <div
        class="max-w-2xl flex flex-col justify-between py-2 space-y-6 text-center md:text-left"
    >
        <div>
            <h2
                class="text-3xl font-extrabold text-(--primary-text) dark:text-(--primary-text-dark) mb-3"
            >
                {profile.username}
            </h2>
            <p
                class="text-lg font-light text-(--secondary-text) dark:text-(--secondary-text-dark) leading-relaxed"
            >
                {profile.description}
            </p>
        </div>

        <div class="flex justify-center md:justify-start">
            <List tag="ul" class="space-y-3 text-left">
                {#each profile.contacts as contact}
                    <Li
                        class="flex items-center text-gray-600 dark:text-gray-300"
                    >
                        {#if contact.type === "mail"}
                            <MailBoxOutline
                                class="w-5 h-5 me-3 text-primary-600"
                            />
                        {:else if contact.type === "discord"}
                            <MessagesOutline
                                class="w-5 h-5 me-3 text-primary-600"
                            />
                        {:else if contact.type === "github"}
                            <CodeOutline
                                class="w-5 h-5 me-3 text-primary-600"
                            />
                        {/if}

                        <span class="w-20 text-primary-600 font-medium"
                            >{contact.label}</span
                        >
                        <a
                            href={contact.href}
                            class="hover:underline text-blue-600 dark:text-blue-500"
                        >
                            {contact.value}
                        </a>
                    </Li>
                {/each}
            </List>
        </div>
    </div>
</div>

<script lang="ts">
    import { MailBoxOutline, MessagesOutline, CodeOutline } from "flowbite-svelte-icons";
    let { contact } = $props();
</script>

<li class="flex items-center text-gray-600 dark:text-gray-300">
    {#if contact.type === "mail"}
        <MailBoxOutline class="w-5 h-5 me-3 text-primary-600" />
    {:else if contact.type === "discord"}
        <MessagesOutline class="w-5 h-5 me-3 text-primary-600" />
    {:else if contact.type === "github"}
        <CodeOutline class="w-5 h-5 me-3 text-primary-600" />
    {/if}

    <span class="w-20 text-primary-600 font-medium">{contact.label}</span>
    <a href={contact.href} target="_blank" rel="noopener noreferrer" class="hover:underline text-blue-700 dark:text-blue-300">
        {contact.value}
    </a>
</li>
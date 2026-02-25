<script lang="ts">
    import { profile } from "$lib/display/profile";
    import ProfileImage from "./ProfileImage.svelte";
    import ProfileContact from "./ProfileContact.svelte";
</script>

<div class="flex flex-col md:flex-row justify-center gap-6 md:gap-12 w-full items-center lg:justify-start z-10 glass drop-shadow-md px-6 py-6 max-md:py-16 rounded-4xl">
    
    <ProfileImage src={profile.avatarUrl} alt={profile.username} />

    <div class="max-w-2xl flex flex-col justify-between py-2 space-y-6 text-center md:text-left">
        <div class="flex flex-col gap-4"> 
            <h2 class="text-2xl font-bold glass-text">{profile.username}</h2>
            <p class="glass-text-secondary">{profile.description}</p>
        </div>

        <div class="flex justify-center md:justify-start">
            <ul class="space-y-3 text-left">
                {#each profile.contacts as contact}
                    <ProfileContact {contact} />
                {/each}
            </ul>
        </div>
    </div>
</div>
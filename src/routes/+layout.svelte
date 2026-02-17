<script lang="ts">
    import {profile} from "$lib/display/profile";
    import "../app.css";
    let { children } = $props();
</script>

<svelte:head>
    <title>homepage</title>
    <link rel="icon" href={profile.avatarUrl} />
</svelte:head>

{@render children()} 
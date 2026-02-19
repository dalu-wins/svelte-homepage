<script lang="ts">
    import {profile} from "$lib/display/profile";
    import "../app.css";
    import "$lib/style/glass.css";
    let { children } = $props();
</script>

<svelte:head>
    <title>homepage</title>
    <link rel="icon" href={profile.avatarUrl} />
    <meta 
        name="description" 
        content="Portfolio of dalu-wins - Computer science student at KIT with a strong interest in mobile and web development." 
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="homepage" />
    <meta property="og:description" content="Portfolio of dalu-wins - Computer science student at KIT" />
    <meta property="og:image" content={profile.avatarUrl} />
</svelte:head>

{@render children()} 
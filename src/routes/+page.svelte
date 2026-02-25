<script lang="ts">
    import Profile from "$lib/components/content/profile/Profile.svelte";
    import Projects from "$lib/components/content/projects/Projects.svelte";
    import Navbar from "$lib/components/nav/Navbar.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import BackgroundTriangles from "$lib/components/background/BackgroundTriangles.svelte";
</script>

<BackgroundTriangles count={10} />

<div class="flex flex-col min-h-screen relative overflow-hidden container mx-auto grow gap-2 p-2 md:gap-4 md:p-4">
    <Navbar />

    <main class="grow flex flex-col gap-2 md:gap-4">
        <Profile />
        <Projects />
    </main>

    <Footer />
</div>
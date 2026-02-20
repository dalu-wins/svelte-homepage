<script lang="ts">
    import Profile from "$lib/components/profile.svelte";
    import Projects from "$lib/components/projects.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
    import BackgroundTriangles from "$lib/components/BackgroundTriangles.svelte";
</script>

<BackgroundTriangles count={10} />

<div class="flex flex-col min-h-screen relative overflow-hidden container mx-auto grow gap-3 md:gap-6 md:px-10 md:py-4 p-2">
    <Navbar />

    <main class="grow flex flex-col gap-3 md:gap-6">
        <Profile />
        <Projects />
    </main>

    <Footer />
</div>
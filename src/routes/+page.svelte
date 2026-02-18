<script lang="ts">
    import Profile from "$lib/components/profile.svelte";
    import Projects from "$lib/components/projects.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
    import BackgroundTriangles from "$lib/components/BackgroundTriangles.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <Navbar />

    <div class="container mx-auto px-8 grow flex flex-col justify-center">
        <main>
            <Profile />
            <h1 class="text-4xl font-bold dark:text-white pt-8 mb-8 text-center md:text-start" id="projects">
                Featured Projects
            </h1>
            <Projects />
        </main>
    </div>

    <BackgroundTriangles count={8}/>

    <Footer />
</div>
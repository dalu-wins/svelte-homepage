<script lang="ts">
    import Curriculum from "$lib/components/curriculum.svelte";
    import Profile from "$lib/components/profile.svelte";
    import Projects from "$lib/components/projects.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
</script>

<Navbar />

<div class="container mx-auto px-4">
    
    <Profile />

    <h1 class="text-4xl font-bold dark:text-white pt-10 mb-10" id="projects">
        Projects
    </h1>
    <Projects />

    <h1 class="text-4xl font-bold pt-10 mb-10 dark:text-white" id="curriculum">
        Curriculum
    </h1>
    <Curriculum />

</div>

<Footer />

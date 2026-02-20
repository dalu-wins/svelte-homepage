<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
    import BackgroundTriangles from "$lib/components/BackgroundTriangles.svelte";
    import Curriculum from "$lib/components/curriculum.svelte";
</script>

<div class="flex flex-col min-h-screen relative overflow-hidden p-4 container mx-auto grow gap-4">
    <Navbar />

    <main class="grow flex flex-col gap-4">
        <Curriculum />
    </main>

    <BackgroundTriangles count={8} />

    <Footer />
</div>
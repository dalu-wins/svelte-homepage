<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
    import BackgroundTriangles from "$lib/components/BackgroundTriangles.svelte";
    import Curriculum from "$lib/components/curriculum.svelte";
</script>

<BackgroundTriangles count={10} />

<div class="flex flex-col min-h-screen relative overflow-hidden container mx-auto grow gap-3 md:gap-6 md:px-10 md:py-4 p-2">
    <Navbar />

    <main class="grow flex flex-col gap-3 md:gap-6">
        <Curriculum />
    </main>

    <Footer />
</div>
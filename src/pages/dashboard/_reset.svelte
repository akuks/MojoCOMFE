<script>
    import AppHeader from "../../components/AppHeader.svelte";
</script>

<main class="min-h-screen bg-gray-100" style="margin-top: 65px">
    <AppHeader />
    <section class="container mx-auto">
        <slot />
    </section>
</main>

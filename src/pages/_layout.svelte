<script>
    import { metatags } from '@roxi/routify'
    import AppHeader from "../components/AppHeader.svelte";
    import LeftColumn from "../components/LeftColumn.svelte";
    import RightColumn from "../components/RightColumn.svelte";

    metatags.title = 'MojoCom - A Community Builder in Svelte'
    metatags.description = 'MojoCom FE Description'
</script>

<main class="min-h-screen bg-gray-100" style="margin-top: 65px">
    <AppHeader />

    <section class="container mx-auto py-8">

        <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">

            <div class="flex w-full">
                <LeftColumn />
                <slot />
                <RightColumn />
            </div>

        </div>

    </section>

</main>
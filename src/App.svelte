<script>
	import AppHeader from "./components/AppHeader.svelte";
	import Article from "./components/Article.svelte";
	import LeftColumn from "./components/LeftColumn.svelte"
	import RightColumn from "./components/RightColumn.svelte";
</script>

<main class="min-h-screen bg-gray-100" style="margin-top: 65px">
	<AppHeader />
	<section class="container mx-auto py-8">

		<div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">

			<div class="flex w-full">
				<LeftColumn />
				<Article />
				<RightColumn />
			</div>

		</div>
	</section>
</main>



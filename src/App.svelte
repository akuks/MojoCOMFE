<script>
	import AppHeader from "./components/AppHeader.svelte";
	import Article from "./components/Article.svelte";
</script>

<main class="min-h-screen bg-gray-100" style="margin-top: 65px">
	<section class="container mx-auto py-8">
		<div class="grid grid-cols-4 gap-4">
			<AppHeader />

			<Article />
		</div>
	</section>
</main>


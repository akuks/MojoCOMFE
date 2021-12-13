<script>
	import Logo from "./components/Logo.svelte";
	import Search from "./components/Search.svelte";
	import NavBar from "./components/NavBar.svelte";
</script>

<main>
	<header class="fixed top-0 left-0 w-full bg-white border-b">
		<div class="container mx-auto flex items-center h-16">
			<Logo />
			<Search />
			<NavBar />
		</div>
	</header>
</main>


<script>
    import Logo from "./Logo.svelte";
    import Search from "./Search.svelte";
    import NavBar from "./NavBar.svelte";
</script>

<header class="fixed top-0 left-0 w-full bg-white border-b">
    <div class="container mx-auto flex items-center h-16">
        <Logo />
        <Search />
        <NavBar />
    </div>
</header>
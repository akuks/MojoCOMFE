<script>
    import DefaultButton from "./buttons/DefaultButton.svelte";
    import DefaultRound from "./buttons/DefaultRound.svelte";
    import Profile from "./User/Profile.svelte";
</script>

<div class="w-auto ml-auto flex items-center space-x-4 h-full">

    <DefaultButton>Create Post</DefaultButton>

    <DefaultRound>
        <img src="https://s.svgbox.net/hero-outline.svg?ic=chat&fill=grey-700"  class="h-6 w-6" alt=""/>
    </DefaultRound>

    <DefaultRound>
        <img src="https://s.svgbox.net/hero-outline.svg?ic=bell&fill=grey-700" class="h-6 w-6" alt=""/>
    </DefaultRound>

<!--    <Profile />-->
</div>
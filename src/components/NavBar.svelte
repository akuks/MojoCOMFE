<script>
    import AfterLogin from "./User/AfterLogin.svelte";
    import TopRight from "./TopRight.svelte";

    let login = false
</script>

<div class="w-auto ml-auto flex items-center space-x-4 h-full">

    {#if login }
        <AfterLogin />
    {:else }
        <TopRight />
    {/if}


</div>
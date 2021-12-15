<script>
    import listings from "../../listings";
    let login = ''

</script>

<ul>
    {#each listings as list}
        <li>
            <div class="items-center px-1 py-2 space-x-4 rounded-md hover:bg-blue-100 text-gray-700 padding">
                <a href="{ list.url }" class="flex">
                    {#if list.name === 'Sign In/Up' }
                        <span>{@html list.icon }</span>
                        <strong class="ml-local-10"> { list.name }</strong>
                    {:else}
                        <span>{@html list.icon }</span>
                        <span class="ml-local-10">{ list.name }</span>
                    {/if}

                </a>
            </div>
        </li>
    {/each}

</ul>
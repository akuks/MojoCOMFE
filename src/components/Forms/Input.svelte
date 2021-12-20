<script>
    import { getContext } from 'svelte';

    export let type;
    export let label;
    export let name;
    export let id;
    export let placeholder;

    const { onBlur } = getContext('form');
</script>

<input class="w-full py-3 pl-3 mb-4 bg-white border rounded-lg" {id} {name} {type} {placeholder} on:blur={onBlur} />
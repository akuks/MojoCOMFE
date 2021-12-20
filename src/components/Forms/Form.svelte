<script>

    import { setContext } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import { writable } from 'svelte/store';
    import Validator from "./validator";

    export let action;

    const dispatch = createEventDispatcher();
    let errors = writable({});

    function onBlur(e) {
        console.log( Validator.validateField( e.target.name, e.target.value ) )
    }

    function isFormValid() {
        return true
    }

    function validateForm(data) {
        console.log(data)
    }

    function onSubmit(e) {
        const formData = new FormData(e.target);

        const data = {};

        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        validateForm(data);

        return dispatch('submit', { valid: isFormValid(), data });
    }

    setContext('form', { errors, onBlur });

</script>

<form { action } on:submit|preventDefault={onSubmit}>
    <slot />
</form>
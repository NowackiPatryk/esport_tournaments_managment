<template>
    <input 
        class = 'textInput' 
        :type = "hidden ? 'password' : 'text'"
        @change = "$emit('input', $event.target.value)"
        :placeholder = "name"
    >
</template>

<script>
export default {
    props: {
        hidden: {
            type: Boolean,
            required: false,
        },

        name: {
            type: String,
            required: true,
        }
    },
}
</script>

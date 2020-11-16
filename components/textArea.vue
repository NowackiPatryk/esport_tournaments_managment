<template>
    <textarea 
        class = 'textArea' 
        @change = "$emit('input', $event.target.value)"
        :placeholder = "name"
    >
    </textarea>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        }
    },
}
</script>

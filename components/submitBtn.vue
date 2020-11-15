<template>
    <button type = 'submit' class = 'submitBtn'>
        {{ btnText }}
    </button>
</template>

<script>
export default {
    props:{
        btnText:{
            type: String,
            required: true,
        }
    }
}
</script>

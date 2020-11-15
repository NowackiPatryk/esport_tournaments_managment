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

<style lang="scss" scoped>
@import '../assets/globalScss/globals.scss';

    .wrapper{
        display: flex;
        flex-direction: column;
    }

    .textInput {
        background-color: $color_light;
        outline: 0;
        border: none;
        padding: $default_margin;
        width: 80%;
        margin-bottom: $large_margin;
        color: $default_text_color;
        border-radius: $default_border_radius;
        transition: transform .2s;
    }
    .textInput:focus{
        transform: scale(1.06);
    }

    @media only screen and (min-width: 320px){
        .textInput{
            height: 15%;
            padding: $small_margin;
        }
    }

    @media only screen and (min-width: 1024px){
         .textInput{
            height: 20%;
            padding: $default_margin;
        }
    }
</style>
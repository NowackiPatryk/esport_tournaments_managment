<template>
    <input 
        v-if = "hidden"
        v-model = "inputValue" 
        class = 'textInput' 
        type = 'password'
        @change = "emitValue"
        >
    <input 
        v-else
        v-model = "inputValue"
        class = 'textInput'
        @change = "emitValue"
        >
</template>

<script>
export default {
    props: {
        defaultValue: {
            type: String,
            required: true,
        },
        hidden: {
            type: Boolean,
            required: false,
        },
    },

    data: function(){
        return({
            inputValue: this.defaultValue,
        })
    },

    methods: {
        emitValue(e){
            this.$emit('input-update', e.target.value);
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/globalScss/globals.scss';
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
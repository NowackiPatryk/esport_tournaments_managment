<template>
    <div class = "dropdownNavbarElement">
        <h1 class = "dropdownNavbarElement__text">{{ name }}</h1>
        <ul class = "dropdownNavbarElement__dropdown">
            <li v-for = "item in itemList" :key = "item.routeUrl">
                <navbarRouteElement 
                    :name = "item.name"
                    :routeUrl = "item.routeUrl"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import navbarRouteElement from './navbarRouteElement';

export default {
    components: {
        navbarRouteElement,

    },

    props: {
        itemList: {
            type: Array,
            required: true,
        },

        name: {
            type: String,
            required: true,
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/globalScss/globals.scss';

    .dropdownNavbarElement{
        color: $default_text_color;
        height: 100%;
        position: relative;
        flex-direction: column;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: $default_margin;
        
            &:hover &__dropdown{
                    display: block;
            }

            &__text{
                margin: 0;
                padding: 0;
                font-size: 1.6rem;
                width: 100%;
            }
            
            &__dropdown{
                display: none;
                list-style-type: none;
                margin: 0;
                position: absolute;
                left: 0;
                top: 100%;
                width: 100%;
                padding: $large_margin;
                background-color: $color_dark;

                    & li{
                        margin-top: 25px;
                    }
            }
    }
</style>
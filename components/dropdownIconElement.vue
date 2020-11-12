<template>
    <div class = "dropdownNavbarElement">
        <img :src = "require(`@/assets/icons/${iconSrc}`)" class = "dropdownNavbarElement__icon">
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

        iconSrc: {
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

            &__icon{
                margin: 0;
                padding: 0;
                width: 50%;
            }
            
            &__dropdown{
                display: none;
                list-style-type: none;
                margin: 0;
                position: absolute;
                left: 0;
                top: 100%;
                padding: $large_margin;
                background-color: $color_dark;

                    & li{
                        margin-top: 25px;
                    }
            }
    }
</style>
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

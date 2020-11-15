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

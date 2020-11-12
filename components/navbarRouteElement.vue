<template>
    <div class = 'navbarRouteElement'>
        <NuxtLink :to = "routeUrl"> {{ name }} </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },

        routeUrl: {
            type: String,
            required: true,
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/globalScss/globals.scss';

    .navbarRouteElement{
        & a {
            text-decoration: none;
            color: $default_text_color;
            font-size: 1.4rem;
            font-weight: bold;
        }
    }
</style>
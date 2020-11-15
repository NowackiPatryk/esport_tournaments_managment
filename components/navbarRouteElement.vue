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

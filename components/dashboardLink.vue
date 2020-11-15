<template>
  <NuxtLink :to = "path">
      <div class = "dashboardLink" :class = "sizeClass">
        <div class = "dashboardLink__overlay">
            <h1 class = "dashboardLink__overlay__text" :class = "directionClass">{{ text }}</h1>
        </div>
        <img :src = "require(`@/assets/img/${imageSrc}`)" alt = "" class = "dashboardLink__image"/>
    </div>
  </NuxtLink>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
        },

        size: {
            type: String,
            required: true,
        },

        direction: {
            type: String,
            required: true,
        },

        text: {
            type: String,
            required: true,
        },

        path: {
            type: String,
            required: true,
        }
    },

    data(){
        return({
            sizeClass: `dashboardLink--${this.size}`,
            directionClass: `dashboardLink__overlay__text--${this.direction}`
        })
    },
}
</script>

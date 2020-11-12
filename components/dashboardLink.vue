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

<style lang="scss" scoped>
@import '../assets/globalScss/globals.scss';
@import '../assets/globalScss/animations.scss';

    .dashboardLink{
        width: 100vw;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &--default{
            height: 25vh;
        }
        &--large{
            height: 50vh;
        }
        &:hover &__image{
            filter: grayscale(0);
            transform: scale(1.05);
        }
        &__overlay{
            width: 100%;
            height: 100%;
            background-color: $color_dark;
            position: relative;

            &__text{
                margin: 0;
                padding: 0;
                text-transform: uppercase;
                font-size: 3rem;
                color: $default_text_color;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                transition: transform .2s;
            }
            &__text--left{
                left: $large_margin;
            }
            &__text--right{
                right: $large_margin;
            }
            &__text--center{
                right: 0;
                left: 0;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
            }
        }
        &__image{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            z-index: -1;
            filter: grayscale(1);
            transition: filter 1s, transform 6s;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 1023px){
        .dashboardLink{
            &__overlay__text{
                font-size: 1.3rem;
            }
        }
    }
</style>
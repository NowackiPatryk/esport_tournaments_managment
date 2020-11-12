<template>
    <nav class = 'navbar'>
        <div class = 'navbar__leftSideBlock'>
            <dropdownNavbarElement
                name = "Teams"
                :itemList = "[
                    {
                        name: 'Create',
                        routeUrl: '/createTeam',
                    },

                    {
                        name: 'Join',
                        routeUrl: '/joinTeam',
                    },
                ]"
            />

            <dropdownNavbarElement
                name = "Tournaments"
                :itemList = "[
                    {
                        name: 'Create',
                        routeUrl: '/createTeam',
                    },

                    {
                        name: 'Join',
                        routeUrl: '/joinTeam',
                    },
                ]"
            />
        </div>

        <div class = 'navbar__rightSideBlock'>
            <dropdownIconElement
                iconSrc = "user_icon.png"
                :itemList = "[
                    {
                    name: 'Change password',
                    routeUrl: '/changePassword' 
                    },

                    {
                        name: 'Log out',
                        routeUrl: '/logout'
                    }
                ]"
            />
        </div>
    </nav>
</template>

<script>
import dropdownNavbarElement from './dropdownNavbarElement';
import dropdownIconElement from './dropdownIconElement';

    export default {
        components: {
            dropdownNavbarElement,
            dropdownIconElement,

        },
    }

</script>

<style scoped lang = "scss">
@import '../assets/globalScss/globals.scss';

    .navbar{
        width: 100vw;
        height: 8vh;
        background-color: $color_dark;
        color: $default_text_color;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        display: flex;
        padding-left: $default_margin;
        padding-right: $default_margin;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__leftSideBlock{
            display: flex;
            justify-content: space-between;
            min-width: 15%;
        }
    }
</style>
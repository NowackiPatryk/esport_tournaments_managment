<template>
    <nav class = 'navbar'>
        <div class = 'navbar__leftSideBlock'>
            <dropdownNavbarElement 
                v-for = "element in navbarRouteElements"
                :key = "element.name"
                :name = "element.name"
                :itemList = "element.itemList"
            />
        </div>

        <div class = 'navbar__rightSideBlock'>
            <dropdownIconElement
                iconSrc = "user_icon.png"
                :itemList = "userElements"
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

        data(){
            return({
                navbarRouteElements: [
                    {
                        name: 'Teams',
                        itemList: [
                            {
                                name: 'Create',
                                routeUrl: '/createteam',
                            },

                            {
                                name: 'Join',
                                routeUrl: '/jointeam',
                            }
                        ]
                    },

                    {
                        name: 'Tournaments',
                        itemList: [
                            {
                                name: 'Create',
                                routeUrl: '/createtournament',
                            },

                            {
                                name: 'Join',
                                routeUrl: '/jointorunament',
                            }
                        ]
                    },
            ],

            userElements: [
                {
                    name: 'Change password',
                    routeUrl: '/changepassword' 
                },

                {
                    name: 'Log out',
                    routeUrl: '/logout'
                },
            ],
        })
    }
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
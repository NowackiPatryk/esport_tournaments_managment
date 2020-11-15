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

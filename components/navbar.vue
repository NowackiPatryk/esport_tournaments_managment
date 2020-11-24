<template>
  <nav class="navbar" :class="isVisible ? null : 'navbar--hidden'">
    <div class="navbar__leftSideBlock">
      <dropdownNavbarElement
        v-for="element in navbarRouteElements"
        :key="element.name"
        :name="element.name"
        :itemList="element.itemList"
      />
    </div>

    <div class="navbar__rightSideBlock">
      <logoutBtn iconSrc="logout_icon.png" />
    </div>
  </nav>
</template>

<script>
import dropdownNavbarElement from "./dropdownNavbarElement";
import logoutBtn from "./logoutBtn";

export default {
  components: {
    dropdownNavbarElement,
    logoutBtn
  },

  data() {
    return {
      navbarRouteElements: [
        {
          name: "Teams",
          itemList: [
            {
              name: "Create",
              routeUrl: "/createteam"
            },

            {
              name: "Join",
              routeUrl: "/jointeam"
            }
          ]
        },

        {
          name: "Tournaments",
          itemList: [
            {
              name: "Create",
              routeUrl: "/createtournament"
            },

            {
              name: "Join",
              routeUrl: "/jointorunament"
            }
          ]
        },

        {
          name: "Profile",
          itemList: [
            {
              name: "Change password",
              routeUrl: "/changepassword"
            }
          ]
        }
      ],

      userElements: [
        {
          name: "Change password",
          routeUrl: "/changepassword"
        },

        {
          name: "Log out",
          routeUrl: "/logout"
        }
      ]
    };
  },

  computed: {
    isVisible() {
      return this.$store.state.navbarStore.isNavbarVisible;
    }
  }
};
</script>

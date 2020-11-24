<template>
  <div>
    <dashboardLink
      v-for="element in dashboardElements"
      :key="element.text"
      :text="element.text"
      :size="element.size"
      :direction="element.direction"
      :imageSrc="element.imageSrc"
      :path="element.path"
    />
  </div>
</template>

<script>
import dashboardLink from "../components/dashboardLink";
import navbar from "../components/navbar";
import hamburgerBtn from "../components/hamburgerBtn";

export default {
  layout: "logged",
  components: {
    dashboardLink,
    navbar,
    hamburgerBtn
  },

  data() {
    return {
      dashboardElements: [
        {
          text: "join team",
          size: "default",
          direction: "left",
          imageSrc: "join-team-image.jpeg",
          path: "/jointeam"
        },

        {
          text: "create team",
          size: "default",
          direction: "right",
          imageSrc: "create-team-image.jpg",
          path: "/createteam"
        },

        {
          text: "create tournament",
          size: "large",
          direction: "center",
          imageSrc: "create-tournament-image.jpg",
          path: "/createtournament"
        }
      ]
    };
  }
};
</script>

<style></style>

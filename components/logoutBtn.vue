<template>
  <nuxt-link to="/logout">
    <div class="logoutBtn">
      <img :src="require(`@/assets/icons/${iconSrc}`)" alt="logout" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    iconSrc: {
      required: true,
      type: String
    }
  }
};
</script>

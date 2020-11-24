<template>
  <div class="menuBtn" @click="toggleNavbarVisibility">
    <div
      class="menuBtn__burger"
      :class="isActive ? 'menuBtn__burger--active' : null"
    ></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNavbarVisibility() {
      this.$store.dispatch("navbarStore/toggleNavbarVisibility");
    }
  },

  computed: {
    isActive() {
      return this.$store.state.navbarStore.isNavbarVisible;
    }
  }
};
</script>

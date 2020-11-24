<template>
  <div>
    <navbar />
    <hamburgerBtn />
    <Nuxt />
  </div>
</template>

<script>
import navbar from "../components/navbar";
import hamburgerBtn from "../components/hamburgerBtn";

export default {
  components: {
    navbar,
    hamburgerBtn
  }
};
</script>

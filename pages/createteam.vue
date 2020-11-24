<template>
  <div class="page createTeamPage">
    <createTeamForm />
  </div>
</template>

<script>
import navbar from "../components/navbar";
import createTeamForm from "../components/createTeamForm";

export default {
  layout: "logged",
  components: {
    navbar,
    createTeamForm
  }
};
</script>

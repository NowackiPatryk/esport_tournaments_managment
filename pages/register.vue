<template>
  <div class="page loginRegisterPage">
      <registerForm />
  </div>
</template>

<script>
import registerForm from '../components/registerForm';

export default {
    components: {
        registerForm,
    },
}
</script>

<style>
    @import './styles/loginRegisterPageStyles.scss';
</style>

<template>
  <div class="page loginRegisterPage">
      <loginForm
            :emailInputValue = "emailInputValue" 
            :passwordInputValue = "passwordInputValue"
        />
  </div>
</template>

<script>
import loginForm from '../components/loginForm';

export default {
    components: {
        loginForm,
    },
    data: function(){
        return({
            emailInputValue: 'Email',
            passwordInputValue: 'Password',
        })
    }
}
</script>

<style>
    @import './styles/loginRegisterPageStyles.scss';
</style>

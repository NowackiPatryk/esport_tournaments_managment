<template>
  <div class="page loginRegisterPage">
      <registerForm
            :emailInputValue = "emailInputValue" 
            :passwordInputValue = "passwordInputValue"
            :confirmPasswordInputValue = "confirmPasswordInputValue"
        />
  </div>
</template>

<script>
import registerForm from '../components/registerForm';

export default {
    components: {
        registerForm,
    },
    data: function(){
        return({
            emailInputValue: 'Email',
            passwordInputValue: 'Password',
            confirmPasswordInputValue: 'Confirm password',
        })
    }
}
</script>

<style>
    @import './styles/loginRegisterPageStyles.scss';
</style>

<template>
  <div class="page loginPage">
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
    .loginPage{
        background-image: url('../assets/img/bg-img.jpg');
        background-size: cover;
        display: flex;
        justify-content: left;
        align-items: center;
    }
</style>

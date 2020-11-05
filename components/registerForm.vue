<template>
    <form class = 'loginRegisterForm'>
        <div class = 'loginRegisterForm__contentWrapper'>
            <textInput :defaultValue = "emailInputValue" />
            <textInput :defaultValue = "passwordInputValue" :hidden = "true"/>
            <textInput :defaultValue = "confirmPasswordInputValue" :hidden = "true"/>
            <p class = 'loginRegisterForm__contentWrapper__paragraph'>
                Do you have an account?<NuxtLink to = "/login"> Log In! </NuxtLink> 
            </p>
        </div>
        <submitBtn btnText = 'Sign Up' />
    </form>
</template>

<script>
import textInput from './textInput';
import submitBtn from './submitBtn';

export default {
    components: {
        textInput,
        submitBtn,
    },

    props:{
        emailInputValue: {
            type: String,
            required: true,
        },
        passwordInputValue: {
            type: String,
            required: true,
        },
        confirmPasswordInputValue: {
            type: String,
            required: true,
        }
    },

    }
</script>
<style scoped lang = 'scss'>
@import '../assets/globalScss/globals.scss';
@import '../assets/globalScss/animations.scss';
@import './styles/loginRegisterFormStyles.scss';

</style>
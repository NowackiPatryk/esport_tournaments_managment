<template>
    <form class = 'loginRegisterForm'>
        <div class = 'loginRegisterForm__contentWrapper'>
            <textInput :defaultValue = "emailInputValue" />
            <textInput :defaultValue = "passwordInputValue" :hidden = "true"/>
            <p class = 'loginRegisterForm__contentWrapper__paragraph'>
                Don't have account yet? <NuxtLink to = "/register"> Go to register </NuxtLink> 
            </p>
        </div>
        <submitBtn btnText = 'Login' />
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
        }
    },

    }
</script>
<style scoped lang = 'scss'>
@import '../assets/globalScss/globals.scss';
@import '../assets/globalScss/animations.scss';
@import './styles/loginRegisterFormStyles.scss';

</style>
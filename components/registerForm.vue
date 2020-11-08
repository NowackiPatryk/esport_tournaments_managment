<template>
    <form class = 'loginRegisterForm' @submit.prevent = "handleFormSubmit">
        <div class = 'loginRegisterForm__contentWrapper'>
            <textInput 
                :defaultValue = "emailInputValue"
                @input-update = "updateEmail"
                />
            <textInput 
                :defaultValue = "passwordInputvalue"
                @input-update = "updatePassword"
                :hidden = "true"
                />
            <textInput 
                :defaultValue = "confirmPasswordInputValue"
                :hidden = "true"
                @input-update = "updateConfirmPassword"
                />
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

    data(){
        return({
            emailInputValue: this.$store.state.registerStore.emailInputValue,
            passwordInputvalue: this.$store.state.registerStore.passwordInputvalue,
            confirmPasswordInputValue: this.$store.state.registerStore.confirmPasswordInputValue,
        })
    },

    methods:{
        updateEmail(value){
            this.$store.commit('registerStore/updateEmail', value);
        },
        updatePassword(value){
            this.$store.commit('registerStore/updatePassword', value);
        },
        updateConfirmPassword(value){
            this.$store.commit('registerStore/updateConfirmPassword', value);
        },
        handleFormSubmit(email, password){
            this.registerUser(email, password);
        }
    }

    }
</script>
<style scoped lang = 'scss'>
@import '../assets/globalScss/globals.scss';
@import '../assets/globalScss/animations.scss';
@import './styles/loginRegisterFormStyles.scss';

</style>
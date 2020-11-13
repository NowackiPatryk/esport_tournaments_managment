<template>
    <form class = 'loginRegisterForm' @submit.prevent = "handleFormSubmit">
        <div class = 'loginRegisterForm__contentWrapper'>
            <textInput 
                :defaultValue = "emailInputValue"
                @input-update = "updateEmail"
                name = "Email"
            />

            <textInput 
                :defaultValue = "passwordInputValue"
                @input-update = "updatePassword"
                :hidden = "true"
                name = "Password"
            />

            <textInput 
                :defaultValue = "confirmPasswordInputValue"
                :hidden = "true"
                @input-update = "updateConfirmPassword"
                name = "Confirm password"
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
            emailValidators: [
                this.checkIfNotEmpty,
                this.checkIfIsEmailCorrect,
            ],

            passwordValidators: [
                this.checkIfNotEmpty,
                this.checkIfContainsNotAllowedChars,
                this.checkIfLongEnough,
                () => this.checkIfPasswordsMatches( this.passwordInputValue, this.confirmPasswordInputValue )
            ],
        })
    },

    computed: {
        emailInputValue(){
            return this.$store.state.registerStore.emailInputValue;
        },

        passwordInputValue(){
            return this.$store.state.registerStore.passwordInputValue;
        },

        confirmPasswordInputValue(){
            return this.$store.state.registerStore.confirmPasswordInputValue;
        }
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

        checkFieldStatus( status ){
            if( !status.ok ){
                if( !process.server )
                    alert(status.msg);
                return false;
            }

            return true;
        },

        validateFields(){
            const emailStatus = this.validateField(this.emailInputValue, this.emailValidators);
            const passwordStatus = this.validateField( this.passwordInputValue, this.passwordValidators);

            if( !this.checkFieldStatus( emailStatus ) || !this.checkFieldStatus( passwordStatus ) )
                return false
                debugger;
            return true;
        }, 
        
        handleFormSubmit(){
            if( this.validateFields() ){
                this.registerUser(this.emailInputValue, this.passwordInputValue);
                this.$router.push('/');
            }
        }
    }

    }
</script>
<style scoped lang = 'scss'>
@import '../assets/globalScss/globals.scss';
@import '../assets/globalScss/animations.scss';
@import './styles/loginRegisterFormStyles.scss';

</style>
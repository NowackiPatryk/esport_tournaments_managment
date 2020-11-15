<template>
    <form class = 'loginRegisterForm' @submit.prevent = "handleFormSubmit">
        <div class = 'loginRegisterForm__contentWrapper'>
            <textInput 
                v-model = "emailInputValue"
                name = "Email"
            />

            <textInput 
                v-model = "passwordInputValue"
                :hidden = "true"
                name = "Password"
            />

            <textInput 
                v-model = "confirmPasswordInputValue"
                name = "Confirm password"
                :hidden = "true"
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

            emailInputValue: '',
            passwordInputValue: '',
            confirmPasswordInputValue: '',
        })
    },

    methods:{
        
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
                
            return true;
        }, 
        
        handleFormSubmit(){
            if( this.validateFields() ){
                this.$store.dispatch('userStore/registerUser', { email: this.emailInputValue, password: this.passwordInputValue});
                this.$router.push('/');
            }
        }
    }

    }
</script>

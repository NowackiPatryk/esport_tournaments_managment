<template>
    <form class = 'defaultForm' @submit.prevent = "handleFormSubmit()">
        <div class = 'defaultForm__contentWrapper'>
            <textInput 
                v-model = "emailInputValue"
                name = "Email"
                />

            <textInput 
                v-model = "passwordInputValue"
                :hidden = "true"
                name = "Password"
                />
                
            <p class = 'defaultForm__contentWrapper__paragraph'>
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

    data(){
        return({
            emailInputValue: '',
            passwordInputValue: '',
        })
    },

    methods:{

        handleFormSubmit(){
            this.$store.dispatch('userStore/loginUser', {email: this.emailInputValue, password: this.passwordInputValue})
            if( this.$store.state.userStore.login.success ){
                this.$router.push('/');
            }
            else
                if(!process.server)
                    alert('User with this combination not found. Check email and password then try again');
        }
    }

    }
</script>
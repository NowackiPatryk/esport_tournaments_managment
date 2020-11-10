<template>
    <form class = 'loginRegisterForm' @submit.prevent = "handleFormSubmit()">
        <div class = 'loginRegisterForm__contentWrapper'>
            <textInput 
                :defaultValue = "emailInputValue"
                @input-update = "updateEmail"
                />
            <textInput 
                :defaultValue = "passwordInputValue"
                @input-update = "updatePassword"
                :hidden = "true"
                />
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

    computed: {
        emailInputValue(){
            return this.$store.state.loginStore.emailInputValue;
        },

        passwordInputValue(){
            return this.$store.state.loginStore.passwordInputValue;
        },
        
    },

    methods:{
        updateEmail(value){
            this.$store.commit('loginStore/updateEmail', value);
        },

        updatePassword(value){
            this.$store.commit('loginStore/updatePassword', value);
        },

        handleFormSubmit(){
            const user = this.getUser( this.emailInputValue, this.passwordInputValue )
            if( user ){
                this.loginUser( user.email, user.id );
                this.$router.push('/');
            }
            else
                if(!process.server)
                    alert('User with this combination not found. Check email and password then try again');
        }
    }

    }
</script>
<style scoped lang = 'scss'>
@import '../assets/globalScss/globals.scss';
@import '../assets/globalScss/animations.scss';
@import './styles/loginRegisterFormStyles.scss';

</style>
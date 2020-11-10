export const state = () => ({
    emailInputValue: 'Email',
    passwordInputValue: 'Password',
    confirmPasswordInputValue: 'Confirm password',
})

export const mutations = {
    updateEmail(state, value){
        state.emailInputValue = value;
    },
    updatePassword(state, value){
        state.passwordInputValue = value;
    },
    updateConfirmPassword(state, value){
        state.confirmPasswordInputValue = value;
    },
}
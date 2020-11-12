export const state = () => ({
    emailInputValue: '',
    passwordInputValue: '',
    confirmPasswordInputValue: '',
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
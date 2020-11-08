export const state = () => ({
    emailInputValue: 'Email',
    passwordInputvalue: 'Password',
    confirmPasswordInputValue: 'Confirm password',
})

export const mutations = {
    updateEmail(state, value){
        state.emailInputValue = value;
    },
    updatePassword(state, value){
        state.passwordInputVaule = value;
    },
    updateConfirmPassword(state, value){
        state.confirmPasswordInputValue = value;
    },
}
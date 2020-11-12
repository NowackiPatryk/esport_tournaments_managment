export const state = () => ({
    emailInputValue: '',
    passwordInputValue: '',
})

export const mutations = {
    updateEmail(state, value){
        state.emailInputValue = value;
    },
    updatePassword(state, value){
        state.passwordInputValue = value;
    },
}
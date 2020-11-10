export const state = () => ({
    emailInputValue: 'Email',
    passwordInputValue: 'Password',
})

export const mutations = {
    updateEmail(state, value){
        state.emailInputValue = value;
    },
    updatePassword(state, value){
        state.passwordInputValue = value;
    },
}
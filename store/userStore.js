export const state = () => ({
    register: {
        //actually empty
    },

    login: {
        success: false,
    },

})

export const mutations = {
    setLoginSuccess( state ){
        state.login.success = true;
    },
}

export const actions = {

    loginUser( { commit }, payload ){
        const users = this.$cookies.get('users');
            if(users)
                users.forEach( user => {
                    if( user.email == payload.email && user.password == payload.password ){
                        commit('setLoginSuccess');
                        this.$cookies.set('currentUser', { email: user.email, id: user.id });
                        return;
                    }
                })

    },

    registerUser( { dispatch }, payload ){
        const users = this.$cookies.get('users');
        const user = {
            id: users ? users.length : 0,
            email: payload.email,
            password: payload.password,
        }
        
        if(users){
            users.push(user);
            this.$cookies.set('users', users, {
                path: '/',
                maxAge: 60*60*24*7
            });
        }
        else
            this.$cookies.set('users', [ user ], {
                path: '/',
                maxAge: 60*60*24*7
            });
    
        dispatch('loginUser', { email: user.email, password: user.password });
    },
}
import Vue from 'vue';
Vue.mixin({
    methods:{
        registerUser( userEmail, userPassword ){
            const users = this.$cookies.get('users');
            const user = {
                id: users ? users.length : 0,
                email: userEmail,
                password: userPassword,
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
        
            this.loginUser( user.id, user.email, user.password );
        },
        
        loginUser( userEmail, userPassword, userId ){
            const user = {
                id: userId,
                email: userEmail,
                password: userPassword
            }
        
            this.$cookies.set('currentUser', user, {
                path: '/',
                maxAge: 60*60*24*7,
            })
        }
    }
})
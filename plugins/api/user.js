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
        
            this.loginUser( user.email, user.id );
        },
        
        loginUser( userEmail, userId ){
            const user = {
                id: userId,
                email: userEmail,
            }
        
            this.$cookies.set('currentUser', user, {
                path: '/',
                maxAge: 60*60*24*7,
            })
        },

        getUser( email, password ){
            const users = this.$cookies.get('users');
            let takenUser = false;
            
            if(users)
                users.forEach( user => {
                    if( user.email == email && user.password == password ){
                        takenUser = { id: user.id, email: user.email };
                        return;
                    }
                })

            return takenUser;
        }
    }
})
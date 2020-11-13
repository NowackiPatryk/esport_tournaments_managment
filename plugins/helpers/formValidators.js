import Vue from 'vue';

Vue.mixin({
    methods:{
        checkIfNotEmpty( value ){
            const status = {
                ok: false,
                msg: 'This field can not be empty.',
            };
        
            if( value != "" )
                status.ok = true;
        
            return status;
        },
        
        checkIfContainsNotAllowedChars( value ){
            const notAllowedChars = '!-=+.;()*';
            const status = {
                ok: true,
                msg: ''
            };
        
            [...value].forEach( char => {
                for( const notAllowedChar of notAllowedChars )
                    if( char === notAllowedChar ){
                        status.ok = false;
                        status.msg = 'This field can not contain special chars.';
                        return;
                    }
            })
        
            return status;
        },
        
        checkIfLongEnough( value, minLength = 8 ){
            const status = {
                ok: false,
                msg: `This field must have at least ${minLength} chars`
            }
        
            if( value.length >= minLength )
                status.ok = true;
        
            return status;
        },
        
        checkIfPasswordsMatches( password, confirmPassword ){
            const status = {
                ok: true,
                msg: ''
            }

            if( password !== confirmPassword ){
                status.ok = false;
                status.msg = "Passwords does not match.";
            }
        
            return status;
        },
        
        checkIfIsEmailCorrect( email ){
            const emailRules = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const status = {
                ok: false,
                msg: 'Email is not correct'
            };
        
            if( emailRules.test( email ) )
                status.ok = true;
        
            return status;
        },
        
        validateField( value, validators ){
            const status = { 
                ok: true,
                msg: ''
            }

            for( let i = 0 ; i < validators.length ; i++ ){
                const result = validators[i]( value );

                if( !result.ok ){
                    status.ok = false;
                    status.msg = result.msg;
                    break;
                }
            }
        
            return status;
        }
    }
})

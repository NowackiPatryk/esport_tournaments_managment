<template>
    <form class = 'defaultForm' @submit.prevent = "handleFormSubmit()">
        <div class = 'defaultForm__contentWrapper'>
            <textInput 
                v-model = "teamNameInputValue"
                name = "Team name"
                />

            <textInput 
                v-model = "teamTagInputValue"
                name = "Team tag"
                />
            <textArea
                v-model = "descriptionInputValue"
                name = "Description..."
                />
        </div>
        <submitBtn btnText = 'Create' />
    </form>
</template>

<script>
import textInput from './textInput';
import submitBtn from './submitBtn';
import textArea from './textArea';

export default {
    components: {
        textInput,
        textArea,
        submitBtn,
    },

    data(){
        return({
            teamNameInputValue: '',
            teamTagInputValue: '',
            descriptionInputValue: '',
        })
    },

    methods:{

        handleFormSubmit(){
            const teamData = {
                teamName: this.teamNameInputValue,
                teamTag: this.teamTagInputValue,
                teamDescription: this.descriptionInputValue,
            };

            this.$store.dispatch('teamStore/createTeam', teamData);
        }
    }

    }
</script>
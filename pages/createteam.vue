<template>
   <div class = "page createTeamPage">
       <navbar />
       <createTeamForm />
    </div> 
</template>

<script>
import navbar from '../components/navbar';
import createTeamForm from '../components/createTeamForm';

export default {
    components:{
        navbar,
        createTeamForm,
    },
}
</script>
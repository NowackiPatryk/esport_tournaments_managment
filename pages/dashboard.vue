<template>
  <div>
    <navbar/>
    <dashboardLink 
      text = "join team" 
      size = "default" 
      direction = "left" 
      imageSrc = "join-team-image.jpeg"
      path = '/jointeam'/>

    <dashboardLink 
      text = "create team" 
      size = "default" 
      direction = "right" 
      imageSrc = "create-team-image.jpg"
      path = '/createteam'/>

    <dashboardLink 
      text = "create tournament" 
      size = "large" 
      direction = "center" 
      imageSrc = "create-tournament-image.jpg"
      path = '/createtournament'/>
  </div>
</template>

<script>
import dashboardLink from '../components/dashboardLink';
import navbar from '../components/navbar';

export default {
  components: {
    dashboardLink,
    navbar,

  }
}
</script>

<style>

</style>

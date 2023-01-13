<template>
  <div className="tweet">
 <profileImage :patata="patata.user"></profileImage>

    <div className="body">
     
      <user :patata="patata"></user>
      
      <message :patata="patata"></message>
      <action></action>
      
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>

</template>
<script>
import profileImage from './ProfileImage.vue'
import User from './User.vue'
import message from './Message.vue'
import action from './Actions.vue'
export default {
    props:{
      patata: Object
        
    },
    components: {profileImage, User,message,action},
    data() {
      return {}}
    
    }

</script>

<style scoped>
a {
  color: #42b983;
}
</style>

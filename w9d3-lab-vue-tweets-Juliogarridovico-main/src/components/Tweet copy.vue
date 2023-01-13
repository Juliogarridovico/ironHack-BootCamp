<template>
  <div className="tweet">
    <img
      :src="patata.user.image"
      className="profile"
      alt="profile"
    />

    <div className="body">
      <div className="top">
        <span className="user">
          <span className="name"> {{patata.user.name}}</span>
          <span className="handle">{{patata.user.handle}}</span>
        </span>

        <span className="timestamp">{{patata.timestamp}}</span>
      </div>

      <p className="message">
        
        {{patata.message}}
      </p>

      <div className="actions">
        <!-- Font Awesome icons -->
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>

</template>
<script>


export default {
    props:{
      patata: Object
    },
    data() {
      return {}}}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

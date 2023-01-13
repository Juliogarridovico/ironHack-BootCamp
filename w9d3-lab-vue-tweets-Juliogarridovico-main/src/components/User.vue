<template>
  <div className="top">
    <span className="user">
      <span className="name"> {{patata.user.name}} </span>
      <span className="handle">{{patata.user.handle}}  </span>
    </span>

    <span className="timestamp"> {{patata.timestamp}} </span>
  </div>
</template>
<script>
    export default {
        setup() {
            
        },
        props: {
        patata: String
      },
    }
    </script>


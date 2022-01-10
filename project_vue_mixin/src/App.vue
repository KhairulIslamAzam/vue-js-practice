<template>
  <div class="container">
    <compClient/>
    <compUser/>
  </div>
</template>

<script>
import compClient from "./components/Client.vue"
import compUser from "./components/User.vue"
export default {
    components:{
      compClient,
      compUser
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

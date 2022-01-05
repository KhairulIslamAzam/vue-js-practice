<template>
  <div class="container">
    <div v-fristOne></div>
    <div v-fristTwo="'Hellow world with binding'"></div>
    <div v-fristTwoColor:blue="'Hellow world with binding color blue'"></div>
    <div v-fristTwoColor:red="'Hellow world with binding color red'"></div>
    
    <!-- modifier -->
    <div v-fristTwoColorAndSize.blue.small="'Hellow world with binding color blue and small'"></div>
    <div v-fristTwoColorAndSize.red.big="'Hellow world with binding color red and big'"></div>
  </div>
</template>

<script>

export default {
 
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

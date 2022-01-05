<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
       <ul class="container">
        <router-link exact active-class="active" tag="li" to='/'>Home</router-link>
        <router-link tag="li" exact active-class="active" to='/customer'>Customer</router-link>
        <router-link tag="li" exact active-class="active" to='/about'>About</router-link>
      
    </ul>
    </nav>
  </div>
</template>

<style>

ul li{
  color: aliceblue;
}

ul .active{
  color: red!important;;
}

</style>
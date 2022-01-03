<template>
    <div>
        <h2>Customer</h2>
    
        <hr>
        <button class="btn btn-success" @click="navigateToHome">go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
    methods:{
        navigateToHome(){
            this.$router.push({name : 'home'})
        }
    }
}
</script>
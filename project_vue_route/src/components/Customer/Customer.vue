<template>
    <div>
        <h2>Customer</h2>
        <hr>
        <button class="btn btn-success" @click="navigateToHome">go to Home</button>
    </div>
</template>

<script>
export default {
    methods:{
        navigateToHome(){
            this.$router.push('/')
        }
    }
}
</script>
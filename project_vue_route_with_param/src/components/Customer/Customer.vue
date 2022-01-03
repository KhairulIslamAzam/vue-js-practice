<template>
    <div>
        <h2>Customer</h2>
        LoadedId: {{loadedId}}
        <hr>
        <button class="btn btn-success" @click="navigateToHome">go to Home</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            loadedId: this.$route.params.id
        }
    },
    watch:{
        '$route'(to){
            this.loadedId = to.params.id
        }
    },
    methods:{
        navigateToHome(){
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <div id="app">
        <compBookListOne></compBookListOne>
        <compBookListTwo></compBookListTwo>
        <button class="btn btn-success" @click="reducePriceMethod">reduce price</button>
    </div>
</template>

<script>
import compBookListOne from "./components/BookListOne"
import compBookListTwo from "./components/BookListTwo"
export default {
    data(){
        return{
            
        }
    },
    components:{
      compBookListOne,
      compBookListTwo
    },
    methods:{
        reducePriceMethod(){
           return this.$store.dispatch('reducePrice');
        }
    }
}
</script>

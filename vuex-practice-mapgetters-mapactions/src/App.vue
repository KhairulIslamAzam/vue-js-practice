<template>
    <div id="app">
        <compBookListOne></compBookListOne>
        <compBookListTwo></compBookListTwo>
        <button class="btn btn-success" @click="reducePrice">reduce price</button>
    </div>
</template>

<script>
import compBookListOne from "./components/BookListOne"
import compBookListTwo from "./components/BookListTwo"
import { mapActions } from "vuex"
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
        ...mapActions([
            'reducePrice'
        ])
    }
}
</script>

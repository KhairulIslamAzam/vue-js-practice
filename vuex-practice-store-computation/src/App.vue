<template>
    <div id="app">
        <compBookListOne></compBookListOne>
        <compBookListTwo></compBookListTwo>
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
    }
}
</script>

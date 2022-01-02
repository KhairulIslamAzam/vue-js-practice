<template>
    <div>
        <h1>Blog Get Request Method</h1>
        <div v-for="(blg, id) in blogs" :key="id">
            <h3>{{blg.title}}</h3>
            <p>{{blg.body}}</p>
            </div>
        
    </div>
</template>

<script>
export default {

    data(){
        return{
            blogs: []
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then((data) =>{
            console.log(data);
            this.blogs = data.body.slice(0,10);
        })
    } 
}
</script>
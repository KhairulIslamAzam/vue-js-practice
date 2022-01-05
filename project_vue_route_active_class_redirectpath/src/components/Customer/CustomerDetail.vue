<template>
    <div>
        <h2>Customer Detail</h2>
        <router-link 
        tag="button" 
        :to="{name: 'customerEdit', params: {id: $route.params.id}, query:{locale: 'en', q : 100}}"
        class="btn btn-success">Edit</router-link>
    </div>
</template>
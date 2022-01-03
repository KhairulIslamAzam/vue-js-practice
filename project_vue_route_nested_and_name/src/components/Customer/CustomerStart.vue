<template>
    <div>
        <p>Please select a customer</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li" class="list-group-item" style="cursor: pointer" to="/customer/1">Customer 1</router-link>
            <router-link tag="li" class="list-group-item" style="cursor: pointer" to="/customer/2">Customer 2</router-link>
            <router-link tag="li" class="list-group-item" style="cursor: pointer" to="/customer/3">Customer 3</router-link>
        </ul>
    </div>
</template>
<template>
    <div>
        From User
        <ul>
            <li v-for="car in cars" :key="car">
                {{car}}
            </li>
        </ul>
    </div>
</template>

<script>
import { carMixin } from "./mixin"
export default {
    mixins:[carMixin]
}
</script>

import compHome from "./components/Home.vue"
import compCustomer from "./components/Customer/Customer.vue"
export const routes = [

    {
        path: '',
        component: compHome
    },
    {
        path: '/customer',
        component: compCustomer
    }
    
]
import compHome from "./components/Home.vue"
import compCustomer from "./components/Customer/Customer.vue"
import compCustomerStart from "./components/Customer/CustomerStart.vue"
import compCustomerDetails from "./components/Customer/CustomerDetail.vue"
import compCustomerEdit from "./components/Customer/CustomerEdit.vue"
export const routes = [

    {
        path: '',
        component: compHome
    },
    {
        path: '/customer',
        component: compCustomer,
        children:[
            {
                path: '',
                component: compCustomerStart,
                name: 'home'
            },
            {
                path: ':id',
                component: compCustomerDetails
            },
            {
                path: ':id/edit',
                component: compCustomerEdit,
                name: 'customerEdit'
            }
           
        ]

    },
    {
        path: '*',
        component: compHome
    }
    
]
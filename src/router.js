import Vue from 'vue';
import Router from 'vue-router';
import HomePageComponent from "./components/HomePage.vue"
import EditProductComponent from "./components/EditProduct.vue"
import ProductViewComponent from "./components/ProductView.vue"

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        
        {
            path: '*',
            component: HomePageComponent
        },
        {
            path:'/',
            component: HomePageComponent
        },
        {
            path: '/product-view/:id',
            name:"product-view",
            component: ProductViewComponent,
            props:true
        },
        {
            path: "/edit-product",
            name:'ProductEdit',
            component: EditProductComponent
        }
    ]

});

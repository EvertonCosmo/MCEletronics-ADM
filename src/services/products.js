import {http} from "./config"

export default{
    // CRUD 
    post:(product) =>{
        return http.post('product',product) 
    },
    update: (product) => {
        return http.put('product', product)
    },
    get:()=>{
        return http.get('products')
    },
    delete:(product)=>{
        return http.delete('/'+id,{data:product})
    }

}
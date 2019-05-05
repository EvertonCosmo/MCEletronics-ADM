<template>
    <div>
  <b-card no-body   >
    <b-tabs pills card active >
         <b-tab title="todos os produtos" @click="getProducts">
          <b-card-text>
              <table style="width:100%" class="table table-responsive">
                <thead>
                      <tr>
                          <th>id</th>
                          <th>Nome</th>
                          <th>Categoria</th>
                          <th>Preço</th>
                          <th>Quantidade</th>
                         
                   
                      </tr>
                </thead>
                
                <tbody>
                      <tr :key="product.id" v-for="product in orderedProducts">
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.categorie}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.quantity}}</td>
                          
                              
                         
                        
                      </tr>
                </tbody>
                  
              </table>
             
           
          
          </b-card-text>
          
       </b-tab>


      <b-tab title="Cadastrar Produto" >
          <b-card-text>
             <add-product></add-product>
          </b-card-text>
      </b-tab>

      <b-tab title="Remover Produto">
          <b-card-text>
              <remove-product></remove-product>
          </b-card-text>
       </b-tab>

         <b-tab title="Atualizar Produto">
          <b-card-text>
            <update-product></update-product>
          </b-card-text>
          
       </b-tab>

            </b-tabs>

  </b-card>

</div>
</template>


<script>
import axios from "axios";
import AddProduct from "./AddProduct.vue"
import RemoveProduct from "./RemoveProduct.vue"
import UpdateProduct from "./UpdateProduct.vue"

export default {
    name:"HomePage",
    components:{
        AddProduct,RemoveProduct,UpdateProduct
    },
    data(){
        return {
            api:"http://localhost:8080/project/api/products",
            products:[],
            loading:false,
            columnOrder: 'asc',
            columnSort:'name',
           
        }
   
    },
   methods:{
       sort(column){
           if(this.columnSort == column){
               this.columnOrder = (this.columnOrder =='asc') ? 'desc' : 'asc';
           }
           else{
               this.columnSort = column;
               this.columnOrder ='asc';
           }

       },
       getProducts(){
           axios.get(this.api)
        .then(Response => {
        this.products = Response.data.product;
            console.log(Response.data.product)
        
        })
       }
   }, 
    
     created(){
         this.getProducts();
        
    
  },
   
   computed:{
        orderedProducts(){
            return  _.orderBy(this.products, this.idProduct, this.columnOrder);
        }
    }

        
}

    

</script>

<style scoped>

</style>


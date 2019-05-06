<template>

    <div class="container">
        
          <ul>
        <li v-for="(erro, index) of errors" :key="index">
          campo <b>{{erro.field}}</b> - {{erro.defaultMessage}}
        </li>
      </ul>

      <form class="md-layout" @submit.prevent ="saveProduct">


          <div class="input-field">
             <label>Nome</label>
            <input type="text" v-model="product.name" placeholder="Nome" >
          </div>

           
         <div class="input-field">
             <label>Identificação</label>
             <input type="text" v-model="product.id" placeholder="Identificação" >
         </div>

         <div class="input-field">
          <label>Quantidade</label>
          <input type="number" v-model="product.quantity" placeholder="Quantidade" >
           </div>

           <div class="input-field">
          <label>Categoria</label>
          <input type="text" v-model="product.category" placeholder="Categoria" >
           </div>

           <div class="input-field">
          <label>Preço</label>
          <input type="text" v-model="product.price" placeholder="Preço" >
           </div>
           
           <!-- <label>Imagem do Produto</label>
            <vue-dropify style="width:20%;"></vue-dropify> -->

             <b-button type="submit" class="float-right" variant="primary">
                 Salvar<i class="material-icons left">save</i></b-button>

      </form>

      <table style="width:100%">
                <thead>
                      <tr>
                          <th>id</th>
                          <th>Nome</th>
                          <th>Categoria</th>
                          <th>Preço</th>
                          <th>Quantidade</th>
                          <th>Opções</th>
                   
                      </tr>
                </thead>
                
                <tbody>
                      <tr :key="product.id" v-for="product in products">
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.categorie}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.quantity}}</td>
                            <td>
                                <button @click="edit" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
                                <button @click="remove(product.id)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
                            </td>
                      </tr>
                </tbody>
                  
              </table>


    </div>
</template>


<script>
import axios from "axios";
// import ProductService from "../services/products.js"
import VueDropify from  "vue-dropify"

export default {
    name:"HomePage",
    components:{
         'vue-dropify': VueDropify
    },
    data(){
        return{
            api:"http://localhost:8080/project/api/products",
            product: {
                id:'',
                name:'',
                price:'',
                category:'',
                quantity:'',
                // photo:''     not added 
            },
            products:[],
            errors:[]
        }
    },
    methods:{
        getProducts(){
            axios.get(this.api).then(Response => {
                this.products = Response.data
            }).catch(e =>{
                console.log(e)
            })
        },
        edit(){
            this.product = product
        },
        saveProduct(){
            let formData = new FormData()
          
                
                formData.append('id',this.product.id);
                formData.append('name',this.product.name);
                formData.append('price',this.product.price);
                formData.append('categorie',this.product.category);
                formData.append('quantity',this.product.quantity);

                
                    axios.post(this.api,formData,{
                        
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(Response => {
                        this.product = {}
                        // INFORMATION SUCESS 
                        alert("adicionado com sucesso")
                        this.getProducts() // get Products updated
                        this.erros = {}
                    }).catch(e => {
                        console.log(e)
                        this.errors = e.response.data.errors
                    })
            
        },
        remove(id){
            if(confirm("Deseja remover o produto ? ")){
                    axios.delete(this.api + "/" + id).then(Response =>{
                        this.getProducts()
                    }).catch(e => {
                        console.log(e)
                        this.errors = e.response.data.errors
                    })
            }
        }

    },

    mounted(){
        this.getProducts()
    }
    
}
</script>

<style scoped>
.input-field input[type=text]:focus + label {
     color: #000;
}

 .input-field input[type=number]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
/* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }

</style>


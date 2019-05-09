<template>

    <div class="container">
        
        <ul>
         <li v-for="(erro, index) of errors" :key="index">
          campo <b>{{erro.field}}</b> - {{erro.defaultMessage}}
         </li>
        </ul>

      <form class="md-layout" @submit.prevent ="saveProduct">


          
             <label>Nome</label>
            <b-input type="text" v-model="product.name" placeholder="Nome"  required ></b-input>
        

           
        
             <label>Código de barras</label>
             <b-input type="text" v-model="product.id" placeholder="Identificação" required></b-input>
       

       
          <label>Quantidade</label>
          <b-input type="number" v-model="product.quantity" placeholder="Quantidade" value="1" step="1" min="1" pattern="[0-9]*" inputmode="numeric"  required></b-input>
          

          
          <label>Categoria</label>
          <b-form-select v-model="product.category" :options="options"> </b-form-select>
            <!-- <div class="mt-3">Selected: <strong>{{ product.category }}</strong></div> -->
          <!-- <b-select v-model="product.category">
            <option value="eletronico" selected>eletrônico</option>
            <option value="placa">placa</option>
            <option value="iniciante">iniciante</option>
            <option value="som">som</option>
            <option value="música">música</option>
          </b-select> -->
         
          
          

          
          <label>Preço</label>
          <b-input type="text" v-model="product.price" placeholder="Preço"  inputmode="numeric"  pattern="[0-9]*" required></b-input>
          
            <br>
           <label>Imagem do Produto</label>
            <!-- <vue-dropify style="width:20%;" v-model="product.photo" required></vue-dropify> -->
            <b-form-file accept="image/*"></b-form-file>
            
             <b-button type="submit"  style="margin-top:4% " class="float-right" variant="primary">
                 Salvar<i class="material-icons" alt="salvar">save</i></b-button>
                 

</form>
 <b-button  style="margin-top:4% " class="float-left" variant="primary">
                 Atualizar<i class="material-icons" alt="salvar" @click="getProducts">update</i></b-button>
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
                  
                <tbody >
                      <tr :key="product.id" v-for="product of products">
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.categorie}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.quantity}}</td>
                            <td>
                                <b-button @click="edit" alt="editar" variant="primary" ><i class="material-icons">create</i></b-button>
                                <b-button @click="remove(product.id)" variant="danger" alt="remover" ><i class="material-icons">delete_sweep</i></b-button>
                            </td>
                      </tr>
                </tbody>
                  
              </table>
<ul >
  <li v-for="product in products">{{product.id}} - {{product.name}}</li>
</ul>

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
            load: false,
            product: {
                id:'',
                bar_cod:'',
                name:'',
                price:'',
                category:'',
                quantity:'',
                photo:''    
            },
            options:[
                
                {value:"eletronico",text:"eletronico"},
                {value:"placa",text:"placa"},
                {value:"iniciante",text:"iniciante"},
                {value:"som",text:"som"},
                {value:"música",text:"música"}
            ],
            products:[],
            errors:[]
        }
    },
    methods:{
        getProducts(){
            axios.get(this.api).then(Response => {
                this.products = Response.data.product
            }).catch(e =>{
                console.log(e)
            })
          },

        edit(){
            let formData = new FormData();
            formData.append('id',this.id);
            formData.append('name',this.name);
            formData.append('price',this.price);
            formData.append('categorie',this.category);
            formData.append('quantity',this.quantity); 

            axios.put(this.api + "/" + this.idProduct,formData).then(Response => {
                console.log(Response);
            }).catch(e=>{
                console.log(e);
            })
        },

        
        saveProduct(){
            let formData = new FormData()
          
                
                formData.append('id',this.product.id);
                formData.append('name',this.product.name);
                formData.append('price',this.product.price);
                formData.append('categorie',this.product.category);
                formData.append('quantity',this.product.quantity);

                
                    axios.post(this.api,formData
                        ).then(Response => {
                        this.product = {}
                        // INFORMATION SUCESS 
                        alert("adicionado com sucesso")
                       // get Products updated
                        this.load = true
                        this.erros = {}
                        // this.getData()
                    }).catch(e => {
                        console.log(e)
                        this.errors = e.response.data.errors
                    })

            
        },
        getData(){
            axios.get(this.api).then(Response => {
                this.products = Response.data
            }).catch(e =>{
                console.log(e)
            })
        },
        remove(index){
            if(confirm("Deseja remover o produto ? ")){
                    axios.delete(this.api + "/" + index).then(Response =>{
                        // this.products.splice(id,1);
                        // this.getProducts()
                        // this.getData()

                    }).catch(e => {
                        console.log(e)
                        this.errors = e.response.data.errors
                    })
            }
        },
         handleFileUpload(){
            // this.photo = this.$refs.file.files[0];
        }

    },
    

    mounted(){
        this.getProducts()
    }
    
}
</script>

<style scoped>

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}
/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}


.input-field input[type=text]:focus + label {
     color: #000;
}

 .input-field input[type=number]:focus {
     border-bottom: 1px solid#033076;
     box-shadow: 0 1px 0 0 #033076;
   }
/* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #033076;
     box-shadow: 0 1px 0 0 #033076;
   }

</style>


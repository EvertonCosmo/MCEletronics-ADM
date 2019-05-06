<template>
 <div class="container">
        <h1 class="well">Atualizar Produto</h1>
        <div>
                <b-row>
                    <b-form>
                        <b-row>
                            <b-form-group class="col-sm-10">
                                <label>ID</label>
                                <b-input type="text" v-model="idProduct" placeholder="id do produto" required></b-input>
                            </b-form-group>
                        </b-row>
                    </b-form>
                </b-row> 
                <hr>
                <b-row>
                   <b-form-group class="col-sm-6">
                                <label>Nome</label>
                                <b-input  type="text" v-model="nameProduct" placeholder="Nome do Produto"></b-input>
                            </b-form-group>

                             <b-form-group class="col-sm-6">
                                <label>Código de identificação</label>
                                
                                <b-input type="text" placeholder="Código do Produto"></b-input>
                            </b-form-group>

                            <b-form-group class="col-sm-6" >
                                    <label>Categoria</label>
                                 <b-input type="text" v-model="categorieProduct" placeholder="Categoria do Produto" > </b-input>
                            </b-form-group>

                            <b-form-group class="col-sm-6" >
                                    <label>Preço</label>
                                 <b-input type="text" v-model.number="priceProduct" placeholder="Preço do Produto" > </b-input>
                            </b-form-group>
                             <b-form-group class="col-sm-2">
                                    <label>Quantidade</label>
                                 <b-input type="number" v-model.number="quantity" style="width:100%"  placeholder="quantidade" value="1" step="1" min="1" pattern="[0-9]*" inputmode="numeric" class="form-control" > </b-input>
                                
                            </b-form-group>
                            <b-form-group class="col-sm-4">
                                    <label>Imagem do Produto</label>
                               
                                 <b-form-file @change="handleFileUpload()" placeholder="nome da imagem"> </b-form-file>
                                
                            </b-form-group>
                </b-row>
                 <b-button class="float-right" @click="putProduct"  variant="primary">Confirmar</b-button>
                     
        </div>

     </div>

                          <!-- <b-button  @click="deleteProduct"  variant="primary">Remover</b-button> -->
</template>

<<script>
import axios from "axios"
export default {
    name:"UpdateProduct",
    components:{

    },
    data(){
        return{
            api:"http://localhost:8080/project/api/products",
            idProduct:null,
            nameProduct:"",
            priceProduct:null,
            quantity:null,
            categorieProduct:""

        }
    },
    methods: {
        putProduct(){
         let formData = new FormData();
            formData.append('id',this.idProduct);
            formData.append('name',this.nameProduct);
            formData.append('price',this.priceProduct);
            formData.append('categorie',this.categorieProduct);
            formData.append('quantity',this.quantity); 

            axios.put(this.api + "/" + this.idProduct,formData).then(Response => {
                console.log(Response);
            }).catch(e=>{
                console.log(e);
            })
        },

       
    },
}
</script>

<style scoped>

</style>

<template>
    
    <div class="container">
        <h1 class="well">Cadastro de Produto</h1>
        	<div>
                <b-row>
                    <b-form>
                        <b-row>
                            <b-form-group class="col-sm-6">
                                <label>Nome</label>
                                <b-input  type="text" v-model="nameProduct" placeholder="Nome do Produto"></b-input>
                            </b-form-group>

                             <b-form-group class="col-sm-6">
                                <label>Código de identificação</label>
                                
                                <b-input type="text" v-model="idProduct" placeholder="Código do Produto"></b-input>
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
                               
                                 <b-form-file placeholder="nome da imagem" @change="handleFileUpload()"  ref="file" > </b-form-file>
                                
                            </b-form-group>
                        </b-row>
                        <b-button class="float-right" v-if="!loading" @click="postProduct"  variant="primary">Confirmar</b-button>
                        <div v-else class="text-center">

                            <b-spinner label="Loading..."  />

                         </div>
                    </b-form>
                </b-row>
                   
        	</div>
                        
                         

    </div>

</template>


<script>
import axios from "axios"
export default {

    name:"AddProduct",

    data(){
        return {
            api:"http://localhost:8080/project/api/products",
            loading:false,
            nameProduct:"",
            idProduct:null,
            priceProduct:null,
            categorieProduct:"",
            quantity:"",
            file:''
        }
    },
    methods:{
        postProduct(){
            
            let formData = new FormData();

            formData.append('id',this.idProduct);
            formData.append('name',this.nameProduct);
            formData.append('price',this.priceProduct);
            formData.append('categorie',this.categorieProduct);
            formData.append('quantity',this.quantity);
            formData.append('file',this.file);
            axios.post(this.api,
            formData,{
                    
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
            ).then(Response => {
                loading = true;
                console.log(Response.data);
                console.log("SUCESS IN POST")
            }).catch(e=> {
                loading = false;
                 console.log("FAILURE IN POST")
                console.log(e)

            })
        },
         handleFileUpload(){
            this.file = this.$$refs.file.files[0];
        }
    },
}
</script>


<style scoped>

</style>

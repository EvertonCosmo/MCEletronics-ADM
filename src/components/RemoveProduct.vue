<template>
    

     <div class="container">
        <h1 class="well">Remover Produto</h1>
        <div>
                <b-row>
                    <b-form>
                        <b-row>
                            <b-form-group class="col-sm-10">
                                <label>ID</label>
                                <b-input type="text" v-model="id" placeholder="id do produto" required></b-input>
                            </b-form-group>
                        </b-row>
                          <b-button  @click="deleteProduct"  variant="primary">Remover</b-button>
                    </b-form>
                </b-row> 
        </div>

     </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"RemoveProduct",
    data(){
        return{
            api:"http://localhost:8080/project/api/products",
            id:null
        }
    },
    methods:{
        deleteProduct(){
         axios.delete(this.api + "/" + this.id).then(Response => {
                console.log(Response);
            }).catch(e => {
                console.log(e);
            })
        }
    }
    
}
</script>

<style scoped>

</style>



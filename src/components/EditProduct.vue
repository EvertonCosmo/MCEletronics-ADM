<template>
    <div class="container" v-show="load"> <!-- if data loaded show the edit form -->
        <form class="md-layout" @submit.prevent ="saveProduct">


          
             <label>Nome</label>
            <b-input type="text" v-model="product.name" placeholder="Nome"  required ></b-input>
        

           
        
             <label>Código de barras</label>
             <b-input type="text" v-model="product.id" placeholder="Identificação" required></b-input>
       

       
          <label>Quantidade</label>
          <b-input type="number" v-model="product.quantity" placeholder="Quantidade" value="1" step="1" min="1" pattern="[0-9]*" inputmode="numeric"  required></b-input>
          

          
          <label>Categoria</label>
          <b-form-select v-model="product.category" :options="options"> </b-form-select>

          <label>Preço</label>
          <b-input type="text" v-model="product.price" placeholder="Preço"  inputmode="numeric"  pattern="[0-9]*" required></b-input>
          <!-- <v-currency-field label="Value" v-bind="currency_config" :error-messages="errors.price" v-model="product.price"></v-currency-field> -->
          
            <br>
           <label>Imagem do Produto</label>
            <!-- <vue-dropify style="width:20%;" v-model="product.photo" required></vue-dropify> -->
            <b-form-file accept="image/*" id="file" name="image" ref="file" @change="handleFileUpload" ></b-form-file>
               <!-- <label class="btn btn-primary">
                    Escolher arquivo <input type="file" id="file" ref="file" name="image" @change="handleFileUpload()" hidden>
            </label><br> -->
            <textarea v-model="product.description">
              
            </textarea>
             <b-button type="submit"  style="margin-top:4% " class="float-right" variant="primary">Salvar<i class="material-icons" alt="salvar">save</i></b-button>
        </form>
    </div>

</template>

<script>
export default {
    name:'EditProduct',

}
</script>

<style>

</style>


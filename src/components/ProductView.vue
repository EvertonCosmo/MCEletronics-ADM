<template>
<div>
	<main-bar></main-bar>

	<div class="container"> <!-- if data loaded show the product informations -->
		<!-- {{product}} -->
		<h3>{{product.name}}</h3>

		<b-card tag="article" class="mb-2" title="produto" style="max-width:25rem">
			

		</b-card>


		<!-- <b-img  fluid-grow alt="Arduino" width="200" height="200"></b-img> -->
		
		<!-- <img :src="'/../../images/'+ {$product.id} +'?' +new Date().getTime()" width="200" height="200"> -->
		<!-- <img :src="'/../../images/' +'?' +new Date().getTime()" width="200" height="200"> -->
		<!-- </b-img> -->
<!-- <img :src="require(`@/assets/images/ ${product.id}`)" alt=""> -->
<!-- <img src="@/assets/images/1.jpg" />  -->
		<!-- </b-img> -->
		<!-- <img :src=""> -->	

	</div>	

</div>
</template>

<script>
import ProductService from "../services/products.js"
import MainBar from "./MainBar"
export default{
		name:'ProductView',
		components:{
			MainBar
		},
		data(){
			return{
				imgURL: product.id,
				product:{}
			}
		},
		
	
		methods:{
		},
		created(){
   			ProductService.getProduct(parseInt(this.$route.params.id)).then(Response => {
				this.product = Response.data
			}).catch(e => {
			
				console.log(e)
			})
			

		}



}


</script>

<style scoped>
	
</style>
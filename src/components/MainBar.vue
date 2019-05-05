<template>
    <header class="nav-bar">
        <span class="logo">{{tittle}}</span>
    </header>
</template>


<<script>
export default {
    name:"MainBar",

    data(){
        return{
            tittle:"MCEletronics"
        }


    }
}

</script>

<style scoped>

.nav-bar{
        background: linear-gradient(-90deg,#033076);
        box-shadow: 1px 2px 2px 2px #033076;
        height: 4rem;
        width: 100%;
        margin-bottom: 10px;
        margin:auto;
        
    }
    .logo{
        color:white;
       
        text-decoration: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 2.3rem;
        margin-left: 10px;
        
    }
</style>

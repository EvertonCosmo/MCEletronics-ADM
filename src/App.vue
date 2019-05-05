<template>
  <div id="app">
    <main-bar></main-bar>
    <home-page></home-page>
  </div>
  
</template>

<script>

import MainBar from "./components/MainBar.vue"
import HomePage from "./components/HomePage.vue"
export default {
  name: 'app',
  components: {
   MainBar,HomePage
  }
}
</script>

<style>


</style>

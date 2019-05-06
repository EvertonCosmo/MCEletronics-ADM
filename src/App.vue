<template>
  <div id="app">
    <main-bar></main-bar>
    <home-page></home-page>
  </div>
  
</template>

<script>

import HomePage from "./components/HomePage"
import MainBar from "./components/MainBar"
export default {
  name: 'app',
  components: {
   MainBar,HomePage
  }
}
</script>

<style>


</style>

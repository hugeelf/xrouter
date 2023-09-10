<template>
  <div id="app">
    <SiteHeader></SiteHeader>
    <RouterView></RouterView>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
  export default{
    name: 'app',

    components: {
    SiteHeader,
    RouterView,
    SiteFooter
},

    mounted (){
      this.$router.push({name: 'Home'})
    }
  }
</script>

<style lang="scss">

</style>

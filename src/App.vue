<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'
  import NavBar from './components/NavBar.vue'
  import { useRoute } from "vue-router";
  const route = useRoute();
</script>

<template>
  <NavBar/>
  <router-view/>
</template>

<style scoped>

</style>

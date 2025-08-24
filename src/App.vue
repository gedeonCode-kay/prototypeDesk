<script setup lang="ts">
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>
<template>
  <Header/>
  <Sidebar/>
  <div class="dv">
    <RouterView/>
  </div>
</template>
<style scoped>
.dv{
  background-color: aliceblue;
  margin-top: 9rem;
  border-radius: 5rem;
  margin-right: 1rem;padding: 1rem;
  margin-left: 22rem;
}
</style>
<script setup>
import Header from '../components/Header.vue';
import UserData from '../components/UserData.vue'


</script>
<template>
  <suspense>
    <template #default>
      <UserData/>
    </template>
    <template #fallback>
      <div class="container">
        <Header/>
        <h4>Loading...</h4>
      </div>
    </template>
  </suspense>
</template>

<style scoped>
h4{
  margin-top: 100px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  text-align: center;
}
</style>

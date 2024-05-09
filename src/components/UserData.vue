<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue'

const user = ref({})

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true;

  let {data} = await axios.get('http://localhost:8000/api/user')

  user.value = data

</script>
<template>
      <div class="container">
        <Header/>
        <h4>The user has been logged in successfully</h4>
        <div class="data">
          <p>Welcome back <span>{{ user.name }}</span></p>
          <p>Your email is <span>{{ user.email }}</span></p>
        </div>
      </div>
</template>

<style scoped>
h4{
  margin-top: 100px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  text-align: center;
}
.container{
  padding: 50px 4%;
}
.container .data{
  margin: 100px 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
}
.container .data span{
  color: blue;
}
</style>

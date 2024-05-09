<script setup>

import {ref} from 'vue'

import axios from 'axios'

import { useRouter } from 'vue-router'

const form = ref({
  name: null,
  email: null,
  password: null
})

const router = useRouter()

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true;

const onRegister = async () => {
  await axios.get('http://localhost:8000/sanctum/csrf-cookie')
  await axios.post('http://localhost:8000/register', {
    name: form.value.name,
    email: form.value.email,
    password: form.value.password
})

router.push('/dashboard')

}
</script>

<template>
  <div class="container">
    <form @submit.prevent="onRegister">
      <h2>Create your account</h2>
      <div class="input-field">
        {{ form.name }}
        <label for="name">Enter your Name</label>
        <input type="text" id="name" v-model="form.name">
      </div>
      <div class="input-field">
        <label for="email">Enter your Email</label>
        <input type="text" id="email" v-model="form.email">
      </div>
      <div class="input-field">
        <label for="password">Enter your password</label>
        <input type="password" id="password" v-model="form.password">
      </div>
      <div class="submit">
        <button type="submit">Create account</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.container{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b3bbff;
}
.container form{
  width: 500px;
  border: 1px solid #000;
  padding: 15px;
}
form .input-field{
  width: 100%;
  margin: 10px 0;
}
form .input-field label{
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
}
form .input-field input{
  font-size: 18px;
  width: 100%;
  padding: 12px 10px;
  outline: none;
}
form .submit{
  width: 100%;
}
form .submit button{
  display: inline-block;
  width: 100%;
  padding: 10px;
  text-align: center;
  background: #0707ff;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
}
form h2{
  text-align: center;
  padding: 10px 0;
  border-bottom: 2px solid #000;
}
</style>
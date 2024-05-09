<script setup>

import {ref} from 'vue'
import { useRouter } from 'vue-router';
import axios from '../lib/axios.js';
import useAuthStore from '../stores/auth.js';
const router = useRouter()

const form = ref({
  email: null,
  password: null
})
const error = ref(null)

const auth = useAuthStore()

const onLogin = async () => {
  try {
    await axios.get('/sanctum/csrf-cookie')
    await axios.post('/login', form.value)
    const {data} = await axios.get('/api/user')
    auth.setUser(data)
  } catch (err) {
    error.value = err
  }
}

</script>

<template>
  <div class="container">
    {{ user }}
    <form @submit.prevent="onLogin">
      <h2>Sign in to your account</h2>
      <div class="input-field">
        <label for="email">Enter your Email</label>
        <input type="text" id="email" v-model="form.email">
      </div>
      <div class="input-field">
        <label for="password">Enter your password</label>
        <input type="password" id="password" v-model="form.password">
      </div>
      <div class="submit">
        <button type="submit">Continue</button>
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
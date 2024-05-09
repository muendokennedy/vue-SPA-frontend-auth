<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
  <header>
    <div class="brand-name">Vue App</div>
    <div class="nav-links">
      <RouterLink to="/register" class="link">Sign up</RouterLink>
      <RouterLink to="/login" class="link">Log in</RouterLink>
      <RouterLink to="/" class="link">Home</RouterLink>
    </div>
  </header>
</template>

<style scoped>
header{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: #0707ff;
  display: flex;
  top: 0;
  position: fixed;
  width: 100vw;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  padding: 20px 3%;
  color: #fff;
  font-size: 20px;
}
.nav-links{
  display: flex;
  gap: 20px;
}
.nav-links .link{
  color: #fff;
  text-decoration: none
}
</style>
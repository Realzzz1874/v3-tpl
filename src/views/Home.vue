<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { userStore } from '@/store/index'
// user store
const user = userStore()
</script>

<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="user.name" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>

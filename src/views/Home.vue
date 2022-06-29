<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { refreshStore } from '@/store/index'
import { HomeService } from './home'
// use store
const refresher = refreshStore()
console.log(refresher.refreshNum)

// use axios
const { testApiData, name } = HomeService()
// testApiData()

const retryData = () => {
  testApiData()
}
</script>

<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" @click="retryData" />
    <HelloWorld :msg="name" />
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

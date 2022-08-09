<script setup lang="ts">
import { NButton } from 'naive-ui'
// defineProps<{ msg: string }>()
defineProps({
  msg: String
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <n-button type="primary">naive-ui</n-button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
h1 {
  margin: 20px auto;
}
</style>

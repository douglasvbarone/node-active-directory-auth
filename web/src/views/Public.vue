<template>
  <div>
    <h1>Public Info:</h1>
    <button @click="getPublicInfo">Get Public Info</button>

    <div>
      <code class="json">
        {{ publicInfo }}
      </code>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const PUBLIC_URL = 'http://localhost:3000/api/public'

const publicInfo = ref({})

async function getPublicInfo() {
  const response = await fetch(PUBLIC_URL)
  const data = await response.json()
  publicInfo.value = data
}
</script>

<style scoped>
code {
  margin-top: 2em;
  display: block;
  background-color: #eee;
  padding: 1em;
  border-radius: 5px;
}
</style>

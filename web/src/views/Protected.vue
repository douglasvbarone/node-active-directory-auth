<template>
  <div>
    <h1>Protected Info:</h1>
    <button @click="getProtectedInfo">Get Protected Info</button>

    <div>
      <code class="json">
        {{ publicInfo }}
      </code>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

const { token } = useAuth()

const PROTECTED_URL = 'http://localhost:3000/api/protected'

const publicInfo = ref({})

async function getProtectedInfo() {
  const response = await fetch(PROTECTED_URL, {
    headers: {
      authorization: token.value
    }
  })

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

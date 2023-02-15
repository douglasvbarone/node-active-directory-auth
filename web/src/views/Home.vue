<template>
  <div v-if="user">
    Hello <strong>{{ user }}</strong
    >!
  </div>
  <div v-else>You are not logged in</div>
</template>

<script setup>
import { useAuth } from '../composables/useAuth'

const { user } = useAuth()
</script>

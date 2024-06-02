<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="error-page">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <router-link to="/" class="go-home-link">GO HOME</router-link>
        </div>
</template>

<style scoped>
.error-page {
  max-width: 600px;
  text-align: center;
  margin: 250px auto;
}
.go-home-link {
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}
</style>
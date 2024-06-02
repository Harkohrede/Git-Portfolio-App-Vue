<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div className="error-page">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <router-link to="/" class="go-home-link">GO HOME</router-link>
        </div>
</template>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 50px;
}
</style>
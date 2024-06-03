<script setup>
  import { ref, provide } from 'vue';
  
  const errorOccurred = ref(false);
  const errorMessage = ref('');
  
  const handleError = (error) => {
    errorOccurred.value = true;
    errorMessage.value = error.message;
  };
  
  provide('errorBoundary', handleError);
  
  const retry = () => {
    errorOccurred.value = false;
    errorMessage.value = '';
  };
</script>
  
<template>
    <div>
      <slot v-if="!errorOccurred"></slot>
      <div v-else class="error-fallback">
        <h1>Something went wrong.</h1>
        <p>{{ errorMessage }}</p>
        <button @click="retry">Retry</button>
      </div>
    </div>
  </template>

  <style scoped>
  .error-fallback {
    text-align: center;
    padding: 20px;
    border: 1px solid red;
  }
  </style>
  
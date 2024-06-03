<script setup>
const throwError = () => {
  throw new Error('This is a test error')
}
</script>

<template>
  <div>
    <h1>Whoops! Something went wrong</h1>
    <button @click="throwError">Throw Error</button>
  </div>
</template>

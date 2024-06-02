<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import ErrorPage from './ErrorPage.vue'

const route = useRoute()
const repository = ref(null)
const error = ref(false)

const fetchRepository = async (id) => {
  try {
    const response = await axios.get(`https://api.github.com/repositories/${id}`)
    repository.value = response.data
  } catch (err) {
    console.error('Error fetching repository:', error)
    error.value = true
  }
}

onMounted(() => {
  fetchRepository(route.params.id)
})
</script>

<template>
  <section class="details-container" v-if="repository">
    <h1 class="repository-name">{{ repository.name }}</h1>
    <p class="repository-description">{{ repository.description }}</p>
    <div class="repository-details">
      <p>Stars: {{ repository.stargazers_count }}</p>
      <p>Language: {{ repository.language }}</p>
      <p>Forks: {{ repository.forks_count }}</p>
      <p>Owner: {{ repository.owner.login }}</p>
      <p>ID: {{ repository.id }}</p>
      <p>Size: {{ repository.size }}</p>
      <p>Description: {{ repository.description }}</p>
      <p>Clone Url: {{ repository.clone_url }}</p>
      <p>Website: {{ repository.homepage }}</p>
      <p>License: {{ repository.license?.name }}</p>
      <!-- Added .name to license -->
    </div>
    <router-link to="/" class="go-home-link">GO HOME</router-link>
  </section>
  <div v-else-if="error">
    <ErrorPage/>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style>
.details-container {
    max-width: 600px;
    margin: 70px auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    color: rgb(26, 25, 25);
  }
  
  .repository-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .repository-description {
    margin-bottom: 20px;
    font-size: 20px ;
    font-weight:bold;
  }
  
  .repository-details p {
    margin-bottom: 8px;
  }
  
  .go-home-link {
    width: fit-content;
    display: block;
    margin: 10px auto;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 10px;
    background-color: #24b44f;
    font-size: 20px;
    color: #f4f4f4;
  }
  
  .go-home-link:hover {
    background-color: #06ff51;
    color: #f4f4f4;
  }
</style>

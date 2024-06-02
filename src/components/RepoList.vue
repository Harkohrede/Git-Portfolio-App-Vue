<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchRepositories } from '../fetch'
import  PaginateComp from './PaginateComp.vue'
import {RouterLink} from 'vue-router'


const repos = ref([])
const currentPage = ref(1)
const perPage = ref(2)
const searchQuery = ref('')
// Fetching the repositories
const getRepositories = async () => {
  try {
    const data = await fetchRepositories();
    repos.value = data;
    console.log('Fetched Repositories:', repos.value);
  } catch (error) {
    console.error('Error loading repositories:', error);
  }
};

onMounted(async () => {
  await getRepositories();
});

// watch(repos, () => {
//   console.log('repos.value changed, recalculating totalItems...', totalItems)
//   totalItems.value = repos.value.length
// })
const filteredRepo = computed(() =>{
 return repos.value.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
}
)
const totalItems = computed(() => {
  //console.log('Computed totalItems:', repos.value.length);
  return filteredRepo.value.length;
});
const totalPages = computed(() => {
  return Math.ceil(totalItems.value / perPage.value)
})
const items = computed(() => {
  const firstIndex = (currentPage.value - 1) * perPage.value
  const lastIndex = perPage.value + firstIndex
  return filteredRepo.value.slice(firstIndex, lastIndex)
})
// creating a search function
const search = (event) => {
    searchQuery.value = event.target.value;
    currentPage.value = 1
}

</script>

<template>
  <div className="header">
    <h1>MY PORTFOLIO</h1>
    <section className="repoList">
      <h2>My Repositories</h2>
      <input 
        type="text" 
        v-model="searchQuery" 
        className="search-repo"
        placeholder="Search repositories..." 
        @input="search" 
      />
      <ul>
        <li v-for="repo in items" :key="repo.id">
            <span>{{ repo.name.toUpperCase() }}</span>
            <button class="info-btn">
                <RouterLink class="link" :to="`/repository/${repo.id}`">DETAILS</RouterLink>
            </button>
        </li>
      </ul>
      <PaginateComp 
        :currentPage="currentPage" 
        :totalPages="totalPages" 
        @update:currentPage="currentPage = $event" 
      />
    </section>
  </div>
</template>

<style scoped>
@keyframes text-color-transition {
    from {
      color: white; 
    }
    to {
      color: black; 
    }
  }
  .header>h1 {
    animation: text-color-transition 5s ease-in-out; 
    text-align: center;
  }
.repoList{
    max-width:800px ;
    margin:50px auto;
    border: 5px solid white;
    border-radius: 20px;
}
.repoList>h2{
    text-align: center;
    font-size: 30px;
}
.search-repo {
    width: 689px ;
    margin-inline: 46px;
    margin-block: 10px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  .search-repo::placeholder {
    color: #999;
  }
  .search-repo:focus {
    outline: none;
    border-color: #007bff;
  }  
ul{
    list-style: none;
}
.info-btn {
  display: block;
  background: none;
  border: none;
  padding: 10px;
  margin: 20px auto;
}

.link {
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.link:hover {
  background-color: black;
  color: white;
}
li{
    border: 2px solid;
    border-radius: 10px;
    margin-block: 30px;
    margin-right: 44px ;
}
span{
    display: block;
    width: max-content;
    margin: 20px auto;
    font-size: 25px;
    font-weight: 500;
}
.navBar{
    display: flex;
    width: fit-content;
    margin: 20px auto;
}
.navBar>button{
    margin-inline: 5px;
}
.active{
    background-color: white;
    color: black;
}
</style>

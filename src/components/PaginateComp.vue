<script setup>
import {computed} from 'vue'
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});
// Define emits to communicate with parent component
const emit = defineEmits(['update:currentPage']);

const prev = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1);
  }
};

const next = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:currentPage', props.currentPage + 1);
  }
};

const goto = (page) => {
  emit('update:currentPage', page);
};
const totalPagesArray = computed(() => {
  return Array.from({ length: props.totalPages }, (_, i) => i + 1);
});
</script>
<template>
    <div class="pagination">
        <button @click="prev" :disabled="currentPage === 1" class="page-button">Previous</button>
        <button v-for="page in totalPagesArray" :key="page" @click="goto(page)" :class="['page-number', { 'active': currentPage === page }]">{{ page }}</button>
        <button @click="next" :disabled="currentPage === totalPages" class="page-button">Next</button>
      </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.page-button {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.page-button:hover {
  background-color: #cac7c7;
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-number {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.page-number:hover {
  background-color: #e0e0e0;
}

.page-number.active {
  background-color: #1b1c1d;
  color: white;
  border-color: #1b1c1d;
}
</style>
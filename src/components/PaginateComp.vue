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
        <button @click="prev" :disabled="currentPage === 1">Previous</button>
        <button v-for="page in totalPagesArray" :key="page" @click="goto(page)" className="page==currentPage? 'active':''">{{ page }}</button>
        <button @click="next" :disabled="currentPage === totalPages">Next</button>
      </div>
</template>
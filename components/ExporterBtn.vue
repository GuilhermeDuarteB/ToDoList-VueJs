<template>
    <h1>Export Tasks</h1>

    <div class="btn">
        <button @click="exportTasks">Export as TXT</button>
    </div>
   </template> 

<script setup>
import { useTaskStore } from '../stores/tasks.js'

const taskStore = useTaskStore()

const exportTasks = () => {
  taskStore.exportToTxt()
}
</script>


<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.btn button {
  padding: 10px 20px;
  background: var(--color-accent);
  color: var(--color-bg);
  border-radius: 8px;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn button:hover {
  opacity: 0.8;
}
</style>
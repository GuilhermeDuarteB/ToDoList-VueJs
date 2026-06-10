<template>
  <div class="tasks-page">
    <h1>Tasks</h1>

    <TaskForm @add="store.addTask" />

    <TaskList :tasks = "store.tasks"
    @toggle = "store.toggleDone"
    @delete = "store.deleteTask"
    />
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/tasks.js'
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'

const store = useTaskStore()
</script>

<style scoped>
.tasks-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 0;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}
</style>
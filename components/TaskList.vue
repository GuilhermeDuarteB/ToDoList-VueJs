<template>
    <div class="task-list">

        <!-- No tasks message -->
        <p v-if="tasks.length === 0" class="empty">
            No tasks yet. Add one above!</p>

        <!-- Task items -->
         <TaskItem
         v-else
         v-for="task in tasks"
         :key="task.id"
         :task="task"
         @toggle="$emit('toggle', task.id)"
         @delete="$emit('delete', task.id)"
            />
    </div>
    </template>

<script setup>
import TaskItem from './TaskItem.vue'

defineProps(['tasks'])
defineEmits(['toggle', 'delete'])
</script>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.empty {
  opacity: 0.4;
  font-size: 0.9rem;
  padding: 24px 0;
}
</style>
<template>
<div class="task-item" :class="{ done: task.done }">

<input 
type="checkbox"
:checked="task.done"
@change="$emit('toggle')"
/>

<div class="task-info">
    <span class="task-title">{{ task.title }}</span>
   <div class="task-meta">
        <span class="tag">{{ task.category }}</span>
        <span class="tag" :class="task.priority">{{ task.priority }}</span>
        <span class="date">{{ task.createdAt }}</span>
      </div>

      <button class="delete-btn" @click="$emit('delete')">X</button>
</div>
</div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue'
    defineProps(['task'])
    defineEmits(['toggle', 'delete'])
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  transition: opacity 0.2s;
}

.task-item.done {
  opacity: 0.45;
}

.task-item.done .task-title {
  text-decoration: line-through;
}

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: var(--color-accent);
  flex-shrink: 0;
}

.task-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task-title {
  font-size: 0.95rem;
}

.task-meta {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 20px;
  background: var(--color-border);
  opacity: 0.8;
}

.tag.high   { background: #fde8e8; color: #a32d2d; }
.tag.medium { background: #faeeda; color: #854f0b; }
.tag.low    { background: #e1f5ee; color: #0f6e56; }

body.dark .tag.high   { background: #3d1515; color: #f09595; }
body.dark .tag.medium { background: #3d2e0b; color: #fac775; }
body.dark .tag.low    { background: #0d2e1e; color: #5dcaa5; }

.date {
  font-size: 0.7rem;
  opacity: 0.4;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  opacity: 0.3;
  font-size: 0.85rem;
  padding: 4px;
  transition: opacity 0.2s;
  flex-shrink: 0;
}

.delete-btn:hover { opacity: 0.8; }
</style>
<template>
    <div class="task-form">

        <!-- Task Title Input -->
        <input v-model="title"
        placeholder="Add a new task..."
        @keyup.enter="submit" 
        class = "input-title"
        />

        <div class="form-row">
              <select v-model="category">
            <option value="">
                Category
            </option>
            <option
            v-for = "cat in store.categories" :key="cat"
            :value="cat">
                {{ cat }}
            </option>
            </select>

            <select v-model="priority">
                <option value="">Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            </select>

            <button @click="submit" :disabled = "!title.trim()">Add Task</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/tasks.js'

const store = useTaskStore()
const emit = defineEmits(['add'])

const title = ref('')
const category = ref('')
const priority = ref('')

function submit(){
    if (!title.value.trim()) return

    emit('add', {
        title: title.value.trim(),
        category: category.value || 'Other',
        priority: priority.value || 'Low'
    })

    title.value = ''
    category.value = ''
    priority.value = 'low'
}
</script>

<style scoped>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-title {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-surface);
  color: var(--color-text);
  outline: none;
  transition: border-color 0.2s;
}

.input-title:focus {
  border-color: var(--color-accent);
}

.form-row {
  display: flex;
  gap: 8px;
}

select {
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 0.85rem;
  cursor: pointer;
}

button {
  padding: 8px 20px;
  background: var(--color-accent);
  color: var(--color-bg);
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-left: auto;
}

button:hover { opacity: 0.8; }
button:disabled { opacity: 0.3; cursor: not-allowed; }
</style>
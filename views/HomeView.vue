<template>
<div class="home">
  <h1>Todo App with Vue.js</h1>
  <p class= "subtitle">Manage your tasks efficiently with this simple and intuitive application.</p>
<div class= "stats">
<div class = "stat-card">
  <h2>Total Tasks</h2>
   <span class="stat-number">{{ total }}</span>
    <span class="stat-label">Total Tasks</span>
  </div>
<div class="stat-card done">
        <span class="stat-number">{{ done }}</span>
        <span class="stat-label"> Completed</span>
      </div>
</div>

<ExporterBtn />

<p class="footer">Stay organized, one task at a time.</p>
<createdBy />
</div>
</template>

<script setup>
import { useTaskStore } from '../stores/tasks.js'
import ExporterBtn from '../components/ExporterBtn.vue'
import createdBy from '../components/createdBy.vue'

const taskStore = useTaskStore()
const total = taskStore.total
const done = taskStore.done
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px 0;
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1rem;
  opacity: 0.5;
}

.btn-primary {
  display: inline-block;
  margin-top: 8px;
  padding: 10px 20px;
  background: var(--color-accent);
  color: var(--color-bg);
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  width: fit-content;
  transition: opacity 0.2s;
}

.btn-primary:hover { opacity: 0.8; }

.stats {
  display: flex;
  gap: 16px;
}

.stat-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
  background: var(--color-surface);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -1px;
}

.stat-label {
  font-size: 0.8rem;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer {
  font-size: 0.85rem;
  opacity: 0.35;
}
</style>
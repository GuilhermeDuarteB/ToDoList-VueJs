<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo">Todo App</RouterLink>
    <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/tasks">Tasks</RouterLink></li>
      </ul>
    <div class="nav-right">
      <button class="theme-btn" @click="$emit('toggle-theme')">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
defineProps(['isDark'])
defineEmits(['toggle-theme'])
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg);
}

.logo {
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  color: var(--color-text);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links {
  align-items: left;
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  opacity: 1;
}

.theme-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 4px;
}
</style>
<template>
  <NavBar @toggle-theme="toggleTheme" :isDark="isDark" />
  <main class="container">
    <RouterView />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark', isDark.value)
}</script>

<style>
/* light mode */
body {
  --color-bg: #ffffff;
  --color-surface: #f5f5f5;
  --color-border: #e8e8e8;
  --color-text: #1a1a1a;
  --color-accent: #1a1a1a;

  background: var(--color-bg);
  color: var(--color-text);
  font-family: sans-serif;
  transition: background 0.2s, color 0.2s;
}

/* dark mode*/
body.dark {
  --color-bg: #0f0f0f;
  --color-surface: #1a1a1a;
  --color-border: #2a2a2a;
  --color-text: #f0f0f0;
  --color-accent: #f0f0f0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px;
}
</style>
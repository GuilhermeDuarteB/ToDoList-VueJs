<template>
    <div class="created-by">
        <p>Created by Guilherme Branco</p>
        <div class="gitIcon">
            <a href="https://github.com/GuilhermeDuarteB" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
        </div>
        <div class="linkIcon">
            <a href="https://www.linkedin.com/in/guilhermbranco/" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
        </div>
    </div>
    </template>

<style scoped>
.created-by {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  opacity: 0.5;
}

.gitIcon {
  font-size: 1.2rem;
}

.gitIcon a, .linkIcon a {
  color: inherit;
  transition: color 0.2s;
}

.gitIcon a:hover, .linkIcon a:hover {
  color: var(--color-accent);
  opacity: 0.8;
}

.linkIcon {
  font-size: 1.2rem;
}
</style>
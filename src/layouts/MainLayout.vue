<template>
    <div class="layout">
        <header class="header">
            <h1>Todo App</h1>
            <button class="theme-btn" @click="store.toggleTheme()">
                {{ store.dark ? '🌞' : '🌙' }}
            </button>
        </header>

        <main class="content">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'

const store = useTodoStore()
</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    background: var(--bg);
    color: var(--text);
}

.header {
    background: var(--card-bg);
    padding: 6px 14px;
    font-size: 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 40px 16px;
}

.theme-btn {
    background: transparent;
    color: var(--text);
    border: none;
    font-size: 22px;
    cursor: pointer;
}
</style>

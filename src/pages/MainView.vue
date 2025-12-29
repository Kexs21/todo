<template>
    <div class="todo">
        <input
            v-model="newTodo"
            @keyup.enter="addTodo"
            placeholder="Add a task..."
        />
        <button @click="addTodo">Add</button>

        <ul>
            <li
                v-for="todo in store.todos"
                :key="todo.id"
            >
                <label>
                    <input type="checkbox" v-model="todo.done" />
                    <span :class="{ done: todo.done }">{{ todo.text }}</span>
                </label>

                <button @click="store.removeTodo(todo.id)">✕</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

const store = useTodoStore()
const newTodo = ref('')

function addTodo() {
    store.addTodo(newTodo.value)
    newTodo.value = ''
}
</script>

<style scoped>
.todo {
    width: 100%;
    max-width: 450px;
    background: var(--card-bg);
    color: var(--text);
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--border);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.todo input {
    width: 80%;
    padding: 12px 14px;
    border-radius: 8px;
    margin-bottom: 12px;
    font-size: 16px;
    background: var(--card-bg);
    color: var(--text);
    border: 1px solid var(--border);
    outline: none;
    transition: 0.2s;
}

.todo input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

button {
    background: var(--primary);
    color: white;
    border: none;
    padding: 10px 14px;
    border-radius: 8px;
    cursor: pointer;
    margin-left: 8px;
    transition: 0.2s;
}

button:hover {
    filter: brightness(0.9);
}

ul {
    list-style: none;
    padding: 0;
    margin-top: 16px;
}

li {
    background: var(--card-bg);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 8px;
    margin-bottom: 10px;
}

li label {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[type="checkbox"] {
    width: 18px;
    height: 18px;
}

.done {
    text-decoration: line-through;
    opacity: 0.5;
}
</style>

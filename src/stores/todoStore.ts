import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

interface Todo {
    id: number
    text: string
    done: boolean
}

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<Todo[]>(JSON.parse(localStorage.getItem('todos') || '[]') as Todo[])
    const dark = ref(JSON.parse(localStorage.getItem('dark') || 'false'))

    watch(todos, (newVal) => {
        localStorage.setItem('todos', JSON.stringify(newVal))
    }, { deep: true })

    watch(dark, (newVal) => {
        localStorage.setItem('dark', JSON.stringify(newVal))
        document.documentElement.dataset.theme = newVal ? 'dark' : 'light'
    }, { immediate: true })

    function addTodo(text: string) {
        if (!text.trim()) return
        todos.value.push({
            id: Date.now(),
            text,
            done: false,
        })
    }

    function removeTodo(id: number) {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    function toggleTheme() {
        dark.value = !dark.value
    }

    return { todos, dark, addTodo, removeTodo, toggleTheme }
})

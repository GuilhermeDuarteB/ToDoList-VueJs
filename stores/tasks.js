import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([])
    const categories = ref(['Work', 'Personal', 'Shopping', 'Other'])

// Add a new task
function addTask(task){
    tasks.value.push({
        id: Date.now(),
        title: task.title,
        category: task.category,
        priority: task.priority,
        done: false,
        createdAt: new Date().toLocaleDateString('pt-PT'),
    })
}

// delete task
function deleteTask(id){
    tasks.value = tasks.value.filter(task => task.id !== id)
}

//edit task
function editTask(id, updated){
    const task = tasks.value.find(task => task.id === id)
    if(task) Object.assign(task, updated)
}

//conclude
function toggleDone(id){
    const task = tasks.value.find(task => task.id === id)
    if(task) task.done = !task.done
}

//add category
function addCategory(name){
    if(!categories.value.includes(name)){
        categories.value.push(name)
    }
}

//delete category
function deleteCategory(name){
    categories.value = categories.value.filter(c => c !== name)
    tasks.value.forEach(task => {
        if(task.category === name) task.category = 'No Category'
    })
}

//txt export

function exportToTxt(){
        const lines = tasks.value.map(t =>
      `[${t.done ? 'X' : ' '}] ${t.title} | ${t.category} | Priority: ${t.priority} | ${t.createdAt}`
    )
    const content = lines.join('\n')
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href  = url
    a.download = 'tasks.txt'
    a.click()
    URL.revokeObjectURL(url)
}

//conclude total 

const total = computed(() => tasks.value.length)
const done = computed(() => tasks.value.filter(t => t.done).length)

return {
    tasks,
    categories,
    addTask,
    deleteTask,
    editTask,
    toggleDone,
    addCategory,
    deleteCategory,
    exportToTxt,
    total,
    done,
}
})
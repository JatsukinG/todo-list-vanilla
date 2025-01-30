const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-input')
const tasksContainer = document.querySelector('#tasks-container')

let tasks = []

function addTask(name) {
    tasks = [
        ...tasks,
        {
            id: new Date().getTime(),
            name: name,
            completed: false
        }
    ]

    renderTasks()
}

function renderTasks() {
    tasksContainer.innerHTML = ""

    for (let task of tasks) {
        const html = `
         <li class="task-item">
            <div class="task-info">
              <span class="task-checkbox"></span>
              <p class="task-name">${task.name}</p>
            </div>
            <button class="delete-task-btn">
              <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        `

        tasksContainer.innerHTML = tasksContainer.innerHTML + html
    }
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = taskInput.value.trim()

    if (name) {
        addTask(name)
        taskInput.value = ''
    } else {
        window.alert("Deber escribir algo")
    }
})
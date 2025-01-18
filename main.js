const taskForm = document.querySelector('#task-form');

let tasks = []

function addTask(name) {
    tasks = [
        ...tasks,
        {
            name: name,
            completed: false
        }
    ]

    console.log(name)
}

function removeTask(name) {
    tasks.splice(tasks.indexOf(name), 1)
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.getElementById('task-input').value

    addTask(name)
})
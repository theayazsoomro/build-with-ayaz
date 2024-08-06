let tasks = document.getElementById("tasks");
let btn = document.getElementById("btn");
let inputArea = document.getElementById("input-area");


function fetchTodos(){
    let storedTasks = JSON.parse(localStorage.getItem("todos")) || [];
    tasks.innerHTML = '';
    storedTasks.forEach((task, index) => {
        tasks.innerHTML += `<li class="task">${task.task} <button class="delete btn btn-danger" task-index="${index}">Delete</button></li>`;
    })
}

btn.addEventListener("click", () => {
    if(inputArea.value.trim() === '') return;

    let storedTasks = JSON.parse(localStorage.getItem("todos")) || [];
    storedTasks.push({
        _id: Math.random(),
        task: inputArea.value,
        status: false
    });

    localStorage.setItem("todos", JSON.stringify(storedTasks));
    console.log("Task added!");
    
    inputArea.value = '';

    fetchTodos();
});

tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
                let index = e.target.getAttribute("task-index");
                let storedTasks = JSON.parse(localStorage.getItem("todos")) || [];
                storedTasks.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(storedTasks));
                fetchTodos();
            }
})


// Dark Mode
let darkMode = document.querySelector('[dark-mode="true"]');

function darkModeFunc(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        darkMode.classList.add("dark");
    }else{
        darkMode.classList.add("light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchTodos();
    darkModeFunc();
})

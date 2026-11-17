//Brandon Androsky
//11/17/2026
//Module 11.2

//Sets an empty array to hold the tasks
let tasks = [];

//Function to add a task to the array and display it
function addTask() {
    const taskInput = document.getElementById('inputField');
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        displayTasks();
        window.alert(task + ' added successfully.');
    } else {
        window.alert('Please enter a task.');
    }
}

//Function to delete the last task from the array and display the updated list
function deleteTask() {
    if (tasks.length > 0) {
        const removedTask = tasks.pop();
        displayTasks();
        window.alert(removedTask + ' deleted successfully.');
    } else {
        window.alert('No tasks to delete.');
    }
}

//Function to sort the tasks alphabetically and display the sorted list
function sortTasks() {
    if (tasks.length > 0) {
        tasks.sort();
        displayTasks();
        window.alert('Tasks sorted alphabetically.');
    } else {
        window.alert('No tasks to sort.');
    }
}

//Function to display the tasks in the unordered list
function displayTasks() {
    const taskDisplay = document.getElementById('taskList');
    taskDisplay.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = tasks[i];
        taskDisplay.appendChild(listItem);
    }
}
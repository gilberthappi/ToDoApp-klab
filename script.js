const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const selectAllBtn = document.getElementById("selectAllBtn");
const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskClick);
selectAllBtn.addEventListener("click", selectAllTasks);
deleteSelectedBtn.addEventListener("click", deleteSelectedTasks);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
  }
}

function handleTaskClick(event) {
  if (event.target.classList.contains("delete-btn")) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
  }
}

function selectAllTasks() {
  const checkboxes = document.querySelectorAll(".task-checkbox");
  checkboxes.forEach(checkbox => {
    checkbox.checked = true;
  });
}

function deleteSelectedTasks() {
  const checkboxes = document.querySelectorAll(".task-checkbox:checked");
  checkboxes.forEach(checkbox => {
    const taskItem = checkbox.parentElement;
    taskList.removeChild(taskItem);
  });
}

  
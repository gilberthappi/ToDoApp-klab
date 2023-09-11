document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const deleteCompletedButton = document.getElementById('deleteCompleted');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
            event.target.parentElement.remove();
        } else if (event.target.classList.contains('toggle-completed')) {
            event.target.parentElement.classList.toggle('completed');
        } else if (event.target.classList.contains('edit-button')) {
            editTask(event.target.parentElement);
        }
    });

    deleteCompletedButton.addEventListener('click', function () {
        const completedTasks = document.querySelectorAll('.completed');
        completedTasks.forEach((task) => {
            task.remove();
        });
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="toggle-completed">Complete</button>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
    }

    function editTask(taskItem) {
        const taskTextElement = taskItem.querySelector('span');
        const taskText = taskTextElement.textContent;
        const newTaskText = prompt('Edit task:', taskText);

        if (newTaskText !== null) {
            taskTextElement.textContent = newTaskText;
        }
    }
});

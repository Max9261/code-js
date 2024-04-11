const tasksList = document.querySelector('.tasks-list');
const taskTemplate = document.getElementById('task-template').innerHTML;

tasks.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task-item');
    taskElement.innerHTML = taskTemplate;

    const taskCheckbox = taskElement.querySelector('input[type="checkbox"]');
    taskCheckbox.id = `task-${task.id}`;
    taskCheckbox.dataset.taskId = task.id;
    taskCheckbox.checked = task.completed;

    const taskLabel = taskElement.querySelector('label');
    taskLabel.htmlFor = `task-${task.id}`;

    const taskText = taskElement.querySelector('.task-item__text');
    taskText.textContent = task.text;

    tasksList.appendChild(taskElement);
});
const tasksList = document.querySelector('.tasks-list');

tasks.forEach(task => {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.setAttribute('data-task-id', task.id);
  
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('task-item__main-container');
  
  const mainContent = document.createElement('div');
  mainContent.classList.add('task-item__main-content');
  
  const form = document.createElement('form');
  form.classList.add('checkbox-form');
  
  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox-form__checkbox');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `task-${task.id}`);
  
  const label = document.createElement('label');
  label.setAttribute('for', `task-${task.id}`);
  
  const text = document.createElement('span');
  text.classList.add('task-item__text');
  text.textContent = task.text;
  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('task-item__delete-button', 'default-button', 'delete-button');
  deleteButton.setAttribute('data-delete-task-id', task.id);
  deleteButton.textContent = 'Удалить';
  
  tasksList.appendChild(taskItem);
  taskItem.appendChild(mainContainer);
  mainContainer.appendChild(mainContent);
  mainContent.appendChild(form);
  form.appendChild(checkbox);
  form.appendChild(label);
  mainContent.appendChild(text);
  taskItem.appendChild(deleteButton);
});

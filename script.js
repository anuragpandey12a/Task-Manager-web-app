const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task");

  const li = document.createElement('li');
  li.textContent = taskText;

  // Complete task on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
});

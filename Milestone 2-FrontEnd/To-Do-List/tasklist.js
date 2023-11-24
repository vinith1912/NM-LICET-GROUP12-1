let tasks = []; // Initialize an empty tasks array

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;

    const actionContainer = document.createElement('div');
    actionContainer.classList.add('action-buttons');

    if (!task.completed) {
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => deleteTask(task.id);
      actionContainer.appendChild(deleteButton);

      const updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.onclick = () => updateTask(task.id);
      actionContainer.appendChild(updateButton);

      const markCompleted = document.createElement('button');
      markCompleted.textContent = 'Mark Completed';
      markCompleted.onclick = () => markTaskCompleted(task.id);
      actionContainer.appendChild(markCompleted);
    } else {
      li.classList.add('completed-task');
    }

    li.appendChild(actionContainer);
    taskList.appendChild(li);
  });
}

function addTask() {
  const newTaskInput = document.getElementById('newTaskInput');
  const taskText = newTaskInput.value.trim();

  if (taskText !== '') {
    const newTask = {
      id: tasks.length + 1,
      title: taskText,
      completed: false
    };

    tasks.push(newTask);
    displayTasks();
    newTaskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  displayTasks();
}

function updateTask(id) {
  const newTitle = prompt('Enter the new title for the task:');
  
  if (newTitle !== null && newTitle !== '') {
    tasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      }
      return task;
    });

    displayTasks();
  } else if (newTitle === '') {
    alert('Title cannot be empty!');
  }
}

function markTaskCompleted(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: true };
    }
    return task;
  });
  displayTasks();
}

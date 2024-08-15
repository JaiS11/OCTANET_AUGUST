document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');
  
    // Add task to the list
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      const priority = prioritySelect.value;
  
      if (taskText) {
        const li = document.createElement('li');
        li.classList.add(priority);
        li.textContent = taskText;
  
        todoList.appendChild(li);
        taskInput.value = '';
  
        // Add swipe-to-delete functionality
        addSwipeToDelete(li);
      }
    });
  
    function addSwipeToDelete(taskElement) {
      let startX;
  
      taskElement.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      });
  
      taskElement.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const moveX = touch.clientX - startX;
  
        // If swiped far enough to the left, delete the task
        if (moveX < -100) {
          taskElement.classList.add('swipe-left');
          setTimeout(() => {
            taskElement.remove();
          }, 500);
        }
      });
  
      // Desktop Swipe-like (Mouse) Behavior
      taskElement.addEventListener('mousedown', (e) => {
        startX = e.clientX;
      });
  
      taskElement.addEventListener('mousemove', (e) => {
        const moveX = e.clientX - startX;
  
        // If moved far enough to the left, delete the task
        if (moveX < -100) {
          taskElement.classList.add('swipe-left');
          setTimeout(() => {
            taskElement.remove();
          }, 500);
        }
      });
    }
  });
  
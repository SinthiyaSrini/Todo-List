document.getElementById('add-btn').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
  
    if (todoText !== "") {
      const todoList = document.getElementById('todo-list');
  
      // Create new list item
      const li = document.createElement('li');
      li.textContent = todoText;
  
      // Create delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener('click', function () {
        todoList.removeChild(li);
      });
  
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
  
      // Clear input field after adding the item
      input.value = "";
    }
  });
  
  document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      document.getElementById('add-btn').click();
    }
  });
  
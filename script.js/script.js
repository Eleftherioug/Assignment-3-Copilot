// Find the form, input, and list in the HTML so JavaScript can use them.
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// Run this function whenever the user submits the form.
todoForm.addEventListener("submit", function (event) {
  // Keep the browser from reloading the page when the form is submitted.
  event.preventDefault();

  const taskText = todoInput.value.trim();

  // Do not add a task if the input is empty or only contains spaces.
  if (taskText === "") {
    return;
  }

  // Create a list item and a separate element for the task text.
  const listItem = document.createElement("li");
  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  // Clicking the task text switches its completed style on or off.
  taskLabel.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  // Create a button that removes this task from the list.
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", "Delete task: " + taskText);
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  // Put the task text and delete button inside the list item.
  listItem.append(taskLabel, deleteButton);
  todoList.append(listItem);

  // Clear the input so the user can enter another task.
  todoInput.value = "";
  todoInput.focus();
});

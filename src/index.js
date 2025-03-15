document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");


  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim(); 

    if (taskText === "") {
      alert("Please enter a task!"); 
      return;
    }

    
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";

    
    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });

    
    taskItem.appendChild(deleteButton);

    
    taskList.appendChild(taskItem);

    
    taskInput.value = "";
  });
});

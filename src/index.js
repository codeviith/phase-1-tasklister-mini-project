document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTaskInput = document.getElementById("new-task-description").value;
    // console.log(newTaskInput)
    // const list = 
    const taskLi = document.createElement("li");

    taskLi.textContent = newTaskInput;
    // console.log(taskLi)
    addTasksToList(taskLi);
    
    form.reset();

    const button = document.createElement("button");
    button.textContent = "X";

    taskLi.appendChild(button);

    taskLi.addEventListener("click", () => {
      taskLi.remove();
    })
  })
});

function addTasksToList(task) {
  // console.log(task)
  const toDoList = document.getElementById("tasks");
  // console.log(toDoList)

  toDoList.appendChild(task);
}









// const newTaskInput = document.getElementById("new-task-description").value;
// const newTasks = document.getElementById("tasks");










const input = document.querySelector(".board__todoform-input");
const button = document.querySelector(".board__todoform-btn");
const todoContainer = document.querySelector("#todo");
let text = "";
input.addEventListener("keyup", (e) => {
  text = e.target.value;
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value) {
    return;
  }
  let newTask = document.createElement("p");

  newTask.innerText = value;
  newTask.classList.add("board__column-task");
  newTask.setAttribute("draggable", "true");
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });
  todoContainer.appendChild(newTask);
  input.value = "";
});

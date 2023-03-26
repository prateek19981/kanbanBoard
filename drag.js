const draggables = document.querySelectorAll(".board__column-task");
const droppables = document.querySelectorAll(".board__column");

console.log({ draggables });
console.log({ droppables });

draggables.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("is-dragging");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("is-dragging");
  });
});

droppables.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("y", e.clientY);
    const bottomTask = insertAboveTask(item, e.clientY);
    const currentTask = document.querySelector(".is-dragging");
    if (!bottomTask) {
      item.appendChild(currentTask);
    } else {
      console.log("bt", bottomTask);
      item.insertBefore(currentTask, bottomTask);
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  let tasks = zone.querySelectorAll(".board__column-task:not(.is-dragging)");
  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;
  tasks.forEach((task) => {
    const { top } = task.getBoundingClientRect();
    console.log({ top });
    const offset = mouseY - top;
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });
  return closestTask;
};

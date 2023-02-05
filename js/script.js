import { addNewTask, handleTaskBehavior, fillTasksList } from "./functions.js";

const addBtn = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");

addBtn.addEventListener("click", addNewTask);
myUL.addEventListener("click", handleTaskBehavior);
window.addEventListener("DOMContentLoaded", fillTasksList);
console.log("before try catch");

try {
    const data = '{"name":"John", "age":30, "car":null}';
    console.log(JSON.parse(data));
} catch (err) {
    console.error(err.message);
}

for (let i = 0; i < 10; i++) {
    try {
        if (i === 5) throw new Error("i is 5");
        console.log(i);
    } catch (err) {
        console.error(err.message);
    }
}

console.log("after try catch");

//! =========================================

// import { save, load } from "./storage.js";

// const formData = {
//     email: "aaa@gmail.com",
//     message: "hello",
// };

// save("feedback-form-state", formData);

// const data = load("feedback-form-state").message;

// console.log(data);

//! =========================================

/*
Write a Todo-list where you can create, delete items and save the list in local storage
Styles and markup can be taken from here - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
*/

/*
- without local storage
    1. write the logic of adding a task by pressing the add button
        1.1. read the value from the input field
        1.2. we check for an empty term, if it is empty, we inform the user about it and do not add a task
        1.3. if there is a task, then we create a list item to which we add the text of the task
        1.4. add a cross to the list item
        1.5. clear the input field
    2. write the logic of the task state (completed or not)
        2.1. by clicking on the excess - toddle class check
    3. write the logic for removing a task from the list
        3.1. if we clicked on the cross - we delete the excess from the page

- with local storage
    1. we will store tasks in the form of an array of objects
        1.1. object with fields: text, isDone, ID. The ID is required to search for items, to delete items, and to update the status of items. 
        The identifier must be both in the element and in the object in the repository.
    2. when we add li to the page, we will add it to storage
    3. write the logic of the function that will retrieve data from storage and add them to the page in the form of extras
    4. write the logic for removing the task from the page and for updating the status of the task.
*/

// import { addNewTask, handleTaskBehavior, fillTasksList } from "./functions.js";

// const addBtn = document.getElementById("addBtn");
// const myUL = document.getElementById("myUL");

// addBtn.addEventListener("click", addNewTask);
// myUL.addEventListener("click", handleTaskBehavior);
// window.addEventListener("DOMContentLoaded", fillTasksList);
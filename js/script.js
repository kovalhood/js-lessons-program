// const text = document.querySelector("span + .text");
// console.log("🚀 ~ text", text);

// text.classList.add("active");

// const block = document.getElementById("block");
// block.style.backgroundColor = "blue";

// const texts = document.getElementsByClassName("text");
// texts[3].classList.add("active");

// console.log(texts);

// const text1 = document.querySelector(".container .text:last-child");
// console.log("🚀 ~ text1", text1)

// text1.style.backgroundColor = "pink";

// const buttons = [...document.getElementsByTagName("button")];

// buttons.forEach((el) => {
//   const status = el.dataset.active;
//   if (status === "true") el.style.backgroundColor = "green";
//   else el.style.backgroundColor = "red";
// });

// const showCT = document.getElementById("showCT");

// showCT.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.currentTarget)
// });

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   console.dir(event.currentTarget.elements.login);

//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === " || password.value === ") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector(".js-btn");

// // ✅ It's working
// mango.showUsername();

// // ❌ this will refer to the button if you use showUsername as the callback
// btn.addEventListener("click", mango.showUsername); // does not work

// // ✅ Don't forget to bind the context of the object's methods
// btn.addEventListener("click", mango.showUsername.bind(mango));

// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event);
// });

// const btn = document.querySelector(".js-btn");

// btn.addEventListener("click", handleClick);

// let counter = 0;

// function handleClick(e) {
//   counter++;
//   console.log(counter);
//   if (counter === 5) {
//     btn.removeEventListener("click", handleClick);
//   }
// }

//!========================================================

const openModalBtn = document.getElementById("openModalBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const openClass = "open";

openModalBtn.addEventListener("click", handleModalOpen);
overlay.addEventListener("click", handleModalClose);
closeBtn.addEventListener("click", handleModalClose);
document.body.addEventListener("keydown", handleModalCloseOnESC);

function handleModalCloseOnESC({ key }) {
  // let key = event.key
  if (key === "Escape") handleModalClose();
}

function handleModalOpen() {
  document.body.classList.add(openClass);
}
function handleModalClose() {
  document.body.classList.remove(openClass);
}
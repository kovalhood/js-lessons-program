// Emergence of events
const parentDiv = document.getElementById("parentDiv");
const childA = document.getElementById("childA");

document.body.addEventListener("click", (e) => {
    e.preventDefault();
    alert("body");
});

parentDiv.addEventListener("click", (e) => {
    alert("Parent Div");
});

childA.addEventListener("click", (e) => {
    e.stopPropagation();
    // e.stopImmediatePropagation();
    e.preventDefault();
    alert("Child A");
});

//! ===================================================

// for (let elem of document.querySelectorAll("*")) {
//     elem.addEventListener(
//         "click",
//         (e) => alert(`Diving: ${elem.tagName}`),
//         true
//     );
//     elem.addEventListener("click", (e) => alert(`Emersion: ${elem.tagName}`));
// }

//!=============================================

// Create a product cost calculator depending on the price. When working with events, use delegation. Render all markup via JS
// When the data variable is entered in input #1 or #2, the total cost should be automatically recalculated
// The currency - USD should always be displayed
// The total amount is displayed with pennies (2 decimal places)
// In the signature of the second input, there should be a color hint of how many pounds the user selected on the second input.
// The color tooltip should change its value when the slider is dragged.
// In input No. 2, set min and max threshold by yourself.
// When loading the page, the script should automatically calculate the cost based on the default data that you set in the markup.

// const data = {
//     quantity: 0,
//     price: 0,
//     calcTotalPrice() {
//         return (this.quantity * this.price).toFixed(2);
//     },
// };

// //dom links
// const mainForm = document.getElementById("form");
// const priceInput = document.getElementById("price");
// const quantityInput = document.getElementById("quantity");
// const amount = document.getElementById("amount");
// const total = document.getElementById("total");

// //data fill
// dataFill();
// displayTotal();

// //events
// mainForm.addEventListener("change", handleFormChange);

// //functions
// function handleFormChange({ target }) {
//     const { value } = target;

//     if (target === priceInput) {
//         if (!Number(value)) {
//         console.log("Not a number!");
//         return;
//         }
//     } else if (target === quantityInput) {
//         amount.textContent = value;
//     }

//     target.setAttribute("value", value);
//     dataFill();
//     displayTotal();
// }

// function dataFill() {
//     data.quantity = quantityInput.getAttribute("value");
//     data.price = priceInput.getAttribute("value");
// }

// function displayTotal() {
//     total.textContent = data.calcTotalPrice() + " USD";
// }
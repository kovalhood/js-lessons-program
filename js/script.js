// for (let i = 3; i > 0; i--) {
//     const delay = i * 1000;
//     setTimeout(() => console.log(i), delay);
// }

//!==============

// setTimeout(() => console.log(3), 3000);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(1), 1000);

//!==============

// for (let i = 3; i > 0; i--) { // i = 3
//     const delay = i * 1000; // delay = 3000
//     setTimeout(() => console.log(3), 3000);
// }

// for (let i = 3; i > 0; i--) { // i = 2
//     const delay = i * 1000; // delay = 2000
//     setTimeout(() => console.log(2), 2000);
// }

// for (let i = 3; i > 0; i--) { // i = 1
//     const delay = i * 1000; // delay = 1000
//     setTimeout(() => console.log(1), 1000);
// }

//!==============

// Write a New Year's countdown timer that can be stopped by clicking the **Stop** button
// Styles and markup can be taken here - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
// An additional task is to rewrite the timer on a class (remember the classes from the 5th module, additional practice before React)

// const timeEl = document.getElementById("time");
// const stopBtnEl = document.getElementById("stopBtn");
// const continueBtnEl = document.getElementById("continueBtn");

/*
New Year - January 1 00:00 2024
Today's date is January 25, 20:20 2023

we will use setInterval() to run the counter

1. subtract the current date from the New Year - this way we will get the time difference (we will work with milliseconds)
2. from the milliseconds obtained in step 1, we will extract the number of days, hours, minutes and seconds remaining until the New Year
3. show this data to the user on the page
*/

// let isTimerRun = true;
// const newYearDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);

// countDownTimeToNY();
// let timerId = setInterval(countDownTimeToNY, 1000);

// stopBtnEl.addEventListener("click", () => {
//     stopInterval();
//     if (!isTimerRun) {
//         continueBtnEl.disabled = false;
//         continueBtnEl.addEventListener("click", continueInterval);
//     }
// });

// function countDownTimeToNY() {
//     const now = Date.now();
//     const diff = newYearDate - now; // how many milliseconds are left until the New Year

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const seconds = Math.floor((diff / 1000) % 60);

//     timeEl.textContent = `${days} d. ${hours} h. ${minutes} m. ${seconds} s.`;

//     if (diff <= 0) {
//         stopInterval();
//         timeEl.textContent = "Happy New Year!";
//     }
// }

// function continueInterval() {
//     isTimerRun = true;
//     continueBtnEl.disabled = true;
//     alert("Continue");
//     timerId = setInterval(countDownTimeToNY, 1000);
// }

// function stopInterval() {
//     isTimerRun = false;
//     clearInterval(timerId);
//     alert("The timer has been stopped!");
// }
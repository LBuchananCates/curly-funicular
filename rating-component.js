const submitButton = document.querySelector("submit-button");

const buttonOne = document.querySelector("#button-one");
const buttonTwo = document.querySelector("#button-two");
const buttonThree = document.querySelector("#button-three");
const buttonFour = document.querySelector("#button-four");
const buttonFive = document.querySelector("#button-five");

const showSelection = document.querySelector(".selected-rating");

if (
  (buttonOne.onclick = function () {
    // turns selected button orange
    buttonOne.classList.add("showSelection");
  })
);

// 1. when hovering, bg turns light gray and font white, when selected onclick, bg turns orange and font white JS
// 2. conatiner-two display none but display flex when onclick submit
// 3. prevent default when selecting 1-5 rating
// 4. prevent default if no rating selected
// 5. when submit clicked, display none container-one, display flex container-two
//

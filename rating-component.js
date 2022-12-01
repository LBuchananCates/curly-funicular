const containerOne = document.querySelector(".container-one");
const containerTwo = document.querySelector(".container-two");
const submitButton = document.querySelector(".submit-button");
const thankyou = document.querySelector(".rating-selection");
const ratingValues = document.getElementsByClassName("selected-rating");

for (let i = 0; i < ratingValues.length; i++) {
  const ratingValue = ratingValues[i];

  ratingValue.addEventListener("click", function () {
    thankyou.textContent = `You selected ${ratingValue.innerText} out of 5`;
    // add orange background color when rating selected
    ratingValue.style.backgroundColor = "orange";
  });

  //submit clicked: containerOne hidden, containerTwo displayed
  submitButton.addEventListener("click", function () {
    // display-none added to rating box
    containerOne.style.display = "none";
    //display-none removed from message box
    containerTwo.style.display = "flex";
  });
}

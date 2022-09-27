const firstCard = document.querySelector(".card__first");
const secondCard = document.querySelector(".card__second");
const submitButton = document.querySelector(".button__submit");
const numberButtons = document.querySelectorAll(".button__numbers");
const ratingText = document.querySelector(".text__rating");

submitButton.addEventListener("click", function () {
  firstCard.classList.add("hidden");
  secondCard.classList.remove("hidden");
});

numberButtons.forEach(function (rating) {
  rating.addEventListener("click", function () {
    ratingText.innerHTML = rating.innerHTML;
  });
});

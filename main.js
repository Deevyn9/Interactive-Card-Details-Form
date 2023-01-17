const Form = document.getElementById("form");
const nameInput = document.getElementsByClassName("nameInput");
const numberInput = document.getElementsByClassName("numberInput");
const yearInput = document.getElementsByClassName("input__year");
const monthInput = document.getElementsByClassName("input__month");
const cvvInput = document.getElementsByClassName("cvvInput");
const cardNumber = document.getElementsByClassName("card__number");
const cardName = document.getElementsByClassName("card__name");
const expMonth = document.getElementsByClassName("month");
const expYear = document.getElementsByClassName("year");
const cvvErr = document.getElementById("cvverr");
const cardNumberErr = document.getElementById("numbererr");
const dateErr = document.getElementById("daterr");
const nameErr = document.getElementById("nameerr");
// const confirmBtn = document.getElementsByClassName("confirm__btn");
const completeScreen = document.getElementById("complete");
const continueBtn = document.getElementsByClassName("continue");

function hideForm() {
    // Form.style.display = "none";
    // completeScreen.style.display = "flex"
    // alert("hidden")

    Form.classList.add("formHidden")
    completeScreen.classList.add("showComplete")
}
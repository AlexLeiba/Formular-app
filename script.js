const nameUser = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const button = document.querySelector("button");
const form = document.querySelector("form");
const datele = document.querySelector(".datele");

const deleteB = document.querySelector(".deleteB");

const errorParagraph = document.querySelector(".error");

nameUser.addEventListener("input", function (event) {
  const userValue = event.target.value;
  if (!isNaN(userValue) && userValue.length > 0) {
    errorParagraph.innerText = "Ati introdus valori numerice!";
  } else if (isNaN(userValue) || userValue.length === 0) {
    errorParagraph.innerText = "";
  }
});

surname.addEventListener("input", function (event) {
  const userValue = event.target.value;
  if (!isNaN(userValue) && userValue.length > 0) {
    errorParagraph.innerText = "Ati introdus valori numerice!";
  } else if (isNaN(userValue) || userValue.length === 0) {
    errorParagraph.innerText = "";
  }
});

email.addEventListener("change", function (event) {
  const userValue = event.target.value;
  if (userValue.length < 5 && userValue.length > 0) {
    errorParagraph.innerText = "Ati introdus prea putine caractere!";
  } else if (userValue.length > 4 || userValue.length === 0) {
    errorParagraph.innerText = "";
  }
});

number.addEventListener("change", function (event) {
  const userValue = event.target.value;

  if (userValue.length <= 7) {
    errorParagraph.innerText = "Ati introdus prea putine caractere numerice!";
  } else if (userValue.length === 0 || userValue.length >= 7) {
    errorParagraph.innerText = "";
  }
});

// Submit form

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // pentru a preveni refresul la pagina

  // datele introduse de user:
  const valueName = nameUser.value;
  const valueSurname = surname.value;
  const valueEmail = email.value;
  const valueNumber = number.value;

  const nameValid = isNaN(valueName);
  const surnameValid = isNaN(valueName);
  const emailValid = valueEmail.length > 4;
  const numberValid = valueNumber.length > 7;

  if (nameValid && surnameValid && emailValid && numberValid) {
    datele.innerText = `Datele introduse sunt:                                   Numele: ${valueName}, Prenumele: ${valueSurname}, Email: ${valueEmail}, Telephone Number: ${valueNumber}`;
  } else {
    errorParagraph.innerText = "Aveti eroari in formular!";
    datele.innerText = "";
  }
});

// Button delete

deleteB.addEventListener("click", function () {
  datele.innerText = "";
  nameUser.value = "";
  surname.value = "";
  email.value = "";
  number.value = "";

  errorParagraph.innerText = "";
});

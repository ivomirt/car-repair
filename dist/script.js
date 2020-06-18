const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const model = document.getElementById("model");
const year = document.getElementById("year");
const form = document.getElementById("form");
const date = document.getElementById("date");
const time = document.getElementById("time");

form.addEventListener("submit", (e) => {
  const letters = /^[A-Za-z]+$/;
  let y = new Date().getFullYear();
  let today = new Date();
  let inputDate = new Date(date.value);
  const openTime = "09:00";
  const closeTime = "17:00";
  const bookTime = time.value;
  if (firstName.value.match(letters)) {
    if (firstName.value === "" || firstName.value == null) {
      e.preventDefault();
      setError(firstName, "Enter your first name");
    } else {
      setSuccess(firstName);
    }
  } else {
    e.preventDefault();
    setError(firstName, "Enter your first name");
  }

  if (lastName.value.match(letters)) {
    if (lastName.value === "" || lastName.value == null) {
      e.preventDefault();
      setError(lastName, "Enter your last name");
    } else {
      setSuccess(lastName);
    }
  } else {
    e.preventDefault();
    setError(lastName, "Enter your last name");
  }
  if (model.value === "" || model.value == null) {
    e.preventDefault();
    setError(model, "Enter the model of the vehicle");
  } else {
    setSuccess(model);
  }

  if (
    year.value === "" ||
    year.value == null ||
    year.value > y ||
    year.value < 1970
  ) {
    e.preventDefault();
    setError(year, "Enter a valid year");
  } else {
    setSuccess(year);
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    setSuccess(email);
  } else {
    e.preventDefault();
    setError(email, "Enter a valid e-mail");
  }

  if (inputDate <= today || date.value === "") {
    e.preventDefault();
    setError(date, "Enter a valid date");
  } else {
    setSuccess(date);
  }

  if (
    timeChecker(openTime) <= timeChecker(time.value) &&
    timeChecker(time.value) <= timeChecker(closeTime)
  ) {
    if (
      /^((([0]?[1-9]|1[0-2])(:|\.)[0-5][0-9]((:|\.)[0-5][0-9])?( )?(AM|am|aM|Am|PM|pm|pM|Pm))|(([0]?[0-9]|1[0-9]|2[0-3])(:|\.)[0-5][0-9]((:|\.)[0-5][0-9])?))$/.test(
        time.value
      )
    ) {
      setSuccess(time);
    } else {
      e.preventDefault();
      setError(time, "Enter valid time");
    }
  } else {
    e.preventDefault();
    setError(time, "Enter valid time");
  }
});
function setError(input, message) {
  const selector = input.parentElement;
  const error = selector.querySelector("small");
  error.innerText = message;
}
function setSuccess(input) {
  const selector = input.parentElement;
  const error = selector.querySelector("small");
  error.innerText = "";
}

function timeChecker(d) {
  let parts = d.split(":"),
    test = new Date();

  test.setHours(parts[0]);
  test.setMinutes(parts[1]);
  return test;
}

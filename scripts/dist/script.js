"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//Validate inputs with check icon or red border (without post code and email)
var test = document.querySelectorAll(".Form__input");

_toConsumableArray(test).map(function (element) {
  element.addEventListener('focusout', function () {
    if (element.value == "") {
      element.nextElementSibling.className = "";
      element.style.border = "1px solid red";
    } else {
      element.nextElementSibling.className = "circle";
      element.style.border = "none";
    }
  });
}); //Validate email to contain @ followed by something


function validateEmail() {
  var input = document.createElement('input');
  input.type = 'email';
  input.value = document.getElementById('input_email').value;

  if (input.checkValidity() && input.value !== '') {
    document.getElementById('input_email').nextElementSibling.className = "circle";
    document.getElementById('input_email').style.border = "none";
  } else {
    document.getElementById('input_email').style.border = '1px solid red';
  }

  return false;
} //Validate post code just for the Netherlands (4 digits followed by two letters)


var regex = /^\d{4}\s?\w{2}$/i;
var postCode = document.getElementById("input_postal_code");

function validatePostCode() {
  if (regex.test(postCode.value) == true) {
    postCode.nextElementSibling.className = "circle";
    postCode.style.border = "none";
  } else {
    postCode.nextElementSibling.className = "";
    postCode.style.border = "1px solid red";
  }
} //change style when you upload a file


var uploadButtons = document.querySelectorAll(".upload_button");

_toConsumableArray(uploadButtons).map(function (button) {
  button.addEventListener('change', function () {
    if (button.value == "") {} else {
      button.previousElementSibling.innerHTML = "Uploaded";
      button.previousElementSibling.style.background = "green";
    }
  });
}); //On form submit if all inputs are passed change div to thank you


var form = document.getElementById("myForm");
form.addEventListener('submit', function (event) {
  event.preventDefault();
  form.style.display = "none";
  document.getElementById("success").style.display = "block";
  window.scrollTo(0, 0);
}); //On submit click if resume not uploaded, notify

var formSubmit = document.getElementById("submit_form");
formSubmit.addEventListener('click', function () {
  var fileResume = document.getElementById("file_resume");

  if (fileResume.value == "") {
    document.getElementById("resume_text").style.color = "red";
  }
}); //On click toggle hamburger/cross

var navIcon = document.getElementById('navbar_icon');
navIcon.addEventListener('click', function () {
  if (navIcon.classList.contains("fa-bars")) {
    navIcon.className = 'fas fa-times';
  } else {
    navIcon.className = 'fas fa-bars';
  }
});
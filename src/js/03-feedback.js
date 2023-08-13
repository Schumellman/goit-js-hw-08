const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const feedbackEmail = document.querySelector('.feedback-form input');
const feedbacktextAria = document.querySelector('.feedback-form textarea');


feedbackForm.addEventListener('submit', onFormSubmit);
feedbackEmail.addEventListener('input', throttle(onInputChange, 500));
feedbacktextAria.addEventListener('input', throttle(onInputChange, 500));

fillAllInputs();

function onInputChange() {
    const userData = { email: feedbackEmail.value, message: feedbacktextAria.value };
    localStorage.getItem("feedback-form-state", JSON.stringify("userData"));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (!evt.feedbackEmail || !evt.feedbacktextAria) {
        alert("please enter all fields correctly");
    }
    else {
        evt.currentTarget.reset();
        console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
        localStorage.removeItem("feedback-form-state");
    }
}

function fillAllInputs() {
    const saveData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (saveData) {
        feedbackEmail.value = saveData.email;
        feedbacktextAria.value = saveData.message;
    }
}
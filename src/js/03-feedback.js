
import throttle from 'lodash.throttle';

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
    if (evt.email.value === undefined || evt.message.value === undefined) {
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


















// ПРИКЛАД ВИКЛАДАЧА

// import throttle from 'lodash.throttle';

// const feedbackForm = document.querySelector('.feedback-form');
// const FORM_Key = "feedback-form-state";


// feedbackForm.addEventListener('input', throttle(onInputChange, 500));
// feedbackForm.addEventListener('submit', onFormSubmit);

// let data = JSON.parse(localStorage.getItem(FORM_Key)) ?? {};
// const { email, message } = feedbackForm.elements;

// email.value = data.email ?? "";
// message.value = data.message ?? "";

// function onInputChange(evt) {
//     data[evt.target.name] = evt.target.value;
//     localStorage.setItem(FORM_Key, JSON.stringify(data));
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     console.log(data);
//     feedbackForm.reset();
//     localStorage.removeItem(FORM_Key);
//     data = {};
// }
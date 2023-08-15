import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const FORM_Key = "feedback-form-state";


feedbackForm.addEventListener('input', throttle(onInputChange, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

let data = JSON.parse(localStorage.getItem(FORM_Key)) ?? {};
const { email, message } = feedbackForm.elements;

email.value = data.email ?? "";
message.value = data.message ?? "";

function onInputChange(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(FORM_Key, JSON.stringify(data));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (localStorage.getItem(FORM_Key) !== false) {
        console.log(data);
    }
    
    feedbackForm.reset();
    localStorage.removeItem(FORM_Key);
    data = {};
}
import throttle from "lodash.throttle";

const formRef = document.querySelector(".feedback-form");
const emailInputRef = document.querySelector('[name ="email"]');
const messageinputRef = document.querySelector('[name ="message"]');
const STORAGE_KEY = "feedback-form-state";

const formData = {};

updateOutput();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function updateOutput () {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData?.['email']) {
    emailInputRef.value = savedData['email'];}

    if (savedData?.['message']) {
    messageinputRef.value = savedData['message'];}
}

function onFormSubmit (event) {
    event.preventDefault();
    event.target.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
}





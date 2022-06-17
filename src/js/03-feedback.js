import throttle from "lodash.throttle";

const formRef = document.querySelector(".feedback-form");
const emailInputRef = document.querySelector('[name ="email"]');
const messageinputRef = document.querySelector('[name ="message"]');
const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

updateOutput();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function updateOutput () {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedFormData) {
        formData = savedFormData;
    }   
   
    if (formData && formData['email']) {
    emailInputRef.value = formData['email'];}

    if (formData && formData['message']) {
    messageinputRef.value = formData['message'];}
}

function onFormSubmit (event) {
    if (formData.email.length === 0 || formData.message.length === 0) {
        return alert("Warning! All forms must be filled");
    }
    event.preventDefault();
    console.log(formData);
    event.target.reset();
    formData.email = "",
    formData.message = "",    
    localStorage.removeItem(STORAGE_KEY);
}





import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle')
const feedback = document.querySelector('.feedback-form')
const feedbackEmail = feedback.querySelector('input[name="email"]');
const feedbackMsg = feedback.querySelector('textarea[name="message"]');
console.log(feedbackMsg)
const submitBtn = document.querySelector('button');
console.log(submitBtn)

updateOutput();
        function updateOutput() {
            const savedObj = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
        console.log(savedObj)
        feedbackEmail.value = savedObj.email || "";
        feedbackMsg.value = savedObj.message || "";
}
const throttledFormHandler = throttle(formHandler, 500);
feedback.addEventListener('input', throttledFormHandler);


function formHandler() {
    const feedbackData = {
       email: feedbackEmail.value,
        message: feedbackMsg.value
    }
    const feedbackDataJSON = JSON.stringify(feedbackData)
    localStorage.setItem('feedback-form-state', feedbackDataJSON)
    }
submitBtn.addEventListener('click', onSubmitBtn) 
function onSubmitBtn(event) {
    event.preventDefault();
        const savedObj = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(savedObj);
    localStorage.removeItem('feedback-form-state')
    feedbackEmail.value = "";
    feedbackMsg.value = "";
        } 
  
    
        
    
    
    
   
    
    





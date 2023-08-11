import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle')
const feedback = document.querySelector('.feedback-form')
const feedbackEmail = document.querySelector('input')
console.log(feedbackEmail)
const feedbackMsg = document.querySelector('textarea')
console.log(feedbackMsg)
const submitBtn = document.querySelector('button');
console.log(submitBtn)

updateOutput();
        function updateOutput() {
        const savedObj = JSON.parse(localStorage.getItem('feedback-form-state'))
        console.log(savedObj)
        feedbackEmail.value = savedObj.email || "";
        feedbackMsg.value = savedObj.message || "";
}

feedback.addEventListener('input',formHandler)
function formHandler(event) {
    const  feedbackData = {email:'',message:'',}
    feedbackData.email = feedbackEmail.value;
    feedbackData.message = feedbackMsg.value;
    console.log(feedbackData)
    const feedbackDataJSON = JSON.stringify(feedbackData)
    localStorage.setItem('feedback-form-state', feedbackDataJSON)
    
}
submitBtn.addEventListener('submit', onSubmitBtn) 
function onSubmitBtn(event) {
    event.preventDefault();
    console.log("456");
        const  feedbackData = {email:'',message:'',}
    feedbackData.email = feedbackEmail.value;
    feedbackData.message = feedbackMsg.value;
    console.log(feedbackData)
    localStorage.removeItem('feedback-form-state')
        } 
  
    
        
    
    
    
   
    
    





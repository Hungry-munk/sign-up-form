const Username = document.getElementById('username')
const Name = document.getElementById('name')
const Email = document.getElementById('email')
const Phone = document.getElementById('phone')
const Password = document.getElementById('password')
const ConfirmPassword = document.getElementById('confirm-password')

Email.addEventListener('input',event =>{
    if (Email.validity.patternMismatch){
        Email.setCustomValidity('enter a valid email address');
        Email.reportValidity();
    }
});
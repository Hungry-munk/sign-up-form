const Username = document.getElementById('username')
const Name = document.getElementById('name')
const Email = document.getElementById('email')
const Phone = document.getElementById('phone')
const Password = document.getElementById('password')
const ConfirmPassword = document.getElementById('confirm-password')

const EMAIL_REGEX = /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com/g
const NAME_REGEX = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/g
const AUS_PHONE_REGEX = /(04[0-9]{8}){1}/g
const PASSWORD_REGEX = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%-_^&*\.])[a-zA-Z0-9!@#$%-_^&*\.]{8,25}/g
const USERNAME_REGEX = /(?=.*[a-z])[a-zA-Z0-9$#^&%*\.]{3,20}/g

let tpyingDelayReaction = 1500
let typingtimer;
Email.addEventListener('input', ()=>{
    clearTimeout(typingtimer)
    if (Email.value){
        typingtimer = setTimeout(()=>{
            Email.classList.add('invalid')
            Email.classList.remove('valid')
            if(Email.value.match(EMAIL_REGEX)){
                Email.classList.remove('invalid')
                Email.classList.add('valid')
            }
        }, tpyingDelayReaction);
    };
});
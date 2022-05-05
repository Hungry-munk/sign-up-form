const Username = document.getElementById('username')
const Name = document.getElementById('name')
const Email = document.getElementById('email')
const Phone = document.getElementById('phone')
const Password = document.getElementById('password')
const ConfirmPassword = document.getElementById('confirm-password')

const EMAIL_REGEX = /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com/g
const NAME_REGEX = /[A-Z][a-z]+/
const AUS_PHONE_REGEX = /(04[0-9]{8}){1}/g
const PASSWORD_REGEX = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%-_^&*\.])[a-zA-Z0-9!@#$%-_^&*\.]{8,25}/g
const USERNAME_REGEX = /(?=.*[a-z])[a-zA-Z0-9$*\.]{3,20}/g

const inputFields = {
    username : [Username,USERNAME_REGEX],
    name : [Name,NAME_REGEX],
    email : [Email,EMAIL_REGEX],
    phone : [Phone, AUS_PHONE_REGEX],
    password : [Password,PASSWORD_REGEX],
    confirmPassword : [ConfirmPassword, PASSWORD_REGEX] 
}

let tpyingDelayReaction = 1000
let typingtimer;
let typingtimer2

Email.addEventListener('input', ()=>checkValid('email' , typingtimer));
Phone.addEventListener('input', ()=>checkValid('phone', typingtimer))
Username.addEventListener('input', ()=>checkValid('username', typingtimer))
Name.addEventListener('input', ()=>checkValid('name', typingtimer))
Password.addEventListener('input', ()=>checkValid('password', typingtimer))


function checkValid (field, timer) {
    clearTimeout(timer)
    console.log('typed')
    if(!inputFields[field][0].value){
        inputFields[field][0].classList.remove('invalid')
        inputFields[field][0].classList.remove('valid')
        console.log('emptied')
    }

    else if (inputFields[field][0].value){
        timer = setTimeout(()=>{
            if (inputFields[field][0].value.match(inputFields[field][1])){
                inputFields[field][0].classList.add('valid')
                inputFields[field][0].classList.remove('invalid')
                console.log('matched')
            } else {
                inputFields[field][0].classList.add('invalid')
                inputFields[field][0].classList.remove('valid')
                console.log('not matched')
            };

        }, tpyingDelayReaction);
    };

};

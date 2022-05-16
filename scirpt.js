const Username = document.getElementById('username')
const Name = document.getElementById('name')
const Email = document.getElementById('email')
const Phone = document.getElementById('phone')
const Password = document.getElementById('password')
const ConfirmPassword = document.getElementById('confirm-password')
const Form = document.querySelector('form')
const SubmitBtn = document.getElementById('submit-btn')

const inputBoxes = [Username, Name, Email, Phone, Password, ConfirmPassword]

const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com$/)
const AUS_PHONE_REGEX = new RegExp (/^(04[0-9]{8}){1}$/)
const PASSWORD_REGEX = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%-_^&*\.])[a-zA-Z0-9!@#$%-_^&*\.]{8,25}$/)
const USERNAME_REGEX = new RegExp(/^(?=.*[a-z])[a-zA-Z0-9$*\.]{3,20}$/)
const NAME_REGEX = new RegExp(/^[A-Z][a-z]+$/)

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
let timer2

Email.addEventListener('input', ()=>checkValid('email' , typingtimer));
Phone.addEventListener('input', ()=>checkValid('phone', typingtimer))
Username.addEventListener('input', ()=>checkValid('username', typingtimer))
Name.addEventListener('input', ()=>checkValid('name', typingtimer))
Password.addEventListener('input', ()=>{checkValid('password', typingtimer);checkPasswords()});
//checking for confirm password input incase the enter password their first
ConfirmPassword.addEventListener('input', ()=> checkPasswords());

let ValidForm
Form.addEventListener('change', ()=>{
    if (inputBoxes.every(field => field.checkValidity())) {
        SubmitBtn.removeAttribute('disabled')
        console.log('btn enabled')
    } else {
        SubmitBtn.setAttribute('disabled', 'disabled')
        console.log('btn disabled')
    };
});



function checkValid (field, timer) {
    clearTimeout(timer)

    if(!inputFields[field][0].value){
        inputFields[field][0].classList.remove('invalid')
        inputFields[field][0].classList.remove('valid')
        inputFields[field][0].setCustomValidity('')
    }

    else if (inputFields[field][0].value){
        timer = setTimeout(()=>{
            if (inputFields[field][1].test(inputFields[field][0].value)){
                inputFields[field][0].classList.add('valid')
                inputFields[field][0].classList.remove('invalid')
                inputFields[field][0].setCustomValidity('')

            } else {
                inputFields[field][0].classList.add('invalid')
                inputFields[field][0].classList.remove('valid')
                inputFields[field][0].setCustomValidity(' ')//making form invalid

            };

        }, tpyingDelayReaction);
    };

};

function checkPasswords (){
    clearTimeout(timer2)
    
    if (ConfirmPassword.value !== ''){
        timer2 = setTimeout(()=>{

            if (Password.value === ConfirmPassword.value && PASSWORD_REGEX.test(ConfirmPassword.value)) {
                ConfirmPassword.classList.add('valid')
                ConfirmPassword.classList.remove('invalid')
                ConfirmPassword.setCustomValidity('')
                console.log('vlaid')

            } else {
                ConfirmPassword.classList.add('invalid')
                ConfirmPassword.classList.remove('valid')
                console.log('not vlaid')
                if (Password.value){
                    ConfirmPassword.setCustomValidity('Not the same password')
                    ConfirmPassword.reportValidity()
                } else {
                    ConfirmPassword.setCustomValidity('you need to enter a password')
                    ConfirmPassword.reportValidity()
                }
            }
        }, tpyingDelayReaction);
    }

    if (ConfirmPassword.value == ''){
        ConfirmPassword.classList.remove('invalid')
        ConfirmPassword.classList.remove('valid')
    }
};
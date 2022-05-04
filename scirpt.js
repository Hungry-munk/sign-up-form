const Username = document.getElementById('username')
const Name = document.getElementById('name')
const Email = document.getElementById('email')
const Phone = document.getElementById('phone')
const Password = document.getElementById('password')
const ConfirmPassword = document.getElementById('confirm-password')

const EMAIL_REGEX = /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.com/g
let typingtimer;

Email.addEventListener('input', ()=>{
    clearTimeout(typingtimer)
    if (Email.value){
        typingtimer = setTimeout(()=>{
            console.log(Email.value,"\n this fucking working\n",)
        }, 2000)
    }
})

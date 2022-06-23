console.log("This is Form Validation Project.")

const uname = document.getElementById('username');
const pass = document.getElementById('Password');
const email = document.getElementById('email');
const mob = document.getElementById('number');

let validuname = false;
let validpass = false;
let validemail = false;
let validmobile = false;

$('#fail').hide();
$('#success').hide();

console.log(uname,pass,email,mob);

uname.addEventListener('blur' ,()=>
       {
        //validation of Username
        console.log("Username is Blurred!");
        let regex =/^[a-zA-Z][0-9a-zA-Z]{2,10}$/;
        let str = uname.value;
        if(regex.test(str))
        {
          console.log("Username is Valid")
          uname.classList.remove('is-invalid');
          uname.classList.add('is-valid');
          validuname = true;
        }
          else
          {
          console.log("username is Invalid Matched");
          uname.classList.add('is-invalid');
          }
       }
)

function showPassword()
{
    const pass = document.getElementById('Password');
    if(pass.type == 'password')
       pass.type = 'text';
       else
       pass.type = 'password'
}
pass.addEventListener('blur' ,()=>
       {
        console.log("Password is Blurred!");
        let regex =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        let str = pass.value;
        if(regex.test(str))
        {
          console.log("Password is Valid")
          pass.classList.remove('is-invalid');
          pass.classList.add('is-valid');
          validpass = true;
        }
        else
        {
          console.log("Email is Invalid");
          pass.classList.add('is-invalid');
        }
          console.log(regex , pass.value)
       }
)

email.addEventListener('blur' ,()=>
       {
        console.log("Email is Blurred!");
        let regex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        let str = email.value;
        if(regex.test(str))
        {
          console.log("Email is Valid")
          email.classList.remove('is-invalid');
          email.classList.add('is-valid');
          validemail = true;
        }
        else
        {
          console.log("Email is Invalid");
          email.classList.add('is-invalid');
        }
          console.log(regex , email.value)
       }
)

mob.addEventListener('blur' ,()=>
       {
        //Validation of mobile no
        console.log("Mobile is Blurred!");
        let regex =/[0-9]{10}$/;
        let str = mob.value;
        if(regex.test(str))
        {
          console.log("Mobile no is Valid")
          mob.classList.remove('is-invalid');
          mob.classList.add('is-valid');
          validmobile=true
        }
          else
          {
          console.log("Mobile no is Invalid Matched");
          mob.classList.add('is-invalid');
          }
       }
)

let sub = document.getElementById('submit');
sub.addEventListener('click',(e)=>
{
  e.preventDefault();

  if(validemail && validmobile && validpass && validuname)
  {
       let success = document.getElementById('success');
       success.classList.add('show');
       $('#fail').hide();
       $('#success').show();
  }
  else
  {
    let failure = document.getElementById('fail');
    failure.classList.add('show');
    $('#success').hide();
    $('#fail').show();

  }
})




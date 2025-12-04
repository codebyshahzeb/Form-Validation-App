let form = document.getElementById("form");
let inputemail = document.getElementById("emailinput");
let emailsmall = document.getElementById("emailsmall");
let passwordsmall=document.getElementById("passwordsmall");
let passwordinput=document.getElementById("passinput");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener("submit", (e) => {
  if (inputemail.value.trim() === "") {
    e.preventDefault();
    emailsmall.innerText = "Please enter your email";
    inputemail.focus();
  }
  else if (!emailRegex.test(inputemail.value)){
     e.preventDefault();
    emailsmall.innerText = "Please enter a valid email";
    inputemail.focus();
  }
  else if(passwordinput.value.trim()===""){
    e.preventDefault();
    passwordsmall.innerText = "Please enter your password";
    passwordinput.focus();
  }
    else if (!passwordRegex.test(passwordinput.value)){
     e.preventDefault();
    passwordsmall.innerText = "Please enter a valid password";
    passwordinput.focus();
  }

});
const passwordInput = document.getElementById("passinput");
const togglePassword = document.querySelector(".inputdiv2 .fa-eye");

// Add click event to toggle
togglePassword.addEventListener("mouseup", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // show password
  } else {
    passwordInput.type = "password"; // hide password
  }
});
inputemail.addEventListener("input",()=>{
    emailsmall.innerText="";
})
passwordinput.addEventListener("input",()=>{
    passwordsmall.innerText="";
})

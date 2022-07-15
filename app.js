/* Fill your code*/
function formValidate()
{
    var name=document.forms["RegForm"]["Name"];
    var email=document.forms["RegForm"]["EMail"];
    var phone=document.forms["RegForm"]["phone"];
    var password=document.forms["RegForm"]["Password"];
    var cpassword =document.forms["RegForm"]["cPassword"];
    var address=document.forms["RegForm"]["Address"];

    var errname=document.getElementById("name");
    var erremail=document.getElementById("email");
    var errphone=document.getElementById("phone");
    var erraddress=document.getElementById("address");
    var errpwd=document.getElementById("pwd");
    var errcpwd=document.getElementById("cpwd")

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    var phoneRegex = /^[6789]{1}[0-9]{9}$/
    var nameRegex =/[a-zA-Z]{8,15}/ 

    var c=1

if(!name.value.match(nameRegex))
{
    errname.innerText="atleast 8 to 15 characters required without spaces";
    name.focus();
    c=0
}

else{
    errname.innerText=""; 
    
}
if(address.value==""){
    erraddress.innerText="address cannot be empty";
    address.focus();
    c=0
}else{
   erraddress.innerText="";
}
if(!email.value.match(emailRegex)){
    erremail.innerText="enter a valid email id";
    email.focus();
    c=0
}

else {
    erremail.innerText="";
}
if(password.value=="")
{
    errpwd.innerText="Password cannot be empty";
    password.focus();
    c=0
}
else if(!password.value.match(passRegex))
{
    errpwd.innerHTML="Enter a valid password of min. length 8 with atleast <br>1 uppercase, 1 lowercase, 1 special character";
    email.focus();
    c=0
}
else{
    errpwd.innerText="";
} 
if(cpassword.value==""){
    errcpwd.innerText="Confirm Password cannot be empty";
    cpassword.focus();
    c=0
}

else if(cpassword.value != password.value){
    errcpwd.innerText="Password and confirm password do not match"
    cpassword.focus();
    c=0
}else{
    errcpwd.innerText="";
}

if(!phone.value.match(phoneRegex)){
    errphone.innerText="Not a valid phone number"
    phone.focus();
    c=0
}else{
    errphone.innerText="";

}
if(c == 1){
    return true
}
else{
    return false
}
}
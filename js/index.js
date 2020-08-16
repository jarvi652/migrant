
function validate(){
    var Email= document.getElementById("Email Address")
    var phoneNumber= document.getElementById("Phone Number")
    var Firstname= document.getElementById("First Name")
    var Lastname= document.getElementById("Last Name")
    var businessType= document.getElementById("businessType")
   
    if(Email.value===""){
        document.getElementById("error-email").innerHTML="This field is required";
        Email.focus();
        return false;        
    }
    else if(phoneNumber.value===""){
        document.getElementById("error-phone").innerHTML="This field is required";
        phoneNumber.focus();
        return false;        
    }
    else if(Firstname.value===""){
        document.getElementById("error-fname").innerHTML="This field is required";
        Firstname.focus();
        return false;        
    }
    else if(Lastname.value===""){
        document.getElementById("error-lname").innerHTML="This field is required";
        Lastname.focus();
        return false;        
    }
    else if(businessType.value < 1){
        document.getElementById("error-btype").innerHTML="This field is required";
        businessType.focus();
        return false;        
    }
    else{
        return true;
    }
}
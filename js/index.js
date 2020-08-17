
function validate(){
    var Email= document.getElementById("Email Address")
    var phoneNumber= document.getElementById("Phone Number")
    var Firstname= document.getElementById("First Name")
    var Lastname= document.getElementById("Last Name")
    var businessType= document.getElementById("businessType")
   
    if(Email.value==="" || phoneNumber.value==="" || Firstname.value==="" || Lastname.value==="" || businessType.value < 1){
        document.getElementById("error-email").innerHTML="This field is required";
        Email.focus();
        document.getElementById("error-phone").innerHTML="This field is required";
        phoneNumber.focus();
        document.getElementById("error-fname").innerHTML="This field is required";
        Firstname.focus();
        document.getElementById("error-lname").innerHTML="This field is required";
        Lastname.focus();
        document.getElementById("error-btype").innerHTML="This field is required";
        businessType.focus();
        return false;
    }
    else{
        return true;
    }
    
    
}
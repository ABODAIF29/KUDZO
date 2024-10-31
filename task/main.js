function validateForm() {

  var text = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var email =  document.getElementById("email").value;
  var error = document.getElementById("error");
  var message  = "";

  

  if (text == "" || text == null) {
    message  = "Please enter your name"
    error.innerHTML = message ;
    return false;
  
  } 
  else if (password.length != 8) { 
    message  = "Please enter passowrd "
    error.innerHTML = message ;
    return false;
    
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    message  = " Please enter valid email "
    error.innerHTML = message ;
    return false;
  }

  else {
    alert("Welcome")
    return true ;
  }
}
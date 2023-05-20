eml = document.getElementById("email");
var passw = document.getElementById("password");

var error2 = document.getElementById("err2");
var error3 = document.getElementById("err3");

document.getElementById("login").onclick = function redirect() {
  if (eml.value == "admin" && passw.value == "12345") {
    window.location.href = "mainPage.html";
    alert("Logging in");
  } else {
    alert("OOPS!! Try again");
  }
};

function validateemail() {
  if (eml.value == "admin") {
    error2.innerText = "Valid username";
    error2.style.color = "green";
    return true;
  } else {
    error2.innerText = "Invalid username ";
    error2.style.color = "red";
    alert("Enter valid username ");
    return false;
  }
}

function validatepassword() {
  if (passw.value == "12345") {
    error3.innerText = "Valid Password ";
    error3.style.color = "green";
    return true;
  } else {
    error3.innerText = "Invalid Password ";
    alert("Password should contain Minimum 5 characters");
    error3.style.color = "red";
    return false;
  }
}
